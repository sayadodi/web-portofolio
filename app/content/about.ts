import type { Localized } from "@/lib/i18n";

export interface Fact {
  label: Localized;
  value: Localized;
}

export const about = {
  eyebrow: { id: "Tentang", en: "About" } satisfies Localized,
  title: { id: "Logika dan estetika.", en: "Logic and aesthetics." } satisfies Localized,
  lead: {
    id: "Saya bekerja di persimpangan antara rekayasa perangkat lunak, dukungan teknis operasional, dan seni visual — memadukan logika komputasi dengan ketelitian sistem dan kepekaan estetika.",
    en: "I work at the intersection of software engineering, operational technical support, and visual arts — pairing computing logic with system reliability and aesthetic sensibility.",
  } satisfies Localized,
  paragraphs: [
    {
      id: "Ketertarikan saya pada dunia komputasi dan visual tumbuh bersamaan. Di bidang software engineering dan dukungan TI (IT Support), saya berfokus pada perancangan sistem berbasis web, penanganan kendala teknis (troubleshooting), pemeliharaan lingkungan kerja perangkat lunak, serta integrasi kecerdasan buatan. Di sisi lain, saya menyalurkan kreativitas melalui videografi, penyuntingan video dinamis, dan produksi konten visual.",
      en: "My interest in computing and visual arts grew in tandem. In software engineering and IT support, I focus on web-based systems, hands-on troubleshooting, software environment maintenance, and machine learning integration. On the creative side, I channel ideas through videography, dynamic video editing, and visual storytelling.",
    },
    {
      id: "Saya percaya bahwa perpaduan logika pemrograman yang solid, kesiapan dukungan teknis yang andal, dan kepekaan estetika visual memungkinkan terciptanya karya dan ekosistem kerja yang fungsional, teratur, dan berkesan.",
      en: "I believe pairing solid programming logic, reliable technical support readiness, and visual aesthetic sensitivity allows for creating solutions and workspaces that are functional, well-organized, and memorable.",
    },
  ] satisfies Localized[],
  facts: [
    {
      label: { id: "Nama", en: "Name" },
      value: { id: "Dodi Dwi Riskianto", en: "Dodi Dwi Riskianto" },
    },
    {
      label: { id: "Fokus", en: "Focus" },
      value: { id: "Software Engineering · Multimedia · IT Support", en: "Software Engineering · Multimedia · IT Support" },
    },
    {
      label: { id: "Pendidikan", en: "Education" },
      value: { id: "S1 Teknik Informatika", en: "Bachelor of Informatics Engineering" },
    },
    {
      label: { id: "Lokasi", en: "Location" },
      value: { id: "Indonesia", en: "Indonesia" },
    },
  ] satisfies Fact[],
} as const;
