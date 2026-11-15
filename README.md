<p align="center">
  <img src="public/logo/circle-logo-rizqyutama.png" alt="Rizqy Utama Electric" width="140" />
</p>

<h1 align="center">Rizqy Utama Electric</h1>

<p align="center">
  Website company profile untuk <strong>Rizqy Utama Electric</strong> — kontraktor elektrikal & supplier alat listrik terpercaya.
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" />
  <img alt="React" src="https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3-06b6d4?logo=tailwindcss&logoColor=white" />
</p>

---

## Tentang Proyek

Situs profil perusahaan statis yang menampilkan layanan, produk, brand partner, workshop, testimoni/ulasan, dan informasi kontak Rizqy Utama Electric (Jakarta & Bekasi).

- **Layanan:** Panel Maker, Instalasi Listrik, Maintenance & Troubleshooting
- **Kategori produk:** Alat Ukur, AC, Pompa, Water Heater, Alat Safety, Material Elektrikal
- **Legalitas:** NIB 2509260027047
- **Halaman:** Beranda, Tentang, Produk, Brand, Kontak

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router) — static export (`output: 'export'`)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (ikon)

## Memulai

### Prasyarat

- Node.js 18+ (disarankan 20)
- npm

### Instalasi & Menjalankan

```bash
# install dependensi
npm install

# development server
npm run dev

# build static export (output ke folder out/)
npm run build

# lint
npm run lint
```

Buka [http://localhost:3000](http://localhost:3000) saat mode development.

## Deploy (Cloudflare Pages / Static Hosting)

Proyek dikonfigurasi untuk **static export** (`next.config.mjs`: `output: 'export'`, `images.unoptimized: true`). Hasil build berada di folder `out/`.

Pengaturan Cloudflare Pages:
- **Framework preset:** Next.js (Static HTML Export)
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Environment variable:** `NODE_VERSION` = `18` atau `20`

> Catatan: `next start` tidak digunakan untuk mode static export.

## Struktur Folder

```text
.
├── app/                    # App Router (halaman, layout, komponen, data)
│   ├── brand/              # Halaman brand
│   ├── components/ui/      # Komponen UI (Header, Footer, Hero, Section, dll.)
│   ├── kontak/             # Halaman kontak
│   ├── lib/                # Utilitas/data pendukung app
│   ├── produk/             # Halaman produk
│   ├── tentang/            # Halaman tentang
│   ├── data.ts             # Data perusahaan, layanan, kategori, marketplace
│   ├── globals.css         # Style global
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Beranda
├── docs/                   # Dokumen pendukung (PRD, dll.)
├── lib/                    # Utilitas/data bersama
├── public/                 # Aset statis
│   ├── alatukur/           # Logo/foto brand alat ukur
│   ├── fonts/              # Font lokal
│   ├── images/             # Gambar halaman
│   └── logo/               # Logo perusahaan & marketplace
├── .gitignore
├── eslint.config.mjs
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

Folder `out/` (hasil build) dan `.next/` (cache build) dihasilkan saat proses build dan tidak disertakan dalam repository.

## Skrip

| Perintah | Keterangan |
| --- | --- |
| `npm run dev` | Menjalankan server development |
| `npm run build` | Build dan generate static export ke `out/` |
| `npm run start` | Menjalankan server Next.js (tidak untuk static export) |
| `npm run lint` | Menjalankan linting |

## Keamanan & Catatan

- Konfigurasi lokal/rahasia (mis. `opencode.json`, `.env*`, kunci/sertifikat) diabaikan oleh `.gitignore` dan tidak boleh di-commit.
- Jika kredensial pernah ter-commit, lakukan rotasi kredensial dan bersihkan riwayat git.

## Kontak

**Rizqy Utama Electric**  
Workshop Jakarta & Bekasi  
Telepon/WhatsApp: +62 812-3456-7890  
Email: info@rizqyutamaelectric.com

---

<p align="center">© 2026 Rizqy Utama Electric. All rights reserved.</p>
