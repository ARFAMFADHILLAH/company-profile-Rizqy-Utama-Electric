'use client'

import React, { useState } from 'react'
import { companyInfo } from '@/app/data'

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="hidden lg:flex fixed bottom-6 right-6 z-60">
      <div className="relative">
        <a
          href={companyInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Chat WhatsApp"
        >
          <img
            src="/logo/logo-whatsapp.png"
            alt="WhatsApp"
            className="w-14 h-14 object-contain drop-shadow-lg hover:scale-105 transition-transform"
          />
        </a>
        {showTooltip && (
          <div
            className="absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap"
            style={{
              background: 'var(--ink)',
              color: '#fff',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.8125rem',
              fontWeight: 500,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              zIndex: 10,
            }}
          >
            Chat WhatsApp
          </div>
        )}
      </div>
    </div>
  )
}