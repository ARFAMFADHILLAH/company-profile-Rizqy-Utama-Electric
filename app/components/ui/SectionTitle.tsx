'use client'

import React from 'react'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  action?: React.ReactNode
  className?: string
}

export function SectionTitle({ eyebrow, title, subtitle, action, className = '' }: SectionTitleProps) {
  return (
    <div className={`section-heading ${className}`} style={{ position: 'relative' }}>
      {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
        <div>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtext">{subtitle}</p>}
        </div>
        {action && <div style={{ marginTop: 'auto', marginBottom: '8px' }}>{action}</div>}
      </div>
    </div>
  )
}