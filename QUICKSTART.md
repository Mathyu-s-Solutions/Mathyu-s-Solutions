# Quickstart — paso a paso

## 1. Instala lo necesario
```bash
# Node 20+
node --version  # debe ser >= 20

# Claude Code (si aún no lo tienes)
npm install -g @anthropic-ai/claude-code
```

## 2. Crea el proyecto
```bash
mkdir mathyus-solutions
cd mathyus-solutions

# Mete esta carpeta de handoff dentro
# (asume que descargaste el zip y lo descomprimiste aquí)
mv ~/Downloads/design_handoff_landing ./
```

## 3. Inicia Claude Code
```bash
claude
```

## 4. Primer mensaje a Claude Code (copia-pega esto)

```
Vamos a construir una landing page en Astro con SEO de primera.

Lee design_handoff_landing/README.md completo antes de hacer nada.

Plan:
1. Setup base de Astro siguiendo la sección 4 del README
2. Extrae los design tokens del HTML a src/styles/tokens.css (sección 6)
3. Construye BaseLayout.astro con todo el SEO/JSON-LD (sección 5)
4. Para por aquí y pídeme review antes de continuar

Reglas estrictas:
- TypeScript strict
- 0 librerías JS de terceros excepto las integraciones oficiales de Astro
- Islands solo donde el README lo indica
- Lighthouse 95+ es el objetivo

Empieza.
```

## 5. Después del review, sigue con

```
Bien. Ahora construye los componentes en este orden:
- Nav.astro + los 3 toggles (Theme, Audience, Lang)
- Hero.astro + HeroTerminal + HeroBizCard + TrustStrip

Aplica visibility con selectores [data-audience="..."] siguiendo la
sección 7 del README. Pídeme review.
```

## 6. Continúa con

```
Services.astro como island, con los 5 SVG (Web/Mobile/AI/DevOps/Cloud)
como componentes individuales en src/components/ServiceIllustrations/.
Copia los SVG tal cual del HTML de referencia.
```

## 7. Y luego

```
Process + Cases + Testimonials + Pricing. Todos static, sin JS.
Casos como Content Collection (sección 8 del README).
```

## 8. Finalmente

```
Contact form + ContactModal. Endpoint /api/contact.ts con Resend.
El email debe llegar a mathyusolutions@gmail.com.
```

## 9. Deploy

```
Configura Cloudflare Pages. Necesito que me digas qué variables
de entorno tengo que poner en el dashboard (RESEND_API_KEY, etc).
```

---

## Tips de uso de Claude Code

- **Si algo no se ve bien**: pega el screenshot directo al chat.
- **Si quieres cambiar copy**: edita `src/i18n/es.json` o `en.json` directamente, sin pedirle a Claude.
- **Si Lighthouse baja**: dile *"corre lighthouse en localhost:4321 y arregla lo que esté abajo de 95"*.
- **Si Claude propone una librería**: cuestiónalo. Casi todo se hace con CSS puro.
