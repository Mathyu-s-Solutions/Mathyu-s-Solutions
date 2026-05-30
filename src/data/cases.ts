/**
 * Public case studies shown in the "Cases" section.
 * Descriptions and badges are translated via i18n keys; the rest
 * (name, url, stack tags, illustration) is locale-independent.
 */
export type CaseId = "ciclo" | "parco" | "calarm";

export interface CaseStudy {
  id: CaseId;
  name: string;
  urlLabel: string;
  href: string;
  /** i18n key for the corner badge */
  badgeKey: string;
  /** i18n key for the description paragraph */
  descKey: string;
  tags: string[];
}

export const CASES: CaseStudy[] = [
  {
    id: "ciclo",
    name: "Ciclo",
    urlLabel: "ciclo.com.pe",
    href: "https://ciclo.com.pe/inicio",
    badgeKey: "case.b1",
    descKey: "case.c1p",
    tags: ["Next.js", "React", "AWS", "Web"],
  },
  {
    id: "parco",
    name: "Parco dei Colori",
    urlLabel: "parcodeicolori.it",
    href: "https://www.parcodeicolori.it/en",
    badgeKey: "case.b2",
    descKey: "case.c2p",
    tags: ["Next.js", "Auth", "i18n", "Cloud"],
  },
  {
    id: "calarm",
    name: "Calarm",
    urlLabel: "App Store · iPhone",
    href: "https://apps.apple.com/us/app/calarm-smart-alarms/id6772419323",
    badgeKey: "case.b3",
    descKey: "case.c3p",
    tags: ["Swift", "SwiftUI", "EventKit", "iOS"],
  },
];
