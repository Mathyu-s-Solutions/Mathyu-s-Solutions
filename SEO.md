# Guía de SEO — Mathyu's Solutions

Esta guía explica **qué ya está hecho** en el código y **qué tienes que hacer tú** (fuera del código)
para empezar a aparecer en Google y conseguir clientes.

> Realidad: el SEO on-page (lo del código) es la base, pero **no basta** para rankear en términos
> competitivos. Para tu **nombre de marca** ("Mathyu's Solutions") llegarás al #1 fácil una vez
> indexado. Para "consultora de software", "desarrollo de apps", etc., se gana con **tiempo +
> contenido + SEO local + reseñas + enlaces**. Desconfía de quien te garantice el #1 inmediato.

---

## 1) Lo que ya está optimizado en el sitio ✅

- **Títulos y meta-descriptions** únicos por página, con keywords y ubicación (Lima/Perú).
- **Un solo `<h1>` por página** y jerarquía correcta (h1 → h2 → h3).
- **`hreflang`** entre español (`/es/`) e inglés (`/en/`), incl. páginas de servicio.
- **Datos estructurados (JSON-LD):** `Organization`, `ProfessionalService`, `Service` y
  `BreadcrumbList` (páginas de servicio) y `FAQPage` (home).
- **Sitemap** (`/sitemap-index.xml`) con todas las rutas y alternates + **`robots.txt`**.
- **Páginas de servicio dedicadas** (cada una rankea por su término):
  - `/es/desarrollo-web/` · `/es/desarrollo-de-apps/` · `/es/software-con-ia/` · `/es/cloud-y-devops/`
  - `/en/web-development/` · `/en/mobile-app-development/` · `/en/ai-software-development/` · `/en/cloud-devops/`
- **Enlazado interno** (nav, footer, "Ver más" en servicios, enlaces entre servicios).
- **Sección FAQ** que captura long-tail ("cuánto cuesta una app…").
- **Rendimiento:** sitio estático, fuentes self-hosted, CSS crítico inline, casi 0 JS.

---

## 2) Publicar + indexar (sin esto NO apareces)

1. **Deploy en Vercel**
   - vercel.com → *Add New → Project* → importa `Mathyu-s-Solutions`.
   - Framework: **Astro** (autodetectado) · Build: `pnpm build` · Output: `dist`.
   - Deploy. Te da una URL `*.vercel.app`.
2. **Dominio** `mathyussolutions.com`
   - En Vercel → *Settings → Domains* → agrega el dominio y apunta los DNS (Vercel te da los registros).
   - Si cambias de dominio, actualiza `site` en `astro.config.mjs` y `SITE.url` en `src/data/site.ts`, y vuelve a desplegar.
3. **Google Search Console** → https://search.google.com/search-console
   - *Agregar propiedad* → **Prefijo de URL** `https://mathyussolutions.com`.
   - Verifica (lo más fácil: registro DNS TXT, o subiendo un archivo HTML a `public/`).
   - *Sitemaps* → envía `sitemap-index.xml`.
   - *Inspección de URL* → pega `/es/` y "Solicitar indexación" (repite con las páginas clave).
4. **Bing Webmaster Tools** (opcional, 5 min): https://www.bing.com/webmasters → importa desde Search Console.

---

## 3) SEO local — lo que MÁS mueve para "…en Lima/Perú"

1. **Perfil de Empresa de Google** (Google Business Profile) → https://business.google.com
   - Nombre exacto: **Mathyu's Solutions**.
   - Categoría principal: *Servicio de desarrollo de software* (agrega *Diseñador de páginas web*, *Consultor de software*).
   - Teléfono **+51 994 283 802**, web `https://mathyussolutions.com`, zona de servicio (Lima/Perú; sin dirección física si trabajas remoto).
   - **NAP consistente:** Nombre, teléfono y datos idénticos a los de la web (ya están en el JSON-LD).
   - Descripción con keywords + servicios + fotos del trabajo/logo.
2. **Reseñas** ⭐ — el factor #1 del ranking local. Pide a tus clientes (Ciclo, Parco dei Colori, etc.)
   una reseña con tu link de Google. Apunta a 5–10 iniciales y responde cada una.
3. **Directorios / citations:** Clutch, GoodFirms, LinkedIn (página de empresa), Facebook/Instagram
   business. Usa el mismo nombre, teléfono y web en todos.

---

## 4) Mapa de palabras clave (Perú / español)

**Marca:** `Mathyu's Solutions`, `Mathyus Solutions`

**Servicio + local (alta intención de compra):**
- consultora / empresa de desarrollo de software en Lima · Perú
- desarrollo de software a medida Perú
- desarrollo de aplicaciones móviles Perú · crear app iOS y Android
- desarrollo / diseño de páginas web Lima · crear tienda online Perú
- software con inteligencia artificial · chatbot para WhatsApp empresas
- migración a la nube AWS / Azure Perú · DevOps Perú

**Problema / intención (FAQ + futuro blog):**
- "quiero hacer una app para mi negocio" · "cómo crear una app para mi empresa"
- "cuánto cuesta hacer una app / una página web en Perú"
- "agencia para crear mi tienda online"

Cada **página de servicio** apunta a un clúster. La **home** apunta a "consultora de software en Lima".

---

## 5) Para seguir creciendo (mes a mes)

- **Blog / recursos:** 1–2 artículos al mes respondiendo búsquedas reales
  ("¿Cuánto cuesta una app en Perú?", "Niubiz vs Culqi vs Izipay", etc.). Es lo que captura long-tail.
- **Backlinks:** menciones en prensa local, casos de cliente, gremios, podcasts, GitHub.
- **Actualiza casos:** añade proyectos en `src/data/cases.ts` con resultados medibles.
- **Mide:** revisa Search Console (consultas, clics, posición) cada 2–4 semanas y crea contenido para las consultas donde sales en posición 5–15.

---

## 6) Checklist de lanzamiento

- [ ] Sitio desplegado en Vercel con dominio `mathyussolutions.com` (HTTPS).
- [ ] `astro.config.mjs` `site` y `src/data/site.ts` `url` apuntan al dominio final.
- [ ] Verificado en Google Search Console + sitemap enviado.
- [ ] Indexación solicitada para `/es/`, `/en/` y las páginas de servicio.
- [ ] Perfil de Empresa de Google creado, verificado y completo.
- [ ] 3–5 reseñas iniciales conseguidas.
- [ ] Perfiles de LinkedIn / redes con el mismo NAP y enlace a la web.
- [ ] (Opcional) Validar rich results: https://search.google.com/test/rich-results

> **Expectativa de tiempo:** marca → días tras indexar · local con buen perfil → semanas ·
> términos competitivos → 3–6 meses de contenido y enlaces constantes.
