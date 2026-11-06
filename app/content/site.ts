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
    id: "Software Engineer · Multimedia Creative · IT Support",
    en: "Software Engineer · Multimedia Creative · IT Support",
  } satisfies Localized,
  tagline: {
    id: "Membangun ekosistem digital yang fungsional, andal dalam operasional sistem, dan merancang visual yang berkesan.",
    en: "Building functional digital ecosystems, reliable system operations, and designing memorable visuals.",
  } satisfies Localized,
  intro: {
    id: "Software engineer, praktisi multimedia, dan antusias dukungan teknis (IT Support) yang memadukan logika rekayasa perangkat lunak fungsional dengan ketelitian operasional dan kepekaan visual.",
    en: "A software engineer, multimedia creative, and technical support enthusiast blending functional software engineering with operational precision and visual aesthetics.",
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
    { value: "15+", label: { id: "Keahlian", en: "Skills" } },
  ] satisfies Stat[],
} as const;
