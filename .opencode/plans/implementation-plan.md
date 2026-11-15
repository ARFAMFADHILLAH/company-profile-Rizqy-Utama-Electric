# Implementation Plan: Rizqy Utama Electric Company Profile

## Executive Summary

Align current codebase with new **DESIGN.md** (BrightBuild reference, Inter font only, Navy+Orange) and **PRD v4** (5-page company profile, no e-commerce). Current codebase is ~70% aligned.

---

## Phase 1: Foundation & Fonts (Day 1)

### 1.1 Font System - **CRITICAL**
- **layout.tsx**: Remove `Poppins` font entirely (DESIGN.md §3: "Satu keluarga font (Inter)")
- **layout.tsx**: Keep only `Inter` (Regular, Medium, SemiBold, Bold) + `JetBrains_Mono`
- **globals.css**: Remove all `--font-poppins` references and `font-family: var(--font-poppins)` usages
- **Delete**: Poppins font files from `public/fonts/` (Poppins-*.ttf)
- **Verify**: `public/fonts/` has only Inter (4 weights) + JetBrains Mono (2 weights)

### 1.2 Design Tokens Verification
- **globals.css**: Verify all CSS variables match DESIGN.md §2.7 exactly
- **tailwind.config.js**: Ensure color mappings match DESIGN.md §2.8
- Key tokens: `--navy`, `--navy-deep`, `--orange`, `--orange-hover`, `--orange-text`, `--ink`, `--body`, `--muted`, `--border`, `--surface`, `--radius-*`, `--shadow-*`

### 1.3 Data Layer Restructure
Create new lib structure per PRD §5:
- **lib/site.ts**: Site config (name, since, hours, whatsapp, email, marketplaces, workshops)
- **lib/brands.ts**: Brand data with logos (.webp paths), categories, slugs
- **lib/categories.ts**: Category definitions with icons, descriptions, slugs
- **lib/products.ts**: TypeScript interfaces for future use
- **Deprecate**: `app/data.ts` (migrate fully to lib/)

---

## Phase 2: Header & Navigation (Day 1-2)

### 2.1 Top Bar Updates (`Header.tsx`)
- [ ] Add "Toko online sejak September 2019" badge with `BadgeCheck` icon
- [ ] Update phone/email display format per DESIGN.md §5.1
- [ ] Keep social media icons (Facebook, Instagram, LinkedIn)
- [ ] Height: 36px, background: `var(--navy-deep)`

### 2.2 Main Navbar Updates
- [ ] Nav items: **Beranda · Tentang · Produk · Brand · Kontak** (remove "Layanan")
- [ ] Logo + wordmark "Rizqy Utama Electric" + tagline "Kontraktor Elektrikal & Supplier"
- [ ] Active/hover: navy text + 2px orange underline
- [ ] Right side: "Hubungi Kami" (outline navy) + "WhatsApp" (orange, white text)

### 2.3 Marketplace Bar (Verify existing)
- [ ] Position: Below navbar, height 40px, surface background
- [ ] Label "Belanja di:" (muted, 600)
- [ ] 4 chips: Tokopedia, Shopee, TikTok Shop, Blibli
- [ ] Chip style: 28px height, border `--border`, radius 999px, white bg
- [ ] Hover: border navy, bg `navy-50`
- [ ] Hide on scroll down, show on scroll up (already implemented)

### 2.4 Mobile Bottom Navigation (Update items)
- [ ] 5 items: **Beranda · Produk · Brand · Kontak · WhatsApp**
- [ ] Remove "Tentang", "Layanan"
- [ ] WhatsApp item: green circle `#25D366`, white icon, label "WA"
- [ ] Active state: navy text + 3px orange top border
- [ ] Height: `calc(64px + env(safe-area-inset-bottom))`

### 2.5 Mobile Menu Drawer
- [ ] Keep existing structure
- [ ] Add "Marketplace Resmi" section with 4 outlet buttons
- [ ] Remove "Layanan" from nav items

---

## Phase 3: Footer (Day 1)

### 3.1 Footer Structure (5 Columns)
- [ ] **Col 1 (2fr)**: Logo + description + social icons (FB, LinkedIn, IG) - hover orange
- [ ] **Col 2**: Tautan Cepat (Beranda, Tentang, Produk, Brand, Kontak)
- [ ] **Col 3**: Produk (6 categories)
- [ ] **Col 4**: Marketplace (4 platforms) - **NEW COLUMN**
- [ ] **Col 5**: Kontak (2 workshops with icons: MapPin, Phone, Mail, Clock - orange)

### 3.2 Footer Bottom Bar
- [ ] Background: `var(--navy-deep)`
- [ ] Copyright + Privacy Policy, Terms of Service, Sitemap links

---

## Phase 4: Homepage Sections (Day 2-3)

### 4.1 Hero Section (`page.tsx`)
- [ ] **Badge**: "Toko online sejak September 2019" (orange bg, orange-text, BadgeCheck icon)
- [ ] **Headline**: "Energi Andal.\nInstalasi Presisi." (navy, 800 weight, clamp 2.25-3.5rem)
- [ ] **Subheadline**: Panel maker, instalasi listrik industri & komersial, AC, pompa, water heater, alat safety, kalibrasi alat ukur — solusi lengkap dengan standar PUIL, IEC, SNI.
- [ ] **CTA Buttons**: 
  - Primary: "Chat WhatsApp" (orange, white text, MessageCircle + ArrowRight)
  - Secondary: "Lihat Produk" (outline navy)
- [ ] **Marketplace chips**: 4 small chips under CTA (28px, border, orange hover)
- [ ] **Right photo**: 16:9, fade overlay `linear-gradient(90deg, #fff 0%, #fff 38%, rgba(255,255,255,0) 62%)`
- [ ] **Swoosh orange**: Bottom-left corner (SVG, 120px height)

### 4.2 Trust Strip (Below Hero)
- [ ] Background: white, border top/bottom `--border`
- [ ] 4 items in grid: 
  - BadgeCheck: "Sejak 2019"
  - Building2: "2 Workshop (Jakarta & Bekasi)"
  - ShoppingBag: "Marketplace Resmi"
  - Clock: "Melayani 09.00–17.00 WIB"

### 4.3 Tentang Kami Section
- [ ] Background: `var(--surface)`
- [ ] SectionTitle: eyebrow "TENTANG KAMI", title "Solusi Elektrikal Terintegrasi Sejak 2019"
- [ ] Left: 5 feature cards (white card, border, navy icon)
  - NIB & SIUP Terdaftar Resmi
  - Tenaga Teknis Bersertifikat (K3, Listrik, KVA)
  - Standar PUIL 2020, IEC 61439, SNI
  - Garansi Resmi Semua Produk & Jasa
  - Layanan 24/7 untuk Emergency Trouble Shooting
- [ ] Right: Workshop photo (4:3)
- [ ] Action link: "Baca Profil Lengkap" (btn-text)

### 4.4 Layanan Section → **REMOVE**
- [ ] **REMOVE** separate Layanan section (per PRD - no separate Layanan page)
- [ ] Integrate 3 service cards into "Keunggulan" section

### 4.5 Keunggulan (Mengapa Rizqy Utama) + StatsStrip
- [ ] Background: white
- [ ] 3 Service Cards (service-card):
  1. Panel Maker (LV/MDB/Distribusi) - Cable icon
  2. Instalasi Listrik Industri & Komersial - Zap icon
  3. Maintenance & Trouble Shooting - Wrench icon
- [ ] **StatsStrip** (surface bg, 4 cols):
  - Building2: "500+" Proyek Selesai
  - Award: "150+" Klien
  - HardHat: "10+" Tahun Pengalaman
  - ShieldCheck: "50+" Merk Partner
  - Plus sign (+) in orange on numbers

### 4.6 Kategori Produk (6 Categories)
- [ ] Background: `var(--surface)`
- [ ] 6 cards (category-card) with navy top border (3px):
  1. AC (Air Conditioner) - AirVent icon
  2. Alat Ukur - Gauge icon
  3. Pompa - Droplets icon
  4. Water Heater - Flame icon
  5. Alat Safety (K3) - HardHat icon
  6. Material Elektrikal - Cable icon
- [ ] Grid: 3×2 desktop, 2×3 tablet, 1×6 mobile

### 4.7 Brand Partner
- [ ] **Alat Ukur Carousel**: 9 brands (Sanwa, Hioki, SEW, Lutron, Hozan, Goot, Appa, Sanfix, Owon)
  - Auto-scroll ~40s/loop, pause on hover/focus
  - Duplicated brands for seamless loop
  - Scroll-snap, grayscale→color on hover
  - **Logo specs**: .webp, transparent, 96px height (display 48px), max 30KB
- [ ] **Other Categories Grid** (AC, Pompa, Safety, Elektrikal):
  - 72px height cells, border `--border`, radius 10px
  - Logo (color, 32-40px) or fallback text (h4, navy, 600)
  - Hover: border navy-200 + shadow

### 4.8 Marketplace Section
- [ ] Background: `var(--surface)`
- [ ] 4 large chips: "Belanja di Tokopedia" etc. (48px height, shadow, hover shadow)

### 4.9 Workshop Locations (Ringkas)
- [ ] Background: white
- [ ] 2 cards side by side (grid-1-2)
- [ ] Each: surface header (city + address), details (distance, phone, hours)
- [ ] Buttons: "Buka di Google Maps" (navy) + "Chat WhatsApp" (outline)
- [ ] Google Maps embed (16:9, 200px, lazy-load)

### 4.10 CTA WhatsApp Section (Before Footer)
- [ ] Background: navy, orange swoosh top-right
- [ ] Centered: "Butuh Konsultasi Cepat?" + subtext
- [ ] Single button: "Chat WhatsApp Sekarang" (whatsapp green, white text)

### 4.10 ContactSplit (Kontak & Lokasi)
- [ ] **Left (50%)**: Photo 16:9 (technician on site)
- [ ] **Right (50%)**: Form with fields:
  - Row 1: Nama, Email
  - Row 2: WhatsApp, Perusahaan (optional)
  - Textarea: Kebutuhan Anda (4 rows)
  - Submit: "Kirim Pesan" (orange, MessageCircle + ArrowRight)
- [ ] Below form: WhatsApp + Email buttons
- [ ] Below form: Contact cards (2 workshops) + Google Maps embed (Jakarta)

### 4.11 Footer (Verify 5 columns)
- [ ] Update columns per new spec (add Marketplace column)

---

## Phase 5: New Pages - App Router (Day 3-4)

### 5.1 Route Structure
```
/                    → page.tsx (Home)
/tentang             → app/tentang/page.tsx
/produk              → app/produk/page.tsx
/brand               → app/brand/page.tsx
/kontak              → app/kontak/page.tsx
```

### 5.2 Page Content Distribution
- **/tentang**: Move Tentang Kami content here + visi/misi + legalitas
- **/produk**: All 6 categories in one page with anchor navigation (sticky on mobile)
- **/brand**: BrandPartner component full width
- **/kontak**: ContactSplit + WorkshopLocations + Form kontak

---

## Phase 6: Data Layer & Configuration (Day 2)

### 6.1 New Lib Files
- **lib/site.ts**: Site config (name, since, hours, whatsapp, email, marketplaces, workshops)
- **lib/brands.ts**: Brand objects with logo (.webp paths), category, slug
- **lib/categories.ts**: Category definitions with icon, description, slug
- **lib/products.ts**: TypeScript interfaces for future use

### 6.2 JSON-LD Structured Data
- **Organization**: Company info, logo, contact, sameAs
- **LocalBusiness** (2 locations): Jakarta & Bekasi workshops with openingHours
- **Product** (future): For product pages

---

## Phase 7: Components to Create/Update

### New Components
1. **MarketplaceBar.tsx** - Extract from Header.tsx
2. **MobileBottomNav.tsx** - Extract from Header.tsx
3. **MarketplaceSection.tsx** - Large marketplace chips
4. **WorkshopLocations.tsx** - 2 cards with maps
5. **FeaturedProducts.tsx** - Featured products section
6. **TrustStrip.tsx** - Trust strip under hero
7. **StatsStrip.tsx** - 4-column stats strip
8. **StepperProses.tsx** - 5-step horizontal stepper
9. **Testimoni.tsx** - Carousel with orange quote icon
10. **WorkshopLocations.tsx** - Workshop cards + maps
10. **CTAWhatsApp.tsx** - Navy section with WhatsApp button
10. **MarketplaceBar.tsx** - Marketplace bar component
10. **MobileBottomNav.tsx** - Mobile bottom nav component
10. **lib/site.ts, lib/brands.ts, lib/categories.ts**

### Components to Update
1. **Header.tsx** - Update nav items, Top Bar, Mobile Bottom Nav, Marketplace Bar
2. **Footer.tsx** - 5 columns, marketplace column
3. **Hero section** - New badge, tagline, CTA, marketplace chips
4. **TrustStrip** - New 4-item design
5. **KeunggulanGrid** - 3 service cards + StatsStrip
6. **CategoryGrid** - 6 categories with navy top bar
7. **BrandPartner** - Verify 9 brands carousel + 4 grids (update for .webp logos)
8. **ContactSplit** - Update form fields, workshop cards
9. **FloatingWhatsApp** - Verify desktop only (≥1024px)
9. **page.tsx** - Restructure to match new section order
10. **layout.tsx** - Remove Poppins font, update fonts
10. **globals.css** - Remove Poppins references, add missing tokens
10. **CategoryGrid.tsx** - Update for navy top border
10. **BrandPartner.tsx** - Update for .webp logos, 9 brands carousel
10. **BrandLogo.tsx** - Support .webp logos, fallback text

### Components to Remove
- **StatsBanner.tsx** (replace with StatsStrip)
- **SpecAccordion.tsx** (not in new design)
- **IndustryGrid.tsx** (not in new design)
- **TrustStrip.tsx** (replace with new TrustStrip design)
- **KeunggulanGrid.tsx** (replace with new design)
- **DataTable.tsx** (not in new design)

---

## Phase 8: New Pages (App Router)

### 8.1 `/tentang/page.tsx`
- Hero + Tentang Kami content + Visi & Misi + Legalitas

### 8.2 `/produk/page.tsx`
- Anchor navigation (sticky on mobile)
- 6 category sections with foto + deskripsi + chip produk + merk logos + CTA WhatsApp/Marketplace

### 8.3 `/brand/page.tsx`
- BrandPartner component full width

### 8.4 `/kontak/page.tsx`
- ContactSplit + WorkshopLocations + Form kontak

---

## Phase 9: Technical Details & Assets

### 9.1 Fonts
- [ ] Remove Poppins entirely
- [ ] Inter: Regular, Medium, SemiBold, Bold (localFont)
- [ ] JetBrains Mono: Regular, Medium (for specs)
- [ ] All localFont with `display: 'swap'`

### 9.2 Brand Logos (per DESIGN.md §5.20)
- Format: **.webp**, transparent, 96px height (display 48px), max 30KB
- Naming: `public/brands/{slug}.webp` (sanwa.webp, hioki.webp, etc.)
- `next/image` with `width`/`height`, `alt` = brand name
- Fallback: brand name as text if logo missing

### 9.3 Images
- Hero: 16:9, priority, `sizes` prop
- Category cards: 4:3, `object-fit: contain`, surface bg
- Brand logos: SVG/PNG → **convert to .webp**, grayscale→color hover
- Workshop photos: 4:3
- Maps embed: lazy-load, titled iframe

### 9.4 Accessibility
- Focus ring: 2px navy, offset 2px
- Touch targets ≥ 44×44px
- `alt` descriptive (product/project + location)
- `aria-current` on active nav
- `aria-label` on icon-only buttons
- `iframe` title attributes
- `prefers-reduced-motion` respected

### 9.4 SEO
- Metadata per page (title, description, OG)
- `sitemap.xml`, `robots.txt`
- JSON-LD: Organization, LocalBusiness (2 locations), BreadcrumbList

---

## Phase 9: Testing & QA

### 10.1 Lighthouse Targets
- Performance ≥ 85
- SEO ≥ 95
- Accessibility ≥ 90

### 10.2 Cross-browser
- Chrome, Safari, Edge, Firefox (last 2 versions)
- Android 8+, iOS 15+

### 10.3 Functional Testing
- [ ] All WhatsApp links open with correct prefilled message
- [ ] Marketplace links open in new tab
- [ ] Maps embed load correctly
- [ ] Form submits to WhatsApp
- [ ] Carousel pauses on hover
- [ ] Mobile bottom nav works, no content overlap
- [ ] Marketplace bar hide/show on scroll

---

## Dependencies & Assets Needed

### Required Assets (from owner)
- [ ] Logo resmi (SVG/PNG)
- [ ] Foto workshop/tim/produk (4:3, 16:9)
- [ ] 9 logo merk Alat Ukur (warna asli, **.webp transparan**)
- [ ] Logo merk AC, Pompa, Safety, Elektrikal
- [ ] Google Maps embed URLs (2 workshops)
- [ ] Marketplace URLs (Tokopedia, Shopee, TikTok Shop, Blibli)
- [ ] Nomor WhatsApp, telepon, email, sosial media
- [ ] Teks sejarah 2019–sekarang, visi & misi
- [ ] Statistik (jika ditampilkan): tahun, klien, proyek, merk

### Open Questions for Owner
1. **Hari operasional**: Senin–Jumat, Senin–Sabtu, atau setiap hari? Sama untuk kedua workshop?
2. **Statistik**: Ingin ditampilkan? Jika ya, angkanya berapa.
3. **Halaman Proyek/Portofolio & Testimoni**: Perlu dimasukkan ke MVP? (belum di PRD)

---

## Estimated Timeline

| Phase | Duration | Dependencies |
|-------|----------|--------------|
| 1. Foundation & Fonts | 1 day | - |
| 2. Header & Navigation | 1 day | Phase 1 |
| 3. Footer | 0.5 day | Phase 1 |
| 4. Homepage Sections | 2 days | Phase 1, 2, 3 |
| 5. New Pages (App Router) | 1.5 days | Phase 4 |
| 6. Data Layer & SEO | 1 day | Phase 1 |
| 7. Components Create/Update | 1.5 days | Phase 1, 2 |
| 8. New Pages | 1 day | Phase 4, 5 |
| 9. Technical Polish | 1 day | All |
| 10. QA & Launch | 1 day | All |

**Total: ~11-12 working days**

---

## Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Font loading failures | High | Local fonts with `display: swap`, fallback to system-ui |
| Google Fonts blocked | Medium | All fonts local (already done) |
| Map embed not loading | Medium | Lazy-load, fallback static image |
| Carousel performance | Low | `requestAnimationFrame`, pause on hover |
| Mobile bottom nav overlap | High | `padding-bottom: 80px` on main content |
| Form WhatsApp encoding | Medium | Test `encodeURIComponent` on all fields |

---

## Definition of Done

- [ ] All phases complete
- [ ] Lighthouse mobile: Perf ≥ 85, SEO ≥ 95, A11y ≥ 90
- [ ] All pages render without console errors
- [ ] WhatsApp, marketplace, maps links functional
- [ ] Mobile bottom nav works, no content overlap
- [ ] Carousel pauses on hover/focus
- [ ] Focus visible on all interactive elements
- [ ] JSON-LD validates in Google Rich Results Test
- [ ] Owner approves design & content

---

## Notes for Implementation

1. **Work incrementally**: Commit after each phase
2. **Test mobile first**: Majority traffic is mobile
3. **Use existing CSS variables**: Don't hardcode colors
4. **Reuse components**: Extract shared UI to components/ui/
5. **TypeScript strict**: Fix all type errors before commit
6. **Antislop compliance**: No fake data, no em dashes, no AI buzzwords