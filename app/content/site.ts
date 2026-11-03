import type { Localized } from "@/lib/i18n";

export interface SocialLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: Localized;
}

export const site = {
  /** Full legal name, used in the About section and the footer. */
  name: "Dodi Dwi Riskianto",
  /** Short name shown in the UI. */
  shortName: "Dodi",
  /** Wordmark used in the footer. */
  brand: "DODI",
  role: {
    id: "Software Engineer & Multimedia Creative",
    en: "Software Engineer & Multimedia Creative",
  } satisfies Localized,
  tagline: {
    id: "Membangun ekosistem digital yang fungsional, dan merancang visual yang berkesan.",
    en: "Building functional digital ecosystems, and designing visuals that stay with you.",
  } satisfies Localized,
  intro: {
    id: "Software engineer dan multimedia creative yang memadukan logika rekayasa perangkat lunak fungsional dengan kepekaan estetika visual yang berkesan.",
    en: "A software engineer and multimedia creative who blends functional software engineering logic with memorable visual aesthetics.",
  } satisfies Localized,
  location: { id: "Indonesia", en: "Indonesia" } satisfies Localized,
  email: "dwidr07@gmail.com",
  phone: "082230862810",
  whatsappUrl: "https://wa.me/6282230862810",
  socials: [
    { label: "WhatsApp", href: "https://wa.me/6282230862810" },
    { label: "GitHub", href: "https://github.com/sayadodi" },
  ] satisfies SocialLink[],
  stats: [
    { value: "12", label: { id: "Proyek", en: "Projects" } },
    { value: "3+", label: { id: "Tahun", en: "Years" } },
    { value: "11", label: { id: "Keahlian", en: "Skills" } },
  ] satisfies Stat[],
} as const;
