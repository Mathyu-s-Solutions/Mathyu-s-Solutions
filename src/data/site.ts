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

  /** Founder / public face of the business — powers the Person entity (E-E-A-T). */
  founder: {
    name: 'Mathyu Cardozo',
    jobTitle: { es: 'Fundador e Ingeniero de Software', en: 'Founder & Software Engineer' },
    /** Public profiles for the founder. Fill in and they appear in JSON-LD. */
    sameAs: [] as string[],
  },

  /**
   * Official profiles of the BUSINESS. Google uses these to connect the site to
   * the real-world entity — one of the cheapest ranking signals available.
   * ⚠️ Fill these in as you create them; empty strings are filtered out.
   * Suggested: LinkedIn company page, Google Business Profile, GitHub org,
   * Instagram, Facebook, Clutch.
   */
  sameAs: [
    // 'https://www.linkedin.com/company/mathyus-solutions/',
    // 'https://www.instagram.com/mathyussolutions/',
    // 'https://github.com/xMathyu',
    // 'https://www.facebook.com/mathyussolutions/',
  ] as string[],

  /** Approximate coordinates for Lima — used by LocalBusiness `geo`. */
  geo: { lat: -12.0464, lng: -77.0428 },

  /** Cities/regions we explicitly serve, for local SEO `areaServed`. */
  areaServed: [
    'Lima',
    'Callao',
    'Arequipa',
    'Trujillo',
    'Chiclayo',
    'Piura',
    'Cusco',
    'Perú',
  ] as string[],

  /** Business hours (America/Lima), used by `openingHoursSpecification`. */
  hours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as string[],
    opens: '09:00',
    closes: '19:00',
  },

  /** Topics the business is an authority on — feeds Organization.knowsAbout. */
  knowsAbout: [
    'Desarrollo de software a medida',
    'Desarrollo web',
    'Ecommerce',
    'Desarrollo de aplicaciones móviles',
    'iOS',
    'Android',
    'Inteligencia artificial aplicada',
    'Chatbots',
    'Cloud computing',
    'AWS',
    'Microsoft Azure',
    'Google Cloud',
    'DevOps',
  ] as string[],
} as const;

export type Site = typeof SITE;

/** Absolute URL helper for JSON-LD and canonicals. */
export function abs(path: string, base: string | URL = SITE.url): string {
  return new URL(path, base).toString();
}
