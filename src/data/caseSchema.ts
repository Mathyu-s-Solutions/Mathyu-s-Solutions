import type { Lang } from '../i18n/utils';
import { abs } from './site';
import { CASES, casePath, type CaseStudy } from './cases';

/**
 * Structured data for one case study.
 *
 * Two nodes: the case study itself (`CreativeWork`, authored by us) and the
 * thing it is about — a `WebSite` or a `MobileApplication` that actually exists
 * at a public URL. Pointing `about` at a real, live product is what separates a
 * portfolio entry Google can corroborate from a marketing claim it can't.
 */
export function caseJsonLd(study: CaseStudy, lang: Lang, url: string): Record<string, unknown>[] {
  const copy = study.page[lang];
  const orgRef = { '@id': abs('/#organization') };

  const built: Record<string, unknown> = {
    '@type': study.builtType,
    '@id': `${url}#product`,
    name: study.name,
    url: study.href,
    inLanguage: lang === 'es' ? 'es-PE' : 'en-US',
    author: orgRef,
    provider: orgRef,
  };

  if (study.builtType === 'MobileApplication') {
    built.operatingSystem = 'iOS';
    built.applicationCategory = 'ProductivityApplication';
    built.installUrl = study.href;
  }

  const work: Record<string, unknown> = {
    '@type': 'CreativeWork',
    '@id': `${url}#case`,
    name: copy.h1,
    headline: copy.title,
    description: copy.description,
    url,
    inLanguage: lang === 'es' ? 'es-PE' : 'en-US',
    creator: orgRef,
    author: orgRef,
    publisher: orgRef,
    about: { '@id': `${url}#product` },
    keywords: study.tags.join(', '),
    dateCreated: String(study.year),
    isPartOf: { '@id': `${url}#webpage` },
  };

  return [work, built];
}

/** ItemList for the case study index — tells Google these pages belong together. */
export function casesListJsonLd(lang: Lang, url: string): Record<string, unknown>[] {
  return [
    {
      '@type': 'ItemList',
      '@id': `${url}#list`,
      name: lang === 'es' ? 'Casos de éxito' : 'Case studies',
      itemListOrder: 'https://schema.org/ItemListUnordered',
      numberOfItems: CASES.length,
      itemListElement: CASES.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        url: abs(casePath(c, lang)),
      })),
    },
  ];
}
