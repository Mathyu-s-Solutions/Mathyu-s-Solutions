import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/utils';

export type Post = CollectionEntry<'blog'>;

/** `es/mi-articulo` → `mi-articulo` */
export function postSlug(post: Post): string {
  return post.id.split('/').pop()!;
}

export function postHref(post: Post): string {
  return `/${post.data.lang}/blog/${postSlug(post)}/`;
}

/** Published posts for one language, newest first, featured pinned to the top. */
export async function getPosts(lang: Lang): Promise<Post[]> {
  const all = await getCollection('blog', ({ data }) => data.lang === lang && !data.draft);
  return all.sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    return b.data.pubDate.getTime() - a.data.pubDate.getTime();
  });
}

/** Rough reading time in minutes (200 wpm), from the raw markdown body. */
export function readingMinutes(post: Post): number {
  const words = (post.body ?? '').trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

const DATE_LOCALE: Record<Lang, string> = { es: 'es-PE', en: 'en-US' };

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(DATE_LOCALE[lang], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** Localized UI strings for the blog. */
export const BLOG_UI = {
  es: {
    slug: 'blog',
    eyebrow: 'Blog',
    navLabel: 'Blog',
    title: 'Guías y precios de software en Perú',
    heading: 'Guías, precios y respuestas claras',
    description:
      'Guías prácticas sobre precios de software en Perú, tiendas online, apps móviles e inteligencia artificial. Escritas por el equipo que construye estos proyectos.',
    lead:
      'Escribimos lo que nos preguntan todos los días: cuánto cuesta, cuánto demora y qué hay que decidir antes de empezar. Sin humo y sin letra chica.',
    readingTime: 'min de lectura',
    updated: 'Actualizado',
    published: 'Publicado',
    faqTitle: 'Preguntas frecuentes',
    relatedService: 'Servicio relacionado',
    more: 'Sigue leyendo',
    backToBlog: '← Todos los artículos',
    ctaTitle: '¿Tienes un proyecto en mente?',
    ctaText:
      'Cuéntanos qué necesitas y te enviamos alcance, plazos y precio en menos de 24 horas hábiles.',
    ctaButton: 'Pedir cotización',
    ctaWhatsapp: 'Escríbenos por WhatsApp',
    home: 'Inicio',
    toc: 'Contenido',
  },
  en: {
    slug: 'blog',
    eyebrow: 'Blog',
    navLabel: 'Blog',
    title: 'Software guides, pricing and nearshore hiring',
    heading: 'Guides, pricing and straight answers',
    description:
      'Practical guides on software pricing, mobile apps, AI and hiring nearshore engineering teams in Latin America — written by the people who build the projects.',
    lead:
      'We write down what clients ask us every week: what it costs, how long it takes, and what you need to decide before you start.',
    readingTime: 'min read',
    updated: 'Updated',
    published: 'Published',
    faqTitle: 'Frequently asked questions',
    relatedService: 'Related service',
    more: 'Keep reading',
    backToBlog: '← All articles',
    ctaTitle: 'Have a project in mind?',
    ctaText:
      'Tell us what you need and we will send scope, timeline and price within one business day.',
    ctaButton: 'Get a quote',
    ctaWhatsapp: 'Message us on WhatsApp',
    home: 'Home',
    toc: 'Contents',
  },
} satisfies Record<Lang, Record<string, string>>;
