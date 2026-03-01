# ANIMATIONS_SPEC.md (v1.0)
Responsable: Dev especialista en animación (code-generated visuals)  
Objetivo: motion premium, sutil, 60fps, “tech”, sin distraer.

---

## 1) Principios
- Subtle > flashy
- 60fps, bajo costo GPU
- Respetar `prefers-reduced-motion`
- Sin estética “gaming”
- Reforzar precisión, no entretenimiento

---

## 2) Motion tokens
- Micro duration: 120–180ms
- Base duration: 220–320ms
- Section reveal: 500–900ms
- Easing: easeOut suave (cubic-bezier)
- Hover glow: 150–220ms

---

## 3) Global interactions
### 3.1 Buttons
- Hover: glow + lift 1–2px
- Active: scale 0.98
- Focus: outline visible + glow sutil

### 3.2 Cards
- Hover: border brighter (`--stroke-strong`) + accent glow sutil
- Subtle tilt opcional (desktop only; muy leve)

### 3.3 Section reveals
- On viewport: fade in + translateY 8–14px
- Stagger en listas (projects/cards)

---

## 4) Home
### 4.1 Hero abstract visual
- Visual procedural (líneas/partículas) ultra sutil
- Opacity 0.15–0.25
- Movimiento lento (parallax suave con scroll)

### 4.2 Proof chips
- Aparecer con stagger (100–140ms entre elementos)

---

## 5) Systems
### 5.1 Diagram placeholders
- Animación “draw-in” (line reveal)
- Hover: highlight del flujo (App → API → DB → Integrations)

### 5.2 Principles cards
- Hover: glow `--accent` muy leve

---

## 6) Flutter
### 6.1 Modules reveal
- Stagger grid
- Micro motion al hover (border + glow)

### 6.2 UI preview (opcional)
- Transición tipo “frame shift” suave
- No usar screenshots; solo abstract UI shapes

---

## 7) Projects
### 7.1 Expand case study
- Height transition + opacity
- Sin scroll lock (mantener natural)

### 7.2 Filter chips
- Active: background accent subtle + underline glow

---

## 8) Contact
### 8.1 Form feedback
- Success: checkmark line animation
- Error: shake mínimo (muy sutil) + color danger

---

## 9) Accessibility
- `prefers-reduced-motion`: desactivar parallax/particles y dejar solo fades básicos.