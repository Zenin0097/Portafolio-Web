# Alejandro Robles // Dev

**Versión actual:** `v0.1.2` — Sprint 3: nuevas categorías de Skills, iconos dinámicos SVG y experiencias multi-rol.

Portafolio one-page construido con Astro SSG, Tailwind CSS, TypeScript, React islands y Framer Motion.

## Requisitos

- Node.js >= 22.12
- npm >= 10

## Ejecutar

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
npm run preview
```

## Documentación de referencia

- `Docs/AlejandroDev.json` y `Docs/ARCHITECTURE.md` son exclusivamente base de conocimiento y documentación del proyecto.
- Ninguno de esos archivos se importa en runtime ni actúa como configuración.
- El contenido de perfil que necesita la interfaz vive en `src/data/profile.ts`.
- La paleta y los tokens de tema viven exclusivamente en `src/styles/global.css`; `theme.ts` solo conmuta el estado del tema y actualiza el color del navegador.

## Sistema visual v0.1.1 (vigente en v0.1.2)

Los colores de la interfaz se consumen mediante tokens semánticos (`base`, `surface`, `surface-deep`, `surface-raised`, `text-primary`, `text-secondary`, `text-muted`, `text-subtle`, `border`, `accent`, `accent-dim`). La jerarquía tipográfica se centraliza en `src/styles/global.css` con las clases `type-h1`, `type-h2`, `type-h3`, `type-subtitle`, `type-body-lg`, `type-body`, `type-body-sm`, `type-label`, `type-badge`, `type-caption` y `type-button`.

## Contenido que debes completar

Los archivos fuente no proporcionan historial laboral, certificaciones verificadas, tecnologías de PrivPass/CodOrca, URLs públicas ni una fotografía final. Esos datos están modelados sin inventarlos:

- `src/content/projects/projects.json`
- `src/content/experience/experience.json`
- `src/content/certs/certifications.json`
- `src/content/skills.json`
- `public/assets/images/profile-placeholder.svg`

El PDF incluido en `public/assets/docs/Alejandro-Robles-CV.pdf` es un placeholder mínimo con datos de perfil confirmados. Sustitúyelo por el CV final conservando la ruta para no cambiar el botón del Hero.


## Sprint 3 — Skills e historial multi-rol

- Skills runtime: `src/content/skills.json`.
- Iconos React SVG: `src/shared/icons/`, descubiertos mediante `import.meta.glob` y renderizados por Astro sin hidratación de cliente.
- Experience simple y multi-rol: `src/content/experience/experience.json`.
- Documentación/base de conocimiento: `Docs/`; nunca se importa en runtime.
