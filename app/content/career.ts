import type { Localized } from "@/lib/i18n";

export interface TimelineItem {
  period: Localized;
  title: Localized;
  org: Localized;
  roleType?: Localized;
  detail: Localized;
}

export interface EducationItem {
  period: Localized;
  title: Localized;
  org: Localized;
  detail?: Localized;
}

export const timeline: TimelineItem[] = [
  {
    period: { id: "2024 — 2026", en: "2024 — 2026" },
    title: { id: "VP of Content (Vice President of Content)", en: "VP of Content" },
    org: { id: "PMB Universitas Nurul Jadid", en: "Admissions Office (PMB) Universitas Nurul Jadid" },
    roleType: { id: "Kepemimpinan Kreatif", en: "Creative Leadership" },
    detail: {
      id: "Mengkoordinasikan konsep dan produksi konten media promosi PMB, mengarahkan tim videografer dan editor, serta mengeksekusi video profil resmi PMB 2025 dan 2026.",
      en: "Coordinating creative concepts and media production for university admissions, directing videography and editing workflows, and producing official PMB promotional videos for 2025 and 2026.",
    },
  },
  {
    period: { id: "2022 — Sekarang", en: "2022 — Present" },
    title: { id: "Freelance Software Engineer & Multimedia Creative", en: "Freelance Software Engineer & Multimedia Creative" },
    org: { id: "Mandiri / Freelance", en: "Self-Employed / Freelance" },
    roleType: { id: "Proyek & Klien", en: "Projects & Clients" },
    detail: {
      id: "Membangun solusi digital berbasis web (seperti platform skrining risiko kesehatan Glucova) serta melayani jasa produksi video profil lembaga, sekolah, dan dokumentasi kreatif.",
      en: "Building web-based digital solutions (such as the Glucova health screening platform) alongside producing institutional profile videos and creative documentation.",
    },
  },
  {
    period: { id: "Agustus — September 2025", en: "Aug — Sep 2025" },
    title: { id: "Praktik Kerja Lapangan (PKL) Mahasiswa", en: "Student Field Work Practice (PKL)" },
    org: { id: "SMK Negeri 2 Kraksaan", en: "SMK Negeri 2 Kraksaan" },
    roleType: { id: "Praktik Akademik", en: "Academic Internship" },
    detail: {
      id: "Menyelesaikan program PKL akademik dengan evaluasi predikat Baik, berkontribusi dalam pendampingan teknis laboratorium komputer, dokumentasi media kegiatan, dan administrasi penunjang.",
      en: "Completed academic internship program with a 'Good' evaluation, assisting computer lab technical support, event media documentation, and administrative support.",
    },
  },
  {
    period: { id: "Februari — Juni 2024", en: "Feb — Jun 2024" },
    title: { id: "Peserta Program Kampus Mengajar Angkatan 7", en: "Campus Teaching Program Batch 7 Participant" },
    org: { id: "Kemendikbudristek & LPDP RI", en: "Ministry of Education & LPDP RI" },
    roleType: { id: "Program MBKM", en: "MBKM Program" },
    detail: {
      id: "Berpartisipasi aktif dalam program nasional Kampus Merdeka untuk mendampingi penguatan literasi, numerasi, dan adaptasi pemanfaatan teknologi digital di lingkungan sekolah sasaran.",
      en: "Participated in the national Merdeka Campus program supporting literacy, numeracy, and educational technology adoption in assigned schools.",
    },
  },
  {
    period: { id: "2023", en: "2023" },
    title: { id: "Anggota Tim Media & Publikasi PKM", en: "PKM Media & Publication Team Member" },
    org: { id: "Pengabdian Kepada Masyarakat (PKM) — Yayasan Nurul Amin", en: "Community Service (PKM) — Nurul Amin Foundation" },
    roleType: { id: "Pengabdian Masyarakat", en: "Community Service" },
    detail: {
      id: "Bertindak sebagai anggota publikasi media, videografer, dan editor dalam kegiatan Pengabdian kepada Masyarakat (PKM) di Yayasan Nurul Amin.",
      en: "Served as media publication team member, videographer, and editor for the community service program execution at Nurul Amin Foundation.",
    },
  },
];

export const educationList: EducationItem[] = [
  {
    period: { id: "2021 — 2025", en: "2021 — 2025" },
    title: { id: "S1 Teknik Informatika", en: "Bachelor of Informatics Engineering" },
    org: { id: "Universitas Nurul Jadid", en: "Nurul Jadid University" },
    detail: {
      id: "Fokus pada rekayasa perangkat lunak, sistem cerdas (AI / Machine Learning), dan multimedia digital.",
      en: "Focused on software engineering, artificial intelligence (AI / Machine Learning), and digital multimedia.",
    },
  },
  {
    period: { id: "2019 — 2022", en: "2019 — 2022" },
    title: { id: "Rekayasa Perangkat Lunak (RPL)", en: "Software Engineering (Vocational)" },
    org: { id: "SMK Negeri 2 Kraksaan", en: "SMK Negeri 2 Kraksaan" },
    detail: {
      id: "Mempelajari dasar pemrograman, basis data, dan meraih sertifikasi kompetensi profesi BNSP KKNI Level II Rekayasa Perangkat Lunak.",
      en: "Studied programming fundamentals, databases, and earned national BNSP KKNI Level II professional certification in Software Engineering.",
    },
  },
];

export const education = educationList[0];
