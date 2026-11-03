import type { Localized } from "@/lib/i18n";

export interface Certificate {
  id: string;
  title: Localized;
  credentialNumber?: string;
  category: Localized;
  issuer: Localized;
  organizer?: Localized;
  year: string;
  date: string;
  recipient: string;
  recipientId?: string;
  description: Localized;
  badge?: Localized;
  fileUrl?: string;
  previewImage?: string;
}

export const certificates: Certificate[] = [
  {
    id: "cert-pkl-unuja-2025",
    title: {
      id: "Praktik Kerja Lapangan (PKL) Mahasiswa",
      en: "University Student Field Work Practice (PKL)",
    },
    credentialNumber: "No. 261 / HMS / V / 2025",
    category: {
      id: "Praktik Industri & Akademik",
      en: "Academic & Industrial Practice",
    },
    issuer: {
      id: "SMK Negeri 2 Kraksaan & Universitas Nurul Jadid",
      en: "SMK Negeri 2 Kraksaan & Nurul Jadid University",
    },
    year: "2025",
    date: "25 September 2025",
    recipient: "Dodi Dwi Riskiyanto",
    recipientId: "NIM: 2221400027",
    badge: { id: "Hasil: BAIK", en: "Grade: GOOD" },
    description: {
      id: "Bukti partisipasi dan apresiasi kontribusi selama masa Praktik Kerja Lapangan (20 Agustus 2025 s.d. 20 September 2025) dengan hasil predikat BAIK.",
      en: "Proof of participation and appreciation for field work practice contribution (20 August 2025 - 20 September 2025) with GOOD grade evaluation.",
    },
    fileUrl: "/certificates/sertifikat-pkl-smkn2-kraksaan-2025.pdf",
    previewImage: "/certificates/sertifikat-pkl-smkn2-kraksaan-2025.webp",
  },
  {
    id: "cert-kampus-mengajar-7-2024",
    title: {
      id: "Program Kampus Mengajar Angkatan 7 Tahun 2024",
      en: "Campus Teaching Program Batch 7 (2024)",
    },
    credentialNumber: "Kemendikbudristek / LPDP",
    category: {
      id: "Program Nasional Kampus Merdeka",
      en: "National Flagship Program",
    },
    issuer: {
      id: "Kemendikbudristek & LPDP RI",
      en: "Ministry of Education & LPDP RI",
    },
    year: "2024",
    date: "26 Juni 2024",
    recipient: "DODI DWI RISKIANTO",
    badge: { id: "Program Flagship MBKM", en: "MBKM Flagship" },
    description: {
      id: "Sertifikat penghargaan kepesertaan Program Kampus Mengajar Angkatan 7 Tahun 2024 yang diselenggarakan oleh Kemendikbudristek dan LPDP pada Februari s.d. Juni 2024 di Yogyakarta.",
      en: "Certificate of participation in Campus Teaching Program Batch 7 organized by the Ministry of Education and LPDP from February to June 2024 in Yogyakarta.",
    },
    fileUrl: "/certificates/sertifikat-kampus-mengajar-7-2024.pdf",
    previewImage: "/certificates/sertifikat-kampus-mengajar-7-2024.webp",
  },
  {
    id: "cert-bnsp-kkni-ii-rpl-2022",
    title: {
      id: "Sertifikat Kompetensi KKNI Level II Rekayasa Perangkat Lunak",
      en: "BNSP Competency Certificate KKNI Level II Software Engineering",
    },
    credentialNumber: "NO. 62010 3511 2 0001150 2022",
    recipientId: "No. Reg: TIK. 739 00079 2022",
    category: {
      id: "Sertifikasi Profesi Nasional (BNSP)",
      en: "National Professional Certification (BNSP)",
    },
    issuer: {
      id: "Badan Nasional Sertifikasi Profesi (BNSP) — LSP SMKN 2 Kraksaan",
      en: "Indonesian Professional Certification Authority (BNSP)",
    },
    year: "2022",
    date: "3 Juni 2022",
    recipient: "DODI DWI RISKIANTO",
    badge: { id: "Kompetensi Nasional (BNSP)", en: "National Competency" },
    description: {
      id: "Dinyatakan kompeten pada bidang pekerjaan Rekayasa Perangkat Lunak (Software Engineering) kualifikasi KKNI Level II dengan registrasi resmi BNSP Republik Indonesia.",
      en: "Certified competent in Software Engineering field under KKNI Level II qualification registered officially with BNSP Republic of Indonesia.",
    },
    fileUrl: "/certificates/sertifikat-bnsp-kkni-ii-rpl-2022.pdf",
    previewImage: "/certificates/sertifikat-bnsp-kkni-ii-rpl-2022.webp",
  },
  {
    id: "cert-lks-it-software-2022",
    title: {
      id: "Lomba Kompetensi Siswa (LKS) Wilker 2 Jawa Timur 2022",
      en: "Student Competence Competition (LKS) Region 2 East Java 2022",
    },
    credentialNumber: "Bidang: IT Software Solutions for Business",
    category: {
      id: "Kompetisi & Kejuaraan IT",
      en: "IT Competition & Championship",
    },
    issuer: {
      id: "MKKS SMKN Wilker 2 & Dinas Pendidikan Provinsi Jawa Timur",
      en: "MKKS SMKN Region 2 & East Java Provincial Education Office",
    },
    year: "2022",
    date: "26 Januari 2022",
    recipient: "DODI DWI RISKIANTO (SMK Negeri 2 Kraksaan)",
    badge: { id: "Peserta Bidang IT Software", en: "IT Software Competitor" },
    description: {
      id: "Peserta Bidang Lomba IT Software Solutions for Business pada kegiatan LKS SMK Tingkat Wilayah Kerja 2 Provinsi Jawa Timur tanggal 24-26 Januari 2022 di Surabaya.",
      en: "Participant in IT Software Solutions for Business at East Java Region 2 Student Competence Competition on 24-26 January 2022 in Surabaya.",
    },
    fileUrl: "/certificates/sertifikat-lks-it-software-solutions-2022.pdf",
    previewImage: "/certificates/sertifikat-lks-it-software-solutions-2022.webp",
  },
  {
    id: "cert-bimtek-k3-pkl-2020",
    title: {
      id: "Bimtek Pelatihan Budaya Industri & K3 Pendukung PKL",
      en: "Technical Guidance on Industrial Culture & OHS (K3)",
    },
    credentialNumber: "No. 420/311/101.6.3.34/2020",
    category: {
      id: "Pelatihan & Keselamatan Kerja (K3)",
      en: "Training & Industrial Safety (K3)",
    },
    issuer: {
      id: "SMK Negeri 2 Kraksaan — Dinas Pendidikan Provinsi Jawa Timur",
      en: "SMK Negeri 2 Kraksaan — East Java Provincial Education Office",
    },
    year: "2020",
    date: "21 Desember 2020",
    recipient: "DODI DWI RISKIANTO (Rekayasa Perangkat Lunak)",
    badge: { id: "Budaya Industri & K3", en: "Industrial Culture & OHS" },
    description: {
      id: "Peserta Bimbingan Teknis, Pelatihan Budaya Industri, dan K3 (Keselamatan dan Kesehatan Kerja) sebagai pendukung Praktik Kerja Lapangan Tahun Ajaran 2020/2021.",
      en: "Participant in Technical Guidance, Industrial Culture Training, and Occupational Safety & Health (K3) supporting Field Work Practice 2020/2021.",
    },
    fileUrl: "/certificates/sertifikat-bimtek-k3-pkl-2020.pdf",
    previewImage: "/certificates/sertifikat-bimtek-k3-pkl-2020.webp",
  },
];
