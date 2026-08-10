import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { BLOG_UI, getPosts, postHref } from '../../../data/blog';
import { SITE } from '../../../data/site';

const lang = 'en' as const;

export async function GET(context: APIContext) {
  const posts = await getPosts(lang);
  const ui = BLOG_UI[lang];

  return rss({
    title: `${ui.title} — ${SITE.name}`,
    description: ui.description,
    site: context.site ?? SITE.url,
    trailingSlash: true,
    customData: `<language>en-US</language>`,
    items: posts.map((post) => ({
      title: post.data.heading,
      description: post.data.description,
      link: postHref(post),
      pubDate: post.data.updatedDate ?? post.data.pubDate,
      categories: [...post.data.tags],
    })),
  });
}
