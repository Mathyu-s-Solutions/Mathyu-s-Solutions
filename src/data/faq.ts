import type { Lang } from '../i18n/utils';

export interface QA {
  q: string;
  a: string;
}

/**
 * FAQ shown on the homepage. Targets high-intent long-tail queries
 * ("cuánto cuesta una app", etc.) and powers FAQPage structured data.
 */
export const FAQ: Record<Lang, { eyebrow: string; title: string; items: QA[] }> = {
  es: {
    eyebrow: '07 · Preguntas frecuentes',
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Cuánto cuesta hacer una página web o una app en Perú?',
        a: 'Depende del alcance. Un proyecto inicial (una web o una app móvil) arranca desde S/2.5K e incluye diseño, desarrollo, publicación y hosting. Te enviamos una cotización clara en menos de 24 horas hábiles.',
      },
      {
        q: '¿Cuánto tiempo toma desarrollar mi proyecto?',
        a: 'Un proyecto típico se entrega en 4 a 8 semanas. Trabajamos por etapas y te mostramos avances cada semana para que siempre sepas cómo va.',
      },
      {
        q: '¿Desarrollan apps para iPhone y Android?',
        a: 'Sí. Creamos apps nativas (Swift para iOS, Kotlin para Android) y multiplataforma, y las publicamos por ti en la App Store y Google Play.',
      },
      {
        q: '¿Hacen chatbots e integraciones con inteligencia artificial?',
        a: 'Sí. Desarrollamos chatbots para WhatsApp y para tu web, automatizaciones, búsqueda inteligente y análisis de datos, siempre sobre tu propia información.',
      },
      {
        q: '¿Trabajan con clientes fuera de Lima?',
        a: 'Sí. Trabajamos de forma remota con negocios de todo el Perú y de Latinoamérica. Las reuniones son por videollamada.',
      },
      {
        q: '¿Ofrecen mantenimiento y soporte después del lanzamiento?',
        a: 'Sí. Tenemos planes de soporte continuo con monitoreo 24/7, respaldos automáticos, actualizaciones de seguridad y mejoras.',
      },
    ],
  },
  en: {
    eyebrow: '07 · FAQ',
    title: 'Frequently asked questions',
    items: [
      {
        q: 'How much does it cost to build a website or an app in Peru?',
        a: 'It depends on scope. An initial project (a website or a mobile app) starts from S/2.5K and includes design, development, publishing and hosting. We send a clear quote within 24 business hours.',
      },
      {
        q: 'How long does it take to build my project?',
        a: 'A typical project ships in 4 to 8 weeks. We work in stages and show you progress every week so you always know where things stand.',
      },
      {
        q: 'Do you build apps for iPhone and Android?',
        a: 'Yes. We build native apps (Swift for iOS, Kotlin for Android) and cross-platform apps, and we publish them for you on the App Store and Google Play.',
      },
      {
        q: 'Do you build chatbots and AI integrations?',
        a: 'Yes. We build chatbots for WhatsApp and your website, automations, smart search and data analysis — always on top of your own data.',
      },
      {
        q: 'Do you work with clients outside Lima?',
        a: 'Yes. We work remotely with businesses across Peru and Latin America. Meetings happen over video call.',
      },
      {
        q: 'Do you offer maintenance and support after launch?',
        a: 'Yes. We offer ongoing support plans with 24/7 monitoring, automatic backups, security updates and improvements.',
      },
    ],
  },
};
