---
trigger: always_on
---

# Portfolio 6K (Astro) — Reglas de ingeniería, arquitectura, UI premium, performance, i18n, seguridad

> **Crítico (no negociable):** Estas reglas aplican a **todo** cambio en el repositorio.  
> Cualquier violación se corrige **antes** de integrar.  
> Proyecto: Sitio en **Astro** para portfolio internacional **Fullstack (Flutter-first)**, con **i18n (/es, /en)**, **tema claro/oscuro**, **100% responsive**, performance alto y estética “premium”.
**Idioma por defecto** ,en

---

## 0) Reglas de comunicación y entregables (MANDATORIO)

- **Idioma de trabajo:** respuestas, documentación y PRs en **español**. (La UI del sitio sí es ES/EN).
- **Precisión:** prohibido inventar. Si falta info, declarar supuestos mínimos y marcarlos.
- **Accionable:** toda entrega debe indicar:
  - **qué archivo(s)** se modificó,
  - **qué sección/componente** impacta,
  - **cómo validar** (pasos reproducibles).
- **Impacto explícito:** si un cambio afecta **UX, SEO o performance**, debe quedar escrito en el PR/entrega.
- **Calidad verificable:** todo cambio debe incluir:
  - criterio de aceptación,
  - checklist de pruebas manuales,
  - y si aplica, pruebas automatizadas.

---

## 1) Objetivo del producto (para alinear decisiones)

El sitio **no es un CV**. No se modela como historial laboral.
Debe transmitir en 10 segundos:
- Especialización visible en **Flutter** con profundidad (arquitectura/performance/patrones).
- Capacidad **Fullstack** (API, datos, cloud, integraciones).
- Enfoque en **negocio + arquitectura + ejecución**.
- Señales de seniority (decisiones, tradeoffs, disciplina de entrega).
- Conversión simple: **Schedule a call / Email**.

---

## 2) Principios de arquitectura (Astro)

### 2.1 Content-first + Islands (JS mínimo)
- Astro se usa para **SSG/SSR estático por defecto**.
- JS en cliente **solo** cuando aporta valor real:
  - theme toggle,
  - language switch,
  - menú mobile,
  - animaciones sutiles,
  - filtros de proyectos,
  - scroll/anchor helpers.
- Evitar frameworks completos si no son necesarios. Preferir componentes Astro + islas pequeñas.

### 2.2 Separación clara: Pages / Layouts / Components / Content
- **Pages:** rutas y composición de secciones.
- **Layouts:** estructura global (Header/Footer/SEO base, wrappers i18n).
- **Components:** piezas reutilizables (UI + sections + nav).
- **Content/Data:** textos, navegación, proyectos, links, i18n.

### 2.3 Config-driven (clave del portfolio)
- El portfolio se renderiza desde **config única** (data-driven).
- Cambiar:
  - links,
  - textos,
  - proyectos,
  - CTAs,
  - redes/contacto  
  debe requerir **solo tocar config/i18n**, no componentes.
- Soportar `href` interno/externo y `target` configurable.

---

## 3) Estructura del repositorio (MANDATORIO)

Estructura recomendada (equivalentes aceptables solo con justificación):

- `src/layouts/`
  - `BaseLayout.astro` (SEO base + header/footer + theme/lang setup)
  - layouts adicionales si aplica (ej: `PageLayout.astro`)
- `src/pages/`
  - rutas `/(es|en)/...` o estrategia i18n definida
- `src/components/`
  - `ui/` (Button, Card, Badge, Input, Textarea, Container)
  - `sections/` (Hero, Pillars, Strengths, FeaturedProjects, SystemPlaybook, etc.)
  - `nav/` (HeaderPremium, MobileOverlay, LanguageSwitch, ThemeToggle)
- `src/data/` o `src/content/`
  - `site.*` (marca, links, CTAs, redes)
  - `projects.*` (máx 4 proyectos + case studies)
  - `skills.*` (skills por categoría)
  - `i18n/` (diccionarios ES/EN)
- `src/styles/`
  - `tokens.css` (colores, tipografía, spacing, radios, sombras)
  - `globals.css`
- `public/`
  - `images/` (assets) con naming consistente (kebab-case)

Reglas:
- Cada archivo debe ser pequeño y enfocado.
- Componentes UI **no** contienen textos/urls hardcodeados: reciben props o consumen i18n/config.

---

## 4) Convenciones de código (MANDATORIO)

### 4.1 TypeScript
- Usar TS en utilidades, data y componentes donde aplique.
- Tipos explícitos para:
  - config del sitio (site),
  - navegación,
  - proyectos/case studies,
  - diccionarios i18n,
  - props de UI components.

### 4.2 Naming
- Archivos Astro: `kebab-case.astro`
- Archivos TS: `kebab-case.ts` (o `snake_case.ts`, elegir 1 y mantener)
- Componentes: `PascalCase` (ej: `HeaderPremium.astro`)
- Keys i18n: `section.keyName` (ej: `nav.projects`, `hero.title`)

### 4.3 Límite de tamaño
- Objetivo: ≤ 300 líneas por archivo.
- Si se supera: extraer subcomponentes/helpers.

### 4.4 Cero duplicación
- Si algo se repite 2+ veces, se vuelve componente reutilizable (UI o section).

---

## 5) Sistema de diseño (MANDATORIO)

### 5.1 Tokens (prohibido hardcodear estilos)
- Prohibido usar hex/rgba en componentes (salvo en tokens).
- Definir variables CSS para:
  - colores (bg/surface/text/border/accent/status),
  - tipografía (familia, pesos, escala),
  - spacing (escala 8px),
  - radios (cards/buttons/pills),
  - sombras (sutiles).
- Tema claro/oscuro = **solo cambio de tokens**, sin duplicar estilos.

### 5.2 Tipografía (obligatoria)
- Body/UI: **Inter**
- Headings: **Space Grotesk**
- Mono: **JetBrains Mono** (solo donde aplique)
- Prohibido tamaños arbitrarios: usar escala definida.

### 5.3 Componentes UI obligatorios
- `Button` (Primary/Secondary/Ghost/Link) con estados hover/active/disabled/loading
- `Card` (base)
- `Badge` / `Chip`
- `Input`, `Textarea` con focus ring y errores inline
- `ThemeToggle`, `LanguageSwitch`
- `Container` (max-width + padding responsivo)

### 5.4 Microinteracciones premium
- Transiciones 200–300ms suaves.
- Hover lift 1–2px + sombra sutil.
- On-scroll reveal con stagger ligero.
- Respetar `prefers-reduced-motion`.
- Prohibido: parallax agresivo, animaciones pesadas, efectos “baratos”.

> Nota: Animaciones complejas se especifican/implementan separadas (archivo/spec aparte), pero siempre bajo estos principios.

---

## 6) Responsive 100% (OBLIGATORIO, NO NEGOCIABLE)

### 6.1 Breakpoints mínimos a validar
- Mobile: 360–430px
- Tablet: 768–1024px
- Desktop: 1280px+

### 6.2 Reglas
- Cero overflow horizontal.
- Header premium:
  - Desktop: navegación completa sin romperse.
  - Mobile: overlay/panel premium (no apretar items).
- Grids re-fluyen: 4→2→1 o 3→1 según sección.
- Tipografía/spacing escalan correctamente en mobile.
- Formularios full width en mobile (sin labels cortados).
- Imágenes: responsivas, sin CLS (reservar espacio).

### 6.3 Criterio de aceptación
- Dado mobile/tablet/desktop,
- cuando navego todo el sitio,
- entonces no hay scroll lateral, no hay contenido cortado y los CTAs son accesibles.

---

## 7) Internacionalización (i18n) (MANDATORIO)

- Prohibido hardcodear strings visibles.
- Todo texto viene de diccionarios ES/EN.
- El selector de idioma:
  - mantiene ruta equivalente si existe,
  - si no, envía al home del idioma.
- SEO i18n:
  - `hreflang` correcto ES/EN,
  - canonical correcto por idioma.

---

## 8) Tema claro/oscuro (MANDATORIO)

- Toggle visible en header.
- Persistencia (local storage).
- Fallback a preferencia del sistema si no hay selección previa.
- Evitar “flash” de tema al cargar (aplicación temprana).
- Logo swap:
  - `logo-light` en tema claro
  - `logo-dark` en tema oscuro

---

## 9) SEO (MANDATORIO)

Cada página debe tener:
- `title` + `description` (placeholders permitidos inicialmente, pero definidos).
- Open Graph básico.
- `hreflang` ES/EN.
- Sitemap y robots si hosting lo permite.
- Semántica:
  - un solo H1 por página,
  - jerarquía H2/H3 consistente.

Prohibido:
- páginas sin metadatos,
- títulos duplicados sin intención.

---

## 10) Performance (MANDATORIO)

- JS mínimo (solo islas necesarias).
- Evitar librerías pesadas para animación; preferir CSS/IntersectionObserver.
- Imágenes optimizadas y responsivas (lazy-load donde aplique).
- Respetar `prefers-reduced-motion`.
- Objetivo: experiencia fluida en móvil.

---

## 11) Seguridad (MANDATORIO)

### 11.1 Formulario de contacto
- Validación y sanitización.
- Estados claros: loading/success/error.
- Hook de integración anti-spam (Turnstile/hCaptcha) listo para activarse.
- No exponer secretos en frontend.

### 11.2 Dependencias
- Dependencias mínimas y justificadas.
- Lockfile obligatorio.
- Auditoría y bloqueo de vulnerabilidades High/Critical (o mitigación documentada).

### 11.3 OWASP Top 10 + OWASP ASVS (mínimo verificable)
- Sitio estático: **ASVS L1**.
- Si existe endpoint real (serverless/API) para contacto: **ASVS L2** para esa superficie.
- Inputs/XSS/Injection:
  - validar + sanitizar inputs (cliente y servidor si hay endpoint),
  - renderizar texto con escaping (no HTML crudo).
- Headers/CSP en staging/prod:
  - CSP (evitar `unsafe-inline` si es posible; justificar si se usa)
  - HSTS (prod si aplica)
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy` restrictiva
  - anti-clickjacking: `frame-ancestors 'none'` (CSP)
- Endpoint contacto (si existe):
  - solo `POST /contact`,
  - errores genéricos (sin stack traces),
  - rate limiting + anti-bot cuando sea real,
  - límites recomendados:
    - Name ≤ 80
    - Email ≤ 254
    - Company ≤ 120 (si existe)
    - Message ≤ 5000
  - logging mínimo sin PII completa.
- SSRF:
  - si el endpoint llama a terceros: no aceptar URLs del usuario, usar allowlist.

### 11.4 Security Definition of Done (DoD)
Para marcar DONE:
- 0 High/Critical en deps (o mitigación documentada).
- Headers + CSP verificados en staging/prod sin romper UI.
- Form: validación + límites + estados; rate limit + anti-bot si endpoint real.
- Sin stack traces/debug en respuestas.
- Revisión rápida OWASP sin hallazgos obvios.

---

## 12) Definition of Done (DoD) general del proyecto
Un cambio se considera DONE solo si:
- Cumple tokens + i18n + tema + responsive.
- No introduce duplicación.
- Incluye cómo probar (pasos).
- CI/CD gates en verde: `lint`, `typecheck`, `build`, `tests`, validación i18n y validación de links críticos.
- Cumple presupuestos de performance o documenta excepción con causa, impacto y plan de corrección.
- No degrada Lighthouse/performance (o lo justifica).
- No rompe SEO (metadatos/semántica).
- Cumple accesibilidad WCAG 2.2 AA sin bloqueantes.
- Valida contratos schema-first de `site`, `projects`, `skills` e `i18n`.
- Incluye evidencia de PR (capturas UI + métricas) cuando aplique.
- Respeta reduced-motion.

---

## 13) Quality Gates de CI/CD (MANDATORIO)

- Merge bloqueado si falla cualquier gate.
- Gates mínimos: `lint`, `typecheck`, `build`, `tests`, validación de i18n, validación de links internos/externos críticos.
- Dependencias: `0` vulnerabilidades High/Critical o mitigación documentada con fecha de resolución.
- Toda regla puede ejecutarse por scripts equivalentes del proyecto; no se fuerza herramienta específica.

---

## 14) Presupuestos de performance (MANDATORIO)

- Umbrales objetivo mobile (p75): `LCP <= 2.5s`, `INP <= 200ms`, `CLS <= 0.1`.
- Presupuesto de JS inicial por ruta: `<= 70KB gzip` recomendado para páginas de contenido; excepciones solo con justificación escrita.
- Toda excepción debe incluir causa, impacto y plan de corrección.

---

## 15) Accesibilidad (WCAG 2.2 AA) (MANDATORIO)

- Navegación completa por teclado.
- `focus-visible` claro en elementos interactivos.
- Contraste AA en texto y componentes.
- Formularios con labels, estados de error accesibles y anuncios de estado (`aria-live` cuando aplique).
- `prefers-reduced-motion` respetado en toda animación.

---

## 16) Estrategia de testing por tipo de cambio (MANDATORIO)

- Lógica/utilidades: pruebas unitarias.
- Flujos críticos de UI/islas (theme, idioma, nav mobile, contacto): pruebas de integración o E2E smoke.
- i18n: verificación de paridad de keys entre idiomas.
- Fixes de bug: incluir prueba que prevenga regresión cuando técnicamente aplique.

---

## 17) Contratos de datos y i18n (schema-first) (MANDATORIO)

- `site`, `projects`, `skills` e `i18n` deben validarse contra esquema.
- Build debe fallar ante campos faltantes, tipos inválidos o desalineación ES/EN.
- Prohibido renderizar contenido crítico sin validación previa de estructura.

---

## 18) Matriz de compatibilidad de navegadores (MANDATORIO)

- Soporte mínimo: últimas 2 versiones estables de Chrome, Edge, Firefox, Safari, y Safari iOS.
- Degradación progresiva documentada para features no soportadas.
- Cambios de UI/JS deben validarse en al menos 1 navegador WebKit y 1 Chromium.

---

## 19) Convenciones de PR y commits (MANDATORIO)

- Commits con `Conventional Commits`.
- PR debe incluir: objetivo, alcance, riesgos, validación manual, evidencias (capturas para UI), impacto en SEO/performance/a11y.
- No se permite merge sin checklist completado.

---

## 20) Observabilidad mínima (MANDATORIO)

- Registro de errores frontend (sin exponer datos sensibles).
- Medición de Web Vitals en entorno real cuando sea posible.
- En contacto/API, métricas mínimas de éxito/error/latencia.

---

## 21) Releases y rollback (MANDATORIO)

- Todo cambio pasa por entorno preview/staging antes de producción.
- Definir rollback operativo por release (qué revertir, cómo, y tiempo objetivo).
- Si hay riesgo alto, exigir plan de contingencia explícito en PR.
