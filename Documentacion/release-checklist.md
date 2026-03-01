# Release Checklist - Portfolio 6K

## 1) Pre-release tecnico

- [ ] `npm ci` ejecutado en entorno limpio.
- [ ] `npm run ci` en verde.
- [ ] Build generado sin errores en `dist/`.
- [ ] Rutas `/en/*` y `/es/*` disponibles.
- [ ] `/` redirige a `/en`.

## 2) Calidad funcional

- [ ] Navegacion desktop y mobile operativa.
- [ ] Theme toggle persiste tras recarga.
- [ ] Language switch mantiene ruta equivalente.
- [ ] Filtros de proyectos funcionan.
- [ ] Case studies expandibles funcionan.

## 3) Accesibilidad

- [ ] Navegacion por teclado completa.
- [ ] Focus visible en elementos interactivos.
- [ ] Contraste AA validado.
- [ ] `prefers-reduced-motion` respetado.
- [ ] `npm run test:a11y` en verde.

## 4) SEO/i18n

- [ ] `title` y `description` por pagina.
- [ ] `canonical` por idioma correcto.
- [ ] `hreflang` EN/ES + `x-default`.
- [ ] `sitemap-index.xml` generado.
- [ ] `robots.txt` presente.

## 5) Performance

- [ ] LCP <= 2.5s (lab gate).
- [ ] CLS <= 0.1.
- [ ] INP <= 200ms si el audit entrega valor numerico.
- [ ] Presupuesto JS por ruta dentro de limite definido.
- [ ] `npm run test:lighthouse` en verde.

## 6) Seguridad base frontend

- [ ] Sin secretos hardcodeados.
- [ ] Dependencias sin vulnerabilidades High/Critical.
- [ ] Guia de headers/CSP lista para proveedor de deploy.

## 7) Handoff de publicacion

- [ ] Placeholders externos sustituidos en `src/data/site.ts`.
- [ ] Placeholders de demo/repo sustituidos en `src/data/projects.ts`.
- [ ] `SITE_URL` configurada con dominio real.
- [ ] Validacion final local (`npm run ci`) despues de reemplazos.
