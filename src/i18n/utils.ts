import esData from './es.json';
import enData from './en.json';

export type Lang = 'es' | 'en';
export type Audience = 'tech' | 'biz';

type Dict = Record<string, unknown>;

const dicts: Record<Lang, Record<Audience, Dict>> = {
  es: esData as unknown as Record<Audience, Dict>,
  en: enData as unknown as Record<Audience, Dict>,
};

export const LANGS: Lang[] = ['es', 'en'];
export const DEFAULT_LANG: Lang = 'es';
export const DEFAULT_AUDIENCE: Audience = 'biz';

export function isLang(v: string | undefined | null): v is Lang {
  return v === 'es' || v === 'en';
}

export function otherLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}

/** Resolve a dotted key (e.g. "svc.web.h") inside a (lang, audience) dictionary. */
export function t(lang: Lang, audience: Audience, key: string): string {
  const branch = dicts[lang]?.[audience];
  const val = key.split('.').reduce<unknown>((o, k) => {
    if (o && typeof o === 'object') return (o as Dict)[k];
    return undefined;
  }, branch);
  return typeof val === 'string' ? val : key;
}

/** Build a translator bound to a (lang, audience). */
export function translator(lang: Lang, audience: Audience) {
  return (key: string): string => t(lang, audience, key);
}

/** Flatten a nested dict into { "a.b.c": "value" }. */
export function flatten(obj: unknown, prefix = ''): Record<string, string> {
  const out: Record<string, string> = {};
  if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj as Dict)) {
      const key = prefix ? `${prefix}.${k}` : k;
      if (v && typeof v === 'object') Object.assign(out, flatten(v, key));
      else if (typeof v === 'string') out[key] = v;
    }
  }
  return out;
}

/** Full flattened dictionary for one (lang, audience) — used by the client audience swap. */
export function audienceDict(lang: Lang, audience: Audience): Record<string, string> {
  return flatten(dicts[lang][audience]);
}
