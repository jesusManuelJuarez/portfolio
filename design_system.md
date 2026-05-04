# Portfolio Design System — Terminal Glassmorphism

Sistema de diseño para el portafolio personal de Jesús Manuel Juárez Acosta.
Heredado y adaptado del proyecto "Not Vibe Coding" con estética **Terminal Glassmorphism**.

---

## 1. Vision & Aesthetic

### Core Identity
Un portafolio que se siente como una **terminal moderna premium** — oscuro, técnico, con destellos de luz neón controlada. Nada genérico, nada "template de IA". Cada sección respira y reacciona al usuario.

### Principles
- **Dark-first**: Todo vive sobre `#0E0E12`. La oscuridad es el lienzo.
- **Monospace Identity**: JetBrains Mono para todo lo técnico. Inter para legibilidad.
- **Glassmorphism Controlado**: Superficies semi-transparentes con blur, nunca opacas.
- **Animación con Propósito**: Anime.js v4 para entrada de secciones, hero grid, typing. Nada gratuito.
- **Gradientes como Firma**: Cada sección tiene un acento de color distinto.

---

## 2. Color Palette

### Surfaces
| Token              | Value            | Usage                          |
|:-------------------|:-----------------|:-------------------------------|
| `--bg-deep`        | `#0E0E12`        | Page background                |
| `--bg-surface`     | `#18181B`        | Cards, elevated surfaces       |
| `--bg-glass`       | `rgba(24,24,27,0.6)` | Glassmorphism panels      |
| `--border-subtle`  | `rgba(130,80,203,0.15)` | Default borders           |
| `--border-hover`   | `rgba(130,80,203,0.4)` | Hover state borders        |

### Brand Accents
| Token              | Value     | Usage                              |
|:-------------------|:----------|:-----------------------------------|
| `--accent-purple`  | `#8250CB` | Primary CTA, nav active, hero glow |
| `--accent-cyan`    | `#06B6D4` | Links, secondary highlights        |
| `--accent-amber`   | `#F59E0B` | Warnings, badges, company names    |
| `--accent-green`   | `#34D399` | Success, education, availability   |
| `--accent-pink`    | `#FB7185` | Experience section, timeline dots  |
| `--accent-soft`    | `#C084FC` | Soft purple for tags, labels       |

### Text
| Token              | Value     | Usage                    |
|:-------------------|:----------|:-------------------------|
| `--text-primary`   | `#FAFAFA` | Headings, important text |
| `--text-secondary` | `#A1A1AA` | Body text                |
| `--text-muted`     | `#52525B` | Labels, metadata         |
| `--text-code`      | `#C084FC` | Code snippets, monospace |

---

## 3. Typography

### Font Stack
```css
--font-body: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Scale
| Element       | Font          | Size     | Weight | Letter Spacing | Transform |
|:-------------|:-------------|:---------|:-------|:---------------|:----------|
| Hero Name    | Inter         | 48-72px  | 800    | -0.02em        | —         |
| Hero Title   | JetBrains Mono| 18-24px  | 400    | 0.1em          | —         |
| Section H2   | Inter         | 32-48px  | 700    | -0.01em        | —         |
| Section Label| JetBrains Mono| 11-12px  | 500    | 0.2em          | uppercase |
| Body         | Inter         | 15-16px  | 400    | 0              | —         |
| Small/Tags   | JetBrains Mono| 11-12px  | 400    | 0.05em         | —         |
| Nav Links    | JetBrains Mono| 12px     | 600    | 0.15em         | uppercase |

---

## 4. Components

### Glass Card
```css
.glass-card {
  background: rgba(24, 24, 27, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(130, 80, 203, 0.15);
  border-radius: 24px;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
}
.glass-card:hover {
  border-color: rgba(130, 80, 203, 0.4);
  box-shadow: 0 0 30px rgba(130, 80, 203, 0.08);
}
```

### Gradient Border (Hollow Icon)
```css
.gradient-border {
  background: linear-gradient(135deg, var(--from), var(--to));
  padding: 2px;
  border-radius: 16px;
}
.gradient-border-inner {
  background: #0E0E12;
  border-radius: 14px;
  width: 100%;
  height: 100%;
}
```

### Badge / Tag
```css
.tag {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 6px;
  background: rgba(130, 80, 203, 0.1);
  border: 1px solid rgba(130, 80, 203, 0.2);
  color: #C084FC;
}
```

### Timeline Dot
```css
.timeline-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--accent-purple);
  background: #0E0E12;
  position: relative;
}
.timeline-dot::after {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-purple);
  box-shadow: 0 0 10px var(--accent-purple);
}
```

---

## 5. Animation System (Anime.js v4)

### Hero Grid
- Hundreds of `50x50` blocks covering the viewport
- `animate()` with `stagger()` from center, wave pattern
- Repeats every 8-10s from random origin
- Opacity range: `0.03` → `0.4` → `0.03`

### Section Reveals
- `IntersectionObserver` triggers `animate()` per section
- Entry: `translateY: [40, 0]`, `opacity: [0, 1]`, `ease: outExpo`, `duration: 800`
- Stagger children with `stagger(80)`

### Skill Bars
- On intersection: `animate('.skill-fill', { width: [0, target], duration: 1200, ease: 'outExpo', delay: stagger(100) })`

### Typing Effect
- Pure JS character-by-character reveal
- Blinking cursor `|` with CSS `animation: blink 1s steps(1) infinite`

---

## 6. Layout & Spacing

| Token         | Value  | Usage                 |
|:-------------|:-------|:----------------------|
| `--space-xs` | `4px`  | Tight gaps            |
| `--space-sm` | `8px`  | Tag padding           |
| `--space-md` | `16px` | Card padding          |
| `--space-lg` | `32px` | Section gaps          |
| `--space-xl` | `64px` | Section vertical pad  |
| `--space-2xl`| `120px`| Hero padding          |
| `--radius-sm`| `8px`  | Tags, small elements  |
| `--radius-md`| `16px` | Buttons               |
| `--radius-lg`| `24px` | Cards                 |
| `--radius-xl`| `32px` | Hero containers       |

### Breakpoints
| Name    | Value    |
|:--------|:---------|
| Mobile  | `< 640px` |
| Tablet  | `640-1024px` |
| Desktop | `> 1024px` |

### Max Width
- Content: `1100px`
- Text blocks: `680px`

---

## 7. Iconography
- **No emoji** — use Font Awesome 6 icons
- Terminal symbols for decorative use: `❯`, `λ`, `⟐`
- Social: GitHub, LinkedIn, WhatsApp icons from FA

---

## 8. Scroll & Navigation
- **Smooth scroll**: `scroll-behavior: smooth`
- **Scroll progress bar**: Fixed top, gradient purple, tracks `scrollY / scrollHeight`
- **Scroll-to-top**: Appears after 500px scroll, glass card style
- **Navbar**: Fixed, glassmorphism, hides on scroll-down / shows on scroll-up
