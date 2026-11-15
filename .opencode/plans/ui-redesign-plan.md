# Rancangan Total Rombakan UI - Rizqy Utama Electric

## Analisis Pola AI Slop yang Ditemukan

### 1. Visual & Warna
- [x] **Hero background putih polos** - Tidak ada gradien navy/orange yang khas brand
- [x] **Tidak ada oranye sebagai aksen dominan** - Orange hanya di CTA, tidak sebagai identitas visual
- [x] **Background putih/surface berulang** - Semua section bergantian putih/surface tanpa variasi

### 2. Layout & Komponen
- [x] **Copy-Paste Feature Cards** - Semua kartu produk identik (grid-1-2-6, service-card, product-card)
- [x] **Uniform Section Rhythm** - Semua section pakai `section-py` + `container-main` + `SectionTitle` + grid
- [x] **Uniform Spacing** - Semua section pakai `section-py` (96px/56px)
- [x] **Copy-Paste SectionTitle** - Semua pakai `SectionTitle` dengan eyebrow + h2 + subtitle + action

### 3. Elemen Dekoratif
- [x] **Lucide Icons default** - Semua pakai Lucide tanpa kustomisasi (stroke 1.5/1.75, navy)
- [x] **Emoji sebagai dekorasi** - Badge pakai emoji (📦)
- [x] **Small Arrows on Every Button** - ArrowRight di hampir semua tombol/link
- [x] **Eyebrow Badge** - Di atas setiap heading section
- [x] **Small Arrows on Every Button** - ArrowRight di hampir semua tombol
- [x] **Colored Left Stripe** - Tidak ada, tapi category-card pakai border-top 3px navy (sudah baik)
- [x] **AI Capsule Badges** - Badge pakai pill shape + emoji
- [x] **Eyebrow Badge** - Di atas setiap heading section
- [x] **AI Capsule Badges** - Badge pill shape + emoji + uppercase

### 4. Konten & Copywriting
- [x] **Generic CTAs** - "Lihat Semua Produk", "Chat WhatsApp Sekarang", "Selengkapnya", "Lihat di Marketplace"
- [x] **AI Marketing Buzzwords** - "Solusi Lengkap", "Terpercaya", "Terintegrasi", "Terintegrasi", "Seamless"
- [x] **Fake Statistics** - StatsStrip: "500+", "150+", "10+", "50+" tanpa sumber
- [x] **Fake Testimonials** - Testimoni component data palsu (Budi Santoso, Siti Rahayu, Dedi Prasetyo)
- [x] **Generic CTAs** - "Lihat Semua Produk", "Chat WhatsApp Sekarang", "Selengkapnya", "Lihat di Marketplace"
- [x] **Em Dash (—)** - Tidak ditemukan (sudah baik)
- [x] **AI Marketing Buzzwords** - "Solusi Lengkap", "Terpercaya", "Terintegrasi", "Seamless"

### 5. Struktur & Flow
- [x] **Uniform Section Rhythm** - Semua section: SectionTitle + grid + cards
- [x] **Uniform Section Rhythm** - Semua section pakai pattern yang sama
- [x] **Uniform Section Rhythm** - Rhythm monoton
- [x] **Uniform Section Rhythm** - Tidak ada variasi komposisi

### 6. Ilustrasi & Foto
- [x] **Foto placeholder** - ImageSlot pakai placeholder abu-abu
- [x] **Illustrations With No Connection** - Tidak ada ilustrasi kustom, hanya foto placeholder

### 6. Fungsionalitas
- [x] **Fake Statistics** - StatsStrip tanpa sumber data
- [x] **Fake Testimonials** - Data testimoni palsu
- [x] **Non-Functional Controls** - Form submit tidak kirim ke WhatsApp nyata
- [x] **Happy Path Only Design** - Tidak ada empty/error state form

---

## Rencana Total Rombakan UI

### FASE 1: Fondasi Desain System (Hari 1)

#### 1.1 Design Tokens Baru
```
Warna:
- Navy (#0B2A5B) - Primary brand, heading, nav, footer
- Orange (#F7941D) - HANYA CTA utama, label eyebrow, garis aksen, angka stat
- Navy-hover (#09224A) - Hover state navy
- Orange-hover (#E07B00) - Hover CTA
- Orange-text (#B45F00) - Teks eyebrow/link oranye di putih
- Surface (#F4F7FC) - Section alternating
- White - Kanvas utama
- Border (#E3E8F0) - Border kartu, divider

Typography:
- Font: Inter only (Regular, Medium, SemiBold, Bold)
- JetBrains Mono untuk spesifikasi teknis
- NO POPPINS

Radius:
- sm: 4px (btn, input)
- md: 6px (chip, tooltip)
- lg: 10px (kartu, foto)
- pill: 999px (badge)
- full: 50% (avatar, stepper)

Shadow:
- card: 0 1px 2px rgba(11,42,91,0.04) - SUBTLE
- hover: 0 8px 24px rgba(11,42,91,0.12) - HANYA HOVER
- nav: 0 1px 0 rgba(11,42,91,0.08)
```

#### 1.2 Typography Scale
```
eyebrow: 0.75rem, UPPERCASE, tracking 0.08em, 700, orange-text
display: 3.5rem/56px → 2.25rem mobile, 800, 1.1, navy
h2: 2rem/32px, 700, 1.2, navy
h3: 1.25rem/20px, 700, 1.3, navy
h4: 1rem/16px, 600, 1.4, navy
body-lg: 1.0625rem/17px, 400, 1.65
body: 0.9375rem/15px, 400, 1.65
small: 0.8125rem/13px, 400, 1.5
stat: 2.5rem/40px, 800, 1, navy (+ orange untuk +)
spec: 0.8125rem, 500 mono, 1.4
```

---

### FASE 2: Komponen Baru yang Unik (Hari 1-2)

#### 2.1 Hero Section - REDESIGN TOTAL
**Sebelum:** Putih polos, teks kiri, foto kanan fade
**Sesudah:**
- Background: Navy gradient (90deg navy-deep → rgba(navy,0.92) → rgba(navy,0.2)) + foto proyek kanan full bleed
- Overlay fade putih di sisi teks (linear-gradient 90deg #fff 0% → #fff 38% → transparent 62%)
- Eyebrow: "KONTRAKTOR ELEKTRIKAL · SUPPLIER TERPERCAYA" (orange-text, uppercase, tracking wide)
- Headline: "Energi Andal.\nInstalasi Presisi." (navy, 800, clamp 2.25-3.5rem)
- Subheadline: body-lg, body color, max 3 baris
- CTA: **Primary** "Konsultasi via WhatsApp →" (orange, white text) + **Secondary** "Lihat Layanan" (outline navy)
- **Swoosh orange tipis** (SVG, ±6px) di tepi bawah foto
- Trust strip DI BAWAH hero (4 item: Garansi Resmi, Stok Ready, Pengiriman Nasional, Kalibrasi & Sertifikat)

#### 2.2 Section Heading - REDESIGN
```
EYEBROW (orange-text, 700, uppercase, tracking-wide)
H2 (navy, 700, 2rem)
Sub-paragraf (body, muted, max 2 baris, lebar ±520px)
RATA KIRI
Link aksi ("Lihat Semua →") di kanan sejajar judul
```

#### 2.3 Trust Strip - REDESIGN
- Background: white
- Border top/bottom: 1px solid var(--border)
- 4 item grid: ikon navy 24px + teks ink 500
- Items: "Sejak 2019", "2 Workshop", "Marketplace Resmi", "09.00–17.00 WIB"

---

### FASE 3: Section-by-Section Redesign (Hari 2-3)

#### 3.1 Tentang Kami - REDESIGN
**Layout:** 2 kolom (teks kiri, foto kanan 4:3)
- Eyebrow: "TENTANG KAMI"
- Title: "Solusi Elektrikal Terintegrasi Sejak 2019"
- Subtitle: 2-3 kalimat singkat
- **5 bullet points** dengan icon ShieldCheck navy (bukan card grid):
  1. NIB & SIUP Terdaftar Resmi
  2. Tenaga Teknis Bersertifikat (K3, Listrik, KVA)
  3. Standar PUIL 2020, IEC 61439, SNI
  4. Garansi Resmi Semua Produk & Jasa
  5. Layanan 24/7 untuk Emergency Trouble Shooting
- Foto workshop di kanan (aspect 4:3, object-fit: cover)
- CTA: "Baca Profil Lengkap →" (btn-text) + "Lihat Layanan" (btn-outline-navy)

#### 3.2 Keunggulan (Mengapa Rizqy Utama) - REDESIGN
**Layout:** 3 kartu service + StatsStrip horizontal
**Service Cards (3 kolom):**
- Ikon garis navy 40px (stroke 1.5) di atas
- Judul h4 navy 600
- Deskripsi small body (max 4 baris)
- Link "Selengkapnya →" (navy, hover orange-text)

**StatsStrip (surface bg, 4 kolom, divider vertikal):**
- Ikon navy 40px + angka stat navy (+ oranye) + label muted
- Data: "500+ Proyek", "150+ Klien", "10+ Tahun", "50+ Merk"
- **Angka pakai font stat (2.5rem, 800), + oranye**

#### 3.3 Kategori Produk (6 Kartu) - REDESIGN
**Grid:** 3×2 desktop, 2×3 tablet, 1×1 mobile
**Kartu:**
- Foto 4:3 object-fit:contain di atas surface bg
- **Garis atas 3px NAVY** (bukan warna kategori)
- Nama h4 navy
- Deskripsi small muted (max 3 baris)
- Link "Lihat Produk →" (navy, hover orange-text)
- **SEMUA kategori pakai gaya SAMA** (dibedakan lewat ikon & nama)

#### 3.4 Brand Partner - REDESIGN
**Alat Ukur (Carousel):**
- 9 logo .webp transparan, tinggi 40-48px
- Auto-scroll pelan (±40s/loop), pause hover/fokus
- Di mobile: scroll-snap, bisa digeser
- Grayscale → color on hover
- Pause saat hover/fokus

**Kategori Lain (Grid):**
- Grid responsif (2 kolom mobile, 4-6 kolom desktop)
- Sel: height 72px, putih, border --border, radius 10px
- Logo berwarna (tinggi 32-40px) ATAU teks h4 navy 600
- Hover: border navy-200 + shadow card

#### 3.5 Marketplace Section
- Background: surface
- 4 chip besar: "Belanja di Tokopedia" dll (48px, shadow, hover shadow)
- Ikon marketplace berwarna + nama + ArrowRight

#### 3.6 Proses Kerja (Stepper) - OPSIONAL
- 5 langkah horizontal: Konsultasi → Survei & Desain → Pengerjaan → Uji & Commissioning → Serah Terima
- Garis horizontal 1px navy-200 menghubungkan lingkaran
- Lingkaran 32px navy solid, angka putih 600; hover/active = oranye (angka navy)
- Di bawah: judul h4 tengah + deskripsi small (max 3 baris)

#### 3.6 Testimoni - REDESIGN
- Carousel 3 kartu desktop
- Quote icon oranye 20px kiri atas
- Teks 0.875rem body (max 5 baris)
- Footer: avatar 36px + nama 600 navy + jabatan small muted
- Carousel dots (aktif = navy)
- Carousel pause on hover

#### 3.7 Kontak & Lokasi (Split Form + Foto)
**Kiri (50%):** Foto teknisi ber-APD di lokasi proyek (16:9, full height)
**Kanan (50%):** Form 2 kolom (Nama+Email, WhatsApp+Perusahaan) + Textarea "Kebutuhan Anda" + Tombol "Kirim Pesan →" (orange)
- Di bawah: WhatsApp + Email buttons
- **Di bawah form:** 2 kartu workshop + Google Maps embed (16:9, 320px)

---

### FASE 4: Komponen Baru yang Dibutuhkan

#### Baru (Buat Baru):
1. `TrustStrip.tsx` - Trust strip baru di bawah hero
2. `StatsStrip.tsx` - Stats strip di section keunggulan
3. `MarketplaceSection.tsx` - 4 chip marketplace besar
4. `WorkshopLocations.tsx` - 2 kartu workshop + peta
5. `CTAWhatsApp.tsx` - Section CTA navy sebelum footer
6. `FeaturedProducts.tsx` - 4 produk unggulan dengan badge
7. `lib/site.ts` - Konfigurasi site (whatsapp, email, marketplace, workshop)
9. `lib/brands.ts` - Data brand dengan path .webp
10. `lib/categories.ts` - Definisi 6 kategori + icon + warna
11. `lib/products.ts` - TypeScript interfaces untuk produk

#### Update Components:
1. `HeroSection` (di page.tsx) - Total redesign
2. `SectionTitle.tsx` - Sudah baik, pastikan eyeborow orange-text
3. `KeunggulanGrid.tsx` - 3 service cards + StatsStrip
4. `CategoryGrid.tsx` + `ProductCard.tsx` - 6 kategori dengan navy top bar
4. `BrandPartner.tsx` - Update untuk .webp logos, 9 brand carousel
5. `Footer.tsx` - 5 kolom, navy bg, marketplace column
6. `Header.tsx` - Top bar + Marketplace bar + Mobile bottom nav
7. `Footer.tsx` - Update columns
8. `FloatingWhatsApp.tsx` - Hanya ≥1024px
9. `page.tsx` - Restructure urutan section

---

### CHECKLIST ANTI-SLOP FINAL

#### Visual Identity ✓
- [ ] Navy sebagai struktur, Orange hanya CTA/aksen
- [ ] Inter single font family
- [ ] Radius 4px/10px (bukan pill)
- [ ] Shadow HANYA hover, subtle
- [ ] Swoosh oranye tipis di hero
- [ ] Foto nyata, tidak placeholder

#### Layout & Rhythm ✓
- [ ] Hero unik (navy gradient + foto kanan fade)
- [ ] Trust strip di bawah hero
- [ ] Tentang: 2 kolom teks+foto + 5 bullet
- [ ] Keunggulan: 3 service cards + StatsStrip horizontal
- [ ] Kategori: 6 kartu navy top bar, grid 3×2
- [ ] Brand: Carousel Alat Ukur + Grid 4 kategori
- [ ] Marketplace: 4 chip besar
- [ ] Stepper/Proses (opsional)
- [ ] Testimoni carousel
- [ ] Kontak split + workshop + map
- [ ] CTA WhatsApp navy sebelum footer

#### Components ✓
- [ ] SectionTitle: eyebrow orange-text + h2 navy + subtext left
- [ ] ServiceCard: icon navy 40px + h4 + desc + link navy
- [ ] CategoryCard: foto 4:3 + navy top bar 3px + h4 + desc + link navy
- [ ] ProductCard: foto 4:3 + badge + h4 + meta mono + link
- [ ] BrandLogo: grayscale→color hover, .webp support
- [ ] StatsStrip: surface bg, 4 kolom, icon+navy value+orange + muted label
- [ ] Stepper: garis navy-200 + lingkaran navy→orange hover
- [ ] Testimoni: quote orange, avatar, carousel dots navy
- [ ] ContactSplit: split foto+form, workshop cards, map embed

#### Copywriting ✓
- [ ] NO em dash (—)
- [ ] NO "Solusi Lengkap", "Terpercaya", "Terintegrasi", "Seamless"
- [ ] NO "Get Started", "Learn More", "Explore", "Discover"
- [ ] CTA spesifik: "Konsultasi via WhatsApp", "Hubungi Kami", "Tanya via WhatsApp"
- [ ] Stat dengan sumber/jelas (bukan angka random)
- [ ] Testimoni: data real atau hapus section

#### Technical ✓
- [ ] Font: Inter only (localFont, display: swap)
- [ ] JetBrains Mono untuk spec
- [ ] Poppins DIHAPUS
- [ ] Images: next/image, sizes, priority hero only
- [ ] Brand logos: .webp transparent, 96px height, fallback text
- [ ] next/image dengan sizes, priority hanya hero
- [ ] JSON-LD Organization + LocalBusiness (2 lokasi)
- [ ] Sitemap.xml, robots.txt

---

## IMPLEMENTASI PRIORITAS

### Sprint 1 (Hari 1): Foundation
1. ✅ Update globals.css + tailwind.config.js (design tokens)
2. ✅ Update layout.tsx (hapus Poppins, Inter + JetBrains Mono only)
3. ✅ Buat lib/site.ts, lib/brands.ts, lib/categories.ts
4. ✅ Update Header.tsx (Top Bar, Navbar, Marketplace Bar, Mobile Bottom Nav)
5. ✅ Update Footer.tsx (5 kolom, navy bg)

### Sprint 2 (Hari 2): Homepage Sections
1. Hero Section redesign (page.tsx)
2. TrustStrip.tsx baru
3. Tentang Kami section redesign
3. KeunggulanGrid + StatsStrip baru
4. CategoryGrid + ProductCard update (navy top bar)
4. BrandPartner update (.webp logos, 9 brands carousel)
5. FeaturedProducts.tsx baru
5. MarketplaceSection.tsx baru
6. WorkshopLocations.tsx
7. CTAWhatsApp.tsx
8. ContactSplit update
8. Footer.tsx (5 kolom)
9. FloatingWhatsApp.tsx (≥1024px only)
10. page.tsx restructure

### Sprint 3 (Hari 3): New Pages
1. `/tentang/page.tsx` - Profil + Sejarah + Visi Misi + Legalitas
2. `/produk/page.tsx` - 6 kategori dengan anchor nav + merk + CTA
3. `/brand/page.tsx` - BrandPartner full width
4. `/kontak/page.tsx` - ContactSplit + WorkshopLocations + Form

### Sprint 4 (Hari 4): Data Layer & SEO
1. `lib/products.ts` - TypeScript interfaces
2. JSON-LD Organization + LocalBusiness (2 lokasi) + BreadcrumbList
4. Metadata per halaman + Open Graph
5. `sitemap.xml`, `robots.txt` generation
6. JSON-LD Product (future-ready)

### Sprint 5 (Hari 5): QA & Polish
1. Lighthouse mobile audit
2. Cross-browser testing
4. Accessibility audit (kontras, focus, aria)
5. Mobile bottom nav + floating WhatsApp behavior
6. Carousel pause on hover/focus
7. Form validation + WhatsApp deep link encoding
8. Lazy-load images + maps
9. Prefers-reduced-motion compliance
10. Owner review & approval

---

## ASSET YANG DIBUTUHKAN (DARI PEMILIK)

### Wajib:
- [ ] Logo resmi (SVG/PNG)
- [ ] Foto workshop/tim/produk (4:3, 16:9)
- [ ] 9 logo merk Alat Ukur (.webp transparan, 96px height)
- [ ] Logo merk AC, Pompa, Safety, Elektrikal
- [ ] Google Maps embed URL (2 workshop)
- [ ] Marketplace URLs (Tokopedia, Shopee, TikTok Shop, Blibli)
- [ ] Nomor WhatsApp, telepon, email, sosial media
- [ ] Teks sejarah 2019–sekarang, visi & misi
- [ ] Statistik real (tahun, klien, proyek, merk)

### Pertanyaan untuk Pemilik:
1. **Hari operasional**: Senin–Jumat, Senin–Sabtu, atau setiap hari? Sama untuk kedua workshop?
2. **Statistik**: Ingin ditampilkan? Jika ya, angkanya berapa (real data).
3. **Halaman Proyek/Portofolio & Testimoni**: Perlu dimasukkan ke MVP? (belum di PRD)

---

## DEFINITION OF DONE

- [ ] Lighthouse mobile: Perf ≥ 85, SEO ≥ 95, A11y ≥ 90
- [ ] Semua halaman render tanpa console error
- [ ] WhatsApp, marketplace, maps links functional
- [ ] Mobile bottom nav works, no content overlap
- [ ] Carousel pause on hover/focus
- [ ] Focus visible on all interactive elements
- [ ] JSON-LD validates in Google Rich Results Test
- [ ] Owner approves design & content

---

**Total Estimasi: 5-6 hari kerja**
**Siap eksekusi saat anda approve.**