/**
 * Single source of truth for the business' public details.
 * Used across SEO metadata, JSON-LD, contact links and the footer.
 */
export const SITE = {
  name: "Mathyu's Solutions",
  shortName: 'MS',
  url: 'https://mathyusolutions.com',
  email: 'mathyusolutions@gmail.com',
  /** Human-readable phone */
  phone: '+51 994 283 802',
  /** E.164 for tel: links */
  phoneE164: '+51994283802',
  /** Digits only for wa.me links */
  whatsapp: '51994283802',
  ruc: '20609454211',
  city: 'Lima',
  region: 'Lima',
  country: 'PE',
  countryName: 'Perú',
  foundingYear: 2020,
  yearsExperience: 6,
  sameAs: [] as string[],
} as const;

export type Site = typeof SITE;
