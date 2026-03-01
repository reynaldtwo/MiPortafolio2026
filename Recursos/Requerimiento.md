# PORTFOLIO 6K — Requerimiento Funcional + UI Spec (v1.0)
Propietario del producto: Reynaldo de Jesús Sánchez Hernández  
Objetivo: Portfolio profesional para mercado internacional orientado a **Fullstack Developer (Flutter-first)**, proyectando seniority mediante **negocio + arquitectura + ejecución**.  
Restricción: **Home + 4 subpáginas** (máximo).  
Anti-objetivo: NO CV, NO cronología laboral, NO “trabajé en X/Y”, NO lista vacía de tecnologías.

---

## 1) Mensaje y posicionamiento
### 1.1 One-liner (arriba del fold en Home)
**EN (principal):**  
> “I build production-grade products end-to-end: Flutter-first UX, reliable backends, and real-world integrations.”

**Subline (1 línea):**  
> “Business-driven engineering: architecture, execution, and outcomes.”

### 1.2 Identidad (tags visibles)
- Fullstack Engineer (Flutter-first)
- Systems & Integrations
- Product-minded execution
- Remote / International

### 1.3 Qué debe percibir un reclutador en 10 segundos
- Especialista en Flutter (no “solo UI”, sino arquitectura y performance)
- Capacidad fullstack real (API, data, cloud, integraciones)
- Enfoque en resultados (operación, confiabilidad, disciplina de entrega)
- Señales de seniority: arquitectura, decisiones, tradeoffs, casos reales

---

## 2) Navegación y flujo
### 2.1 Sitemap (5 páginas)
1. `/` — Home
2. `/systems` — Systems & Architecture
3. `/flutter` — Flutter Expertise
4. `/projects` — Selected Projects
5. `/contact` — Work With Me

### 2.2 Navegación global (Header)
- Logo (texto: “Reynaldo Sánchez” o marca simple)
- Links: Systems, Flutter, Projects, Contact
- CTA persistente: **“Schedule a call”**
- Mobile: menú tipo drawer (hamburger)

### 2.3 CTA global (regla)
En todas las páginas debe existir:
- CTA primario: “Schedule a call”
- CTA secundario: “Email me”
- Tertiary: “View selected work” → Projects

---

## 3) Sistema de diseño (Design System)
> Implementar como tokens (CSS variables / Tailwind config). Evitar hardcode.

### 3.1 Paleta de colores (tokens)
**Fondos / superficies**
- `--bg-0` = `#0B0F14` (background principal)
- `--bg-1` = `#0F1620` (surface)
- `--card` = `rgba(255,255,255,0.04)` (card fill)
- `--stroke` = `rgba(255,255,255,0.10)` (borde)
- `--stroke-strong` = `rgba(255,255,255,0.16)`

**Texto**
- `--text-0` = `rgba(255,255,255,0.92)` (primario)
- `--text-1` = `rgba(255,255,255,0.70)` (secundario)
- `--muted` = `rgba(255,255,255,0.55)` (muted)

**Accents**
- `--accent` = `#7C5CFF` (violeta premium)
- `--accent-2` = `#2EE59D` (teal/verde “ship/success”)

**Estados**
- `--success` = `#2EE59D`
- `--warning` = `#FFC857`
- `--danger` = `#FF4D6D`

### 3.2 Tipografía
- Headings: `Sora` (o `Space Grotesk`)
- Body: `Inter`
- Mono: `JetBrains Mono`

**Escala**
- H1: 48–56 desktop / 34–40 mobile
- H2: 28–34
- H3: 20–24
- Body: 16–18
- Small: 13–14

### 3.3 Layout / grid / spacing
- Container max-width: 1120px
- Desktop padding: 24px
- Mobile padding: 16px
- Grid: 12 cols (desktop) / 4 cols (mobile)
- Spacing tokens: 4, 8, 12, 16, 24, 32, 48, 64

### 3.4 Estilo visual
- Minimalista + tech premium
- Cards: radius 20–24, borde 1px `--stroke`, blur sutil
- Sombras: suaves (no pesadas)
- Separadores: líneas sutiles con `--stroke`

---

## 4) Componentes UI (catálogo)
> Estos componentes se reutilizan entre páginas.

### 4.1 Header (Global)
**Componentes**
- Logo (click → Home)
- Nav links
- CTA Button Primary (“Schedule a call”)
- Icon links (opcional): GitHub, LinkedIn (header o footer)

**Estados**
- Sticky on scroll (blur background leve)
- Active link highlight (underline glow `--accent`)

### 4.2 Footer (Global)
**Componentes**
- Short line: “Building production-grade systems.”
- Links: Email, LinkedIn, GitHub, Play Store (si aplica)
- Ubicación: “GMT-6”
- Mini-nav

### 4.3 Button
- Primary: bg `--accent`, text white, hover glow + lift 1–2px
- Secondary: outline `--stroke`, bg transparent → hover `--card`
- Link button: underline on hover

### 4.4 Card
- Fill: `--card`
- Border: `--stroke`
- Radius: 20–24
- Padding: 20–24
- Hover: border to `--stroke-strong` + subtle glow

### 4.5 Chip / Badge
- Tech chip: `--card` + `--stroke`
- Active chip: background con `--accent` a baja opacidad + border `--accent`

### 4.6 Metric Tile (mini KPI)
- Big number (ej: “15+”)
- Label (ej: “years in IT”)
- Optional tooltip

### 4.7 Project Card (core)
**Campos**
- Title
- One-liner
- Tags (Role/Scope chips)
- Stack chips
- “Architecture snapshot” (3 bullets)
- “Impact” (1–3 bullets)
- CTA row: “Case Study” + “Demo” + “Repo” (según disponibilidad)

### 4.8 Case Study (expandible / modal)
**Secciones**
- Context (2–3 líneas)
- Constraints (bullets)
- Solution overview (bullets)
- Key decisions (bullets)
- Impact (bullets)
- Lessons learned (1–2 bullets)

---

## 5) Páginas: contenido + layout + componentes

# 5.1 HOME (`/`)
**Objetivo:** impacto inmediato + guiar hacia Systems/Projects + conversión.

## Sección A — Hero (Above the fold)
**Componentes y layout (desktop)**
- Left column:
  - H1 (one-liner)
  - Subline (1 línea)
  - Paragraph (2 líneas máx) explicando: Flutter-first + fullstack + outcomes
  - CTA row:
    - Primary: “View selected work” → `/projects`
    - Secondary: “Systems & architecture” → `/systems`
  - Proof bar (horizontal):
    - Chip/mini-items: “Flutter-first”, “Fullstack”, “Integrations”, “Offline-first”

- Right column:
  - Visual abstract (placeholder, sin imagen fija obligatoria; animaciones definidas en ANIMATIONS_SPEC.md)

**Mobile**
- Todo en una columna.
- CTAs full-width.

## Sección B — “What I deliver” (3 pillars)
Grid 3 cards (desktop) / 1 card (mobile).
**Cards**
1) Product execution  
   - “From requirements to shipped features”
   - “Fast iterations with production discipline”
2) Architecture & reliability  
   - “Consistency, idempotency, observability”
   - “Systems that don’t break in the real world”
3) Business outcomes  
   - “Reduce operational errors”
   - “Improve workflows and team autonomy”

## Sección C — “Signature strengths”
**Componentes**
- Short paragraph (2–3 líneas)
- Chips (wrap):
  - Flutter
  - .NET APIs
  - SQL
  - Azure
  - Automation
  - Integrations
  - AI workflows

## Sección D — Featured projects (Top 3)
**Componentes**
- Section header: “Selected work”
- 3 Project Cards (compact)
- CTA: “See all projects” → `/projects`

## Sección E — Credibility (sin CV)
**Componentes**
- Metric tiles (3–4)
  - “15+” / “Years in IT”
  - “Multi-site” / “Deployments & support”
  - “Published” / “Apps on Play Store”
  - “ERP/POS” / “Integrations shipped”

## Sección F — Final CTA banner
- Title: “Let’s build something production-grade.”
- Buttons: Schedule a call / Email me

---

# 5.2 SYSTEMS & ARCHITECTURE (`/systems`)
**Objetivo:** vender seniority. Es la página “6K”.

## Sección A — Hero statement
- H1: “Systems thinking: architecture that ships.”
- Subline: “Reliable systems where UX, data, and operations stay consistent.”
- CTA: “See evidence in projects” → `/projects`

## Sección B — Architecture playbook (6 cards)
Grid 3x2 (desktop) / 1 col (mobile).
**Cards (cada una con: Title + 2 bullets + chips de herramientas)**
1) Clean Architecture & modularity  
   - Boundaries, feature modules, maintainability
2) API design & integrations  
   - Contracts, security, versioning
3) Data modeling & performance  
   - Query tuning, indexes, reporting strategy
4) Offline-first & sync  
   - Queue, retries, idempotency, conflict strategy
5) Observability & reliability  
   - Logs, correlation IDs, health checks
6) Automation pipelines  
   - Bots, workflows, alerts, background jobs

## Sección C — System snapshots (diagram placeholders)
**Componentes**
- 2 blocks lado a lado (desktop) / stack (mobile)
- Cada block incluye:
  - Title
  - Mini-diagrama placeholder (rectangles + arrows)
  - 4 bullets “Key decisions”
  - Link: “Related project” → anchor en Projects

Snapshots sugeridos:
- “Flutter App → API → DB → Integrations”
- “Offline queue → batch sync → idempotency”

## Sección D — Stack framework (no lista)
**Componentes**
- 3 columnas:
  - Frontend: Flutter + design system
  - Backend: APIs + integrations
  - Data/Cloud: SQL + Azure + deployment
- Cada columna:
  - 1 frase “why”
  - Chips
  - 1 bullet “tradeoff handled”

## Sección E — CTA
CTA banner: “Want proof? Read the case studies.” → `/projects`

---

# 5.3 FLUTTER EXPERTISE (`/flutter`)
**Objetivo:** especialista real en Flutter (arquitectura + ejecución).

## Sección A — Hero
- H1: “Flutter specialist. Product-first engineering.”
- Sub: “Architecture, performance, and integration patterns used in production.”
- CTA: “View Flutter projects” → `/projects` (con filtro Flutter)

## Sección B — Flutter mastery (4 modules)
Grid 2x2 (desktop) / 1 col (mobile).
**Modules**
1) App architecture  
   - Clean Architecture patterns, feature modules
2) State management  
   - Predictability, testability (mencionar “Bloc/Riverpod depending on constraints”)
3) Performance & UX  
   - Profiling, smooth UI, responsive layouts
4) Integration patterns  
   - Auth flows, background sync, secure storage

## Sección C — UI system & quality
**Componentes**
- Paragraph: “Design systems that scale”
- Chips: tokens, theming, accessibility, responsive, testing

## Sección D — Flutter highlights (Top 2)
- 2 Project Cards (Flutter)
- CTA: “See all projects” → `/projects`

---

# 5.4 SELECTED PROJECTS (`/projects`)
**Objetivo:** evidencia (máximo 4 proyectos), con casos de estudio expandibles.

## Sección A — Header
- H1: “Selected projects — built to ship.”
- Sub: “Case studies focused on architecture, execution, and outcomes.”

## Sección B — Filters (simple)
- Filter chips: All, Flutter, Backend, Automation, Integrations
- (Opcional) Search input (solo si el dev lo ve útil)

## Sección C — Project list (máx 4)
Renderizar 4 Project Cards extendidas.
Cada card incluye:
- Title + one-liner
- Problem (2–3 líneas)
- My role chips
- Architecture snapshot (3–5 bullets)
- Stack chips
- Impact (1–3 bullets)
- CTA row:
  - “Read case study” (expandible)
  - “Demo” (si existe)
  - “Repo” (si es público)

## Sección D — Case study expandible (por proyecto)
Al expandir, mostrar:
- Context
- Constraints
- Solution overview
- Key technical decisions
- Impact / outcomes
- Lessons learned

**Regla de confidencialidad**
No mencionar nombres internos o datos sensibles de terceros.
Usar términos: “Retail multi-site”, “Financial org”, etc.

---

# 5.5 CONTACT (`/contact`)
**Objetivo:** conversión.

## Sección A — Hero
- H1: “Let’s talk.”
- Sub: “Remote • International • Fullstack (Flutter-first).”
- CTAs: Schedule a call / Email me

## Sección B — Contact form (simple + pro)
**Campos**
- Name (input)
- Email (input)
- Engagement type (select): Full-time / Contract / Consulting
- Message (textarea)
- Submit button

**Estados**
- Loading (spinner sutil)
- Success (message + check)
- Error (message claro)

## Sección C — Links
- Cards con enlaces:
  - LinkedIn
  - GitHub
  - Play Store
  - Email

## Sección D — Availability
- Text: “Open to full-time remote roles.”
- Chips: Fullstack, Flutter, Integrations, Automation

---

## 6) Responsividad y accesibilidad
- Mobile-first
- Nav en drawer
- Botones full width en mobile
- Focus visible en inputs y links
- `prefers-reduced-motion`: reducir animaciones (ver ANIMATIONS_SPEC.md)

---

## 7) Requerimientos técnicos no funcionales
- Performance: Lighthouse 90+ (target)
- SEO: title + meta description por página, OG tags
- Estructura de contenido editable (JSON/MD) para proyectos y chips
- Deploy listo para dominio propio (SSR/SSG según stack del dev)

---

## 8) Datos que se deben parametrizar (para que Codex lo implemente)
> Estos valores deben estar en un archivo de configuración (ej: `content.json` o `content.ts`).

- Nombre display
- One-liner + subline
- Links (GitHub, LinkedIn, email, booking)
- Listado de proyectos (máx 4) con campos del Project Card + Case Study
- Lista de skills/chips por categoría