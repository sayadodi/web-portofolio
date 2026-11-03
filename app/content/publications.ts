import type { Localized } from "@/lib/i18n";

export interface Publication {
  title: Localized;
  journal: string;
  volume: string;
  year: string;
  authors: string[];
  role: Localized;
  doi: string;
  url: string;
  tags: string[];
}

export const publications: Publication[] = [
  {
    title: {
      id: "Klasifikasi Penyakit Early Blight dan Late Blight pada Daun Tomat dengan YOLOv8",
      en: "Classification of Early Blight and Late Blight on Tomato Leaves Using YOLOv8",
    },
    journal: "Jurnal Riset Sistem dan Teknologi Informasi (RESTIA)",
    volume: "Vol. 4, No. 2 (2026)",
    year: "2026",
    authors: ["Dodi Dwi Riskianto", "Ahmad Rico Mardiansyah", "Ahmad Supriadi"],
    role: { id: "Penulis Utama", en: "First Author" },
    doi: "10.30787/restia.v4i2.2509",
    url: "https://doi.org/10.30787/restia.v4i2.2509",
    tags: ["YOLOv8", "Deep Learning", "Computer Vision", "Smart Agriculture"],
  },
  {
    title: {
      id: "Analisis dan Prediksi Diabetes Menggunakan Artificial Neural Network dengan Dataset CDC Diabetes Health Indicators",
      en: "Diabetes Analysis and Prediction Using Artificial Neural Networks with the CDC Diabetes Health Indicators Dataset",
    },
    journal: "Jurnal Riset Sistem dan Teknologi Informasi (RESTIA)",
    volume: "Vol. 4, No. 1 (2026)",
    year: "2026",
    authors: ["Dodi Dwi Riskianto", "Muhammad Afandi", "M. Raihan Ramadhan", "Sudriyanto"],
    role: { id: "Penulis Utama", en: "First Author" },
    doi: "10.30787/restia.v4i1.2096",
    url: "https://doi.org/10.30787/restia.v4i1.2096",
    tags: ["Artificial Neural Network", "Machine Learning", "Health Informatics", "CDC Dataset"],
  },
  {
    title: {
      id: "Prediksi Depresi Mahasiswa Menggunakan Algoritma Random Forest Berbasis Data Psikososial",
      en: "Depression Prediction Among University Students Using Random Forest Algorithm Based on Psychosocial Data",
    },
    journal: "Jurnal Riset Sistem dan Teknologi Informasi (RESTIA)",
    volume: "Vol. 4, No. 1 (2026)",
    year: "2026",
    authors: ["Abiyya Alfahrizi Putra Arifiansyah", "Muhammad Afandi", "Dodi Dwi Riskianto", "Sudriyanto"],
    role: { id: "Ko-Penulis", en: "Co-Author" },
    doi: "10.30787/restia.v4i1.2100",
    url: "https://doi.org/10.30787/restia.v4i1.2100",
    tags: ["Random Forest", "Data Mining", "Mental Health", "Predictive Analytics"],
  },
];
