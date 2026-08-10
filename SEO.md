# Guía de SEO — Mathyu's Solutions

Esta guía explica **qué ya está hecho** en el código y **qué tienes que hacer tú** (fuera del código)
para empezar a aparecer en Google y conseguir clientes.

> Realidad: el SEO on-page (lo del código) es la base, pero **no basta** para rankear en términos
> competitivos. Para tu **nombre de marca** ("Mathyu's Solutions") llegarás al #1 fácil una vez
> indexado. Para "consultora de software", "desarrollo de apps", etc., se gana con **tiempo +
> contenido + SEO local + reseñas + enlaces**. Desconfía de quien te garantice el #1 inmediato.

---

## 0) ⚠️ Cuatro cosas que solo tú puedes arreglar (hazlas primero)

Son las de mayor impacto y ninguna se puede resolver desde el código:

1. **Los testimonios de la home son de relleno.** `src/components/Testimonials.astro` tiene tres
   nombres inventados (Laura Ramírez, Carlos Velasco, Andrea Molina). A propósito **no** les puse
   datos estructurados de `Review` / `AggregateRating`: marcar reseñas falsas viola las políticas de
   Google (penalización manual) y es engañoso para el visitante. Reemplázalos con citas reales
   —aunque sean solo dos— con nombre, cargo y empresa verdaderos.
2. **`sameAs` está vacío.** En `src/data/site.ts` hay una lista comentada. Google la usa para
   conectar tu web con tu entidad real (LinkedIn, Instagram, GitHub, Perfil de Empresa). Es de las
   señales más baratas que existen: crea los perfiles, pega las URLs y descoméntalas.
3. **Los casos de éxito no tienen números.** Las páginas de `/es/casos/` están escritas solo con lo
   que se puede verificar mirando el producto en vivo: qué se construyó y con qué. **Revisa la
   redacción** (yo no estuve en esos proyectos) y sobre todo llena el array `results` de cada caso
   en `src/data/cases.ts` con métricas reales — y `quote` con una cita del cliente, si te la dan.
   Un caso con "el tiempo de carga bajó de 6 s a 1.2 s" vale diez veces uno sin cifras, y es lo que
   consigue enlaces. Mientras estén vacíos, esa sección simplemente no se renderiza.
4. **Nadie te enlaza todavía.** Ver la sección 6.

---

## 1) Lo que ya está optimizado en el sitio ✅

### Contenido
- **Blog / guías** en `/es/blog/` y `/en/blog/`, con 7 artículos que atacan búsquedas de intención
  de compra real (`src/content/blog/<lang>/*.md`):
  - *¿Cuánto cuesta hacer una app en Perú?* · *¿Cuánto cuesta una página web en Perú?*
  - *Cómo crear una tienda online en Perú* · *Pasarelas de pago en Perú: cuál elegir*
  - *Chatbot de WhatsApp para empresas en Perú*
  - EN: *Nearshore software development in Peru* · *How much does it cost to build an app?*
- Cada artículo enlaza a la **página de servicio** que monetiza esa búsqueda, trae su propio bloque
  de **FAQ long-tail** y aparece en el footer de todo el sitio (indexación rápida).
- **Páginas de servicio dedicadas** (cada una rankea por su término):
  - `/es/desarrollo-web/` · `/es/desarrollo-de-apps/` · `/es/software-con-ia/` · `/es/cloud-y-devops/`
  - `/en/web-development/` · `/en/mobile-app-development/` · `/en/ai-software-development/` · `/en/cloud-devops/`
- **Casos de éxito con página propia** (`/es/casos/`, `/en/case-studies/`): Ciclo, Parco dei Colori
  y Calarm. Las tarjetas de la home ahora enlazan a estas páginas en vez de salir directo a la web
  del cliente — el clic (y el link equity) se queda en tu sitio y el producto en vivo está a un clic
  desde ahí. Cada caso marca con schema el producto real (`WebSite` / `MobileApplication`), que es
  lo que separa un portafolio verificable de una promesa de marketing.

### Técnico
- **Títulos y meta-descriptions** únicos por página, con la keyword al inicio y la marca al final.
- **Un solo `<h1>` por página** y jerarquía correcta (h1 → h2 → h3).
- **`hreflang`** con etiquetas genéricas (`es`, `en`) *y* regionales (`es-PE`, `en-US`) + `x-default`.
  Las páginas que existen en un solo idioma **no** declaran una alternativa falsa.
- **Migas de pan visibles** (`Inicio / Servicio`) además del `BreadcrumbList`.
- **Enlazado interno**: nav y footer enlazan a todas las secciones desde cualquier página
  (antes los anchors `#servicios` no funcionaban fuera de la home), servicios ↔ artículos ↔ home.
- **Sitemap** (`/sitemap-index.xml`) con `priority`, `changefreq` y `lastmod` **real** en los
  artículos (un `lastmod` falso, con la fecha del build en todas las URLs, hace que Google ignore
  el campo — por eso solo se emite donde hay una fecha verdadera).
- **`robots.txt`** con permiso explícito a buscadores **y a los crawlers de IA**
  (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended…). Cada vez más consultas del
  tipo "quién hace apps en Lima" se responden dentro de un asistente, no en una página de
  resultados; estos bots son los que te ponen ahí.
- **`llms.txt`** — resumen legible por máquinas del negocio, servicios, precios y contacto.
- **Imágenes sociales por página** (`public/og/`): home ES/EN, cada servicio y cada artículo llevan
  su propia tarjeta con su titular. Se regeneran con `pnpm og`.
- **`site.webmanifest`**, `theme-color`, `geo.position`/`ICBM`.
- **RSS** en `/es/blog/rss.xml` y `/en/blog/rss.xml`, enlazados desde el `<head>`.
- **Redirección real 301** de `/` a `/es/` vía `vercel.json`. Antes Astro generaba un
  `<meta http-equiv="refresh">` **con `noindex`** en la raíz: justo la URL que la gente teclea,
  comparte y enlaza. Un 301 pasa las señales de forma limpia; un meta-refresh no.
- **Rendimiento:**
  - Sitio 100% estático, fuentes self-hosted, casi 0 JS.
  - Las fuentes del H1 y del cuerpo van en `preload`; antes el navegador no las descubría hasta
    haber descargado y parseado la hoja de estilos (tres saltos antes de pintar el LCP).
  - **El blog y los casos ya no cargan GSAP ni Lenis: 5 KB de JS en vez de 136 KB.** Esas páginas
    son las que reciben el tráfico orgánico frío, y son justo donde Core Web Vitals pesa más.
    Además, el scroll suave de Lenis estorba en un artículo de 1,500 palabras. La landing y las
    páginas de servicio conservan la animación completa.

### Datos estructurados (JSON-LD)
Todo el sitio emite **un solo `@graph` enlazado** por página, en vez de bloques sueltos:

| Entidad | `@id` | Para qué sirve |
| --- | --- | --- |
| `Organization` | `/#organization` | La entidad marca: RUC, teléfono, fundador, `knowsAbout`, `sameAs` |
| `Person` | `/#founder` | Mathyu Cardozo como autor y fundador — señal E-E-A-T |
| `ProfessionalService` | `/#business` | Negocio local: geo, horario, `areaServed`, `priceRange`, `hasOfferCatalog` con los 4 servicios y su precio mínimo |
| `WebSite` | `/#website` | El sitio, con su publisher |
| `WebPage` (+ `FAQPage`) | `<url>#webpage` | La página, con sus FAQ como `mainEntity` |
| `BreadcrumbList` | `<url>#breadcrumb` | La ruta |
| `Service` | `<url>#service` | Solo en páginas de servicio, con `offers` y `availableChannel` |
| `BlogPosting` | `<url>#article` | Solo en artículos, con autor, fechas y `wordCount` |
| `CreativeWork` + `WebSite`/`MobileApplication` | `<url>#case` / `#product` | Solo en casos: el estudio y el producto real que vive en una URL pública |

Antes cada página declaraba su propio `ProfessionalService` con la URL de esa página: para Google
eran ocho negocios distintos. Ahora hay **uno solo**, referenciado por `@id` desde todas partes.

> Nota honesta sobre `FAQPage`: desde 2023 Google casi no muestra resultados enriquecidos de FAQ
> (los reserva a sitios de gobierno y salud). El marcado sigue valiendo la pena porque lo consumen
> los buscadores con IA, pero **no esperes ver los desplegables en la SERP**.

---

## 2) Publicar + indexar (sin esto NO apareces)

1. **Deploy en Vercel**
   - vercel.com → *Add New → Project* → importa `Mathyu-s-Solutions`.
   - Framework: **Astro** (autodetectado) · Build: `pnpm build` · Output: `dist`.
2. **Dominio** `mathyusolutions.com`
   - En Vercel → *Settings → Domains* → agrega el dominio y apunta los DNS.
   - Si cambias de dominio, actualiza `site` en `astro.config.mjs` y `SITE.url` en
     `src/data/site.ts`, corre `pnpm og` y vuelve a desplegar.
3. **Google Search Console** → https://search.google.com/search-console
   - *Agregar propiedad* → **Prefijo de URL** `https://mathyusolutions.com`.
   - Verifica (lo más fácil: registro DNS TXT).
   - *Sitemaps* → envía `sitemap-index.xml`.
   - *Inspección de URL* → pide indexación de `/es/`, `/en/`, las 8 páginas de servicio y los 7
     artículos. Son 17 URLs; se hace en 15 minutos y acelera semanas.
4. **Bing Webmaster Tools** (5 min): https://www.bing.com/webmasters → importa desde Search Console.
   Bing alimenta a ChatGPT y Copilot, así que ya no es opcional.
5. **Valida el marcado**: https://search.google.com/test/rich-results con `/es/desarrollo-de-apps/`
   y con un artículo.

---

## 3) SEO local — lo que MÁS mueve para "…en Lima/Perú"

1. **Perfil de Empresa de Google** → https://business.google.com
   - Nombre exacto: **Mathyu's Solutions**.
   - Categoría principal: *Servicio de desarrollo de software* (agrega *Diseñador de páginas web*,
     *Consultor de software*).
   - Teléfono **+51 994 283 802**, web `https://mathyusolutions.com`, zona de servicio (Lima/Perú;
     sin dirección física si trabajas remoto).
   - **NAP consistente:** nombre, teléfono y datos idénticos a los del JSON-LD.
   - Publica en *Novedades* cada artículo nuevo del blog. Es gratis y mueve el ranking local.
2. **Reseñas** ⭐ — el factor #1 del ranking local. Pide a tus clientes (Ciclo, Parco dei Colori,
   etc.) una reseña con tu link de Google. Apunta a 5–10 iniciales y responde cada una.
   Estas reseñas **sí** cuentan; las del propio sitio no.
3. **Directorios / citations:** Clutch, GoodFirms, LinkedIn (página de empresa), Facebook/Instagram
   business. Mismo nombre, teléfono y web en todos → y luego pégalos en `SITE.sameAs`.

---

## 4) Mapa de palabras clave

**Marca:** `Mathyu's Solutions`, `Mathyus Solutions`

**Servicio + local (alta intención de compra) → páginas de servicio:**
- consultora / empresa de desarrollo de software en Lima · Perú
- desarrollo de software a medida Perú
- desarrollo de aplicaciones móviles Perú · crear app iOS y Android
- desarrollo / diseño de páginas web Lima · crear tienda online Perú
- software con inteligencia artificial · chatbot para WhatsApp empresas
- migración a la nube AWS / Azure Perú · DevOps Perú

**Problema / intención (blog) → artículos ya publicados:**
- "cuánto cuesta hacer una app / una página web en Perú"
- "cómo crear una tienda online en Perú"
- "qué pasarela de pago usar en Perú" · "Niubiz vs Culqi vs Izipay"
- "chatbot de WhatsApp para mi negocio"

**Mercado internacional (EN) → mayor ticket:**
- nearshore software development Peru / Latin America
- hire developers in Peru · nearshore rates

---

## 5) Cómo publicar un artículo nuevo

1. Crea `src/content/blog/es/mi-articulo.md` (el nombre del archivo es la URL).
2. Copia el frontmatter de un artículo existente. Campos: `lang`, `title` (≤60 caracteres),
   `heading` (el H1), `description` (140–160), `pubDate`, `updatedDate`, `service`, `tags`, `faqs`,
   `alternate` (slug de la versión en el otro idioma, si existe).
3. Escribe con H2 para cada pregunta que responde el artículo, y **enlaza a la página de servicio**.
4. `pnpm og` para generar su tarjeta social, `pnpm build` para verificar.
5. Deploy → pide indexación en Search Console → publícalo en el Perfil de Empresa y LinkedIn.

Ritmo recomendado: **1–2 artículos al mes**. Es lo único que hace crecer el tráfico de forma
compuesta.

---

## 6) Para seguir creciendo (mes a mes)

- **Backlinks:** menciones en prensa local, gremios, podcasts, GitHub, y sobre todo casos de
  cliente donde el cliente te enlace desde su web ("Desarrollado por…").
- **Actualiza casos:** añade proyectos en `src/data/cases.ts` con resultados medibles. Considera
  darle a cada caso su propia página: es contenido único y atrae enlaces.
- **Mide:** revisa Search Console cada 2–4 semanas. Busca consultas donde sales en **posición
  5–15** y escribe (o mejora) contenido para ellas: es el trabajo con mejor retorno que existe.
- **Refresca:** actualiza `updatedDate` cuando cambies precios o datos de un artículo. Los
  artículos de precios envejecen rápido y Google lo nota.

---

## 7) Checklist de lanzamiento

- [ ] Testimonios reales reemplazando los de relleno.
- [ ] `SITE.sameAs` y `SITE.founder.sameAs` con URLs reales.
- [ ] Sitio desplegado en Vercel con dominio `mathyusolutions.com` (HTTPS).
- [ ] `astro.config.mjs` `site` y `src/data/site.ts` `url` apuntan al dominio final.
- [ ] Verificado en Google Search Console + sitemap enviado.
- [ ] Indexación solicitada para las 27 URLs del sitemap.
- [ ] Casos revisados y con métricas reales en `results`.
- [ ] Bing Webmaster Tools conectado.
- [ ] Perfil de Empresa de Google creado, verificado y completo.
- [ ] 3–5 reseñas iniciales conseguidas.
- [ ] Perfiles de LinkedIn / redes con el mismo NAP y enlace a la web.
- [ ] Rich Results Test sin errores en home, servicio y artículo.

> **Expectativa de tiempo:** marca → días tras indexar · local con buen perfil → semanas ·
> artículos long-tail ("cuánto cuesta una app en Perú") → 2–4 meses · términos competitivos
> ("desarrollo de software Lima") → 6–12 meses de contenido y enlaces constantes.
