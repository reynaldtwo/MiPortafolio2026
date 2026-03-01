# Reemplazo rapido de placeholders

## 1) Links de contacto

Editar `src/data/site.ts`:

- `contact.email`
- `contact.booking`
- `contact.github`
- `contact.linkedin`
- `contact.playStore`

## 2) Links de proyectos

Editar `src/data/projects.ts` (cada proyecto):

- `links.demo`
- `links.repo` (si aplica)

## 3) Dominio real para SEO

Configurar variable de entorno antes de build:

```bash
SITE_URL=https://tu-dominio.com npm run build
```

En Windows PowerShell:

```powershell
$env:SITE_URL='https://tu-dominio.com'; npm run build
```

## 4) Verificacion despues de reemplazo

Ejecutar:

```bash
npm run ci
```

Publicar solo si el gate completo queda en verde.
