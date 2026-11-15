'use client'

import React, { useState } from 'react'
import { brandCategories, getBrandsByCategory } from '@/lib/brands'
import { BrandLogo } from './BrandLogo'

export function BrandPartner() {
  const [activeCategory, setActiveCategory] = useState('alat-ukur')

  return (
    <div>
      <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {brandCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            style={{
              padding: '.55rem .9rem',
              fontSize: '.875rem',
              fontWeight: 700,
              borderRadius: '999px',
              border: '1px solid var(--border)',
              background: activeCategory === cat.id ? 'var(--navy)' : '#fff',
              color: activeCategory === cat.id ? '#fff' : 'var(--ink)',
              cursor: 'pointer'
            }}
            aria-pressed={activeCategory === cat.id}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <div>
        {brandCategories.map((cat) => (
          <div key={cat.id} style={{ display: activeCategory === cat.id ? 'block' : 'none' }}>
            {cat.isCarousel ? (
              <div className="marquee-container">
                <div className="marquee-content">
                  {[...getBrandsByCategory(cat.category), ...getBrandsByCategory(cat.category)].map((brand, idx) => (
                    <div key={`${brand.name}-${idx}`} style={{ minWidth: '150px', display:'flex', justifyContent:'center' }}>
                      <BrandLogo name={brand.name} logoPath={brand.logo} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="brand-grid">
                {getBrandsByCategory(cat.category).map((brand, idx) => (
                  <div key={idx} className="brand-grid-cell">
                    <BrandLogo name={brand.name} logoPath={brand.logo} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
