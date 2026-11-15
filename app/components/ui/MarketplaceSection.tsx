'use client'

import React from 'react'
import { marketplaces } from '@/app/data'

export function MarketplaceSection() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginTop: '8px' }}>
      {marketplaces.map((mp) => (
        <a
          key={mp.id}
          href={mp.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Buka toko resmi di ${mp.name}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            height: '48px',
            padding: '0 24px',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            background: '#fff',
            color: 'var(--navy)',
            fontWeight: 600,
            fontSize: '0.875rem',
            transition: 'border-color .15s ease, background .15s ease, box-shadow .15s ease',
            whiteSpace: 'nowrap',
            boxShadow: 'var(--shadow-card)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--navy)'; e.currentTarget.style.boxShadow = 'var(--shadow-hover)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'var(--shadow-card)'; }}
        >
          <img src={mp.icon} alt="" style={{ width: 22, height: 22, borderRadius: 4 }} />
          <span>Belanja di {mp.name}</span>
          <svg className="w-4 h-4" strokeWidth={2} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </a>
      ))}
    </div>
  )
}
