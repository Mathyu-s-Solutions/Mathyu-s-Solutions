// @ts-check
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';

// Production site URL. Update if the final domain changes.
const SITE = 'https://mathyusolutions.com';

/**
 * Real publish dates for blog posts, read straight from the markdown
 * frontmatter. `lastmod` is only worth emitting when it is truthful — a build
 * timestamp stamped on every URL teaches Google to ignore the field.
 * @returns {Map<string, string>} "/es/blog/slug/" → ISO date
 */
function blogLastmod() {
  const map = new Map();
  const root = fileURLToPath(new URL('./src/content/blog', import.meta.url));
  for (const lang of ['es', 'en']) {
    let files = [];
    try {
      files = readdirSync(join(root, lang)).filter((f) => f.endsWith('.md'));
    } catch {
      continue; // language folder not created yet
    }
    for (const file of files) {
      const raw = readFileSync(join(root, lang, file), 'utf8');
      const updated = raw.match(/^updatedDate:\s*(\S+)/m)?.[1];
      const published = raw.match(/^pubDate:\s*(\S+)/m)?.[1];
      const date = updated ?? published;
      if (!date) continue;
      const iso = new Date(date).toISOString();
      map.set(`/${lang}/blog/${file.replace(/\.md$/, '')}/`, iso);
    }
  }
  return map;
}

const LASTMOD = blogLastmod();

/**
 * Wrap every markdown `<table>` in `<div class="table-scroll">` so wide pricing
 * tables scroll on their own instead of forcing the page to scroll sideways.
 * @returns {(tree: any) => void}
 */
function rehypeWrapTables() {
  /** @param {any} node */
  const walk = (node) => {
    if (!Array.isArray(node.children)) return;
    node.children = node.children.map((/** @type {any} */ child) => {
      walk(child);
      if (child.type === 'element' && child.tagName === 'table') {
        return {
          type: 'element',
          tagName: 'div',
          properties: { className: ['table-scroll'] },
          children: [child],
        };
      }
      return child;
    });
  };
  return walk;
}

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
      // priority/changefreq are weak hints but cost nothing, and lastmod is
      // emitted only where we know the real date. Home > services > posts.
      serialize(item) {
        const path = new URL(item.url).pathname;
        const isHome = /^\/(es|en)\/$/.test(path);
        const isBlogIndex = /^\/(es|en)\/blog\/$/.test(path);
        const isPost = /^\/(es|en)\/blog\/.+/.test(path);

        const lastmod = LASTMOD.get(path);
        if (lastmod) item.lastmod = lastmod;
        if (isHome) {
          item.priority = 1.0;
          item.changefreq = ChangeFreqEnum.WEEKLY;
        } else if (isBlogIndex) {
          item.priority = 0.7;
          item.changefreq = ChangeFreqEnum.WEEKLY;
        } else if (isPost) {
          item.priority = 0.6;
          item.changefreq = ChangeFreqEnum.MONTHLY;
        } else {
          // Service pages — these are the pages that convert.
          item.priority = 0.9;
          item.changefreq = ChangeFreqEnum.MONTHLY;
        }
        return item;
      },
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeWrapTables],
  },
  build: {
    // Inline small stylesheets into <head> for faster first paint.
    inlineStylesheets: 'auto',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
