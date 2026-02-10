# MATUR DOKTER – Company Profile Website

Website **Company Profile MATUR DOKTER** adalah aplikasi web berbasis React yang berfungsi sebagai halaman informasi resmi untuk layanan kesehatan digital *Matur Dokter*.  
Website ini menyajikan informasi fitur layanan, kemitraan, panduan penggunaan, serta akses kontak dan layanan darurat.

Proyek ini bersifat **informasional**, bukan aplikasi medis langsung.

---

## ✨ Fitur & Halaman

Website ini terdiri dari beberapa halaman utama:

- **Home**  
  Halaman utama berisi gambaran umum aplikasi dan layanan Matur Dokter.

- **About**  
  Informasi mengenai latar belakang, tujuan, dan konsep layanan.

- **Features**  
  Menjelaskan fitur-fitur utama seperti:
  - Konsultasi Medis
  - Konsultasi Dokter
  - Homecare
  - Layanan SOS

- **Consultation**  
  Penjelasan alur dan jenis layanan konsultasi yang tersedia.

- **Partnership**  
  Informasi kemitraan dengan institusi kesehatan atau pihak terkait.

- **Download**  
  Panduan dan ajakan untuk mengunduh aplikasi Matur Dokter.

- **Contact**  
  Informasi kontak dan akses layanan darurat (119).

---

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan:

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM

---

## 📁 Struktur Folder

Struktur proyek utama adalah sebagai berikut:
```
src/
├── assets/ # Gambar dan aset statis
├── components/ # Komponen UI (saat ini masih minimal)
├── pages/ # Halaman aplikasi
│ ├── HomePage.tsx
│ ├── AboutPage.tsx
│ ├── FeaturesPage.tsx
│ ├── ConsultationPage.tsx
│ ├── PartnershipPage.tsx
│ ├── DownloadPage.tsx
│ └── ContactPage.tsx
├── styles/
│ └── globals.css
├── App.tsx # Routing dan layout utama
├── main.tsx # Entry point React
├── index.css # Style global
└── vite-env.d.ts
```

---

## 🚀 Cara Menjalankan Proyek

### Instalasi

```bash
git clone <repository-url>
cd company-profile
npm install
npm run dev
```

### Build Production

```bash
npm run build
```

---

## 📦 Dependencies

### Dependencies
- react
- react-dom
- react-router-dom

### Dev Dependencies
- vite
- @vitejs/plugin-react
- typescript
- tailwindcss
- postcss
- autoprefixer
- @types/react
- @types/react-dom

---

## 🗒️ Catatan

- Project ini merupakan landing page / company profile, bukan aplikasi layanan medis secara langsung.
- Tidak ada backend, API, atau database yang terintegrasi pada versi ini.
- Fokus proyek adalah presentasi informasi dan UI.

---

## ✅ Lisensi

Dikembangkan untuk Dinas Kesehatan Kabupaten Klaten.

