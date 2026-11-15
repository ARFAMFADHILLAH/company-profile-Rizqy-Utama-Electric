'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'
import { companyInfo } from '@/app/data'

export function CTAWhatsApp() {
  return (
    <section id="cta-whatsapp" style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden', paddingTop: '64px', paddingBottom: '64px', color: '#fff' }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', pointerEvents: 'none', transform: 'rotate(180deg)' }}>
        <path d="M0,100 C20,80 40,60 100,0 L100,100 Z" fill="var(--orange)" />
      </svg>
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
  )
}