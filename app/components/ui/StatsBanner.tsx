'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '10+', label: 'Tahun Pengalaman' },
  { value: '5.000+', label: 'Produk Tersedia' },
  { value: '500+', label: 'Klien Industri' },
]

export function StatsBanner() {
  return (
    <div
      style={{
        background: 'var(--orange)',
        color: '#fff',
        borderRadius: 'var(--radius)',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        padding: '20px 8px',
      }}
      role="region"
      aria-label="Statistik perusahaan"
    >
      {stats.map((stat, idx) => (
        <div
          key={idx}
          style={{
            textAlign: 'center',
            padding: '0 16px',
            borderLeft: idx > 0 ? '1px solid rgba(255,255,255,0.45)' : 'none',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '2.25rem',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            {stat.value}
          </div>
          <div style={{ fontSize: '0.875rem', opacity: 0.9, marginTop: '4px' }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}