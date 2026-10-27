# Portfolio Design System V2 — Vortex Satin Bento + Ambient Lens

Sistema de diseño canónico para el portafolio profesional de **Jesús Manuel Juárez Acosta** (`me.konektaa.lat`), sincronizado al 100% con el **Directorio Canónico de UI Vortex V2 (`task_konektaa/vortex`)** mientras preserva el fondo orgánico animado estilo **Google Lens** en el lienzo base.

---

## 1. Filosofía Visual y Reglas de Oro (Vortex V2)

1. **Cero Translúcido Ruidoso en Tarjetas**:
   - El fondo animado (`#hero-shapes` / Google Lens) vive exclusivamente en el canvas (`--bg-canvas: #0E1015`) con opacidad controlada (`0.22–0.28`).
   - Todas las tarjetas, contenedores, modales y bloques del CV y Proyectos son **100% sólidos y satinados** (`--card-bg: #1A1C24`, sub-etapas `--stage-bg: #111218`). Esto evita que las luces de colores del fondo tiñan o ensucien la legibilidad del texto.
2. **Microbordes de Luz y Sombra Escultórica**:
   - Bordes perimetrales sutiles: `1px solid rgba(255, 255, 255, 0.12)` con bisel superior interno `inset 0 1px 0 rgba(255, 255, 255, 0.14)`.
   - Cero bordes morados neón (`rgba(130, 80, 203, ...)`), cero `border-left: 4px solid` genéricos.
3. **Cero Puntos Pulsantes Neón (`.pulse-dot`)**:
   - Prohibido usar puntos rojos/morados con `box-shadow` neón parpadeante.
   - Para estados en vivo ("Disponible", "Activo", "En Producción") se utilizan **Cápsulas Canónicas Bento V2** (`.bento-capsule-apple`, `.bento-capsule-sandstone`, `.bento-capsule-frosted`) o el micro-ecualizador satinado de 4 barras (`.soundwave-bars`).
4. **Contraste Tipográfico Editorial (Two-Weight Headline)**:
   - Combinación de **Plus Jakarta Sans** (Display `300 Light` con opacidad `0.85` + `800 ExtraBold` con kerning `-0.03em`), **Inter** (Body) y **Space Grotesk** (Monospace / Metadatos técnicos).

---

## 2. Tokens del Sistema (Variables CSS Canónicas)

```css
:root {
  /* Tipografías Oficiales Vortex V2 */
  --font-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Space Grotesk', monospace;

  /* Lienzo Base (Con soporte Google Lens Ambient) */
  --bg-canvas: #0E1015;
  --bg-surface: #15171F;
  --bg-stage: #111218;

  /* Tarjetas Sólidas Satinadas (Cero Translúcido) */
  --card-bg: #1A1C24;
  --card-kanban-bg: #1B1D25;
  --card-border: 1px solid rgba(255, 255, 255, 0.12);
  --card-border-hover: 1px solid rgba(255, 255, 255, 0.24);
  --card-shadow: 0 32px 80px -15px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.14);
  --card-item-shadow: 0 10px 30px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08);

  /* Cajas Internas / Stages / Inputs */
  --input-box-bg: rgba(255, 255, 255, 0.04);
  --input-box-border: 1px solid rgba(255, 255, 255, 0.10);
  --input-box-focus: 1px solid rgba(255, 255, 255, 0.28);

  /* Textos Canónicos */
  --text-main: #FFFFFF;
  --text-muted: #A89893;
  --text-subtle: #727682;

  /* Botón Insignia Marfil (Light Action Pill) */
  --pill-light-bg: #EAE5DE;
  --pill-light-hover: #FFFFFF;
  --pill-light-text: #141518;

  /* Cápsula Sandstone */
  --capsule-sandstone-bg: #E6E4DD;
  --capsule-sandstone-text: #141518;

  /* Acentos Funcionales Controlados (Solo para Icon Boxes y Nodos Lens) */
  --accent-coral: #F43F5E;
  --accent-amber: #F2A42B;
  --accent-emerald: #10B981;
  --accent-blue: #38BDF8;

  /* Radios Escultóricos */
  --radius-modal: 28px;
  --radius-card: 20px;
  --radius-module: 14px;
  --radius-pill: 9999px;

  /* Transición Canónica */
  --transition-smooth: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 3. Catálogo de Componentes Atómicos (Sincronizados con `ui-system-directory.html`)

### 3.1. Top Dock Bar Flotante (`.top-dock-bar`)
Reemplaza el `<nav>` de ancho completo por el dock flotante superior en forma de píldora:
- `position: sticky; top: 16px; z-index: 1000;`
- `border-radius: var(--radius-pill); background: rgba(22, 24, 32, 0.95); border: 1px solid rgba(255, 255, 255, 0.12);`
- Izquierda: `.brand-chip` (`#FFFFFF`, texto `#121316`, `font-weight: 900`) + `.brand-title` (`JM // SOFTWARE ENGINEER`).
- Centro: `.nav-pills` (`background: rgba(0,0,0,0.4)`, `padding: 3px`) con `.nav-pill-btn` y estado `.active` (`background: #FFFFFF; color: #121316`).
- Derecha: Indicador o acción rápida a GitHub/Contacto.

### 3.2. Encabezado Hero Editorial (`.bento-hero-headline`)
- Fórmula tipográfica **Two-Weight**:
  - `<span class="light">Ingeniero en Software · </span>` (`font-weight: 300; opacity: 0.85`)
  - `<span class="bold">Jesús Manuel Juárez</span>` (`font-weight: 800; color: #FFFFFF`)
- Subtítulo y metadatos con `.bento-date-badge` y `.soundwave-bars` satinado.

### 3.3. Botón Insignia con Chevron Bubble (`.btn-estructurar-ia`)
- **Variante Principal (Marfil Satinado)**:
  - `height: 44px; padding: 0 8px 0 20px; border-radius: 9999px; background: #EAE5DE; color: #141518; font-weight: 800;`
  - Incluye `.chevron-bubble` circular (`28x28px`, `background: #141518; color: #FFFFFF`) que se desplaza `translateX(2px)` en `:hover`.
- **Variante Oscura (`.dark-variant`)**:
  - `background: #1A1C24; color: #FFFFFF; border: 1px solid rgba(255, 255, 255, 0.16);` con `.chevron-bubble` invertida (`background: #FFFFFF; color: #121316`).

### 3.4. Cápsulas de Estado Canónicas y Micro-Tags
1. **`.bento-capsule-apple`**: Fondo `#FFFFFF`, texto `#141518`, con `.capsule-icon-circle` (`14x14px` negro con `✓` o icono). Ideal para proyectos `En Producción` / `Propio` / `Actual`.
2. **`.bento-capsule-sandstone`**: Fondo `#E6E4DD`, texto `#141518`, `font-weight: 800`. Ideal para destacar roles clave o `Enterprise Architecture`.
3. **`.bento-capsule-frosted`**: Fondo `#16181F`, borde `rgba(255,255,255,0.14)`, texto `#FFFFFF`. Ideal para `Privado · NDA` o fases técnicas.
4. **`.bento-micro-tag`**: Píldora compacta (`rgba(255,255,255,0.06)`, borde `rgba(255,255,255,0.12)`, `0.70rem`, `font-weight: 700`) para stack tecnológico (`NEXT.JS 16`, `HONO`, `AWS EKS`, `FLOWISE`, `GEMINI`).

### 3.5. Selector Segmentado (`.bento-pill-switcher`)
- Contenedor píldora (`background: rgba(255, 255, 255, 0.05); padding: 3px; border-radius: 9999px`) con botones `.switcher-item` y estado `.active` (`background: #FFFFFF; color: #121316`).
- Usado para filtrar el catálogo de proyectos (`Todos`, `IA & Enterprise`, `Product & Web`, `Mobile & Open Source`).

### 3.6. Item de Menú / Contacto con Icon Box (`.menu-crear-btn` + `.menu-icon-box`)
- Reemplaza los enlaces planos y los caracteres ASCII (`~`, `I`, `#`) del CV por tarjetas interactivas con `.menu-icon-box` (`32x32px`, `border-radius: 10px`, fondo tonal sutil con icono SVG limpio), título `0.84rem` bold y subtítulo `0.70rem` en `--text-muted`.

---

## 4. Reglas de Privacidad, Seguridad y Gobernanza de Datos (OpSec)

1. **Protección de Datos Personales (PII)**:
   - Nunca publicar dirección domiciliaria física (calle/número/colonia). Mostrar únicamente `Chiapas, México · Remoto / Global`.
   - Evitar exponer números telefónicos personales crudos en el HTML público si no es estrictamente deseado; priorizar canales verificados (`mailto:manueljuarez.dev@gmail.com`, LinkedIn, GitHub y dominios `*.konektaa.lat`).
2. **Protección de Propiedad Intelectual y Clientes (NDA / Repositorios Privados)**:
   - Los proyectos corporativos y de consultoría enterprise **NO** deben incluir enlaces a repositorios privados de organizaciones, ni exponer nombres comerciales confidenciales, URLs de APIs internas, esquemas de base de datos, nombres de tablas sensibles, identificadores reales o teléfonos de prueba.
   - Se documentan mediante **Arquitectura de Alto Nivel y Logros de Ingeniería** (ej. *"Orquestación de agentes de voz y mensajería de alta concurrencia con candados de idempotencia distribuida, validación estructural XML y escaneo DevSecOps"*), acompañados de la cápsula `.bento-capsule-frosted` (`Privado · Arquitectura NDA`).
3. **Enlaces Públicos Verificados**:
   - Solo enlazar a despliegues públicos autorizados (`https://konektaa.lat`, `https://not.konektaa.lat`, `https://me.konektaa.lat`, Google Play Store) y repositorios públicos bajo `https://github.com/jesusManuelJuarez`.
