import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Blog / resources collection.
 *
 * Files live in `src/content/blog/<lang>/<slug>.md`, so the generated entry id
 * is `es/mi-articulo`. That id carries both the language and the URL slug.
 *
 * Every post is an SEO asset: it targets one search intent, links to the
 * service page that monetizes it, and ships its own FAQ (long-tail + FAQPage
 * structured data).
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    lang: z.enum(['es', 'en']),
    /** <title> tag — keep under ~60 characters, keyword first. */
    title: z.string(),
    /** On-page H1. May be longer / more natural than the <title>. */
    heading: z.string(),
    /** Meta description — 140–160 characters, with a reason to click. */
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** Service page this article should funnel readers into. */
    service: z.enum(['web', 'apps', 'ai', 'cloud']).optional(),
    /** Slug of the same article in the other language (for hreflang). */
    alternate: z.string().optional(),
    tags: z.array(z.string()).default([]),
    /** Long-tail Q&A rendered at the end of the post + FAQPage JSON-LD. */
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    /** Show first in the listing. */
    featured: z.boolean().default(false),
    /** Set true to keep a draft out of the build. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
