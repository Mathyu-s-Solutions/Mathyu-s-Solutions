import type { Lang } from "./../i18n/utils";

/**
 * Public case studies shown in the "Cases" section and on their own pages.
 *
 * ⚠️ The `page` copy below is deliberately conservative: it only states what is
 * verifiable from the live product and the stack we used. Real case studies win
 * links and close deals through *numbers and quotes* — add them in `results`
 * and `quote` once you have the client's OK. Empty sections simply don't render.
 */
export type CaseId = "twenty" | "ciclo" | "parco" | "calarm" | "selvatici";

interface CasePageCopy {
  slug: string;
  /** <title> — keyword first, brand appended by the page. */
  title: string;
  description: string;
  h1: string;
  /** One-paragraph summary shown under the H1. */
  summary: string;
  /** What the project needed to solve. */
  contextTitle: string;
  context: string;
  /** What we actually shipped. */
  deliveredTitle: string;
  delivered: string[];
  /**
   * Measurable outcomes. Leave empty until you have real, client-approved
   * numbers — invented metrics are the fastest way to lose a reference.
   */
  resultsTitle: string;
  results: string[];
  visitLabel: string;
}

export interface CaseStudy {
  id: CaseId;
  name: string;
  urlLabel: string;
  /** The live product. */
  href: string;
  /** i18n key for the corner badge */
  badgeKey: string;
  /** i18n key for the description paragraph */
  descKey: string;
  tags: string[];
  /** Year the work shipped, for the case page metadata. */
  year: number;
  /** Which service page this project belongs to. */
  service: "web" | "apps" | "ai" | "cloud";
  /** Schema.org type of the thing we built. */
  builtType: "WebSite" | "MobileApplication";
  /** Optional client quote — add only if it is real and approved. */
  quote?: { es: string; en: string; author: string; role: string };
  page: Record<Lang, CasePageCopy>;
}

export const CASES: CaseStudy[] = [
  {
    id: "twenty",
    name: "Twenty",
    urlLabel: "twentymoda.com",
    href: "https://www.twentymoda.com/",
    badgeKey: "case.b4",
    descKey: "case.c4p",
    tags: ["Next.js", "Ecommerce", "Culqi", "Yape/Plin"],
    year: 2026,
    service: "web",
    builtType: "WebSite",
    page: {
      es: {
        slug: "twenty",
        title: "Twenty — Tienda online de moda urbana en Perú",
        description:
          "Caso: ecommerce de TWENTY, marca peruana de moda urbana. Catálogo por fit, pagos con tarjeta (Culqi), Yape y Plin, y envíos a todo el Perú. Next.js.",
        h1: "Twenty: la tienda online de una marca de moda urbana",
        summary:
          "TWENTY es una marca peruana de moda urbana juvenil con tienda física en Gamarra. Construimos su ecommerce a medida con Next.js: catálogo, carrito, pagos con tarjeta, Yape y Plin, y envíos a Lima y provincias.",
        contextTitle: "El reto",
        context:
          "Una marca con tienda física en Gamarra y comunidad en redes necesita que comprar en la web sea tan simple como escribir por WhatsApp. La tienda tenía que mostrar un catálogo que cambia cada temporada, dejar elegir talla y fit sin fricción, y cobrar con los medios que de verdad usa el cliente peruano —Yape, Plin y tarjeta—, con envío en Lima y a provincias.",
        deliveredTitle: "Qué construimos",
        delivered: [
          "Ecommerce a medida con Next.js, con páginas prerenderizadas para carga rápida e indexación limpia.",
          "Catálogo por categorías (pantalones, polos, hoodies, jackets y más) con filtros por fit y orden.",
          "Carrito y checkout con pagos por tarjeta vía Culqi, Yape y Plin.",
          "Envíos en 24–48 h en Lima y a todo el Perú por Shalom y Olva, con seguimiento de pedidos.",
          "Cuentas de cliente, promociones por combo y atención directa por WhatsApp.",
          "Libro de reclamaciones virtual y políticas de envío, cambios y privacidad, como pide la normativa peruana.",
          "SEO técnico y local: metadatos, blog y datos estructurados de tienda con dirección y horarios.",
        ],
        resultsTitle: "Resultados",
        results: [],
        visitLabel: "Ver la tienda en vivo",
      },
      en: {
        slug: "twenty",
        title: "Twenty — Online store for a streetwear brand in Peru",
        description:
          "Case study: ecommerce for TWENTY, a Peruvian streetwear brand. Fit-based catalog, card payments (Culqi), Yape and Plin, and nationwide shipping. Next.js.",
        h1: "Twenty: an online store for a streetwear brand",
        summary:
          "TWENTY is a Peruvian youth streetwear brand with a physical store in Gamarra, Lima. We built their custom ecommerce in Next.js: catalog, cart, card, Yape and Plin payments, and shipping across Lima and the rest of Peru.",
        contextTitle: "The challenge",
        context:
          "A brand with a store in Gamarra and a following on social media needs buying online to be as easy as sending a WhatsApp message. The store had to present a catalog that changes every season, let shoppers pick size and fit without friction, and take the payment methods Peruvian customers actually use — Yape, Plin and cards — with delivery in Lima and nationwide.",
        deliveredTitle: "What we built",
        delivered: [
          "Custom ecommerce in Next.js, with prerendered pages for fast loads and clean indexing.",
          "Catalog organised by category (jeans, tees, hoodies, jackets and more) with fit filters and sorting.",
          "Cart and checkout with card payments via Culqi, plus Yape and Plin.",
          "24–48 h delivery in Lima and nationwide shipping via Shalom and Olva, with order tracking.",
          "Customer accounts, bundle promotions and direct support over WhatsApp.",
          "Online complaints book and shipping, returns and privacy policies, as Peruvian consumer law requires.",
          "Technical and local SEO: metadata, a blog and store structured data with address and opening hours.",
        ],
        resultsTitle: "Results",
        results: [],
        visitLabel: "Visit the live store",
      },
    },
  },
  {
    id: "ciclo",
    name: "Ciclo",
    urlLabel: "ciclo.com.pe",
    href: "https://ciclo.com.pe/inicio",
    badgeKey: "case.b1",
    descKey: "case.c1p",
    tags: ["Next.js", "React", "AWS", "Web"],
    year: 2024,
    service: "web",
    builtType: "WebSite",
    page: {
      es: {
        slug: "ciclo",
        title: "Ciclo — Web para una empresa de economía circular en Perú",
        description:
          "Cómo desarrollamos la web de Ciclo, empresa peruana de economía circular: gestión de residuos de construcción y ecomateriales. Next.js, React y AWS.",
        h1: "Ciclo: la web de una empresa de economía circular",
        summary:
          "Ciclo gestiona residuos de construcción y produce ecomateriales en Perú. Construimos su sitio web corporativo con Next.js y React, desplegado sobre AWS.",
        contextTitle: "El reto",
        context:
          "La economía circular aplicada a la construcción es un servicio que la mayoría de visitantes todavía no conoce. El sitio tenía que explicar con claridad qué hace Ciclo, para quién, y dejar un camino directo al contacto — todo en una web rápida, que se vea bien en el celular y que Ciclo pueda mantener sin depender de nosotros.",
        deliveredTitle: "Qué construimos",
        delivered: [
          "Sitio corporativo con Next.js y React, renderizado para carga rápida e indexación limpia.",
          "Estructura por líneas de servicio, pensada para que cada una pueda rankear por su propio término.",
          "Diseño responsive, priorizando la lectura en móvil.",
          "Formulario de contacto conectado al canal comercial.",
          "Infraestructura en AWS, con despliegue automatizado.",
          "Bases técnicas de SEO: metadatos, jerarquía de encabezados, sitemap y datos estructurados.",
        ],
        resultsTitle: "Resultados",
        results: [],
        visitLabel: "Ver el sitio en vivo",
      },
      en: {
        slug: "ciclo",
        title: "Ciclo — Website for a circular-economy company in Peru",
        description:
          "How we built the website for Ciclo, a Peruvian circular-economy company handling construction waste and eco-materials. Next.js, React and AWS.",
        h1: "Ciclo: a website for a circular-economy company",
        summary:
          "Ciclo manages construction waste and produces eco-materials in Peru. We built their corporate website with Next.js and React, deployed on AWS.",
        contextTitle: "The challenge",
        context:
          "Circular economy applied to construction is a service most visitors have never heard of. The site had to explain what Ciclo does and who it is for, then lead straight to contact — on a fast, mobile-first site the team can maintain without depending on us.",
        deliveredTitle: "What we built",
        delivered: [
          "Corporate site in Next.js and React, rendered for fast loads and clean indexing.",
          "Structure organised by service line so each can rank for its own term.",
          "Responsive design, prioritising mobile reading.",
          "Contact form wired into their commercial channel.",
          "AWS infrastructure with automated deploys.",
          "SEO groundwork: metadata, heading hierarchy, sitemap and structured data.",
        ],
        resultsTitle: "Results",
        results: [],
        visitLabel: "Visit the live site",
      },
    },
  },
  {
    id: "parco",
    name: "Parco dei Colori",
    urlLabel: "parcodeicolori.it",
    href: "https://www.parcodeicolori.it/en",
    badgeKey: "case.b2",
    descKey: "case.c2p",
    tags: ["Next.js", "Auth", "i18n", "Cloud"],
    year: 2024,
    service: "web",
    builtType: "WebSite",
    page: {
      es: {
        slug: "parco-dei-colori",
        title: "Parco dei Colori — Web bilingüe con reservas (Italia)",
        description:
          "Caso: sitio bilingüe italiano/inglés para una asociación de jardines y mariposas en Italia, con reservas, suscripciones y galería. Next.js, autenticación e i18n.",
        h1: "Parco dei Colori: web bilingüe con reservas y suscripciones",
        summary:
          "Parco dei Colori es una asociación italiana de jardines y mariposas. Desarrollamos su sitio bilingüe (italiano e inglés) con reservas, suscripciones de socios y galería.",
        contextTitle: "El reto",
        context:
          "Un parque que recibe visitantes locales e internacionales necesita hablar los dos idiomas sin duplicar el trabajo de mantenimiento, y tiene que resolver dos cosas distintas en la misma web: que un visitante reserve su entrada y que un socio gestione su suscripción.",
        deliveredTitle: "Qué construimos",
        delivered: [
          "Sitio bilingüe italiano/inglés con rutas separadas por idioma y hreflang correcto.",
          "Sistema de reservas para visitantes.",
          "Área de socios con autenticación y gestión de suscripciones.",
          "Galería de imágenes optimizada para carga rápida.",
          "Despliegue en la nube con certificados y respaldos automáticos.",
        ],
        resultsTitle: "Resultados",
        results: [],
        visitLabel: "Ver el sitio en vivo",
      },
      en: {
        slug: "parco-dei-colori",
        title: "Parco dei Colori — Bilingual site with bookings (Italy)",
        description:
          "Case study: a bilingual Italian/English website for a gardens and butterflies association in Italy, with bookings, memberships and a gallery. Next.js, auth and i18n.",
        h1: "Parco dei Colori: a bilingual site with bookings and memberships",
        summary:
          "Parco dei Colori is an Italian gardens and butterflies association. We built their bilingual site (Italian and English) with visitor bookings, member subscriptions and a gallery.",
        contextTitle: "The challenge",
        context:
          "A park hosting both local and international visitors needs to speak two languages without doubling the maintenance work, and has to solve two different jobs on the same site: letting a visitor book a ticket, and letting a member manage their subscription.",
        deliveredTitle: "What we built",
        delivered: [
          "Bilingual Italian/English site with per-language routes and correct hreflang.",
          "Booking system for visitors.",
          "Members area with authentication and subscription management.",
          "Image gallery optimised for fast loading.",
          "Cloud deployment with certificates and automated backups.",
        ],
        resultsTitle: "Results",
        results: [],
        visitLabel: "Visit the live site",
      },
    },
  },
  {
    id: "calarm",
    name: "Calarm",
    urlLabel: "App Store · iPhone",
    href: "https://apps.apple.com/us/app/calarm-smart-alarms/id6772419323",
    badgeKey: "case.b3",
    descKey: "case.c3p",
    tags: ["Swift", "SwiftUI", "EventKit", "iOS"],
    year: 2025,
    service: "apps",
    builtType: "MobileApplication",
    page: {
      es: {
        slug: "calarm",
        title: "Calarm — App nativa de iPhone publicada en la App Store",
        description:
          "Caso: Calarm, app nativa para iPhone que crea alarmas inteligentes a partir de tu agenda. Swift, SwiftUI y EventKit, publicada en la App Store.",
        h1: "Calarm: alarmas inteligentes según tu agenda",
        summary:
          "Calarm es una app nativa de iPhone que crea alarmas a partir de los eventos de tu calendario: en dos toques eliges el evento y cuántos minutos antes quieres despertar. Desarrollada en Swift y SwiftUI, publicada en la App Store.",
        contextTitle: "El reto",
        context:
          "Poner una alarma para una reunión obliga a hacer una cuenta mental cada noche: a qué hora es, cuánto tardo en prepararme, cuánto en llegar. La app tenía que eliminar ese cálculo y quedarse en dos toques — y para eso necesitaba leer el calendario del usuario respetando los permisos y la privacidad que exige Apple.",
        deliveredTitle: "Qué construimos",
        delivered: [
          "App 100% nativa en Swift y SwiftUI, siguiendo las guías de diseño de Apple.",
          "Integración con EventKit para leer los eventos del calendario del usuario.",
          "Flujo de creación de alarma en dos toques: eliges evento y antelación.",
          "Manejo de permisos y privacidad conforme a los requisitos de la App Store.",
          "Publicación completa en la App Store, incluida la revisión de Apple.",
        ],
        resultsTitle: "Resultados",
        results: [],
        visitLabel: "Ver en la App Store",
      },
      en: {
        slug: "calarm",
        title: "Calarm — Native iPhone app shipped to the App Store",
        description:
          "Case study: Calarm, a native iPhone app that builds smart alarms from your calendar. Swift, SwiftUI and EventKit, published on the App Store.",
        h1: "Calarm: smart alarms built from your calendar",
        summary:
          "Calarm is a native iPhone app that creates alarms from your calendar events: two taps pick the event and how many minutes before it you want to wake up. Built in Swift and SwiftUI, published on the App Store.",
        contextTitle: "The challenge",
        context:
          "Setting an alarm for a meeting means doing arithmetic every night: what time it starts, how long to get ready, how long to get there. The app had to remove that calculation and stay within two taps — which meant reading the user's calendar while respecting the permissions and privacy rules Apple enforces.",
        deliveredTitle: "What we built",
        delivered: [
          "Fully native app in Swift and SwiftUI, following Apple's design guidelines.",
          "EventKit integration to read the user's calendar events.",
          "Two-tap alarm creation: pick the event and the lead time.",
          "Permission and privacy handling that meets App Store requirements.",
          "Full App Store submission, including Apple review.",
        ],
        resultsTitle: "Results",
        results: [],
        visitLabel: "View on the App Store",
      },
    },
  },
  {
    id: "selvatici",
    name: "I Selvatici",
    urlLabel: "selvatici.vercel.app",
    href: "https://selvatici.vercel.app/en",
    badgeKey: "case.b5",
    descKey: "case.c5p",
    tags: ["Next.js", "i18n", "SEO", "Web"],
    year: 2026,
    service: "web",
    builtType: "WebSite",
    page: {
      es: {
        slug: "i-selvatici",
        title: "I Selvatici — Web bilingüe de talleres y personal chef (Italia)",
        description:
          "Caso: sitio bilingüe italiano/inglés para I Selvatici, talleres de cocina, huerto terapéutico y personal chef en Basilicata, Italia. Next.js e i18n.",
        h1: "I Selvatici: web bilingüe para talleres de cocina y personal chef",
        summary:
          "I Selvatici es un proyecto comunitario en Castelgrande (Basilicata, Italia) que organiza talleres de cocina, huerto terapéutico y costura, y ofrece servicio de personal chef. Desarrollamos su sitio bilingüe italiano/inglés con Next.js, con agenda de eventos y reservas por WhatsApp.",
        contextTitle: "El reto",
        context:
          "Un proyecto comunitario tiene que contar quién está detrás y qué propone antes de pedir una reserva. La web debía presentar cuatro propuestas distintas —talleres de cocina, huerto terapéutico, costura y personal chef— sin mezclarlas, publicar las próximas fechas con cupos limitados y llevar al visitante a reservar por el canal que el equipo realmente atiende: WhatsApp. Todo en italiano para el público local y en inglés para quien llega de fuera.",
        deliveredTitle: "Qué construimos",
        delivered: [
          "Sitio bilingüe italiano/inglés con rutas por idioma y hreflang correcto.",
          "Una sección por propuesta: talleres de cocina, huerto terapéutico, costura y personal chef.",
          "Agenda de próximos eventos con cupos limitados.",
          "Reservas y contacto directo por WhatsApp y teléfono.",
          "Galería, testimonios, merchandising y presentación de los fundadores.",
          "SEO local: metadatos por idioma, imagen para redes y datos estructurados de negocio, servicios y eventos.",
          "Next.js desplegado en Vercel, con páginas prerenderizadas para carga rápida.",
        ],
        resultsTitle: "Resultados",
        results: [],
        visitLabel: "Ver el sitio en vivo",
      },
      en: {
        slug: "i-selvatici",
        title: "I Selvatici — Bilingual site for workshops and a personal chef (Italy)",
        description:
          "Case study: a bilingual Italian/English site for I Selvatici, cooking workshops, horticultural therapy and personal chef services in Basilicata, Italy.",
        h1: "I Selvatici: a bilingual site for cooking workshops and a personal chef",
        summary:
          "I Selvatici is a community project in Castelgrande (Basilicata, Italy) running cooking, horticultural therapy and sewing workshops, plus a personal chef service. We built their bilingual Italian/English site in Next.js, with an events calendar and bookings over WhatsApp.",
        contextTitle: "The challenge",
        context:
          "A community project has to explain who is behind it and what it offers before asking anyone to book. The site had to present four different offers — cooking workshops, horticultural therapy, sewing and a personal chef — without blurring them together, publish upcoming dates with limited spots, and send visitors to book through the channel the team actually answers: WhatsApp. All of it in Italian for locals and in English for visitors from abroad.",
        deliveredTitle: "What we built",
        delivered: [
          "Bilingual Italian/English site with per-language routes and correct hreflang.",
          "One section per offer: cooking workshops, horticultural therapy, sewing and personal chef.",
          "Upcoming events calendar with limited spots.",
          "Bookings and direct contact over WhatsApp and phone.",
          "Gallery, testimonials, merchandise and a founders section.",
          "Local SEO: per-language metadata, a social preview image and business, service and event structured data.",
          "Next.js deployed on Vercel, with prerendered pages for fast loads.",
        ],
        resultsTitle: "Results",
        results: [],
        visitLabel: "Visit the live site",
      },
    },
  },
];

/** Path of a case study page in a given language. */
export function casePath(c: CaseStudy, lang: Lang): string {
  return `/${lang}/${lang === "es" ? "casos" : "case-studies"}/${c.page[lang].slug}/`;
}

/** Path of the case study index in a given language. */
export function casesIndexPath(lang: Lang): string {
  return `/${lang}/${lang === "es" ? "casos" : "case-studies"}/`;
}

export const CASES_UI = {
  es: {
    navLabel: "Casos",
    title: "Proyectos y casos de éxito",
    heading: "Productos reales, en producción",
    description:
      "Casos de desarrollo de software de Mathyu's Solutions: tiendas online, webs corporativas, sitios bilingües con reservas y apps nativas publicadas en la App Store.",
    lead:
      "Una muestra de lo que hemos construido y qué había detrás de cada proyecto. Puedes abrir cada producto y verlo funcionando.",
    stack: "Stack",
    year: "Año",
    readCase: "Ver el caso",
    otherCases: "Otros proyectos",
    ctaTitle: "¿Tu proyecto es el siguiente?",
    ctaText:
      "Cuéntanos qué necesitas y te enviamos alcance, plazos y precio en menos de 24 horas hábiles.",
    ctaButton: "Pedir cotización",
    ctaWhatsapp: "Escríbenos por WhatsApp",
    relatedService: "Servicio relacionado",
  },
  en: {
    navLabel: "Case studies",
    title: "Projects and case studies",
    heading: "Real products, in production",
    description:
      "Software development case studies from Mathyu's Solutions: online stores, corporate websites, bilingual booking sites and native apps shipped to the App Store.",
    lead:
      "A sample of what we have built and what sat behind each project. You can open every product and see it running.",
    stack: "Stack",
    year: "Year",
    readCase: "Read the case",
    otherCases: "Other projects",
    ctaTitle: "Is your project next?",
    ctaText:
      "Tell us what you need and we will send scope, timeline and price within one business day.",
    ctaButton: "Get a quote",
    ctaWhatsapp: "Message us on WhatsApp",
    relatedService: "Related service",
  },
} satisfies Record<Lang, Record<string, string>>;
