# Guia de headers/CSP para produccion

Aplicar estos headers en el proveedor de hosting/CDN:

## Headers recomendados

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: geolocation=(), microphone=(), camera=()`
- `X-Frame-Options: DENY` (o `frame-ancestors 'none'` via CSP)
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` (solo HTTPS real)

## CSP base sugerida

```text
default-src 'self';
script-src 'self';
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: https:;
connect-src 'self';
frame-ancestors 'none';
base-uri 'self';
form-action 'self';
```

## Nota

- Si migras a fonts self-hosted, elimina dependencias de `fonts.googleapis.com` y `fonts.gstatic.com`.
- Validar CSP en staging antes de pasar a produccion.
