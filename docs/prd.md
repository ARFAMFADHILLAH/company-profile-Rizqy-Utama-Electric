# PRD: Web Company Profile & Online Store Rizqy Utama Electric

> Versi 3. Website company profile + etalase online shop untuk **Rizqy Utama Electric** (aktif berjualan online sejak **September 2019**), dengan **workshop di Jakarta dan Bekasi**. Transaksi dilakukan lewat **marketplace resmi** (Tokopedia, Shopee, TikTok Shop, Blibli) dan **WhatsApp**; website berperan sebagai katalog, pusat kepercayaan, dan pintu masuk ke kanal-kanal tersebut.

## 1. Tujuan

1. Membangun **kredibilitas** toko: profil, sejarah sejak 2019, dua workshop nyata, merk resmi yang dijual.
2. Menyediakan **katalog produk** yang mudah ditelusuri (6 kategori, merk, spesifikasi).
3. **Mengarahkan pembeli ke kanal transaksi** secara langsung: tombol beli ke marketplace resmi per produk dan chat WhatsApp.
4. Memudahkan pembeli **menemukan dan mengunjungi workshop** (alamat, peta, jam operasional).
5. Pengalaman **mobile-first**: sebagian besar pengunjung memakai ponsel.

**Indikator keberhasilan (3 bulan pertama)**
- Klik tombol marketplace + WhatsApp ≥ 8% dari sesi.
- Lighthouse mobile: Performance ≥ 85, SEO ≥ 95, Accessibility ≥ 90.
- Admin dapat menambah 1 produk baru ≤ 5 menit tanpa mengubah kode UI.

## 2. Tech Stack

| Lapisan | Pilihan |
| --- | --- |
| Framework | **Next.js (App Router)**, TypeScript |
| Styling | **Tailwind CSS** (token dari `DESIGN.md`) |
| Ikon | **Lucide React** |
| Bahasa | Indonesia (`lang="id"`); mata uang Rupiah via `Intl.NumberFormat("id-ID")` |
| Data (MVP) | File konfigurasi/JSON di repo **atau** Google Sheets/Airtable (lihat §6) |
| Gambar | `next/image`; logo merk SVG/PNG transparan |
| Peta | Google Maps embed (`<iframe>`, lazy-load) |
| Deploy | Vercel |

## 3. Struktur & Navigasi

### 3.1 Top Bar
- Tinggi 36px, latar navy gelap, tampil di desktop/tablet (disembunyikan di mobile).
- Isi: telepon/WhatsApp · email · **jam operasional: 09.00 – 17.00 WIB** · tautan sosial media (opsional).

### 3.2 Navbar Desktop
- **Baris utama**: Logo · navigasi **Beranda · Tentang · Layanan · Produk · Brand · Kontak** · tombol **WhatsApp**.
- **Marketplace bar** (baris horizontal tipis di bawah/di dalam navbar): chip tautan **Tokopedia · Shopee · TikTok Shop · Blibli** ("Belanja di:"), membuka toko resmi di tab baru (`rel="noopener noreferrer"`).
- Sticky saat scroll; marketplace bar boleh menyusut/menghilang saat scroll turun, muncul lagi saat scroll naik.

### 3.3 Mobile Bottom Navigation (fixed)
Bar tetap di bawah layar (hanya < 1024px), 5 item:

| Item | Ikon (Lucide) | Tujuan |
| --- | --- | --- |
| Beranda | `Home` | `/` |
| Produk | `LayoutGrid` | `/produk` |
| Brand | `BadgeCheck` | `/brand` |
| Kontak | `MapPin` | `/kontak` |
| WhatsApp | `MessageCircle` | Buka `wa.me` (item disorot warna hijau WhatsApp) |

- Tinggi 64px + `env(safe-area-inset-bottom)`; item aktif ditandai warna navy + indikator oranye.
- Konten halaman diberi `padding-bottom` agar tidak tertutup.
- Menu hamburger di header mobile memuat sisa tautan: Tentang, Layanan, dan daftar marketplace.

### 3.4 Floating WhatsApp
- **Desktop/tablet (≥ 1024px)**: tombol bulat mengambang kanan-bawah di semua halaman.
- **Mobile**: tidak ditampilkan terpisah karena sudah ada tombol WhatsApp di bottom navigation (menghindari tumpang tindih).
- Pesan awal menyesuaikan halaman (mis. di detail produk menyertakan nama produk & tautan halaman).

### 3.5 Footer
Logo + deskripsi singkat, tautan cepat, 6 kategori, marketplace, kontak dua workshop, jam operasional, sosial media, hak cipta.

## 4. Halaman & Fitur

| Rute | Halaman |
| --- | --- |
| `/` | Beranda |
| `/tentang` | Tentang Kami |
| `/layanan` | Layanan *(isi perlu dikonfirmasi — lihat §9)* |
| `/produk` | Katalog semua produk |
| `/produk/kategori/[slug]` | Produk per kategori |
| `/produk/[slug]` | Detail produk |
| `/brand` · `/brand/[slug]` | Daftar merk · produk per merk |
| `/kontak` | Kontak & Lokasi Workshop |

### 4.1 Beranda
Urutan: **Hero** → **Kategori Produk** → **Produk Unggulan** → **Brand Partner** → **Mengapa Rizqy Utama (keunggulan)** → **Belanja di Marketplace Resmi** → **Lokasi Workshop (ringkas)** → CTA WhatsApp.

**Hero**
- Eyebrow: *"Toko online sejak September 2019"* (badge dengan ikon `BadgeCheck`).
- Tagline utama + paragraf 1–2 kalimat.
- **CTA utama**: "Chat WhatsApp" (oranye); **CTA sekunder**: "Lihat Produk" (outline navy). Baris kecil ikon marketplace di bawah CTA.
- Strip kepercayaan (4 item): *Sejak 2019 · 2 Workshop (Jakarta & Bekasi) · Marketplace Resmi · Melayani 09.00–17.00 WIB*.

### 4.2 Tentang Kami
- Profil perusahaan, **sejarah singkat sejak 2019** (garis waktu 3–5 titik), informasi operasional (jam kerja, dua lokasi), legalitas (bila ingin ditampilkan), visi & misi.
- Foto workshop/gudang/tim.

### 4.3 Kategori Produk
Enam kategori, masing-masing kartu dengan ikon/foto, deskripsi singkat, dan jumlah produk:
1. **AC** · 2. **Alat Ukur** · 3. **Pompa** · 4. **Water Heater** · 5. **Alat Safety** · 6. **Material Elektrikal**

### 4.4 Katalog Produk
- Grid produk dengan **pencarian** (nama, merk, SKU), **filter** (kategori, merk, ketersediaan; spesifik per kategori bila data ada), dan **urutkan** (Terbaru, Nama A–Z, Harga bila tersedia).
- Filter tersimpan di URL (`?merk=sanwa&kategori=alat-ukur`).
- **Kartu produk**: foto 4:3, nama, merk, 1–2 spesifikasi kunci (font mono), harga (opsional), badge ("Ready", "Baru", "SNI"), dan **tombol beli**:
  - Ikon-ikon marketplace kecil (hanya yang punya tautan) + tombol **WhatsApp**.
- Paginasi atau "Muat lebih banyak" (12 item per halaman).

### 4.5 Detail Produk
- Galeri foto (maks. 6), nama, merk, SKU, kategori, status stok.
- Harga: tampilkan bila ada; jika tidak → **"Cek harga di marketplace / Tanya via WhatsApp"**.
- **Blok "Beli di:"** — tombol per marketplace (Tokopedia, Shopee, TikTok Shop, Blibli) ke halaman produk tersebut; bila tautan spesifik tidak ada, fallback ke halaman toko di marketplace itu.
- Tombol **"Tanya via WhatsApp"** dengan pesan awal berisi nama produk + tautan halaman.
- Tab: **Deskripsi · Spesifikasi (tabel) · Garansi & Pengiriman · Dokumen (datasheet)**.
- Produk terkait (kategori/merk sama), maks. 4.
- JSON-LD `Product` + `BreadcrumbList`.

### 4.6 Brand / Merk Partner

**Alat Ukur** — *carousel logo berwarna asli, tanpa teks*:
Sanwa · Hioki · SEW · Lutron · Hozan · Goot · Appa · Sanfix · Owon

- Logo tampil warna asli (bukan grayscale), tinggi seragam 40–48px, tanpa nama di bawahnya; `alt` tetap berisi nama merk.
- Carousel auto-scroll pelan (marquee) yang **berhenti saat hover/fokus**, bisa digeser di mobile, hormati `prefers-reduced-motion` (jadi statis/scroll manual).
- Klik logo → `/brand/[slug]`.

**AC, Pompa, Alat Safety, Material Elektrikal** — *grid logo/teks bersih*:
- Grid responsif (2 kolom mobile, 4–6 kolom desktop); tiap sel memuat logo bila ada, atau nama merk sebagai teks bila logo tidak tersedia; border tipis, tanpa dekorasi berlebihan.
- Daftar merk untuk empat kategori ini **perlu dilengkapi pemilik** (lihat §9).

Halaman `/brand` mengelompokkan merk per kategori dengan pola di atas; `/brand/[slug]` menampilkan profil singkat + produk merk tersebut.

### 4.7 Kontak & Lokasi Workshop

Dua kartu workshop berdampingan (satu kolom di mobile), masing-masing dengan **Google Maps embed**:

| Workshop | Alamat |
| --- | --- |
| **Workshop Jakarta** | Jl. Glodok Jaya No.3, Mangga Besar, Jakarta |
| **Workshop Bekasi** | Jl. Parpostel No.111, Jatiasih, Bekasi |

Tiap kartu: alamat lengkap, tombol **"Buka di Google Maps"** (arah/rute), telepon/WhatsApp, jam operasional (**09.00 – 17.00 WIB**), dan peta embed 16:9 (`loading="lazy"`).
Di bawahnya: email, tautan marketplace, sosial media, dan form pesan singkat (nama, WhatsApp, kebutuhan → dikirim ke WhatsApp).

### 4.8 Layanan *(menunggu konfirmasi isi)*
Karena "Layanan" ada di navigasi, halaman ini disiapkan sebagai kerangka: daftar layanan yang ditawarkan toko/workshop (mis. kalibrasi/servis alat ukur, instalasi, perbaikan, konsultasi pemilihan produk) dengan CTA WhatsApp. **Isi final menunggu keputusan pemilik** (§9).

## 5. Alur Pembelian

```
Pengunjung → Katalog/Detail → pilih kanal
   ├─ Marketplace resmi (Tokopedia / Shopee / TikTok Shop / Blibli) → checkout di marketplace
   └─ WhatsApp → admin konfirmasi stok, harga, ongkir, pembayaran
```
- Website **tidak memproses pembayaran** pada MVP; keranjang & checkout di website masuk Fase 2 bila dibutuhkan.
- Semua tautan keluar: tab baru, `rel="noopener noreferrer"`, event analitik per kanal.

**Templat pesan WhatsApp (detail produk)**
```
Halo Rizqy Utama Electric, saya tertarik dengan produk:
Nama   : {nama produk}
Merk   : {merk}
Tautan : {url halaman}

Mohon info ketersediaan & harga. Terima kasih.
```

## 6. Data & Konfigurasi

### 6.1 Konfigurasi situs (`lib/site.ts`)
```ts
export const site = {
  name: "Rizqy Utama Electric",
  since: "September 2019",
  hours: "09.00 – 17.00 WIB",
  whatsapp: "62XXXXXXXXXX",           // ← diisi pemilik
  email: "…@…",
  marketplaces: [
    { id: "tokopedia", name: "Tokopedia", url: "…" },
    { id: "shopee", name: "Shopee", url: "…" },
    { id: "tiktokshop", name: "TikTok Shop", url: "…" },
    { id: "blibli", name: "Blibli", url: "…" },
  ],
  workshops: [
    { id: "jakarta", name: "Workshop Jakarta",
      address: "Jl. Glodok Jaya No.3, Mangga Besar, Jakarta",
      phone: "…", mapsEmbed: "…", mapsLink: "…" },
    { id: "bekasi", name: "Workshop Bekasi",
      address: "Jl. Parpostel No.111, Jatiasih, Bekasi",
      phone: "…", mapsEmbed: "…", mapsLink: "…" },
  ],
};
```

### 6.2 Model data
```ts
type Category = "ac" | "alat-ukur" | "pompa" | "water-heater" | "safety" | "material";
type MarketplaceId = "tokopedia" | "shopee" | "tiktokshop" | "blibli";

interface Brand {
  slug: string;
  name: string;
  logo?: string;           // SVG/PNG berwarna asli
  categories: Category[];
}

interface Product {
  id: string;
  slug: string;
  sku?: string;
  name: string;
  category: Category;
  brandSlug: string;
  price?: number | null;    // null/undefined → "Cek harga / Tanya"
  stockStatus?: "ready" | "indent" | "habis";
  images: string[];
  shortSpecs: string[];
  specs: Record<string, string>;
  description: string;      // markdown
  warranty?: string;
  datasheetUrl?: string;
  links?: Partial<Record<MarketplaceId, string>>; // URL produk per marketplace
  badges?: ("baru" | "sni" | "promo")[];
  featured?: boolean;
  createdAt: string;
}
```

### 6.3 Pengelolaan produk
| Opsi | Cocok untuk |
| --- | --- |
| **A. JSON/TS di repo** | < 50 produk, jarang berubah |
| **B. Google Sheets / Airtable** (rekomendasi) | 50–500 produk, admin non-teknis, update rutin; dibaca saat build/ISR |
| **C. CMS/DB (Sanity/Supabase)** | Pertumbuhan jangka panjang, panel admin penuh |

Lapisan data diisolasi di `lib/products.ts` sehingga berpindah opsi tidak mengubah UI.

## 7. Kebutuhan Non-Fungsional

- **Performa**: LCP < 2,5 s di 4G; `next/image` + `sizes`; peta & carousel lazy-load; ISR/SSG untuk halaman produk.
- **SEO**: URL bersih bahasa Indonesia, metadata per halaman, Open Graph, `sitemap.xml`, `robots.txt`; JSON-LD `LocalBusiness` **dua lokasi** (Jakarta & Bekasi, dengan `openingHours`), `Organization`, `Product`, `BreadcrumbList`.
- **Mobile-first**: bottom nav fixed, target sentuh ≥ 44px, tidak ada hover-only interaction.
- **Aksesibilitas**: kontras ≥ 4.5:1, navigasi keyboard, `alt` deskriptif (logo merk memuat nama merk), `aria-current` pada item aktif, `iframe` peta berjudul.
- **Privasi**: tidak menyimpan data pembeli; form kontak hanya meneruskan ke WhatsApp.
- **Analitik**: GA4 dengan event `click_whatsapp`, `click_marketplace` (parameter: platform, produk), `view_item`, `click_maps` (workshop), `search`.
- **Kompatibilitas**: dua versi terakhir Chrome/Safari/Edge/Firefox; Android 8+ dan iOS 15+.

## 8. Kriteria Penerimaan MVP

- [ ] Top bar menampilkan kontak & jam 09.00–17.00 WIB (desktop).
- [ ] Navbar desktop memuat 6 menu, marketplace bar (4 platform), dan tombol WhatsApp; semua tautan benar.
- [ ] Mobile bottom nav tampil tetap di bawah (5 item), tidak menutupi konten, WhatsApp berfungsi.
- [ ] Floating WhatsApp tampil di desktop/tablet dan tidak bertumpuk dengan bottom nav di mobile.
- [ ] Hero menampilkan status "toko online sejak September 2019" dan CTA.
- [ ] 6 kategori produk, katalog dengan pencarian & filter; filter tersimpan di URL.
- [ ] Detail produk memiliki tombol marketplace (per tautan tersedia) dan WhatsApp dengan pesan otomatis.
- [ ] Brand Alat Ukur: carousel 9 logo berwarna asli tanpa teks; kategori lain: grid logo/teks.
- [ ] Kontak menampilkan **dua workshop** dengan alamat, jam, tombol rute, dan Google Maps embed masing-masing.
- [ ] JSON-LD `LocalBusiness` untuk dua lokasi; metadata SEO lengkap.
- [ ] Lighthouse mobile memenuhi target §1.

## 9. Data yang Diperlukan & Pertanyaan Terbuka

**Perlu diserahkan pemilik**
- [ ] Logo resmi (SVG/PNG) dan foto workshop/toko/tim.
- [ ] Nomor WhatsApp, telepon tiap workshop, email, tautan sosial media.
- [ ] URL toko resmi di **Tokopedia, Shopee, TikTok Shop, Blibli**.
- [ ] Logo 9 merk Alat Ukur (warna asli) dan **daftar merk** untuk AC, Pompa, Safety, Elektrikal.
- [ ] Embed/URL Google Maps kedua workshop.
- [ ] Data produk awal (nama, merk, kategori, spesifikasi, foto, tautan marketplace, harga bila ingin ditampilkan).
- [ ] Teks sejarah singkat 2019–sekarang dan legalitas yang boleh ditampilkan.

**Perlu dikonfirmasi**
1. **Halaman Layanan**: apa isinya (servis/kalibrasi, instalasi, konsultasi)? Atau dihapus dari menu?
2. **Hari operasional**: 09.00–17.00 berlaku Senin–Jumat, Senin–Sabtu, atau setiap hari? Apakah kedua workshop sama?
3. **Harga**: ditampilkan di website, atau hanya di marketplace/WhatsApp?
4. **Keranjang & checkout di website**: tidak diperlukan (cukup marketplace + WhatsApp), atau ingin ditambah di Fase 2?
5. **Alat Ukur sebagai kategori unggulan**: apakah ditonjolkan khusus di beranda (karena merk terbanyak)?

## 10. Rencana Rilis

| Tahap | Isi | Perkiraan |
| --- | --- | --- |
| 0 | Kumpulkan data & aset (§9), finalisasi PRD | 2–3 hari |
| 1 | Setup, token desain, top bar, navbar + marketplace bar, bottom nav, footer | 3–4 hari |
| 2 | Beranda, Tentang, Kontak (2 workshop + peta) | 4–5 hari |
| 3 | Katalog, filter, detail produk, tombol marketplace/WhatsApp | 5–7 hari |
| 4 | Brand (carousel + grid), Layanan, SEO, analitik, QA | 3–4 hari |
| 5 | Peluncuran + pemantauan | 1–2 hari |
| Fase 2 | Keranjang/checkout, pembayaran online, CMS admin | Setelah MVP |