// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production site URL. Update if the final domain changes.
const SITE = 'https://mathyussolutions.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // 100% static output — best for SEO and deploys with zero config on Vercel,
  // Cloudflare Pages, Netlify, etc. No SSR adapter needed (contact form uses mailto/WhatsApp).
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  // Static HTML redirect from the bare root to the default locale.
  redirects: {
    '/': '/es/',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-PE',
          en: 'en-US',
        },
      },
    }),
  ],
  build: {
    // Inline small stylesheets into <head> for faster first paint.
    inlineStylesheets: 'auto',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
