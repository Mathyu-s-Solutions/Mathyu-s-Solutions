import type { Lang } from '../i18n/utils';
import type { QA } from './faq';

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
  /** Long-tail FAQs shown on the service page; also power FAQPage JSON-LD. */
  faqs: QA[];
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
      faqs: [
        {
          q: '¿Cuánto cuesta una página web en Perú?',
          a: 'Una web institucional arranca desde S/ 2,500 (US$ 1,000 para clientes fuera de Perú) e incluye diseño, desarrollo, hosting y optimización para Google. Una tienda online se cotiza según el catálogo y la pasarela de pago. Te enviamos una propuesta clara en menos de 24 horas hábiles.',
        },
        {
          q: '¿En cuánto tiempo estará lista mi página web?',
          a: 'Una web institucional suele estar lista en 2 a 4 semanas; una tienda online, en 4 a 8. Trabajamos por etapas y te mostramos avances cada semana.',
        },
        {
          q: '¿La página incluye hosting y dominio?',
          a: 'Sí. Incluimos hosting en la nube y te ayudamos a comprar y configurar tu dominio. Además te entregamos un panel para que actualices contenido, precios y productos tú mismo.',
        },
        {
          q: '¿Mi página web aparecerá en Google?',
          a: 'Sí. Entregamos todas nuestras webs optimizadas para buscadores: carga rápida, textos y etiquetas correctos, sitemap y datos estructurados. El posicionamiento luego crece con contenido y reseñas.',
        },
      ],
    },
    en: {
      slug: 'web-development',
      title: "Web development in Peru | Websites & online stores — Mathyu's Solutions",
      description:
        'Website and online store design and development. Fast, SEO-ready sites built to sell. Get a quote from Mathyu’s Solutions, a Lima-based software consultancy.',
      h1: 'Website and online store development',
      intro:
        'We build brand websites and online stores (ecommerce) that load fast, look great on mobile and are optimized to rank on Google. From idea to launch, hosting included and an admin panel so you can update prices and products yourself.',
      faqs: [
        {
          q: 'How much does a website cost?',
          a: 'A brand website starts from US$ 1,000 (S/ 2,500 for clients in Peru) and includes design, development, hosting and SEO groundwork. Online stores are quoted by catalog size and payment gateway. We send a clear proposal within 24 business hours.',
        },
        {
          q: 'How long until my website is live?',
          a: 'A brand website usually ships in 2 to 4 weeks; an online store in 4 to 8. We work in stages and show you progress every week.',
        },
        {
          q: 'Does it include hosting and a domain?',
          a: 'Yes. Cloud hosting is included and we help you buy and set up your domain. You also get an admin panel to update content, prices and products yourself.',
        },
        {
          q: 'Will my website rank on Google?',
          a: 'Yes. Every website we ship is search-engine optimized: fast loading, correct copy and tags, sitemap and structured data. Rankings then grow with content and reviews.',
        },
      ],
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
      faqs: [
        {
          q: '¿Cuánto cuesta hacer una app en Perú?',
          a: 'Depende de las funciones. Un primer producto (MVP) arranca desde S/ 2,500 (US$ 1,000 para clientes fuera de Perú) e incluye diseño, desarrollo y publicación en las tiendas. Cotizamos gratis en menos de 24 horas hábiles.',
        },
        {
          q: '¿Ustedes publican la app en el App Store y Google Play?',
          a: 'Sí. Nos encargamos de todo el proceso de publicación con tu cuenta de desarrollador, incluidas las revisiones de Apple y Google, hasta que la app esté disponible para descargar.',
        },
        {
          q: '¿Me conviene una app nativa o multiplataforma?',
          a: 'Depende del proyecto. Nativa (Swift, Kotlin) da el máximo rendimiento; multiplataforma (React Native, Flutter) permite lanzar en iOS y Android con un solo código y menor costo. Te recomendamos la opción con mejor costo-beneficio para tu caso.',
        },
        {
          q: '¿Qué pasa después del lanzamiento de la app?',
          a: 'Ofrecemos planes de soporte continuo: monitoreo, corrección de errores, actualizaciones por nuevas versiones de iOS y Android, y desarrollo de nuevas funciones.',
        },
      ],
    },
    en: {
      slug: 'mobile-app-development',
      title: "Mobile app development in Peru | iOS & Android — Mathyu's Solutions",
      description:
        'Want to build an app for your business? We design and develop native iOS and Android apps and publish them to the App Store and Google Play.',
      h1: 'Mobile app development for iPhone and Android',
      intro:
        'Want to build an app for your business? We design and develop native and cross-platform apps for iOS and Android — orders, bookings, delivery, loyalty and more — and publish them to the App Store and Google Play with ongoing support.',
      faqs: [
        {
          q: 'How much does it cost to build an app?',
          a: 'It depends on the features. A first product (MVP) starts from US$ 1,000 (S/ 2,500 for clients in Peru) and includes design, development and store publishing. We send a free quote within 24 business hours.',
        },
        {
          q: 'Do you publish the app to the App Store and Google Play?',
          a: 'Yes. We handle the whole publishing process with your developer account, including Apple and Google reviews, until the app is live and downloadable.',
        },
        {
          q: 'Should I build a native or cross-platform app?',
          a: 'It depends on the project. Native (Swift, Kotlin) gives maximum performance; cross-platform (React Native, Flutter) ships on iOS and Android from a single codebase at lower cost. We recommend the best cost-benefit option for your case.',
        },
        {
          q: 'What happens after the app launches?',
          a: 'We offer ongoing support plans: monitoring, bug fixes, updates for new iOS and Android versions, and new feature development.',
        },
      ],
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
      faqs: [
        {
          q: '¿Qué puede hacer un chatbot con IA para mi negocio?',
          a: 'Atender consultas por WhatsApp o tu web las 24 horas, tomar pedidos y reservas, responder con la información de tu propio negocio y derivar la conversación a una persona cuando hace falta.',
        },
        {
          q: '¿El chatbot responde con la información de mi empresa?',
          a: 'Sí. Conectamos la IA a tus documentos, catálogo o base de datos para que responda solo con tu información y dentro de los límites que tú defines.',
        },
        {
          q: '¿Cuánto cuesta un proyecto con inteligencia artificial?',
          a: 'Un chatbot o una automatización inicial arranca desde S/ 2,500 (US$ 1,000 para clientes fuera de Perú), según las integraciones que necesites (WhatsApp, web, CRM, pagos). Te cotizamos gratis en menos de 24 horas hábiles.',
        },
        {
          q: '¿En cuánto tiempo se implementa?',
          a: 'Un chatbot inicial puede estar operativo en 2 a 4 semanas, incluidas las pruebas con tu equipo y los ajustes de tono y respuestas.',
        },
      ],
    },
    en: {
      slug: 'ai-software-development',
      title: "AI software development in Peru | Chatbots & automation — Mathyu's Solutions",
      description:
        'Automate your business with AI: WhatsApp chatbots, 24/7 support, smart search and data analysis. Applied, measurable AI from Mathyu’s Solutions.',
      h1: 'AI software development and automation',
      intro:
        'We bring AI to your business in a practical way: chatbots that serve customers on WhatsApp 24/7, task automation, smart search over your own documents and data analysis. Applied, measurable AI — not hype.',
      faqs: [
        {
          q: 'What can an AI chatbot do for my business?',
          a: 'Answer questions on WhatsApp or your website 24/7, take orders and bookings, reply using your own business information and hand the conversation to a person when needed.',
        },
        {
          q: 'Does the chatbot answer with my company’s information?',
          a: 'Yes. We connect the AI to your documents, catalog or database so it only answers with your information, within limits you define.',
        },
        {
          q: 'How much does an AI project cost?',
          a: 'An initial chatbot or automation starts from US$ 1,000 (S/ 2,500 for clients in Peru), depending on the integrations you need (WhatsApp, web, CRM, payments). We send a free quote within 24 business hours.',
        },
        {
          q: 'How long does it take to implement?',
          a: 'An initial chatbot can be live in 2 to 4 weeks, including testing with your team and tuning of tone and answers.',
        },
      ],
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
      faqs: [
        {
          q: '¿Qué incluye una migración a la nube?',
          a: 'Evaluamos tu plataforma actual, armamos un plan de migración sin cortes de servicio y la configuramos de forma segura en AWS, Azure o GCP, con respaldos automáticos y monitoreo desde el primer día.',
        },
        {
          q: '¿Con qué proveedores de nube trabajan?',
          a: 'Trabajamos con AWS, Azure y Google Cloud. Te recomendamos el que mejor encaje con tu presupuesto, tu región y las herramientas que ya usa tu equipo.',
        },
        {
          q: '¿Pueden reducir mi factura de nube?',
          a: 'Sí. Auditamos tu gasto actual, eliminamos recursos sin uso, ajustamos tamaños y aplicamos planes de ahorro del proveedor para bajar la factura mensual sin afectar el servicio.',
        },
        {
          q: '¿Ofrecen soporte y monitoreo 24/7?',
          a: 'Sí. Nuestros planes de soporte incluyen monitoreo continuo, alertas, respaldos automáticos, actualizaciones de seguridad y atención priorizada ante incidentes.',
        },
      ],
    },
    en: {
      slug: 'cloud-devops',
      title: "Cloud & DevOps in Peru | AWS, Azure & GCP — Mathyu's Solutions",
      description:
        'Cloud migration, DevOps and 24/7 operations on AWS, Azure and GCP. Secure infrastructure, backups and controlled costs. Get a quote from Mathyu’s Solutions.',
      h1: 'Cloud, DevOps and operations on AWS, Azure & GCP',
      intro:
        'We migrate, modernize and operate your platform on the cloud (AWS, Azure or GCP) with CI/CD, 24/7 monitoring, automatic backups and audited costs. Fewer surprises in production and your data always safe and reachable.',
      faqs: [
        {
          q: 'What does a cloud migration include?',
          a: 'We assess your current platform, build a zero-downtime migration plan and set everything up securely on AWS, Azure or GCP, with automatic backups and monitoring from day one.',
        },
        {
          q: 'Which cloud providers do you work with?',
          a: 'We work with AWS, Azure and Google Cloud. We recommend the one that best fits your budget, your region and the tools your team already uses.',
        },
        {
          q: 'Can you reduce my cloud bill?',
          a: 'Yes. We audit your current spend, remove unused resources, right-size workloads and apply provider savings plans to lower the monthly bill without affecting the service.',
        },
        {
          q: 'Do you offer 24/7 support and monitoring?',
          a: 'Yes. Our support plans include continuous monitoring, alerts, automatic backups, security updates and prioritized incident response.',
        },
      ],
    },
  },
];

/** Short label for breadcrumbs, cross-links and nav menus. */
export const SERVICE_SHORT: Record<string, Record<Lang, string>> = {
  web: { es: 'Desarrollo web', en: 'Web development' },
  apps: { es: 'Apps móviles', en: 'Mobile apps' },
  ai: { es: 'Software con IA', en: 'AI software' },
  cloud: { es: 'Cloud y DevOps', en: 'Cloud & DevOps' },
};

/** URL of the service page that covers a given homepage tab, for the current language. */
export function servicePageHref(panel: PanelId, lang: Lang): string | undefined {
  const svc = SERVICES.find((s) => s.panels.includes(panel));
  return svc ? `/${lang}/${svc[lang].slug}/` : undefined;
}
