'use client'

import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  Header,
  Footer,
  FloatingWhatsApp,
} from '@/components/ui'

const otherCategories = [
  {
    id: 'ac',
    title: 'Air Conditioner',
    gridCols: 'lg:grid-cols-6',
    brands: [
      { name: 'Daikin', logo: '/brands/daikin.webp' },
      { name: 'Panasonic', logo: '/brands/panasonic-ac.webp' },
      { name: 'Mitsubishi Electric', logo: '/brands/mitsubishi-electric-ac.webp' },
      { name: 'LG', logo: '/brands/lg-ac.webp' },
      { name: 'Sharp', logo: '/brands/sharp-ac.webp' },
      { name: 'Gree', logo: '/brands/gree.webp' },
    ],
  },
  {
    id: 'pompa',
    title: 'Pompa Air',
    gridCols: 'lg:grid-cols-5',
    brands: [
      { name: 'Grundfos', logo: '/brands/grundfos.webp' },
      { name: 'Ebara', logo: '/brands/ebara.webp' },
      { name: 'Shimizu', logo: '/brands/shimizu.webp' },
      { name: 'Tsurumi', logo: '/brands/tsurumi.webp' },
      { name: 'KSB', logo: '/brands/ksb.webp' },
    ],
  },
  {
    id: 'safety',
    title: 'Alat Safety (K3)',
    gridCols: 'lg:grid-cols-6',
    brands: [
      { name: '3M', logo: '/brands/3m.webp' },
      { name: 'Honeywell', logo: '/brands/honeywell.webp' },
      { name: 'Krisbow', logo: '/brands/krisbow.webp' },
      { name: "King's", logo: '/brands/kings.webp' },
      { name: 'Dräger', logo: '/brands/drager.webp' },
      { name: 'MSA', logo: '/brands/msa.webp' },
    ],
  },
  {
    id: 'electrical',
    title: 'Material Elektrikal',
    gridCols: 'lg:grid-cols-6',
    brands: [
      { name: 'Schneider Electric', logo: '/brands/schneider-electric.webp' },
      { name: 'ABB', logo: '/brands/abb.webp' },
      { name: 'Siemens', logo: '/brands/siemens.webp' },
      { name: 'Legrand', logo: '/brands/legrand.webp' },
      { name: 'Mitsubishi Electric', logo: '/brands/mitsubishi-electric.webp' },
      { name: 'Panasonic', logo: '/brands/panasonic-electrical.webp' },
    ],
  },
]

const alatUkurBrands = [
  { name: 'Sanwa', logo: '/brands/sanwa.webp' },
  { name: 'Hioki', logo: '/brands/hioki.webp' },
  { name: 'SEW', logo: '/brands/sew.webp' },
  { name: 'Lutron', logo: '/brands/lutron.webp' },
  { name: 'Hozan', logo: '/brands/hozan.webp' },
  { name: 'Goot', logo: '/brands/goot.webp' },
  { name: 'Appa', logo: '/brands/appa.webp' },
  { name: 'Sanfix', logo: '/brands/sanfix.webp' },
  { name: 'Owon', logo: '/brands/owon.webp' },
]

export default function BrandPage() {
  const [activeTab, setActiveTab] = useState<string>('all')

  const displayedCategories =
    activeTab === 'all'
      ? otherCategories
      : otherCategories.filter((cat) => cat.id === activeTab)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Brand */}
      <section
        id="brand-hero"
        style={{
          background: 'var(--surface)',
          paddingTop: '160px',
          paddingBottom: '96px',
        }}
      >
        <div className="container-main">
          <div style={{ maxWidth: '800px' }}>
            <span
              className="inline-flex items-center gap-2 bg-orange-50 text-orange-text px-3 py-1 rounded-pill text-sm font-semibold"
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                marginBottom: '16px',
              }}
            >
              <span className="w-4 h-4">🏷️</span>
              MERK TERPERCAYA
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: 'var(--navy)',
                marginBottom: '16px',
              }}
            >
              Brand Partner Resmi Global
            </h1>
            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.65,
                color: 'var(--body)',
                maxWidth: '600px',
                marginBottom: '24px',
              }}
            >
              Kami menyediakan produk asli dan bergaransi resmi dari brand ternama dunia untuk memastikan keandalan sistem Anda. Lebih dari 30 brand partner dalam 6 kategori produk.
            </p>
          </div>
        </div>
      </section>

      {/* Alat Ukur Carousel */}
      <section
        id="brand-alat-ukur"
        className="section-py"
        style={{ background: 'var(--white)' }}
      >
        <div className="container-main">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            <div>
              <span
                className="inline-flex items-center gap-2 bg-orange-50 text-orange-text px-3 py-1 rounded-pill text-sm font-semibold"
                style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  marginBottom: '8px',
                }}
              >
                <span className="w-4 h-4">📏</span>
                ALAT UKUR LISTRIK
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  lineHeight: 1.2,
                  marginBottom: '8px',
                }}
              >
                9 Brand Ternama Alat Ukur Presisi
              </h2>
              <p
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.65,
                  color: 'var(--body)',
                  maxWidth: '560px',
                  marginTop: '8px',
                }}
              >
                Distributor resmi 9 brand alat ukur listrik ternama dunia. Semua produk asli, bergaransi resmi, dan siap dikirim ke seluruh Indonesia.
              </p>
            </div>
            <a href="#kontak" className="btn-text">
              Lihat Semua Brand
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>

          {/* Alat Ukur Carousel - 9 brands */}
          <div style={{ minHeight: '120px', position: 'relative', overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                gap: '48px',
                alignItems: 'center',
                justifyContent: 'flex-start',
                minHeight: '120px',
                padding: '0 24px',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {[...alatUkurBrands, ...alatUkurBrands].map((brand, idx) => (
                <div
                  key={`${brand.name}-${idx}`}
                  style={{
                    flex: '0 0 auto',
                    scrollSnapAlign: 'start',
                    minWidth: '160px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ minWidth: '140px', display: 'flex', justifyContent: 'center' }}>
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      style={{ maxHeight: '40px', maxWidth: '100%', objectFit: 'contain' }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Categories Grid */}
      <section
        id="brand-other"
        className="section-py"
        style={{ background: 'var(--surface)' }}
      >
        <div className="container-main">
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginBottom: '32px',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
              style={{
                background: activeTab === 'all' ? 'var(--navy)' : '#fff',
                color: activeTab === 'all' ? '#fff' : 'var(--navy)',
                border: '1px solid var(--border)',
              }}
            >
              Semua Kategori
            </button>
            {otherCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                style={{
                  background: activeTab === cat.id ? 'var(--navy)' : '#fff',
                  color: activeTab === cat.id ? '#fff' : 'var(--navy)',
                  border: '1px solid var(--border)',
                }}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            {displayedCategories.map((cat) => (
              <div key={cat.id}>
                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: 'var(--navy)',
                    marginBottom: '16px',
                  }}
                >
                  {cat.title}
                </h3>
                <div className={`grid grid-cols-2 sm:grid-cols-3 ${cat.gridCols} gap-4 max-w-[720px]`}>
                  {cat.brands.map((brand, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: '#fff',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-lg)',
                        height: '72px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '16px',
                        transition: 'border-color .2s ease, box-shadow .2s ease',
                      }}
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        style={{ maxHeight: '32px', maxWidth: '100%', objectFit: 'contain' }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}