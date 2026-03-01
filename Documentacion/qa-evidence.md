# QA Evidence - Portfolio 6K

## Fecha de certificacion

- 2026-03-01

## Resultado global

- Gate completo ejecutado con `npm run ci`.
- Estado final: **PASS**.

## Evidencia automatizada

### Lint

- Comando: `npm run lint`
- Resultado: PASS

### Typecheck

- Comando: `npm run typecheck`
- Resultado: PASS (0 errores, 0 warnings)

### Schemas

- Comando: `npm run check:schemas`
- Resultado: PASS

### i18n parity

- Comando: `npm run check:i18n`
- Resultado: PASS

### Build

- Comando: `npm run build`
- Resultado: PASS (12 paginas estaticas)

### Unit tests + coverage

- Comando: `npm run test`
- Resultado: PASS
- Tests: 13/13
- Cobertura global:
  - Statements: 97.72%
  - Branches: 86.95%
  - Functions: 100%
  - Lines: 97.61%

### E2E (Playwright)

- Comando: `npm run test:e2e`
- Resultado: PASS
- Tests: 4/4
- Flujos cubiertos:
  - Redirect `/` -> `/en`
  - Language switch de ruta equivalente
  - Persistencia de tema
  - Filtros de proyectos

### A11y (axe + Playwright)

- Comando: `npm run test:a11y`
- Resultado: PASS
- Tests: 6/6
- Sin violaciones `serious` o `critical`.

### Link checking

- Comando: `npm run check:links`
- Resultado: PASS
- Links escaneados: 29
- Rotos: 0

### Lighthouse budgets

- Comando: `npm run test:lighthouse`
- Resultado: PASS
- URLs auditadas:
  - `/en/`
  - `/en/systems/`
  - `/en/flutter/`
  - `/en/projects/`
  - `/en/contact/`
  - `/es/`
- Resultado por URL: PASS en categorias (performance, accessibility, seo, best-practices) y budgets definidos.
- Nota: `/en/projects/` reporto accessibility `0.98` en Lighthouse (gate en verde).

## Evidencia visual funcional

- Home EN validada con hero animado de constelacion tecnologica (nodos + conexiones + dispersión inicial).
- Navegacion sticky, cambio de idioma y tema validados en navegador real.
- Pagina de proyectos validada con filtros por categoria y case-study expandible.

## Auditoria de temas (light/dark)

- Se ejecuto barrido visual completo en:
  - EN: `/en`, `/en/systems`, `/en/flutter`, `/en/projects`, `/en/contact`
  - ES: `/es`, `/es/systems`, `/es/flutter`, `/es/projects`, `/es/contact`
- Hallazgo corregido: pseudo-elemento de `Card` lavaba visualmente el texto en light mode.
- Resultado final: contraste consistente y legible en ambos temas para titulos, cuerpo, chips, enlaces y tarjetas de contenido.

## Notas operativas

- INP en laboratorio puede reportarse como `N/A` (sin interaccion sintetica suficiente). El gate lo valida cuando existe valor numerico.
- Placeholders externos pendientes de sustitucion final documentados en `Documentacion/placeholder-replacement.md`.
