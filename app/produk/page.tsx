'use client'

import React, { useState } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { companyInfo } from '@/app/data'
import {
  SectionTitle,
  BrandPartner,
  Header,
  Footer,
  FloatingWhatsApp,
  MarketplaceSection,
} from '@/components/ui'

// Category data for product page with merk logos
const productCategories = [
  {
    slug: 'ac',
    title: 'AC (Air Conditioner)',
    desc: 'AC Split, Cassette, Standing Floor, VRF, Inverter, Spare Part & Freon',
    brands: ['Daikin', 'Panasonic', 'Mitsubishi Electric', 'LG', 'Sharp', 'Gree'],
  },
  {
    slug: 'alat-ukur',
    title: 'Alat Ukur Listrik',
    desc: 'Multimeter, Clamp Meter, Insulation Tester, Earth Tester, Thermometer IR, Pressure Gauge',
    brands: ['Sanwa', 'Hioki', 'SEW', 'Lutron', 'Hozan', 'Goot', 'Appa', 'Sanfix', 'Owon'],
  },
  {
    slug: 'pompa',
    title: 'Pompa Air & Industri',
    desc: 'Pompa Celup, Jet Pump, Booster, Transfer, Submersible, Pompa Industri',
    brands: ['Grundfos', 'Ebara', 'Shimizu', 'Tsurumi', 'KSB'],
  },
  {
    slug: 'water-heater',
    title: 'Water Heater',
    desc: 'Pemanas Air Elektrik, Solar Water Heater, Gas Water Heater',
    brands: ['Ariston', 'Rheem', 'A.O. Smith', 'Ferroli'],
  },
  {
    slug: 'safety',
    title: 'Alat Safety (K3)',
    desc: 'Helm, Sepatu Safety, Sarung Tangan, Safety Harness, APAR, Masker & Kacamata',
    brands: ['3M', 'Honeywell', 'Krisbow', "King's", 'Dräger', 'MSA'],
  },
  {
    slug: 'material-elektrikal',
    title: 'Material Elektrikal',
    desc: 'Kabel (NYM, NYY, NYYHY), MCB, MCCB, Contactor, Trafo, Box Panel, Aksesoris',
    brands: ['Schneider Electric', 'ABB', 'Siemens', 'Legrand', 'Mitsubishi Electric', 'Panasonic'],
  },
]

export default function ProdukPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Category Navigation Anchor (Desktop) */}
      <nav className="hidden md:sticky top-[108px] z-40 bg-white border-b border-line px-4 py-3" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
        <div className="container-main">
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none' }}>
            {productCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => {
                  setActiveCategory(cat.slug)
                  const el = document.getElementById(cat.slug)
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${activeCategory === cat.slug ? 'bg-navy text-white' : 'bg-surface text-navy hover:bg-navy-50'}`}
                style={{ border: '1px solid var(--border)' }}
                aria-pressed={activeCategory === cat.slug}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Category Nav */}
      <nav className="md:hidden sticky top-[108px] z-40 bg-white border-b border-line px-4 py-2" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
          {productCategories.map((cat) => (
            <button
              key={cat.slug}
              style={{
                flex: '0 0 auto',
                scrollSnapAlign: 'start',
                padding: '8px 16px',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: activeCategory === cat.slug ? '#fff' : 'var(--navy)',
                background: activeCategory === cat.slug ? 'var(--navy)' : 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '999px',
                whiteSpace: 'nowrap',
              }}
              onClick={() => {
                setActiveCategory(cat.slug)
                const el = document.getElementById(cat.slug)
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Produk */}
      <section id="produk-hero" style={{ background: 'var(--surface)', paddingTop: '160px', paddingBottom: '56px' }}>
        <div className="container-main">
          <div style={{ maxWidth: '720px' }}>
            <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-text px-3 py-1 rounded-pill text-sm font-semibold" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', marginBottom: '16px' }}>
              <span className="w-4 h-4">🏷️</span>
              Kategori Produk
            </span>
            <h1 style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: 'var(--navy)',
              marginBottom: '16px',
            }}>
              Kategori Produk
            </h1>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.65, color: 'var(--body)', maxWidth: '600px' }}>
              Distributor resmi brand global ternama untuk kebutuhan industri, komersial, dan residensial. Pilih kategori untuk melihat produk & merk yang tersedia.
            </p>
          </div>
        </div>
      </section>

      {/* Category Sections */}
      {productCategories.map((cat, catIdx) => (
        <section
          key={cat.slug}
          id={cat.slug}
          className="section-py"
          style={{ background: catIdx % 2 === 0 ? 'var(--white)' : 'var(--surface)' }}
        >
          <div className="container-main">
            {/* Category Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
              <div>
                <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-text px-3 py-1 rounded-pill text-sm font-semibold" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', marginBottom: '8px' }}>
                  {cat.title.toUpperCase()}
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  lineHeight: 1.2,
                }}>
                  {cat.title}
                </h2>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href={companyInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: 'fit-content' }}>
                  <MessageCircle className="w-4 h-4" />
                  Tanya via WhatsApp
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
                <a href="#marketplace" className="btn-outline-navy" style={{ width: 'fit-content' }}>
                  Lihat di Marketplace
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
              </div>
            </div>

            {/* Category Description */}
            <p style={{ color: 'var(--body)', fontSize: '0.9375rem', lineHeight: 1.65, maxWidth: '600px', marginBottom: '32px' }}>
              {cat.desc}
            </p>

            {/* Brand Logos for this category */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--navy)', marginBottom: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
                Merk Tersedia
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                {cat.brands.map((brand, idx) => (
                  <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', height: '48px' }}>
                    <img src={`/brands/${brand.toLowerCase().replace(/\s+/g, '-')}.webp`} alt={brand} style={{ height: '28px', width: 'auto', objectFit: 'contain' }} onError={(e) => { e.currentTarget.style.display = 'none' }} />
                    <span style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.875rem', whiteSpace: 'nowrap' }}>{brand}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href={companyInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle className="w-4 h-4" />
                Tanya via WhatsApp
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </a>
              <a href="#marketplace" className="btn-outline-navy">Lihat di Marketplace</a>
            </div>
          </div>
        </section>
      ))}

      {/* Brand Partner Section */}
      <section id="brand" className="section-py" style={{ background: 'var(--white)' }}>
        <div className="container-main">
          <SectionTitle
            eyebrow="MERK TERPERCAYA"
            title="Brand Partner Resmi Global"
            subtitle="Kami menyediakan produk asli dan bergaransi resmi dari brand ternama dunia untuk memastikan keandalan sistem Anda."
          />
          <BrandPartner />
        </div>
      </section>

      {/* Marketplace Section */}
      <section id="marketplace" className="section-py" style={{ background: 'var(--surface)' }}>
        <div className="container-main">
          <SectionTitle
            eyebrow="BELANJA DI MARKETPLACE RESMI"
            title="Transaksi Aman di Platform Favorit Anda"
            subtitle="Semua produk tersedia di toko resmi kami di 4 marketplace terbesar Indonesia. Transaksi aman, garansi resmi, pengiriman cepat."
          />
          <MarketplaceSection />
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section id="cta-whatsapp" style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden', paddingTop: '64px', paddingBottom: '64px', color: '#fff' }}>
        <div className="container-main relative z-10 text-center">
          <h2 style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '16px' }}>Butuh Konsultasi Cepat?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.125rem', marginBottom: '32px', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
            Tim kami siap membantu via WhatsApp. Balasan cepat, gratis konsultasi awal.
          </p>
          <a href={companyInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: 'var(--whatsapp)', color: '#fff', fontSize: '1rem', padding: '14px 32px' }}>
            <MessageCircle className="w-5 h-5" />
            Chat WhatsApp Sekarang
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}