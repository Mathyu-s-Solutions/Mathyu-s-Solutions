/**
 * Generate every social preview image (1200×630) under public/.
 *
 *   pnpm og      (node >= 22.6 — the script imports src/data/services.ts directly)
 *
 * Output:
 *   public/og-image.png            default / Spanish homepage
 *   public/og/home-en.png          English homepage
 *   public/og/<service-slug>.png   one per service page (ES + EN)
 *   public/og/blog-<slug>.png      one per article
 *
 * Why per-page images: a generic card gets the same click-through everywhere,
 * while a card that repeats the page's own headline measurably lifts shares
 * and clicks from WhatsApp, LinkedIn and X — the channels that actually move
 * traffic for a consultancy.
 *
 * Re-run whenever titles change, then commit the PNGs. They are generated
 * locally on purpose: rendering SVG text depends on the fonts installed on the
 * machine, which we control here and don't on a CI builder.
 */
import sharp from 'sharp';
import { readFileSync, readdirSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { SERVICES, SERVICE_SHORT } from '../src/data/services.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const ogDir = join(publicDir, 'og');
mkdirSync(ogDir, { recursive: true });

const W = 1200;
const H = 630;

/** Escape text for inclusion in SVG markup. */
const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/**
 * Naive word wrap. The display face averages ~0.5em per glyph, so
 * `maxWidth / (fontSize * 0.5)` is a good-enough characters-per-line budget.
 */
function wrap(text, fontSize, maxWidth, maxLines) {
  const perLine = Math.floor(maxWidth / (fontSize * 0.5));
  const lines = [];
  let line = '';
  for (const word of text.split(/\s+/)) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > perLine && line) {
      lines.push(line);
      line = word;
      if (lines.length === maxLines) break;
    } else {
      line = next;
    }
  }
  if (lines.length < maxLines && line) lines.push(line);
  if (lines.length === maxLines && line && lines[maxLines - 1] !== line) {
    lines[maxLines - 1] = `${lines[maxLines - 1].replace(/[.,;:]$/, '')}…`;
  }
  return lines;
}

/**
 * @param {{ eyebrow: string, title: string, footer?: string }} card
 */
function svg({ eyebrow, title, footer = 'mathyusolutions.com' }) {
  // Shrink the headline as it gets longer so every card stays balanced.
  const size = title.length > 90 ? 52 : title.length > 55 ? 62 : 76;
  const lines = wrap(title, size, 1010, 4);
  const blockHeight = lines.length * (size * 1.14);
  const startY = 330 - blockHeight / 2 + size * 0.85;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#11161b"/>
      <stop offset="100%" stop-color="#0a0d11"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.12" r="0.6">
      <stop offset="0%" stop-color="#7fd99a" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#7fd99a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="20" y="20" width="${W - 40}" height="${H - 40}" rx="24" fill="none" stroke="#7fd99a" stroke-opacity="0.18" stroke-width="2"/>

  <g transform="translate(90 78)">
    <rect width="88" height="50" rx="12" fill="#191e23" stroke="#2a3038"/>
    <text x="44" y="34" text-anchor="middle" font-family="monospace" font-weight="700" font-size="26" fill="#f5f7fa">&lt;<tspan fill="#7fd99a">MS</tspan>&gt;</text>
  </g>
  <text x="196" y="110" font-family="monospace" font-size="20" fill="#7fd99a" letter-spacing="2">${esc(eyebrow.toUpperCase())}</text>

  <g font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="${size}" fill="#f5f7fa">
    ${lines
      .map((l, i) => `<text x="90" y="${Math.round(startY + i * size * 1.14)}">${esc(l)}</text>`)
      .join('\n    ')}
  </g>

  <line x1="90" y1="545" x2="${W - 90}" y2="545" stroke="#2a3038" stroke-width="1"/>
  <text x="90" y="583" font-family="sans-serif" font-size="24" fill="#b9c2cc">Mathyu&#39;s Solutions · Lima, Perú</text>
  <text x="${W - 90}" y="583" text-anchor="end" font-family="monospace" font-size="22" fill="#6a7280">${esc(footer)}</text>
</svg>`;
}

async function write(file, card) {
  await sharp(Buffer.from(svg(card))).png().toFile(file);
  console.log('✓', file.replace(publicDir, 'public'));
}

/** Minimal frontmatter reader — enough for the fields the cards need. */
function frontmatter(raw) {
  const block = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const out = {};
  if (!block) return out;
  for (const line of block[1].split(/\r?\n/)) {
    const m = line.match(/^([a-zA-Z]+):\s*(.+)$/);
    if (!m) continue;
    out[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
  }
  return out;
}

/* ── Homepages ─────────────────────────────────────────────────────────── */
await write(join(publicDir, 'og-image.png'), {
  eyebrow: 'Consultora de software · Lima, Perú',
  title: 'Software, apps móviles, IA y cloud. De la idea al producto.',
});

await write(join(ogDir, 'home-en.png'), {
  eyebrow: 'Software consultancy · Lima, Peru',
  title: 'Web platforms, mobile apps, AI and cloud. From idea to product.',
});

/* ── Service pages ─────────────────────────────────────────────────────── */
for (const service of SERVICES) {
  for (const lang of /** @type {const} */ (['es', 'en'])) {
    await write(join(ogDir, `${service[lang].slug}.png`), {
      eyebrow: SERVICE_SHORT[service.id][lang],
      title: service[lang].h1,
    });
  }
}

/* ── Blog posts ────────────────────────────────────────────────────────── */
const blogRoot = join(__dirname, '..', 'src', 'content', 'blog');
for (const lang of ['es', 'en']) {
  let files = [];
  try {
    files = readdirSync(join(blogRoot, lang)).filter((f) => f.endsWith('.md'));
  } catch {
    continue;
  }
  for (const file of files) {
    const data = frontmatter(readFileSync(join(blogRoot, lang, file), 'utf8'));
    const slug = file.replace(/\.md$/, '');
    await write(join(ogDir, `blog-${slug}.png`), {
      eyebrow: data.tags ? data.tags.replace(/[[\]"]/g, '') : lang === 'es' ? 'Guía' : 'Guide',
      title: data.heading ?? data.title ?? slug,
    });
  }
}

console.log('\nDone. Commit the generated PNGs in public/ and public/og/.');
