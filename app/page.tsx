import React from 'react'
import { ShieldCheck, MessageCircle, ArrowRight, MapPin, Phone, Clock, BadgeCheck, Building2, ShoppingBag, Zap, HardHat, Award, Cable, Wrench, AirVent, Gauge, Droplets, Flame, ShieldAlert, ChevronRight, ChevronLeft, Quote, Home as HomeIcon, LayoutGrid, BadgeCheck as BadgeCheckIcon, MapPin as MapPinIcon, ShoppingBag as ShoppingBagIcon, MessageCircle as MessageCircleIcon, Truck, Users, Award as AwardIcon, ShieldCheck as ShieldCheckIcon, Factory, Search, Filter, ChevronDown, Users as UsersIcon, FileText, Target, TrendingUp } from 'lucide-react'
import { companyInfo, marketplaces, services, categories } from '@/app/data'
import {
  ImageSlot,
  SectionTitle,
  CategoryGrid,
  StatsStrip,
  BrandPartner,
  StepperProses,
  Testimoni,
  ContactSplit,
  Header,
  Footer,
  FloatingWhatsApp,
} from '@/components/ui'

// Social media icons (inline SVG)
type IconProps = { className?: string }
const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

const InstagramIcon = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} {...svgProps}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const FacebookIcon = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const LinkedInIcon = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} {...svgProps}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

// Service Card Component - DESIGN.md §5.6
function ServiceCard({ title, description, icon: Icon, index }: { title: string; description: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; index: number }) {
  return (
    <article className="service-card">
      <Icon className="service-icon" aria-hidden="true" strokeWidth={1.5} />
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{description}</p>
      <span className="service-link">
        Selengkapnya
        <ArrowRight className="w-4 h-4" strokeWidth={2} />
      </span>
    </article>
  )
}

// Tentang Kami - Legalitas & Visi Misi Component - DESIGN.md §3
function TentangKami() {
  const legalitas = [
    { icon: FileText, title: 'NIB & SIUP', desc: 'NIB: 2509260027047. Nomor Induk Berusaha & Surat Izin Usaha Perdagangan terdaftar resmi.' },
    { icon: ShieldCheckIcon, title: 'SBU / Sertifikat', desc: 'Sertifikat Badan Usaha & tenaga teknis bersertifikat K3, Listrik, KVA' },
    { icon: Target, title: 'Standar Teknis', desc: 'PUIL 2020, IEC 61439, SNI — protokol ketat setiap proyek' },
    { icon: TrendingUp, title: 'Garansi & After-Sales', desc: 'Garansi resmi seluruh produk & jasa, layanan 24/7 emergency' },
  ]

  const visiMisi = [
    { icon: UsersIcon, title: 'Visi', desc: 'Menjadi mitra elektrikal terpercaya nomor satu di Indonesia dengan solusi terintegrasi, berstandar tinggi, dan berkelanjutan.' },
    { icon: Target, title: 'Misi', desc: 'Menyediakan panel, instalasi, dan suplai alat listrik original dengan layanan teknis profesional, aman, dan tepat waktu untuk kepuasan klien.' },
  ]

  return (
    <section id="tentang" className="section-py" style={{ background: 'var(--surface)' }}>
      <div className="container-main">
        <SectionTitle
          eyebrow="TENTANG KAMI"
          title="Solusi Elektrikal Terintegrasi Sejak 2019"
          subtitle="Berdiri sejak 2019, Rizqy Utama Electric hadir sebagai mitra terpercaya untuk sistem kelistrikan yang aman, efisien, dan berstandar tinggi — mulai dari perakitan panel, instalasi, hingga after-sales penuh."
          action={
            <a href="/tentang" className="btn-text">
              Baca Profil Lengkap
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
          }
        />
        <div className="grid-1-2 tentang-block">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px' }}>Legalitas & Keunggulan</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {legalitas.map((item, idx) => (
                <div key={idx} className="info-card">
                  <item.icon className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '0.9375rem' }}>{item.title}</div>
                    <div className="info-card-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <ImageSlot
              src="/images/tentang-workshop.jpg"
              label="Foto: workshop panel"
              aspectRatio="4/3"
              alt="Workshop panel maker Rizqy Utama Electric"
            />
          </div>
        </div>

        {/* Visi & Misi */}
        <div className="grid-1-2 tentang-block">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {visiMisi.map((item, idx) => (
              <div key={idx} className="info-card info-card-lg">
                <div className="info-card-icon">
                  <item.icon className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px' }}>{item.title}</h4>
                  <p className="info-card-desc-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="why-card">
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>Mengapa Rizqy Utama Electric?</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Panel maker LV/MDB/Distribusi custom design',
                'Instalasi listrik industri & komersial turnkey',
                'Maintenance & troubleshooting 24/7',
                'Supplier AC, pompa, water heater, safety, material elektrikal',
                'Kalibrasi alat ukur sertifikat KAN',
                'Marketplace resmi 4 platform besar Indonesia'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.85)' }}>
                  <ShieldCheck className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--orange)' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Layanan() {
  const iconMap: Record<string, React.ComponentType<any>> = { Cpu: require('lucide-react').Cpu, Zap, Wrench }
  return (
    <section id="layanan" className="section-py bg-soft">
      <div className="container-main">
        <div className="section-center">
          <span className="section-eyebrow">LAYANAN KAMI</span>
          <h2 className="section-title">Layanan Utama Kami</h2>
          <p className="section-subtext mx-auto">Dukungan lengkap mulai dari pembuatan panel, instalasi, hingga perawatan sistem kelistrikan.</p>
        </div>
        <div className="grid-1-2-3 mt-10">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Zap
            return <ServiceCard key={service.title} title={service.title} description={service.description} icon={Icon} index={0} />
          })}
        </div>
        <StatsStrip />
      </div>
    </section>
  )
}

export default function Home() {
  const highlights = [
    { icon: Truck, title: 'Pengiriman Cepat', desc: 'Layanan pengiriman ke seluruh Indonesia' },
    { icon: ShieldCheck, title: 'Produk Bergaransi', desc: 'Produk asli dan bergaransi resmi' },
    { icon: Users, title: 'Tim Berpengalaman', desc: 'Teknisi bersertifikat dan profesional' },
    { icon: Phone, title: 'Layanan Responsif', desc: 'Konsultasi dan dukungan pelanggan cepat' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section id="beranda" className="hero-banner">
        <div className="hero-banner-bg">
          <ImageSlot
            src="/images/hero-workshop.jpg"
            label="Foto: proyek panel listrik"
            aspectRatio="16/9"
            alt="Proyek panel listrik Rizqy Utama Electric"
            className="w-full h-full object-cover"
          />
          <div className="hero-banner-overlay" />
        </div>
        <div className="container-main hero-banner-content">
          <div className="hero-banner-copy">
            <span className="hero-kicker">Distributor & Kontraktor Elektrikal Terpercaya</span>
            <h1 className="hero-title">Solusi Panel, Instalasi, dan Perlengkapan Listrik</h1>
            <p className="hero-subtitle">
              Rizqy Utama Electric melayani kebutuhan panel maker, instalasi listrik, AC, pompa, water heater, alat safety, dan material elektrikal untuk proyek industri, komersial, maupun residensial.
            </p>
            <div className="hero-actions">
              <a href={companyInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle className="w-4 h-4" />
                Konsultasi WhatsApp
              </a>
              <a href="#produk" className="btn-secondary-light">Lihat Kategori Produk</a>
            </div>
            <div className="hero-marketplaces">
              {marketplaces.map((mp) => (
                <a key={mp.id} href={mp.url} target="_blank" rel="noopener noreferrer" className="hero-marketplace-chip" aria-label={`Buka toko resmi di ${mp.name}`}>
                  <img src={mp.icon} alt="" className="hero-marketplace-icon" />
                  <span>{mp.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="highlight-strip">
        <div className="container-main highlight-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="highlight-item">
              <item.icon className="highlight-icon" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="brand" className="section-py bg-white">
        <div className="container-main">
          <div className="section-center">
            <span className="section-eyebrow">BRAND KAMI</span>
            <h2 className="section-title">Merek Terpercaya untuk Kebutuhan Anda</h2>
            <p className="section-subtext mx-auto">Kami menghadirkan produk dari brand ternama dengan kualitas terjamin untuk kebutuhan elektrikal, pengukuran, pendingin, dan keselamatan kerja.</p>
          </div>
          <div className="mt-10">
            <BrandPartner />
          </div>
        </div>
      </section>

      <section id="tentang" className="section-py bg-soft">
        <div className="container-main about-split">
          <div className="about-image about-logo-wrap">
            <img src="/logo/circle-logo-rizqyutama.png" alt="Logo Rizqy Utama Electric" className="about-logo-img" />
          </div>
          <div className="about-copy">
            <span className="section-eyebrow">TENTANG KAMI</span>
            <h2 className="section-title">Mitra Terpercaya untuk Solusi Elektrikal dan Peralatan Industri</h2>
            <p className="section-subtext">Rizqy Utama Electric melayani kebutuhan panel listrik, instalasi, maintenance, serta penyediaan perlengkapan elektrikal berkualitas. Kami mengutamakan produk original, pengerjaan rapi, dan dukungan teknis yang responsif untuk setiap proyek.</p>
            <ul className="about-list">
              <li><ShieldCheck className="w-5 h-5 text-accent" /> Produk asli dan bergaransi resmi</li>
              <li><BadgeCheck className="w-5 h-5 text-accent" /> Tim teknis berpengalaman dan bersertifikat</li>
              <li><Wrench className="w-5 h-5 text-accent" /> Layanan instalasi, perawatan, dan konsultasi</li>
              <li><MapPin className="w-5 h-5 text-accent" /> Melayani kebutuhan proyek di berbagai wilayah</li>
            </ul>
            <a href="#kontak" className="btn-primary mt-6 inline-flex">Hubungi Kami <ArrowRight className="w-4 h-4" /></a>
          </div>
        </div>
      </section>

      <Layanan />

      <section id="produk" className="section-py bg-white">
        <div className="container-main">
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">KATEGORI PRODUK</span>
              <h2 className="section-title">Kategori Produk Pilihan</h2>
              <p className="section-subtext">Temukan berbagai kebutuhan alat ukur, AC, pompa, water heater, safety, dan material elektrikal.</p>
            </div>
            <a href="/produk" className="btn-text">Lihat Semua <ArrowRight className="w-4 h-4" /></a>
          </div>
          <CategoryGrid />
        </div>
      </section>

      <section id="proses" className="section-py bg-soft">
        <div className="container-main grid-1-2" style={{ alignItems: 'start' }}>
          <div>
            <span className="section-eyebrow">PROSES KERJA</span>
            <h2 className="section-title">Alur Kerja yang Jelas dan Terstruktur</h2>
            <p className="section-subtext">Setiap proyek ditangani melalui tahapan yang rapi agar hasil sesuai kebutuhan, aman, dan tepat waktu.</p>
            <a href="#kontak" className="btn-primary mt-6 inline-flex">Mulai Konsultasi <ArrowRight className="w-4 h-4" /></a>
          </div>
          <StepperProses />
        </div>
      </section>

      <section id="testimoni" className="section-py bg-white">
        <div className="container-main">
          <div className="section-center">
            <span className="section-eyebrow">TESTIMONI</span>
            <h2 className="section-title">Apa Kata Klien Kami</h2>
            <p className="section-subtext mx-auto">Kepercayaan klien menjadi dasar kami dalam memberikan layanan dan produk terbaik.</p>
          </div>
          <div className="mt-10"><Testimoni /></div>
        </div>
      </section>

      {/* Kontak & Lokasi - ContactSplit component - DESIGN.md §5.13, §5.15 */}
      <ContactSplit />

      {/* Footer - DESIGN.md §5.16 */}
      <Footer />

      {/* Floating WhatsApp - Desktop Only - DESIGN.md §5.17 */}
      <FloatingWhatsApp />
    </div>
  )
}