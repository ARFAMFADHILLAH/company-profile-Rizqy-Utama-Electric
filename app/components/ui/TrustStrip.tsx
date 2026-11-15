'use client'

import React from 'react'
import { ShieldCheck, Building2, ShoppingBag, Clock } from 'lucide-react'

const items = [
  { icon: ShieldCheck, text: 'Sejak 2019' },
  { icon: Building2, text: '2 Workshop (Jakarta & Bekasi)' },
  { icon: ShoppingBag, text: 'Marketplace Resmi' },
  { icon: Clock, text: 'Melayani 09.00–17.00 WIB' },
]

export function TrustStrip() {
  return (
    <section style={{ background: 'var(--white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '32px 0' }}>
      <div className="container-main">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {items.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0 16px' }}>
              <item.icon className="w-5 h-5 text-navy" aria-hidden="true" />
              <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink)' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}