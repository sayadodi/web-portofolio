# Dodi Dwi Riskianto — Personal Portfolio

> **Software Engineer & Multimedia Creative**  
> Portofolio profesional yang memadukan rekayasa perangkat lunak fungsional dan estetika visual multimedia.

[![React](https://img.shields.io/badge/React-19.3-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React%20Router-v7-f44250?style=flat-square&logo=react-router)](https://reactrouter.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Deployed on Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

---

## 🌟 Fitur Utama (Key Features)

- ⚡ **Pure Static Site Generation (SSG)**: Setiap rute di-prerender menjadi HTML statis saat *build time* (`ssr: false` + `prerender`) untuk performa maksimal dan SEO optimal.
- 🌐 **Bilingual (i18n)**: Dukungan dwibahasa instan antara **Bahasa Indonesia** (`id`) dan **English** (`en`).
- 🌓 **Tema Gelap & Terang (Dark & Light Mode)**: Tema gelap bawaan dengan palet monokrom minimalis modern, lengkap dengan *flash-free inline theme bootstrap*.
- 🛠️ **Interactive Perangkat & Toolkit**: Menampilkan 12 keahlian inti lengkap dengan ikon SVG/badge otentik:
  - *Software Engineering & AI*: Python, Flutter, Laravel, Tailwind CSS, AI Knowledge & Agents, Microsoft Office.
  - *Multimedia Creative*: Videography, Adobe Premiere Pro, Photography, Adobe After Effects, Adobe Lightroom, Adobe Photoshop.
- 📁 **Studi Kasus Proyek**: Katalog 12 proyek unggulan di bidang rekayasa web, integrasi machine learning (Glucova XGBoost), dan videografi profil institusional.
- 📜 **Modal Pratinjau Dokumen & HAKI**: Penampil dokumen resolusi tinggi interaktif di dalam browser untuk sertifikat resmi dan Surat Pencatatan Hak Cipta (HAKI) Kemenkumham dengan dukungan multi-halaman dan unduh berkas PDF asli.
- 📱 **100% Responsif Lintas Perangkat**: Tampilan teruji presisi di Desktop, Laptop, Tablet, hingga Layar Ponsel (Mobile Drawer, touch targets $\ge 44\text{px}$, zero horizontal overflow).
- 💬 **Tautan Cepat Kontak**: Akses langsung ke WhatsApp (+62 822-3086-2810), Email resmi dengan fitur *copy-to-clipboard*, serta repositori GitHub.

---

## 🏗️ Struktur Direktori

```
web-portofolio/
├── app/
│   ├── root.tsx                  # Document shell, HTML head, theme bootstrap & error boundary
│   ├── routes.ts                 # Definisi rute aplikasi
│   ├── app.css                   # Tailwind v4 theme tokens & typography
│   ├── styles/
│   │   └── effects.css           # Dot grid, interactive cursor, scroll reveal, spotlight
│   ├── components/
│   │   ├── chrome/               # Navbar, Footer, Cursor, DotGrid, ThemeToggle, LangToggle
│   │   └── ui/                   # Button, Chip, ProjectCard, SectionHeading, SkillIcon, Reveal
│   ├── content/                  # Seluruh data konten & teks (terpusat)
│   │   ├── site.ts               # Metadata profil, navigasi, media sosial
│   │   ├── about.ts              # Narasi profil & ringkasan fakta
│   │   ├── skills.ts             # Daftar keahlian IT & Multimedia
│   │   ├── projects.ts           # 12 data proyek & studi kasus detail
│   │   ├── career.ts             # Riwayat karier & pendidikan formal (S1 Teknik Informatika)
│   │   ├── certificates.ts       # 5 sertifikat resmi & modal previewer
│   │   ├── haki.ts               # Dokumen Hak Cipta (HAKI) Kemenkumham RI
│   │   └── ui.ts                 # Kamus teks UI dwibahasa (ID/EN)
│   └── pages/                    # Halaman rute
│       ├── home.tsx              # Beranda (Hero, About, Toolkit, Featured Work, Explore)
│       ├── projects.tsx          # Galeri seluruh proyek
│       ├── project-detail.tsx    # Halaman detail proyek dinamis
│       ├── career.tsx            # Linimasa pengalaman & pendidikan
│       ├── certificates.tsx      # HAKI, Sertifikasi, & Publikasi Ilmiah
│       ├── contact.tsx           # Kartu kontak WhatsApp, Email, & GitHub
│       └── not-found.tsx         # Halaman 404
├── public/                       # Aset publik statis (foto, ikon proyek, PDF sertifikat & HAKI)
├── vercel.json                   # Konfigurasi deployment & rewrite SPA fallback untuk Vercel
├── react-router.config.ts        # Konfigurasi pre-rendering rute statis
├── vite.config.ts                # Konfigurasi Vite & Tailwind plugin
└── package.json
```

---

## 🚀 Menjalankan Proyek Secara Lokal

### Prasyarat
- [Node.js](https://nodejs.org/) (versi 18.x atau yang lebih baru)
- npm / pnpm / yarn

### Instalasi & Dev Server

```bash
# 1. Kloning repositori
git clone https://github.com/sayadodi/web-portofolio.git
cd web-portofolio

# 2. Instal dependensi
npm install
# Pada Windows PowerShell jika script diblokir, gunakan:
# npm.cmd install

# 3. Jalankan server pengembangan
npm run dev
# Akses melalui browser di http://localhost:5173
```

---

## 🛠️ Perintah Skrip Tersedia

| Perintah | Deskripsi |
| :--- | :--- |
| `npm run dev` | Menjalankan *development server* lokal dengan HMR (*Hot Module Replacement*). |
| `npm run build` | Menghasilkan bundel produksi statis teroptimasi di dalam direktori `build/client`. |
| `npm run preview` | Menjalankan server lokal untuk melihat hasil *build* produksi. |
| `npm run typecheck` | Menjalankan *type generation* React Router serta pemeriksaan tipe TypeScript (`tsc`). |

---

## ☁️ Deployment ke Vercel

Proyek ini telah dikonfigurasi menggunakan [`vercel.json`](./vercel.json) dengan pengaturan:
- **Output Directory**: `build/client`
- **Clean URLs**: `true`
- **SPA Fallback**: Memetakan rute non-statis ke `/__spa-fallback.html` sehingga *refresh* halaman di rute mana pun tidak akan menghasilkan galat 404.

### Langkah Deploy:
1. Dorong (*push*) repositori ini ke GitHub Anda.
2. Buka dashboard [Vercel](https://vercel.com/) dan pilih **Add New Project**.
3. Hubungkan repositori GitHub Anda.
4. Klik **Deploy** tanpa perlu mengubah pengaturan bawaan.

---

## 👤 Profil & Kontak

**Dodi Dwi Riskianto**  
*S1 Teknik Informatika — Software Engineer & Multimedia Creative*

- 💬 **WhatsApp**: [+62 822-3086-2810](https://wa.me/6282230862810)
- ✉️ **Email**: [dwidr07@gmail.com](mailto:dwidr07@gmail.com)
- 🐙 **GitHub**: [@sayadodi](https://github.com/sayadodi)

---

## 📄 Lisensi

Hak Cipta © 2026 [Dodi Dwi Riskianto](https://github.com/sayadodi). 
