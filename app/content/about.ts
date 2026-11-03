import type { Localized } from "@/lib/i18n";

export interface Fact {
  label: Localized;
  value: Localized;
}

export const about = {
  eyebrow: { id: "Tentang", en: "About" } satisfies Localized,
  title: { id: "Logika dan estetika.", en: "Logic and aesthetics." } satisfies Localized,
  lead: {
    id: "Saya bekerja di persimpangan antara software engineering dan seni visual — memadukan rekayasa perangkat lunak dengan kepekaan estetika.",
    en: "I work at the intersection of software engineering and visual arts — pairing engineering logic with aesthetic sensibility.",
  } satisfies Localized,
  paragraphs: [
    {
      id: "Ketertarikan saya pada dunia komputasi dan visual tumbuh bersamaan. Di bidang software engineering, saya fokus pada perancangan sistem berbasis web, integrasi kecerdasan buatan (Machine Learning), dan arsitektur aplikasi yang terstruktur. Di sisi lain, saya menyalurkan kreativitas melalui videografi, penyuntingan video dinamis, dan produksi konten visual.",
      en: "My interest in computing and visual arts grew in tandem. In software engineering, I focus on web-based systems, machine learning integration, and robust application architecture. On the creative side, I channel ideas through videography, dynamic video editing, and visual storytelling.",
    },
    {
      id: "Saya percaya perpaduan logika pemrograman yang solid dan kepekaan estetika visual memungkinkan terciptanya karya yang fungsional, andal, dan berkesan.",
      en: "I believe pairing solid programming logic with visual aesthetic sensitivity allows for creating solutions that are functional, reliable, and memorable.",
    },
  ] satisfies Localized[],
  facts: [
    {
      label: { id: "Nama", en: "Name" },
      value: { id: "Dodi Dwi Riskianto", en: "Dodi Dwi Riskianto" },
    },
    {
      label: { id: "Fokus", en: "Focus" },
      value: { id: "Software Engineering · Multimedia", en: "Software Engineering · Multimedia" },
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
