/**
 * Generate public/og-image.png (1200×630) for social previews.
 * Run with: pnpm og   (or: node scripts/og.mjs)
 * Re-run whenever the brand copy changes.
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og-image.png');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
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
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="20" y="20" width="1160" height="590" rx="24" fill="none" stroke="#7fd99a" stroke-opacity="0.18" stroke-width="2"/>

  <g transform="translate(90 120)">
    <rect width="116" height="64" rx="14" fill="#191e23" stroke="#2a3038"/>
    <text x="58" y="44" text-anchor="middle" font-family="monospace" font-weight="700" font-size="34" fill="#f5f7fa">&lt;<tspan fill="#7fd99a">MS</tspan>&gt;</text>
  </g>

  <text x="90" y="330" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="86" fill="#f5f7fa">Mathyu&#39;s Solutions</text>
  <text x="92" y="400" font-family="sans-serif" font-size="34" fill="#b9c2cc">Software, apps móviles, IA y cloud.</text>
  <text x="92" y="446" font-family="sans-serif" font-size="34" fill="#b9c2cc">De la idea al producto.</text>

  <g font-family="monospace" font-size="24" fill="#7fd99a">
    <text x="92" y="540">AWS · Azure · GCP</text>
  </g>
  <text x="1110" y="540" text-anchor="end" font-family="monospace" font-size="24" fill="#6a7280">mathyussolutions.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);
