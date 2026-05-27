import type { Lang } from '../i18n/utils';

/** Homepage service tab ids (from Services.astro). */
export type PanelId = 'web' | 'mobile' | 'ai' | 'devops' | 'cloud';

/** Illustration component to reuse on the service page. */
export type IllustrationId = 'web' | 'mobile' | 'ai' | 'cloud';

interface LocaleCopy {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
}

export interface ServicePageData {
  id: string;
  /** Which homepage tabs route to this page */
  panels: PanelId[];
  illustration: IllustrationId;
  /** i18n namespace for the feature list (svc.web, svc.mob, …) */
  ns: string;
  techChips: string[];
  es: LocaleCopy;
  en: LocaleCopy;
}

export const SERVICES: ServicePageData[] = [
  {
    id: 'web',
    panels: ['web'],
    illustration: 'web',
    ns: 'svc.web',
    techChips: ['Next.js', 'React', 'TypeScript', 'Node', 'Python', 'PostgreSQL', 'Stripe'],
    es: {
      slug: 'desarrollo-web',
      title: "Desarrollo web en Lima, Perú | Páginas web y tiendas online — Mathyu's Solutions",
      description:
        'Diseño y desarrollo de páginas web y tiendas online en Perú. Sitios rápidos, optimizados para Google y listos para vender. Cotiza con Mathyu’s Solutions.',
      h1: 'Desarrollo de páginas web y tiendas online en Perú',
      intro:
        'Creamos páginas web institucionales y tiendas online (ecommerce) que cargan rápido, se ven bien en el celular y están optimizadas para aparecer en Google. De la idea al lanzamiento, con hosting incluido y un panel para que actualices precios y productos tú mismo.',
    },
    en: {
      slug: 'web-development',
      title: "Web development in Peru | Websites & online stores — Mathyu's Solutions",
      description:
        'Website and online store design and development. Fast, SEO-ready sites built to sell. Get a quote from Mathyu’s Solutions, a Lima-based software consultancy.',
      h1: 'Website and online store development',
      intro:
        'We build brand websites and online stores (ecommerce) that load fast, look great on mobile and are optimized to rank on Google. From idea to launch, hosting included and an admin panel so you can update prices and products yourself.',
    },
  },
  {
    id: 'apps',
    panels: ['mobile'],
    illustration: 'mobile',
    ns: 'svc.mob',
    techChips: ['Swift', 'SwiftUI', 'Kotlin', 'React Native', 'Flutter', 'Firebase'],
    es: {
      slug: 'desarrollo-de-apps',
      title: "Desarrollo de apps móviles en Perú | iOS y Android — Mathyu's Solutions",
      description:
        '¿Quieres hacer una app para tu negocio? Desarrollamos apps nativas para iPhone y Android y las publicamos en App Store y Google Play. Cotiza hoy con Mathyu’s Solutions.',
      h1: 'Desarrollo de aplicaciones móviles para iPhone y Android',
      intro:
        '¿Quieres hacer una app para tu negocio? Diseñamos y desarrollamos apps nativas y multiplataforma para iOS y Android: pedidos, reservas, delivery, fidelización y más. Las publicamos en App Store y Google Play y les damos soporte continuo.',
    },
    en: {
      slug: 'mobile-app-development',
      title: "Mobile app development in Peru | iOS & Android — Mathyu's Solutions",
      description:
        'Want to build an app for your business? We design and develop native iOS and Android apps and publish them to the App Store and Google Play.',
      h1: 'Mobile app development for iPhone and Android',
      intro:
        'Want to build an app for your business? We design and develop native and cross-platform apps for iOS and Android — orders, bookings, delivery, loyalty and more — and publish them to the App Store and Google Play with ongoing support.',
    },
  },
  {
    id: 'ai',
    panels: ['ai'],
    illustration: 'ai',
    ns: 'svc.ai',
    techChips: ['OpenAI', 'Anthropic', 'Bedrock', 'LangChain', 'pgvector', 'Python'],
    es: {
      slug: 'software-con-ia',
      title: "Software con inteligencia artificial en Perú | Chatbots y automatización — Mathyu's Solutions",
      description:
        'Automatiza tu negocio con inteligencia artificial: chatbots para WhatsApp, atención 24/7, búsqueda inteligente y análisis de datos. Cotiza con Mathyu’s Solutions.',
      h1: 'Desarrollo de software con inteligencia artificial',
      intro:
        'Llevamos la inteligencia artificial a tu negocio de forma práctica: chatbots que atienden por WhatsApp 24/7, automatización de tareas, búsqueda inteligente sobre tus documentos y análisis de datos. IA aplicada y medible, no humo.',
    },
    en: {
      slug: 'ai-software-development',
      title: "AI software development in Peru | Chatbots & automation — Mathyu's Solutions",
      description:
        'Automate your business with AI: WhatsApp chatbots, 24/7 support, smart search and data analysis. Applied, measurable AI from Mathyu’s Solutions.',
      h1: 'AI software development and automation',
      intro:
        'We bring AI to your business in a practical way: chatbots that serve customers on WhatsApp 24/7, task automation, smart search over your own documents and data analysis. Applied, measurable AI — not hype.',
    },
  },
  {
    id: 'cloud',
    panels: ['devops', 'cloud'],
    illustration: 'cloud',
    ns: 'svc.cloud',
    techChips: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker'],
    es: {
      slug: 'cloud-y-devops',
      title: "Cloud y DevOps en Perú | AWS, Azure y GCP — Mathyu's Solutions",
      description:
        'Migración a la nube, DevOps y soporte 24/7 en AWS, Azure y GCP. Infraestructura segura, respaldos automáticos y costos controlados. Cotiza con Mathyu’s Solutions.',
      h1: 'Cloud, DevOps y operación en AWS, Azure y GCP',
      intro:
        'Migramos, modernizamos y operamos tu plataforma en la nube (AWS, Azure o GCP) con CI/CD, monitoreo 24/7, respaldos automáticos y costos auditados. Menos sorpresas en producción y tu información siempre segura y accesible.',
    },
    en: {
      slug: 'cloud-devops',
      title: "Cloud & DevOps in Peru | AWS, Azure & GCP — Mathyu's Solutions",
      description:
        'Cloud migration, DevOps and 24/7 operations on AWS, Azure and GCP. Secure infrastructure, backups and controlled costs. Get a quote from Mathyu’s Solutions.',
      h1: 'Cloud, DevOps and operations on AWS, Azure & GCP',
      intro:
        'We migrate, modernize and operate your platform on the cloud (AWS, Azure or GCP) with CI/CD, 24/7 monitoring, automatic backups and audited costs. Fewer surprises in production and your data always safe and reachable.',
    },
  },
];

/** URL of the service page that covers a given homepage tab, for the current language. */
export function servicePageHref(panel: PanelId, lang: Lang): string | undefined {
  const svc = SERVICES.find((s) => s.panels.includes(panel));
  return svc ? `/${lang}/${svc[lang].slug}/` : undefined;
}
