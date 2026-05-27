# Mathyu's Solutions — sitio web (Astro)

Landing bilingüe (ES/EN) con foco en **SEO**, **performance** y **0 JS de terceros**,
construida con **Astro 6** + **pnpm**. Salida 100% estática.

Implementa el diseño de referencia en [design/](design/) siguiendo el handoff de
[README.md](README.md). Esta guía documenta el sitio ya construido.

## Comandos

```bash
pnpm install      # instalar dependencias
pnpm dev          # servidor de desarrollo  → http://localhost:4321
pnpm build        # astro check (tipos) + build estático → dist/
pnpm preview      # sirve dist/ localmente
pnpm og           # regenera public/og-image.png (1200×630) con sharp
```

## Arquitectura

```
src/
├─ pages/
│  ├─ es/index.astro     # landing español  (/es/)  ← indexada como default
│  ├─ en/index.astro     # landing inglés   (/en/)
│  └─ 404.astro          # noindex
│  (la raíz "/" redirige a /es/ vía redirects en astro.config.mjs)
├─ layouts/BaseLayout.astro   # <head>: SEO, hreflang, OG/Twitter, JSON-LD, fuentes, anti-FOUC
├─ components/
│  ├─ Landing.astro      # compone todas las secciones
│  ├─ Nav · Hero · Services · Process · Cases · Testimonials · Pricing · Contact · Footer
│  ├─ HeroTerminal (tech) · HeroBizCard (negocio) · TrustStrip
│  ├─ controls/ ThemeToggle · AudienceToggle · LangToggle
│  ├─ ServiceIllustrations/  # 5 SVG (Web/Mobile/AI/DevOps/Cloud)
│  ├─ ContactModal.astro
│  └─ SiteBehavior.astro # ÚNICO script de cliente (tema, audiencia, tabs, modal, formularios, reveal)
├─ i18n/
│  ├─ es.json · en.json  # { tech: {...}, biz: {...} }  (extraído de design/ms-content.js)
│  └─ utils.ts           # t(lang, audience, key) + audienceDict()
├─ data/ site.ts · cases.ts
└─ styles/ tokens.css · global.css
public/ favicon.svg · og-image.png · robots.txt
```

### Idioma vs. audiencia
- **Idioma (ES/EN)** → rutas estáticas (`/es/`, `/en/`) con `hreflang` correcto. SEO indexa ambas.
- **Audiencia (Técnico/Negocio)** → toggle de cliente. El HTML se renderiza en modo *técnico*
  (lo que se indexa); al cambiar a *negocio*, `SiteBehavior` intercambia los textos con el
  diccionario `biz` embebido y muestra los bloques `.biz-only`. Sin recarga, sin red.

## Editar contenido
- **Textos:** `src/i18n/es.json` y `src/i18n/en.json` (estructura `tech` / `biz`).
- **Proyectos/casos:** `src/data/cases.ts`.
- **Datos del negocio** (email, teléfono, RUC, WhatsApp): `src/data/site.ts`.
- **Colores/tipografía:** `src/styles/tokens.css`.

## Formulario de contacto
Sin backend: el botón **Enviar** abre el cliente de correo con un `mailto:` prellenado a
`mathyusolutions@gmail.com`; el botón **WhatsApp** abre `wa.me`. Se configura en `src/data/site.ts`.

## SEO incluido
Un solo `<h1>` por página · jerarquía h1→h2→h3 · canonical · `hreflang` (es-PE/en/x-default) ·
Open Graph + Twitter Card con imagen 1200×630 · JSON-LD `Organization` + `ProfessionalService` ·
`sitemap-index.xml` con alternates · `robots.txt` · fuentes self-hosted (`font-display: swap`) ·
CSS crítico inline · reduced-motion.

## Deploy en Vercel
El sitio es estático; Vercel detecta Astro automáticamente:
1. Importa el repo en Vercel (Framework preset: **Astro**).
2. Build command: `pnpm build` · Output dir: `dist` · Install: `pnpm install` (auto).
3. Asigna el dominio `mathyussolutions.com`.

No se necesita adapter ni variables de entorno. Si cambias el dominio, actualiza `site`
en `astro.config.mjs` y las URLs en `src/data/site.ts`.

> Alternativas: el mismo `dist/` sirve en Cloudflare Pages, Netlify o GitHub Pages sin cambios.
