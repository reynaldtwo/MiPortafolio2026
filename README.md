# Portfolio 6K - Astro

Portfolio internacional fullstack (Flutter-first) con i18n (`/en`, `/es`), tema claro/oscuro, arquitectura data-driven y quality gates estrictos.

## Requisitos

- Node.js 22+ (probado con Node 24)
- npm 11+

## Comandos

- `npm run dev` - servidor local en `http://127.0.0.1:4321`
- `npm run build` - build de produccion en `dist/`
- `npm run preview` - previsualizacion del build
- `npm run lint` - lint del repo
- `npm run typecheck` - chequeo de tipos Astro/TS
- `npm run check:schemas` - validacion schema-first de contenido
- `npm run check:i18n` - paridad de keys EN/ES
- `npm run test` - unit tests (Vitest + coverage)
- `npm run test:e2e` - flujos criticos (Playwright)
- `npm run test:a11y` - accesibilidad automatizada (axe)
- `npm run check:links` - validacion de links
- `npm run test:lighthouse` - budgets de performance/SEO/a11y/best-practices
- `npm run ci` - gate completo release-ready

## Estructura principal

```text
src/
  layouts/
  pages/
    en/
    es/
  components/
    ui/
    nav/
    sections/
  data/
    i18n/
  schemas/
  styles/
  types/
  utils/
tests/
  unit/
  e2e/
  a11y/
scripts/
  check-i18n.ts
  check-schemas.ts
  check-lighthouse.ts
Documentacion/
  release-checklist.md
  qa-evidence.md
  placeholder-replacement.md
```

## Variables de entorno

- `SITE_URL` (opcional): URL base para canonical/hreflang/sitemap.
  - Default: `https://example.com`
  - En checks locales automatizados se usa `http://127.0.0.1:4321`.

## Placeholders para publicacion

Los links externos de contacto se centralizan en:

- `src/data/site.ts`

Links de demo/repo de proyectos:

- `src/data/projects.ts`

Reemplazo guiado en:

- `Documentacion/placeholder-replacement.md`

## CI

Workflow:

- `.github/workflows/ci.yml`

Incluye:

- lint
- typecheck
- schema checks
- i18n parity
- build
- unit tests + coverage
- e2e
- a11y
- links
- lighthouse budgets
