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
    menuTitle: { id: "Menu navigasi", en: "Navigation menu" },
    home: { id: "Beranda", en: "Home" },
    loading: { id: "Memuat…", en: "Loading…" },
    viewCv: { id: "Lihat & Unduh CV", en: "View & download CV" },
    closeCv: { id: "Tutup pratinjau CV", en: "Close CV preview" },
    cvTitle: { id: "Curriculum Vitae (CV) — Dodi Dwi Riskianto", en: "Curriculum Vitae — Dodi Dwi Riskianto" },
    cvSubtitle: {
      id: "S1 Teknik Informatika · Software Engineer · Multimedia Creative · IT Support",
      en: "B.Sc. Informatics · Software Engineer · Multimedia Creative · IT Support",
    },
    openNewTab: { id: "Buka tab baru", en: "Open in new tab" },
    downloadPdf: { id: "Unduh PDF", en: "Download PDF" },
    verified: { id: "Terverifikasi", en: "Verified" },
  },

  footer: {
    navigate: { id: "Navigasi", en: "Navigate" },
    elsewhere: { id: "Tautan", en: "Elsewhere" },
    built: { id: "Dibangun dengan React", en: "Built with React" },
    navLabel: { id: "Navigasi footer", en: "Footer navigation" },
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
    description: {
      id: "Pengalaman profesional di bidang teknologi informasi, dukungan teknis operasional (IT Support), kepemimpinan kreatif multimedia, dan kontribusi akademik.",
      en: "Professional experience across information technology, operational technical support (IT Support), creative multimedia leadership, and academic contribution.",
    },
    experienceHeading: {
      id: "Pengalaman Kerja & Organisasi",
      en: "Work & Organisational Experience",
    },
    education: { id: "Pendidikan", en: "Education" },
    educationHeading: { id: "Pendidikan Formal", en: "Formal Education" },
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
    certificatesSubtitle: {
      id: "Sertifikasi kompetensi profesi BNSP, program nasional Kampus Merdeka, kejuaraan IT, dan praktik industri resmi.",
      en: "BNSP professional competency certifications, Kampus Merdeka national programs, IT competitions, and formal industry practice.",
    },
    registrationNumber: { id: "Nomor Pencatatan", en: "Registration number" },
    applicationNumber: { id: "Nomor Permohonan", en: "Application number" },
    copyrightHolder: { id: "Pemegang Hak Cipta", en: "Copyright holder" },
    registeredCreator: { id: "Pencipta Terdaftar", en: "Registered creator" },
    openHakiPreview: {
      id: "Buka pratinjau bukti dokumen HAKI",
      en: "Open HAKI document preview",
    },
    hakiProofAlt: {
      id: "Bukti Dokumen HAKI Kemenkumham RI",
      en: "HAKI document proof, Ministry of Law & Human Rights RI",
    },
    viewProof: { id: "Lihat Bukti", en: "View proof" },
    twoPages: { id: "2 Halaman", en: "2 pages" },
    previewCertificate: { id: "Pratinjau sertifikat", en: "Preview certificate" },
    previewBadge: { id: "Pratinjau", en: "Preview" },
    viewCertificate: { id: "Lihat Sertifikat", en: "View certificate" },
    openOfficialFile: {
      id: "Buka / Unduh File Resmi",
      en: "Open / download official file",
    },
    openOfficialPdf: { id: "Buka Dokumen PDF Resmi", en: "Open official PDF" },
    previewProof: { id: "Pratinjau Bukti", en: "Preview proof" },
    legalNote: {
      id: "Dokumen Sah Kemenkumham RI",
      en: "Official document, Ministry of Law & Human Rights RI",
    },
    previewTitle: { id: "Pratinjau dokumen", en: "Document preview" },
    closePreview: { id: "Tutup pratinjau dokumen", en: "Close document preview" },
    officialVerified: {
      id: "Dokumen Resmi Terverifikasi",
      en: "Verified official document",
    },
    officialDocument: { id: "Dokumen Resmi", en: "Official document" },
    documentNumber: { id: "Nomor", en: "Number" },
    pageLabel: { id: "Halaman", en: "Page" },
    page1Long: { id: "Hal 1: Sertifikat Hak Cipta", en: "Page 1: Copyright certificate" },
    page1Short: { id: "Hal 1: Sertifikat", en: "Page 1: Certificate" },
    page2Long: {
      id: "Hal 2: Lampiran Pencipta (Dodi)",
      en: "Page 2: Author appendix (Dodi)",
    },
    page2Short: { id: "Hal 2: Lampiran", en: "Page 2: Appendix" },
    noteLabel: { id: "Catatan", en: "Note" },
    creatorNote: {
      id: "Pada Halaman 2 (Lampiran Pencipta), nama DODI DWI RISKIANTO tercatat resmi pada nomor urut 4 sebagai Pencipta Ciptaan Poster PKM ini.",
      en: "On page 2 (author appendix), the name DODI DWI RISKIANTO is officially recorded at number 4 as the creator of this PKM poster.",
    },
  },

  contact: {
    eyebrow: { id: "Kontak", en: "Contact" },
    title: { id: "Mari terhubung.", en: "Let's connect." },
    description: {
      id: "Terbuka untuk diskusi pengembangan aplikasi web, produksi multimedia kreatif, kerja sama profesional, atau sekadar bertukar ide.",
      en: "Open to web application projects, creative multimedia production, professional collaboration, or simply exchanging ideas.",
    },
    quickResponse: { id: "Respons Cepat", en: "Fast response" },
    whatsappDescription: {
      id: "Jalur tercepat untuk berdiskusi santai, konsultasi kebutuhan proyek, atau koordinasi langsung via chat.",
      en: "The fastest way to chat about a project, ask a question, or coordinate directly.",
    },
    whatsappCta: { id: "Buka Chat WhatsApp", en: "Open WhatsApp chat" },
    officialEmail: { id: "Email Resmi", en: "Official email" },
    emailDescription: {
      id: "Tersedia untuk pengiriman berkas, proposal resmi, kerja sama formal institusi, dan surat menyurat.",
      en: "Available for documents, formal proposals, institutional collaboration, and correspondence.",
    },
    emailCta: { id: "Kirim Email", en: "Send email" },
    copyEmail: { id: "Salin alamat email", en: "Copy email address" },
    copied: { id: "Email berhasil disalin", en: "Email copied" },
    copyFailed: { id: "Gagal menyalin email", en: "Could not copy email" },
    codeProjects: { id: "Kode & Proyek", en: "Code & projects" },
    githubDescription: {
      id: "Lihat repositori kode sumber, riwayat commit, eksplorasi kecerdasan buatan, dan proyek open source saya.",
      en: "Browse source repositories, commit history, artificial intelligence experiments, and open-source projects.",
    },
    githubCta: { id: "Kunjungi @sayadodi", en: "Visit @sayadodi" },
    quickLinks: { id: "Tautan Cepat Kontak", en: "Quick contact links" },
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
    private: { id: "Privat", en: "Private" },
    visit: { id: "Kunjungi", en: "Visit" },
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
