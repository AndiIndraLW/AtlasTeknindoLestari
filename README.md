# PT Atlas Teknindo Lestari - Situs Web Profil Perusahaan

Proyek Next.js (App Router) yang dibangun dengan TypeScript, Tailwind CSS, dan Lucide React icons.

## Struktur Proyek

```
├── src/
│   ├── app/
│   │   ├── about/          # Halaman Tentang Kami
│   │   ├── contact/        # Halaman Kontak
│   │   ├── services/       # Halaman Layanan Kami
│   │   ├── globals.css     # Gaya global & impor Tailwind
│   │   ├── layout.tsx      # Layout utama dengan header & footer
│   │   └── page.tsx        # Halaman Beranda Utama
│   └── components/
│       ├── Navbar.tsx      # Navigasi utama
│       ├── HeroSection.tsx # Seksi Hero utama
│       ├── FleetSection.tsx # Seksi daftar armada
│       ├── WhyChooseUsSection.tsx # Seksi keunggulan perusahaan
│       ├── RentalEstimatorSection.tsx # Seksi kalkulator estimasi sewa
│       ├── FloatingWhatsApp.tsx # Tombol melayang WhatsApp
│       └── Footer.tsx      # Footer situs
├── public/                 # Aset statis (gambar, ikon)
├── package.json            # Dependensi & skrip proyek
├── tailwind.config.ts      # Konfigurasi Tailwind CSS
├── tsconfig.json           # Konfigurasi TypeScript
└── next.config.mjs         # Konfigurasi Next.js
```

## Memulai Proyek

1. Install dependensi:
   ```bash
   npm install
   ```

2. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```

3. Buka [http://localhost:3000](http://localhost:3000) pada peramban Anda.

