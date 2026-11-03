# Web Fundación Soy Cuerpo

Sitio de [Fundación Soy Cuerpo](https://fundacionsoycuerpo.cl) — SvelteKit 2 + Svelte 5, desplegado en Netlify.

## Requisitos

- **Node 24** (ver `.nvmrc`; con `fnm` o `nvm` se selecciona solo al entrar al directorio)
- **pnpm** (el lockfile es v9)

## Desarrollo

```bash
pnpm install
pnpm dev
```

## Tests

```bash
pnpm run test:build:run
```

Ese script hace `build` → `preview` en `localhost:4173` → `cypress run`. Es el mismo camino que corre el CI.

### `FLOW_URL`

La sección "Donación única online" de `/donaciones` se renderiza dentro de un `{#if data.flow}`, y `data.flow` sale de `process.env.FLOW_URL` (ver `src/routes/donaciones/+page.server.ts`).

**Si la variable falta, la sección desaparece en silencio** y el test de `/donaciones` falla. En local hay que pasarla:

```bash
FLOW_URL='https://www.flow.cl/btn.php?token=xx2flzy' pnpm run test:build:run
```

En Netlify está definida en el dashboard del sitio (Site configuration → Environment variables).

### Cypress

Cypress no está en `onlyBuiltDependencies` de `pnpm-workspace.yaml`, así que su script de instalación no corre y el binario no se descarga. Hay que instalarlo explícitamente:

```bash
pnpm exec cypress install
```

El CI hace este paso antes de correr los tests.

## Build

```bash
pnpm build
```

Genera la salida para Netlify vía `@sveltejs/adapter-netlify`. El sitio es completamente prerenderizado (`export const prerender = true` en `src/routes/+layout.ts`).

## Datos

El contenido **no** viene de una API en runtime. Se exporta desde Strapi a archivos estáticos en `src/lib/_data/`, versionados en el repo.

## Redirects

Las reglas de redirección viven en `static/_redirects` y se versionan en el repo.

## Deploy

Netlify construye desde `master`. El build y las variables de entorno se configuran en el dashboard del sitio, no en el repo.
