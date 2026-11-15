'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { ImageSlot } from './ImageSlot'

const featuredProducts = [
  {
    name: 'Panel MDB 800A',
    category: 'Panel Maker',
    specs: ['800A', '3 Phase', 'IP54'],
    badge: 'Ready Stock',
    image: '/images/produk/panel-mdb.jpg',
  },
  {
    name: 'AC Cassette 4 PK',
    category: 'Air Conditioner',
    specs: ['4 PK', 'Inverter', 'R32'],
    badge: 'Ready Stock',
    image: '/images/produk/ac-cassette.jpg',
  },
  {
    name: 'Pompa Booster 2 HP',
    category: 'Pompa Air',
    specs: ['2 HP', 'Head 30m', '3 Phase'],
    badge: 'Baru',
    image: '/images/produk/pompa-booster.jpg',
  },
  {
    name: 'Water Heater 50L',
    category: 'Water Heater',
    specs: ['50 Liter', '2000W', 'SNI'],
    badge: 'Ready Stock',
    image: '/images/produk/wh-50l.jpg',
  },
]

export function FeaturedProducts() {
  return (
    <section id="featured" className="section-py" style={{ background: 'var(--white)' }}>
      <div className="container-main">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', marginBottom: '32px' }}>
          <div>
            <span className="section-eyebrow">PRODUK UNGGULAN</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.2, marginBottom: '12px' }}>
              Produk Terlaris & Rekomendasi
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.65, maxWidth: '520px', marginTop: '8px' }}>
              Produk pilihan dengan ketersediaan stok ready dan spesifikasi lengkap untuk kebutuhan industri Anda.
            </p>
          </div>
          <a href="#produk" className="btn-text">
            Lihat Semua Produk
            <svg className="w-4 h-4" strokeWidth={2} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
        <div className="grid-1-2-6" style={{ gap: '24px' }}>
          {featuredProducts.map((product, idx) => (
            <article key={idx} className="product-card group">
              <div style={{ position: 'relative' }}>
                <ImageSlot src={product.image} label={`Foto: ${product.name}`} aspectRatio="4/3" alt={product.name} />
                <span className={`badge ${product.badge === 'Ready Stock' ? 'badge-ready' : product.badge === 'Baru' ? 'badge-new' : 'badge-sni'}`} style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 1 }}>
                  {product.badge}
                </span>
              </div>
              <div className="product-card-content">
                <h3 className="product-card-title">{product.name}</h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginBottom: '8px' }}>{product.category}</p>
                <div className="product-card-meta">
                  {product.specs.map((spec, i) => (
                    <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', background: 'var(--surface)', padding: '2px 8px', borderRadius: 'var(--radius-sm)' }}>{spec}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
          <div className="col-span-full flex justify-center pt-8">
            <a href="#produk" className="btn-text">
              Lihat Semua Produk
              <svg className="w-4 h-4" strokeWidth={2} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}