import type { Localized } from "@/lib/i18n";

export interface HakiItem {
  id: string;
  registrationNumber: string;
  applicationNumber: string;
  title: Localized;
  type: Localized;
  issuer: Localized;
  holder: Localized;
  year: string;
  date: string;
  authors: string[];
  protectionPeriod: Localized;
  fileUrl?: string;
  previewImage?: string;
  previewImages?: string[];
}

export const hakiList: HakiItem[] = [
  {
    id: "haki-pkm-kalianan-2023",
    registrationNumber: "000524042",
    applicationNumber: "EC00202391087",
    title: {
      id: "PKM Peningkatan Kemampuan Keterampilan Masyarakat Desa Kalianan Krucil dengan Pemahaman Mutu Umbi Ganyong dalam Rangka Peningkatan Ketahanan Pangan Nasional Menggunakan Metode Advokasi",
      en: "Community Service on Enhancing Public Skills in Kalianan Krucil Village Through Canna Quality Understanding for National Food Security Using Advocacy Methods",
    },
    type: { id: "Poster", en: "Poster" },
    issuer: {
      id: "Kementerian Hukum dan Hak Asasi Manusia (Kemenkumham RI)",
      en: "Ministry of Law and Human Rights Republic of Indonesia",
    },
    holder: {
      id: "Sentra HKI LP3M Universitas Nurul Jadid",
      en: "Intellectual Property Center LP3M Universitas Nurul Jadid",
    },
    year: "2023",
    date: "9 Oktober 2023",
    authors: [
      "M. Syafiih",
      "Moh. Rasidi",
      "Matlubul Khairi",
      "Dodi Dwi Riskianto",
      "Ida Ariska",
      "Sri Indah Rahayu",
      "Sucihati",
    ],
    protectionPeriod: {
      id: "Berlaku selama 50 tahun sejak ciptaan pertama kali diumumkan (UU Hak Cipta No. 28/2014)",
      en: "Valid for 50 years from first publication date (Copyright Law No. 28/2014)",
    },
    fileUrl: "/documents/haki-kemenkumham-000524042.pdf",
    previewImage: "/documents/haki-preview-1.webp",
    previewImages: [
      "/documents/haki-preview-1.webp",
      "/documents/haki-preview-2.webp",
    ],
  },
];
