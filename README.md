# Handoff — Mathyu's Solutions · Landing Page (Astro)

> Implementación productiva en Astro con foco en SEO, performance y mantenibilidad.
> Esta carpeta contiene el **diseño de referencia en HTML** y la **guía de implementación** para que un desarrollador (usando Claude Code) pueda construir el sitio real.

---

## 1. Sobre los archivos de diseño

Los archivos en `design/` son una **maqueta funcional en HTML/CSS/JS plano** — muestran look-and-feel, interacciones y copy final. **No son el código de producción.** La tarea es recrear este diseño en **Astro** siguiendo las prácticas que se documentan abajo: arquitectura por islas, SEO de primera, sin JS innecesario.

**Fidelidad:** hi-fi. Colores, tipografía, espaciado, animaciones y copy están definidos. Replicar pixel-perfect usando los tokens documentados.

**Archivos incluidos:**
- `design/Mathyus Solutions Landing.html` — maqueta completa
- `design/ms-content.js` — diccionario de contenido bilingüe (ES/EN) × audiencia (técnico/negocio)

---

## 2. Por qué Astro

| Razón | Detalle |
|---|---|
| **SEO de primera** | HTML estático prerenderizado, sin hidratación innecesaria, Lighthouse 100 alcanzable |
| **Cero JS por defecto** | Solo se hidrata lo interactivo (toggle de tema/idioma/audiencia, tabs, modal) |
| **i18n nativo** | Routing `/es/` y `/en/` automático, hreflang correcto |
| **Image optimization** | `<Image>` component genera WebP/AVIF responsive con `loading=lazy` |
| **Sitemap + robots.txt** | Integraciones oficiales (`@astrojs/sitemap`) |
| **Content Collections** | Tipado para casos, testimonios, planes — fácil de editar |
| **Despliegue** | Cloudflare Pages, Vercel, Netlify — todos gratis y con CDN global |

---

## 3. Arquitectura propuesta

```
mathyus-solutions/
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── public/
│   ├── favicon.svg
│   ├── og-image.png              # 1200×630 para social previews
│   ├── robots.txt
│   └── fonts/                    # auto-host de las 3 familias
│       ├── BricolageGrotesque-Variable.woff2
│       ├── InstrumentSans-Variable.woff2
│       └── JetBrainsMono-Variable.woff2
├── src/
│   ├── pages/
│   │   ├── index.astro           # redirect a /es/
│   │   ├── es/
│   │   │   └── index.astro       # landing español
│   │   ├── en/
│   │   │   └── index.astro       # landing inglés
│   │   └── 404.astro
│   ├── layouts/
│   │   └── BaseLayout.astro      # <head>, fuentes, JSON-LD, meta
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── HeroTerminal.astro    # solo modo técnico
│   │   ├── HeroBizCard.astro     # solo modo negocio
│   │   ├── TrustStrip.astro
│   │   ├── Services.astro        # tabs (island con client:visible)
│   │   ├── ServiceIllustrations/ # los 5 SVG como .astro individuales
│   │   │   ├── WebDashboard.astro
│   │   │   ├── MobileScreens.astro
│   │   │   ├── AIAgentFlow.astro
│   │   │   ├── DevOpsPipeline.astro
│   │   │   └── MultiCloud.astro
│   │   ├── Process.astro
│   │   ├── Cases.astro
│   │   ├── Testimonials.astro
│   │   ├── Pricing.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── ContactModal.astro    # island
│   │   └── controls/
│   │       ├── ThemeToggle.astro      # island
│   │       ├── LangToggle.astro       # link, no island
│   │       └── AudienceToggle.astro   # island
│   ├── content/                  # Content Collections (tipadas)
│   │   ├── config.ts
│   │   ├── cases/
│   │   │   ├── ciclo.md
│   │   │   ├── parco-dei-colori.md
│   │   │   └── calarm.md
│   │   ├── testimonials/
│   │   └── plans/
│   ├── i18n/
│   │   ├── es.json               # extraído de ms-content.js
│   │   ├── en.json
│   │   └── utils.ts              # getTranslations(lang, audience)
│   ├── styles/
│   │   ├── tokens.css            # variables :root + light/dark
│   │   └── global.css
│   └── lib/
│       └── seo.ts                # helpers JSON-LD, sitemap, OG
└── README.md
```

### Por qué esta arquitectura

- **Tres modos de contenido** (tech-es, tech-en, biz-es, biz-en) se vuelven **dos rutas estáticas** (`/es/`, `/en/`) + un **toggle cliente** para audiencia. SEO indexa la versión "técnico" como default (es lo que más tráfico genera) y el toggle de audiencia es UX, no SEO.
- **Cada SVG ilustración** como componente Astro propio → más limpio, cacheable, fácil de iterar.
- **Content Collections** para casos/testimonios/planes → puedes editar markdown sin tocar JSX, y Astro valida el schema.
- **Islands solo donde hace falta** (theme/audience toggle, tabs, modal). El resto es 0 KB de JS.

---

## 4. Implementación paso a paso (para Claude Code)

### Prompt inicial para Claude Code

Abre tu terminal en una carpeta vacía y di a Claude Code:

> Vamos a construir una landing page en Astro. Tengo el diseño completo en HTML en `design/Mathyus Solutions Landing.html` y el diccionario de contenido bilingüe en `design/ms-content.js`. Lee el README.md completo en este folder antes de empezar, sigue la arquitectura propuesta, y prioriza: SEO, performance (Lighthouse 100), accesibilidad (WCAG AA), y mantenibilidad. Usa TypeScript estricto. Empieza por el setup base (astro.config.mjs, integraciones, tokens.css extraídos del HTML) y luego construye componente por componente. Pídeme review después de cada componente grande.

### Pasos sugeridos (Claude Code los ejecutará)

1. **Setup**
   ```bash
   npm create astro@latest -- --template minimal --typescript strict --no-install
   cd mathyus-solutions
   npm install
   npx astro add sitemap
   npm i -D @astrojs/check
   ```

2. **`astro.config.mjs`**
   ```js
   import { defineConfig } from 'astro/config';
   import sitemap from '@astrojs/sitemap';

   export default defineConfig({
     site: 'https://mathyusolutions.com',
     i18n: {
       defaultLocale: 'es',
       locales: ['es', 'en'],
       routing: { prefixDefaultLocale: true, redirectToDefaultLocale: true }
     },
     integrations: [sitemap({
       i18n: { defaultLocale: 'es', locales: { es: 'es-PE', en: 'en-US' } }
     })],
     build: { inlineStylesheets: 'auto' },
     image: { service: { entrypoint: 'astro/assets/services/sharp' } }
   });
   ```

3. **Extraer tokens del HTML** a `src/styles/tokens.css` (ver sección 6).

4. **Extraer contenido** de `ms-content.js` a `src/i18n/es.json` y `src/i18n/en.json`. Mantener las 4 ramas (tech-es, tech-en, biz-es, biz-en) como una estructura `{ tech: {...}, biz: {...} }` dentro de cada locale.

5. **BaseLayout.astro** con todos los meta tags SEO (sección 5).

6. **Construir componentes uno por uno**, traducir el HTML directamente. Los SVG de servicios y casos se vuelven componentes `.astro` que reciben las clases del tema.

7. **Islands con `client:visible`** (no `client:load`) para Services tabs, Modal, y los toggles. Cargan solo cuando entran al viewport.

8. **Verificar Lighthouse** en localhost antes de cada PR: Performance, Accessibility, Best Practices y SEO deben quedar en 95+.

---

## 5. SEO checklist (crítico)

Cada página (`/es/` y `/en/`) debe incluir en `<head>`:

```astro
---
// BaseLayout.astro
const { title, description, lang, path } = Astro.props;
const canonical = new URL(path, Astro.site).toString();
---
<html lang={lang}>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />

  <!-- hreflang -->
  <link rel="alternate" hreflang="es-PE" href={new URL('/es/', Astro.site).toString()} />
  <link rel="alternate" hreflang="en"    href={new URL('/en/', Astro.site).toString()} />
  <link rel="alternate" hreflang="x-default" href={new URL('/es/', Astro.site).toString()} />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={new URL('/og-image.png', Astro.site).toString()} />
  <meta property="og:locale" content={lang === 'es' ? 'es_PE' : 'en_US'} />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />

  <!-- JSON-LD: Organization -->
  <script type="application/ld+json" set:html={JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mathyu's Solutions",
    "alternateName": "MS",
    "url": "https://mathyusolutions.com",
    "logo": "https://mathyusolutions.com/og-image.png",
    "email": "mathyusolutions@gmail.com",
    "telephone": "+51-994-283-802",
    "taxID": "20609454211",
    "address": { "@type": "PostalAddress", "addressLocality": "Lima", "addressCountry": "PE" },
    "sameAs": []
  })} />

  <!-- JSON-LD: ProfessionalService -->
  <script type="application/ld+json" set:html={JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Mathyu's Solutions",
    "description": description,
    "areaServed": ["PE", "LATAM"],
    "serviceType": ["Web Development", "Mobile Development", "AI Applications", "DevOps", "Cloud Engineering"]
  })} />

  <!-- Fuentes self-hosted -->
  <link rel="preload" href="/fonts/BricolageGrotesque-Variable.woff2" as="font" type="font/woff2" crossorigin />
  <!-- ... -->
</head>
```

### Más SEO

- **`public/robots.txt`**:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://mathyusolutions.com/sitemap-index.xml
  ```
- **Imágenes**: cada `<Image>` con `alt` descriptivo. Nunca alt vacío en imagen significativa.
- **Headings**: un solo `<h1>` por página (el del hero). Jerarquía estricta h1→h2→h3.
- **URLs limpias**: `/es/`, `/en/`. Nada de `?lang=es`.
- **Sin trailing slash inconsistente**: Astro config `trailingSlash: 'always'`.

---

## 6. Design tokens

Extraer a `src/styles/tokens.css`. Tomados del HTML de referencia:

```css
:root {
  /* Color · dark (default) */
  --bg: oklch(0.16 0.006 240);
  --bg-elev: oklch(0.20 0.008 240);
  --bg-card: oklch(0.21 0.008 240);
  --line: oklch(0.30 0.01 240 / .55);
  --line-strong: oklch(0.42 0.012 240);
  --fg: oklch(0.97 0.004 240);
  --fg-dim: oklch(0.72 0.008 240);
  --fg-muted: oklch(0.55 0.01 240);
  --accent: oklch(0.86 0.18 148);          /* mint terminal */
  --accent-ink: oklch(0.18 0.05 148);
  --warn: oklch(0.78 0.15 65);

  /* Radius */
  --r: 14px;
  --r-sm: 8px;

  /* Shadow */
  --shadow: 0 1px 0 oklch(1 0 0 / .04) inset, 0 30px 60px -20px oklch(0 0 0 / .55);

  /* Typography */
  --font-display: "Bricolage Grotesque", serif;
  --font-body: "Instrument Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}

html[data-theme="light"] {
  --bg: oklch(0.985 0.003 240);
  --bg-elev: oklch(0.97 0.004 240);
  --bg-card: oklch(1 0 0);
  --line: oklch(0.86 0.008 240);
  --line-strong: oklch(0.74 0.01 240);
  --fg: oklch(0.20 0.01 240);
  --fg-dim: oklch(0.40 0.012 240);
  --fg-muted: oklch(0.55 0.012 240);
  --accent: oklch(0.62 0.18 148);
  --accent-ink: oklch(0.98 0.02 148);
  --shadow: 0 1px 0 oklch(0 0 0 / .03) inset, 0 24px 50px -24px oklch(0 0 0 / .12);
}
```

---

## 7. Componentes — resumen

| Componente | Tipo | Islands | Notas |
|---|---|---|---|
| `Nav` | static | — | Sticky, glass backdrop |
| `Hero` | static | — | h1 + lead + CTAs + 4 KPIs |
| `HeroTerminal` | static | — | SVG/HTML del terminal, solo modo técnico |
| `HeroBizCard` | static | — | Tarjeta "Lo que recibes", solo modo negocio |
| `TrustStrip` | static | — | Chips de stack / sectores |
| `Services` | island | `client:visible` | Tabs con estado (5 paneles) |
| `Process` | static | — | Grid de 5 pasos |
| `Cases` | static | — | 3 tarjetas con SVG branded |
| `Testimonials` | static | — | 3 quotes |
| `Pricing` | static | — | 3 planes |
| `Contact` + form | static + island | `client:visible` | Form con validación en cliente |
| `ContactModal` | island | `client:load` | Modal global, abre desde varios botones |
| `ThemeToggle` | island | `client:load` | Necesita FOUC prevention con script inline |
| `AudienceToggle` | island | `client:load` | Cambia clase en `<html>` |
| `LangToggle` | static | — | Es solo un `<a href="/en/">` |

### FOUC prevention (importante)

En `<head>` antes de cualquier CSS, script inline para aplicar tema y audiencia desde localStorage:

```html
<script is:inline>
  const t = localStorage.getItem('ms-theme') || 'dark';
  const a = localStorage.getItem('ms-aud') || 'tech';
  document.documentElement.dataset.theme = t;
  document.documentElement.dataset.audience = a;
</script>
```

---

## 8. Contenido (i18n)

Estructura sugerida para `src/i18n/es.json`:

```json
{
  "tech": {
    "nav": { "services": "Servicios", "process": "Proceso", ... },
    "hero": { "h1a": "Construimos", "h1b": "software serio", ... },
    "svc": { "web": { "h": "...", "p": "...", "f1": "..." }, ... },
    ...
  },
  "biz": {
    "nav": { "services": "Servicios", ... },
    ...
  }
}
```

Helper en `src/i18n/utils.ts`:

```ts
import es from './es.json';
import en from './en.json';

const dicts = { es, en };

export function t(lang: 'es' | 'en', audience: 'tech' | 'biz', key: string): string {
  const dict = dicts[lang][audience] as Record<string, any>;
  return key.split('.').reduce((obj, k) => obj?.[k], dict) ?? key;
}
```

Las claves ya están todas en `design/ms-content.js`. La migración es 1:1, solo cambiar de `"svc.web.h"` plano a estructura anidada.

---

## 9. Performance budget (objetivo)

- **JS total**: < 30 KB gzipped (solo islands)
- **CSS total**: < 25 KB gzipped (inline crítico, defer resto)
- **LCP**: < 1.5s en 4G
- **CLS**: 0
- **Lighthouse**: 95+ en las 4 categorías

Para llegar a esto:
- Self-host fuentes con `font-display: swap` y preload de la variante usada en hero
- Inline CSS crítico (Astro lo hace con `inlineStylesheets: 'auto'`)
- Cero librerías JS de terceros (sin jQuery, sin GSAP, sin React)
- Usar `loading="lazy"` en imágenes below-the-fold
- Comprimir SVGs con SVGO

---

## 10. Despliegue recomendado

**Cloudflare Pages** (gratis, CDN global):

```bash
npm i -D @astrojs/cloudflare
```

En `astro.config.mjs` añadir:
```js
import cloudflare from '@astrojs/cloudflare';
export default defineConfig({ output: 'static', adapter: cloudflare() });
```

Conectar repo de GitHub → Cloudflare detecta Astro → auto-deploy en cada push. Dominio custom `mathyusolutions.com` con SSL gratis.

Alternativas: **Vercel** (deploy también automático, gratis para personal) o **Netlify**.

---

## 11. Stack de formulario (contacto)

El form de contacto necesita un backend. Opciones simples:

1. **Cloudflare Workers + email** (gratis, recomendado si usas Pages)
2. **Formspree** o **Web3Forms** (gratis hasta cierto límite, requiere registrarte)
3. **Resend API** + un endpoint Astro `/api/contact.ts` (mejor experiencia, gratis 3k emails/mes)

Recomendación: **Resend** con endpoint en Astro. Claude Code puede armar esto en 5 min.

---

## 12. Workflow con Claude Code

```bash
# 1. Crea folder y meto el handoff dentro
mkdir mathyus-solutions && cd mathyus-solutions
mv ~/Downloads/design_handoff_landing ./

# 2. Inicia Claude Code
claude

# 3. Prompt inicial
"Lee design_handoff_landing/README.md completo. Vamos a implementar
esta landing page. Crea el setup base de Astro siguiendo la arquitectura
del README. No empieces a construir componentes todavía - solo setup,
tokens.css extraídos del HTML, y BaseLayout con SEO. Pide review."
```

Prompts sugeridos por iteración:

1. *"Setup base: astro init, integraciones, tokens.css, BaseLayout con todo el SEO/JSON-LD del README sección 5."*
2. *"Construye Nav.astro y los 3 controles (ThemeToggle, AudienceToggle, LangToggle). El terminal de FOUC va en BaseLayout."*
3. *"Hero + HeroTerminal + HeroBizCard. Aplica la lógica de visibilidad con `[data-audience]` selectors."*
4. *"Services con las 5 ilustraciones SVG como componentes separados. Tabs como island con `client:visible`."*
5. *"Process + Cases + Testimonials + Pricing."*
6. *"Contact (form + modal) + endpoint `/api/contact.ts` con Resend."*
7. *"Setup Cloudflare Pages, deploy preview."*

Después de cada iteración: `npm run build && npm run preview` + Lighthouse en localhost.

---

## 13. Datos del negocio (para usar tal cual)

```yaml
nombre: Mathyu's Solutions
abreviación: <MS>
ruc: 20609454211
email: mathyusolutions@gmail.com
telefono: +51 994 283 802
ciudad: Lima, Perú
experiencia: +6 años
servicios:
  - Aplicaciones web
  - Aplicaciones móviles (iOS, Android)
  - Aplicaciones con IA
  - DevOps
  - Cloud (AWS, Azure, GCP)
proyectos_publicos:
  - { nombre: Ciclo, url: "https://ciclo.com.pe/inicio", tipo: web }
  - { nombre: Parco dei Colori, url: "https://www.parcodeicolori.it/en", tipo: web }
  - { nombre: Calarm, url: "https://apps.apple.com/us/app/calarm-smart-alarms/id6772419323", tipo: ios }
```

---

## 14. Lo que NO debe hacer Claude Code

- ❌ Copiar el HTML como un único archivo de 1500 líneas — desglosar en componentes
- ❌ Usar React/Vue/Svelte para componentes que pueden ser HTML estático
- ❌ Importar librerías de animación (GSAP, Framer Motion) — todo lo del diseño funciona con CSS puro
- ❌ Usar Tailwind a menos que tú lo pidas — el diseño usa CSS variables que son más limpias
- ❌ Hidratar el sitio entero con `client:load` — solo lo que necesita JS
- ❌ Implementar el form de contacto sin un backend real (los handlers fake del HTML eran para preview)

---

## 15. Checklist de aceptación

- [ ] `npm run build` sin warnings
- [ ] Lighthouse 95+ en Performance, Accessibility, Best Practices, SEO
- [ ] HTML válido en validator.w3.org
- [ ] `/es/` y `/en/` indexables, con hreflang correctos
- [ ] `sitemap-index.xml` genera ambas rutas
- [ ] JSON-LD válido en schema.org validator
- [ ] OG preview correcto en opengraph.xyz
- [ ] Modo claro / oscuro funciona sin FOUC
- [ ] Modo negocio / técnico funciona sin FOUC
- [ ] Tabs de servicios accesibles por teclado (←/→)
- [ ] Modal accesible (Esc cierra, focus trap, aria-modal)
- [ ] Formulario manda email real a mathyusolutions@gmail.com
- [ ] 0 errores en consola
- [ ] Mobile responsive (320px+)

---

Hecho. Buena suerte 🚀
