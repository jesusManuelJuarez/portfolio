# Google Lens Background Effect - Design System

Este documento detalla la implementación del efecto de fondo orgánico inspirado en **Google Lens** / **Siri**. Consiste en nodos de luz de colores que se mueven, escalan y mezclan dinámicamente en el fondo, dándole vida a la interfaz.

## 1. Conceptos Clave

1. **Orbes de Luz**: No son círculos sólidos, sino figuras con un filtro de desenfoque masivo (`blur(100px)`) para crear una luz suave y difusa.
2. **Mezcla Aditiva (Screen)**: El secreto de las luces orgánicas es cómo interactúan al tocarse. Usando `mix-blend-mode: screen`, los colores se combinan (por ejemplo, verde y rojo generan amarillo luz) igual que en el mundo físico.
3. **Movimiento Autónomo Infinito**: Las posiciones no están predefinidas. Una función recursiva escoge coordenadas `(x, y)`, tamaño `scale` y rotación `rotate` al azar, y anima la transición de forma extremadamente suave y lenta (4 a 8 segundos).

---

## 2. Estructura HTML

Crea un contenedor que abarque todo el viewport. Es crucial que vaya antes de tu contenido o tenga un `z-index` negativo.

```html
<div id="ambient-lens-bg">
  <div class="lens-node node-cyan"></div>
  <div class="lens-node node-pink"></div>
  <div class="lens-node node-amber"></div>
  <div class="lens-node node-green"></div>
</div>
```

---

## 3. Estilos Base (CSS)

El contenedor debe ser fijo y ocupar toda la pantalla sin interrumpir la navegación (usando `pointer-events: none`).

```css
/* Contenedor Principal */
#ambient-lens-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none; /* Crucial para no bloquear clics */
  z-index: -1;          /* Enviar al fondo absoluto */
  overflow: hidden;
  mix-blend-mode: screen; /* Fusión de luz entre nodos y el fondo */
}

/* Base de los Nodos de Luz */
.lens-node {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px); /* El truco principal: desenfoque masivo */
  opacity: 0.4;        /* Translucidez para no saturar la vista */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Iniciar desde el centro */
}

/* Colores y Tamaños (Relativos al Viewport para que sean Responsivos) */
.node-cyan {
  width: 40vw; height: 40vw;
  background: #06B6D4;
}
.node-pink {
  width: 35vw; height: 35vw;
  background: #FB7185;
}
.node-amber {
  width: 45vw; height: 45vw;
  background: #F59E0B;
}
.node-green {
  width: 38vw; height: 38vw;
  background: #34D399;
}
```

---

## 4. Motor de Animación (JavaScript + Anime.js v4)

Se requiere **Anime.js** (preferentemente la versión 4 que soporta módulos ES y mejor rendimiento) para orquestar la interpolación fluida entre valores aleatorios.

```javascript
import { animate } from 'animejs';

document.addEventListener('DOMContentLoaded', () => {
    const nodes = document.querySelectorAll('.lens-node');
    
    // Función auxiliar para obtener un rango aleatorio
    const randomValue = (min, max) => Math.random() * (max - min) + min;

    const animateNode = (node) => {
        // Rango de movimiento: 40% del ancho/alto total desde el centro
        const rangeX = window.innerWidth * 0.4;
        const rangeY = window.innerHeight * 0.4;
        
        animate(node, {
            translateX: randomValue(-rangeX, rangeX),
            translateY: randomValue(-rangeY, rangeY),
            scale: randomValue(0.8, 1.5), // Respiración (crece y se encoge)
            rotate: randomValue(0, 360),  
            duration: randomValue(4000, 8000), // Lento: entre 4 y 8 segundos
            ease: 'inOutSine', // Aceleración/Desaceleración muy suave
            onComplete: () => animateNode(node) // Recursividad infinita
        });
    };

    // Iniciar la vida de cada nodo independientemente
    nodes.forEach((node) => {
        animateNode(node);
    });
});
```

---

## 5. Recomendaciones de Rendimiento

1. **GPU Acceleration**: Propiedades como `translateX`, `scale` y `opacity` están optimizadas por hardware. Evita animar propiedades costosas como `top`, `left` o `width`.
2. **Reducción en Móviles**: Si notas ralentizaciones en dispositivos antiguos debido al masivo `filter: blur()`, puedes reducirlo mediante media queries (e.j. `filter: blur(50px)` en `< 768px`).
3. **Pausar fuera del Viewport**: Si esta animación se usa solo en una sección y no en el fondo fijo global, usa un `IntersectionObserver` para detener la recursividad de `animateNode` cuando el contenedor no sea visible en pantalla, ahorrando batería.
