# MATUR DOKTER – Company Profile Website

Website **company profile** untuk aplikasi **Matur Dokter**, sebuah layanan kesehatan digital yang dikembangkan oleh **Dinas Kesehatan Kabupaten Klaten**.

Website ini berfungsi sebagai media informasi publik untuk menampilkan fitur unggulan, layanan kesehatan, panduan unduh aplikasi, serta kontak dan layanan darurat.

---

## 🔎 Fitur Utama

- Beranda (overview aplikasi)
- Tentang (visi, misi, video pengenalan)
- Fitur Layanan
- Kemitraan
- Download aplikasi
- Kontak
- Emergency Call (119)

---

## 🪄 Teknologi

- React 18
- Vite
- TypeScript
- Tailwind CSS
- Shadcn/ui + Radix UI
- React Router DOM
- React Hook Form
- Recharts
- Lucide React

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

### 📁 Struktur Folder
```
src/
├── assets/ # Static files (images, logos)
├── components/
│ ├── layout/ # Layout components (Navigation, Footer)
│ ├── common/ # Reusable components (PhoneMockup)
│ └── ui/ # Shadcn UI components
├── pages/ # Page components (HomePage, AboutPage, dll)
├── hooks/ # Custom React hooks
├── utils/ # Utility functions
├── constants/ # App constants
├── types/ # TypeScript types
├── styles/ # Global CSS
├── App.tsx # Root component
├── main.tsx # Entry point
└── index.css # Global styles
```

---

## 🗝️ Dependencies

- react ^18.3.1
- react-dom ^18.3.1
- react-router-dom
- @radix-ui/react-*
- tailwindcss
- lucide-react
- react-hook-form
- recharts
- shadcn/ui

---

## 🗒️ Catatan

Project ini merupakan landing page / company profile, bukan aplikasi layanan medis secara langsung.

---

## ✅ Lisensi

Dikembangkan untuk Dinas Kesehatan Kabupaten Klaten.

