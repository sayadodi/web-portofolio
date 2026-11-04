import type { Localized } from "@/lib/i18n";

/**
 * Interface copy. Content that belongs to Dodi lives in the other files in
 * this folder; this file holds labels, headings, and buttons.
 */
export const ui = {
  nav: {
    home: { id: "Beranda", en: "Home" },
    projects: { id: "Proyek", en: "Projects" },
    career: { id: "Karier", en: "Career" },
    certificates: { id: "Sertifikat", en: "Certificates" },
    contact: { id: "Kontak", en: "Contact" },
  },

  chrome: {
    skipToContent: { id: "Lompat ke konten", en: "Skip to content" },
    toggleTheme: { id: "Ganti tema warna", en: "Toggle color theme" },
    toggleLang: { id: "Ganti bahasa", en: "Switch language" },
    openMenu: { id: "Buka menu", en: "Open menu" },
    closeMenu: { id: "Tutup menu", en: "Close menu" },
    home: { id: "Beranda", en: "Home" },
    loading: { id: "Memuat…", en: "Loading…" },
  },

  footer: {
    navigate: { id: "Navigasi", en: "Navigate" },
    elsewhere: { id: "Tautan", en: "Elsewhere" },
    built: { id: "Dibangun dengan React", en: "Built with React" },
  },

  home: {
    badge: { id: "Portofolio pribadi · 2026", en: "Personal portfolio · 2026" },
    photoAlt: { id: "Foto Dodi Dwi Riskianto", en: "Portrait of Dodi Dwi Riskianto" },
    viewWork: { id: "Lihat karya", en: "View work" },
    aboutMe: { id: "Tentang saya", en: "About me" },
    downloadCv: { id: "Lihat & Unduh CV", en: "View & Download CV" },
    toolkit: { id: "Perangkat", en: "Toolkit" },
    workEyebrow: { id: "Karya pilihan", en: "Selected work" },
    workTitleA: { id: "Dari ide", en: "From idea" },
    workTitleB: { id: "jadi nyata.", en: "to real." },
    allProjects: { id: "Semua proyek", en: "All projects" },
    explore: {
      careerEyebrow: { id: "Perjalanan", en: "Journey" },
      careerTitle: { id: "Pengalaman & pendidikan", en: "Experience & education" },
      careerDescription: {
        id: "Rekam jejak kerja, organisasi, dan studi.",
        en: "A record of work, organisations, and study.",
      },
      certificatesEyebrow: { id: "Kredensial & Riset", en: "Credentials & Research" },
      certificatesTitle: { id: "Publikasi & sertifikat", en: "Publications & certificates" },
      certificatesDescription: {
        id: "Publikasi jurnal ilmiah terakreditasi, sertifikasi kompetensi, dan penghargaan.",
        en: "Accredited journal publications, competency certifications, and awards.",
      },
    },
  },

  projects: {
    eyebrow: { id: "Arsip", en: "Archive" },
    unit: { id: "proyek", en: "projects" },
    title: { id: "Karya pilihan.", en: "Selected work." },
    description: {
      id: "Aplikasi web, aplikasi mobile, machine learning, video, dan fotografi — dibangun dari sketsa sampai produksi.",
      en: "Web apps, mobile apps, machine learning, video, and photography — built from sketch to production.",
    },
    filterLabel: { id: "Saring proyek", en: "Filter projects" },
    filterAll: { id: "Semua", en: "All" },
    filterIt: { id: "IT", en: "IT" },
    filterMultimedia: { id: "Multimedia", en: "Multimedia" },
    shown: { id: "proyek ditampilkan", en: "projects shown" },
  },

  career: {
    eyebrow: { id: "Karier", en: "Career" },
    title: { id: "Pengalaman.", en: "Experience." },
    education: { id: "Pendidikan", en: "Education" },
    present: { id: "Sekarang", en: "Now" },
  },

  certificates: {
    eyebrow: { id: "Kredensial & Riset", en: "Credentials & Research" },
    title: { id: "Publikasi, HAKI & Sertifikat.", en: "Publications, IP & Certificates." },
    description: {
      id: "Karya tulis ilmiah pada jurnal terakreditasi, hak cipta resmi Kemenkumham RI, serta sertifikasi kompetensi profesional.",
      en: "Peer-reviewed papers in accredited journals, official copyright registrations from Kemenkumham RI, and professional certifications.",
    },
    publicationsHeading: { id: "Publikasi Jurnal Ilmiah", en: "Scientific Journal Publications" },
    publicationsSubtitle: {
      id: "Riset di bidang Deep Learning, Machine Learning, dan Computer Vision.",
      en: "Research in Deep Learning, Machine Learning, and Computer Vision.",
    },
    hakiHeading: { id: "Hak Kekayaan Intelektual (HAKI)", en: "Intellectual Property & Copyrights" },
    hakiSubtitle: {
      id: "Surat Pencatatan Ciptaan resmi dari Kementerian Hukum dan HAM Republik Indonesia.",
      en: "Official copyright registrations from the Ministry of Law and Human Rights Republic of Indonesia.",
    },
    certificatesHeading: { id: "Sertifikasi & Penghargaan", en: "Certifications & Awards" },
  },

  contact: {
    eyebrow: { id: "Kontak", en: "Contact" },
    title: { id: "Mari terhubung.", en: "Let's connect." },
    description: {
      id: "Terbuka untuk diskusi, berbagi pengalaman, atau sekadar menyapa. Silakan hubungi lewat email atau media sosial.",
      en: "Open to conversations, shared experience, or just saying hello. Reach out by email or social media.",
    },
  },

  project: {
    back: { id: "Proyek", en: "Projects" },
    role: { id: "Peran", en: "Role" },
    year: { id: "Tahun", en: "Year" },
    category: { id: "Kategori", en: "Category" },
    gallery: { id: "Tangkapan layar", en: "Screenshots" },
    categoryIt: { id: "Teknologi Informasi", en: "Information Technology" },
    categoryMultimedia: { id: "Multimedia", en: "Multimedia" },
    notFound: { id: "Proyek tidak ditemukan", en: "Project not found" },
    backToProjects: { id: "Kembali ke daftar proyek", en: "Back to projects" },
  },

  notFound: {
    title: { id: "Halaman tidak ditemukan.", en: "Page not found." },
    description: {
      id: "Halaman yang kamu cari tidak ada, atau sudah dipindahkan.",
      en: "The page you are looking for does not exist, or has moved.",
    },
    backHome: { id: "Kembali ke beranda", en: "Back home" },
  },

  error: {
    title: { id: "Terjadi kesalahan", en: "Something went wrong" },
    details: { id: "Ada masalah tak terduga.", en: "An unexpected error occurred." },
    backHome: { id: "Kembali ke beranda", en: "Back home" },
  },
} satisfies Record<string, unknown>;

/** Small helper for values that use the active language outside React. */
export function pick(value: Localized, lang: "id" | "en"): string {
  return value[lang];
}
