import type { Localized } from "@/lib/i18n";

export type ProjectCategory = "it" | "multimedia";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: Localized;
  category: ProjectCategory;
  year: string;
  role: Localized;
  summary: Localized;
  stack: string[];
  /** Path under /public. Empty until a real screenshot is supplied. */
  cover: string;
  /** Additional images shown on the project detail page. */
  gallery: string[];
  links: ProjectLink[];
  featured: boolean;
  isPrivate?: boolean;
}

export const projectCategories: {
  id: ProjectCategory | "all";
  label: Localized;
}[] = [
  { id: "all", label: { id: "Semua", en: "All" } },
  { id: "it", label: { id: "IT", en: "IT" } },
  { id: "multimedia", label: { id: "Multimedia", en: "Multimedia" } },
];

export const projects: Project[] = [
  /* ---------------- IT Projects (1) ---------------- */
  {
    slug: "prediksi-risiko-diabetes-xgboost",
    title: { id: "Glucova — Prediksi Risiko Diabetes", en: "Glucova — Diabetes Risk Prediction" },
    category: "it",
    year: "2026",
    role: { id: "Developer & Peneliti", en: "Developer & Researcher" },
    summary: {
      id: "Aplikasi prediksi risiko diabetes berbasis machine learning menggunakan algoritma XGBoost dengan sistem pendukung keputusan interaktif.",
      en: "A machine learning diabetes risk prediction app using the XGBoost algorithm with an interactive decision support system.",
    },
    stack: ["Python", "XGBoost", "Machine Learning", "Web App"],
    cover: "/projects/glucova-cover.webp",
    gallery: [],
    links: [
      {
        label: "Live Demo",
        href: "https://glucova.my.id/",
      },
      {
        label: "Publikasi Jurnal",
        href: "https://doi.org/10.30787/restia.v4i1.2096",
      },
    ],
    featured: true,
  },

  /* ---------------- Multimedia Projects (11) ---------------- */
  {
    slug: "video-profil-pmb-unuja-2026",
    title: {
      id: "Video Profil PMB Universitas Nurul Jadid 2026",
      en: "PMB Profile Video Universitas Nurul Jadid 2026",
    },
    category: "multimedia",
    year: "2026",
    role: { id: "Videografer & Editor", en: "Videographer & Editor" },
    summary: {
      id: "Video profil Penerimaan Mahasiswa Baru (PMB) Universitas Nurul Jadid tahun 2026 dengan pendekatan sinematik drone aerial dan ritme dinamis.",
      en: "New Student Admission (PMB) profile video for Universitas Nurul Jadid 2026, featuring cinematic aerial drone footage and dynamic pacing.",
    },
    stack: ["Videography", "Drone Aerial", "Premiere Pro", "Color Grading"],
    cover: "/projects/pmb-unuja-2026.webp",
    gallery: [],
    links: [
      {
        label: "Instagram Reel",
        href: "https://www.instagram.com/reel/DSeZY3agZBb/",
      },
    ],
    featured: true,
  },
  {
    slug: "video-profil-pmb-unuja-2025",
    title: {
      id: "Video Profil PMB Universitas Nurul Jadid 2025",
      en: "PMB Profile Video Universitas Nurul Jadid 2025",
    },
    category: "multimedia",
    year: "2025",
    role: { id: "Videografer & Editor", en: "Videographer & Editor" },
    summary: {
      id: "Video promosi Penerimaan Mahasiswa Baru Universitas Nurul Jadid tahun 2025 yang menonjolkan lingkungan kampus dan fasilitas akademik terpadu.",
      en: "Promotional video for Universitas Nurul Jadid 2025 admissions, highlighting the vibrant campus atmosphere and integrated academic facilities.",
    },
    stack: ["Videography", "Premiere Pro", "After Effects", "Social Media"],
    cover: "/projects/pmb-unuja-2025.webp",
    gallery: [],
    links: [
      {
        label: "Instagram Reel",
        href: "https://www.instagram.com/reel/DEo0kuRBJLP/",
      },
    ],
    featured: false,
  },
  {
    slug: "pkm-sarana-sdm-yayasan-nurul-amin",
    title: {
      id: "PKM: Pemberdayaan Teknologi Yayasan Nurul Amin",
      en: "PKM: Technology Empowerment at Nurul Amin Foundation",
    },
    category: "multimedia",
    year: "2024",
    role: { id: "Publikasi Media, Videografer & Editor", en: "Media Publication, Videographer & Editor" },
    summary: {
      id: "Dokumentasi Program Pengabdian Kepada Masyarakat (PKM) mengenai pendampingan pemberdayaan sarana dan peningkatan penggunaan teknologi di Yayasan Nurul Amin.",
      en: "Documentation of the Community Service Program (PKM) regarding facility empowerment and technology adoption at Nurul Amin Foundation.",
    },
    stack: ["Videography", "Dokumentasi PKM", "Premiere Pro", "Publikasi Media"],
    cover: "/projects/pkm-nurul-amin.webp",
    gallery: [],
    links: [
      {
        label: "Tonton di YouTube",
        href: "https://youtu.be/VpdqE2Po2ZE",
      },
    ],
    featured: false,
  },
  {
    slug: "pkm-ketahanan-pangan-desa-kalianan",
    title: {
      id: "PKM: Ketahanan Pangan Desa Kalianan Krucil",
      en: "PKM: Food Security Initiative in Kalianan Village",
    },
    category: "multimedia",
    year: "2023",
    role: { id: "Publikasi Media, Videografer & Editor", en: "Media Publication, Videographer & Editor" },
    summary: {
      id: "Video dokumenter pengabdian masyarakat dalam mengoptimalkan ketahanan pangan Desa Kalianan Krucil melalui peningkatan keterampilan olahan berbasis ganyong.",
      en: "Documentary video on optimizing food security in Kalianan Village through processing skills enhancement of canna root (ganyong).",
    },
    stack: ["Videography", "Dokumenter", "Premiere Pro", "Publikasi Media"],
    cover: "/projects/pkm-kalianan.webp",
    gallery: [],
    links: [
      {
        label: "Tonton di YouTube",
        href: "https://youtu.be/EFpwoyk0c04",
      },
    ],
    featured: false,
  },
  {
    slug: "seleksi-smk-pusat-keunggulan-2023",
    title: {
      id: "Seleksi SMK Pusat Keunggulan 2023",
      en: "Center of Excellence Selection 2023 — SMKN 2 Kraksaan",
    },
    category: "multimedia",
    year: "2023",
    role: { id: "Konseptor Video, Videografer & Editor", en: "Video Conceptor, Videographer & Editor" },
    summary: {
      id: "Penyusunan alur konsep visual, sinematografi, dan penyuntingan video presentasi seleksi SMK Pusat Keunggulan 2023 untuk SMK Negeri 2 Kraksaan.",
      en: "Visual concept design, cinematography, and video editing for the 2023 Center of Excellence vocational selection at SMKN 2 Kraksaan.",
    },
    stack: ["Konsep Video", "Videography", "Premiere Pro", "After Effects"],
    cover: "/projects/smk-pk-2023.webp",
    gallery: [],
    links: [
      {
        label: "Tonton di YouTube",
        href: "https://youtu.be/oW6LgGWR_hc",
      },
    ],
    featured: true,
  },
  {
    slug: "smk-pusat-keunggulan-kuliner-smkn-2-kraksaan",
    title: {
      id: "SMK Pusat Keunggulan II Kuliner SMKN 2 Kraksaan",
      en: "Culinary Center of Excellence II SMKN 2 Kraksaan",
    },
    category: "multimedia",
    year: "2024",
    role: { id: "Videografer & Editor", en: "Videographer & Editor" },
    summary: {
      id: "Video profil dan dokumentasi kejuruan kuliner SMKN 2 Kraksaan dalam implementasi program SMK Pusat Keunggulan skema lanjutan.",
      en: "Profile and culinary department showcase for SMKN 2 Kraksaan in the advanced scheme of the Vocational Center of Excellence program.",
    },
    stack: ["Videography", "Food Cinematography", "Premiere Pro", "Color Grading"],
    cover: "/projects/smk-pk-kuliner.webp",
    gallery: [],
    links: [
      {
        label: "Tonton di YouTube",
        href: "https://youtu.be/HsptL67MQZY",
      },
    ],
    featured: false,
  },
  {
    slug: "digital-marketing-notifikasi-umkm",
    title: {
      id: "Digital Marketing Notifikasi untuk Penjualan UMKM",
      en: "Notification-Based Digital Marketing for MSMEs",
    },
    category: "multimedia",
    year: "2025",
    role: { id: "Media Publikasi & Editor", en: "Media Publication & Editor" },
    summary: {
      id: "Video edukasi dan publikasi inovasi strategi digital marketing berbasis notifikasi guna membantu eskalasi omzet dan penjualan pelaku UMKM.",
      en: "Educational and promotional video presenting notification-based digital marketing strategies to help boost sales for small and medium enterprises.",
    },
    stack: ["Video Editing", "Motion Graphics", "Premiere Pro", "Publikasi Media"],
    cover: "/projects/umkm-digital-marketing.webp",
    gallery: [],
    links: [
      {
        label: "Tonton di YouTube",
        href: "https://youtu.be/Im6qxW876fM",
      },
    ],
    featured: false,
  },
  {
    slug: "smart-cctv-monitoring-k3",
    title: {
      id: "SMART CCTV Monitoring APD K3 Berbasis Website",
      en: "Smart CCTV Safety Gear Monitoring for HSE",
    },
    category: "multimedia",
    year: "2024",
    role: { id: "Media Publikasi & Editor", en: "Media Publication & Editor" },
    summary: {
      id: "Video publikasi sistem SMART CCTV berbasis website untuk mendeteksi kelengkapan Alat Pelindung Diri (APD) guna efisiensi monitoring keselamatan kerja K3.",
      en: "Promotional and explainer video showcasing a web-based Smart CCTV system for detecting Personal Protective Equipment (PPE) to improve workplace safety monitoring.",
    },
    stack: ["Video Editing", "Screen Capture", "Voice Over", "Premiere Pro"],
    cover: "/projects/smart-cctv-k3.webp",
    gallery: [],
    links: [
      {
        label: "Tonton di YouTube",
        href: "https://youtu.be/dJrxN1t6oS0",
      },
    ],
    featured: false,
  },
  {
    slug: "video-perpisahan-smkn-2-kraksaan",
    title: {
      id: "Video Perpisahan Angkatan SMKN 2 Kraksaan",
      en: "Graduation Farewell Film — SMKN 2 Kraksaan",
    },
    category: "multimedia",
    year: "2023",
    role: { id: "Videografer & Editor", en: "Videographer & Editor" },
    summary: {
      id: "Dokumentasi sinematik dan film perpisahan angkatan siswa-siswi SMK Negeri 2 Kraksaan. Diproduksi khusus untuk arsip internal angkatan.",
      en: "Cinematic documentation and farewell graduation film for SMKN 2 Kraksaan. Produced exclusively for internal cohort archives.",
    },
    stack: ["Cinematography", "Documentary", "Premiere Pro", "Arsip Privat"],
    cover: "",
    gallery: [],
    links: [],
    featured: false,
    isPrivate: true,
  },
  {
    slug: "video-profil-iss",
    title: {
      id: "Video Profil Korporat ISS",
      en: "ISS Corporate Profile Video",
    },
    category: "multimedia",
    year: "2024",
    role: { id: "Videografer & Editor", en: "Videographer & Editor" },
    summary: {
      id: "Produksi video profil korporat untuk PT ISS yang merangkum standardisasi operasional, fasilitas, dan etos kerja. Distribusi internal privat.",
      en: "Corporate profile video production for PT ISS showcasing operational standards, facilities, and workplace ethics. Distributed internally.",
    },
    stack: ["Corporate Profile", "Videography", "Premiere Pro", "Arsip Privat"],
    cover: "",
    gallery: [],
    links: [],
    featured: false,
    isPrivate: true,
  },
  {
    slug: "video-profil-bank-sampah-pomi",
    title: {
      id: "Video Profil Bank Sampah POMI",
      en: "POMI Waste Bank Profile Video",
    },
    category: "multimedia",
    year: "2024",
    role: { id: "Videografer & Editor", en: "Videographer & Editor" },
    summary: {
      id: "Video profil program kelestarian lingkungan dan tata kelola Bank Sampah di lingkungan PT Paiton Operation & Maintenance Services (POMI). Bersifat internal.",
      en: "Environmental sustainability profile video on waste bank operations at PT Paiton Operation & Maintenance Services (POMI). Produced for internal archive.",
    },
    stack: ["Videography", "CSR & Lingkungan", "Premiere Pro", "Arsip Privat"],
    cover: "",
    gallery: [],
    links: [],
    featured: false,
    isPrivate: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
