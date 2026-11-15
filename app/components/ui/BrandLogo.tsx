'use client'

import React, { useState } from 'react'

interface BrandLogoProps {
  name: string
  logoPath?: string
  className?: string
}

export function BrandLogo({ name, logoPath, className = '' }: BrandLogoProps) {
  const [hasError, setHasError] = useState(false)

  if (logoPath && !hasError) {
    return (
      <div className={`partner-brand-logo ${className}`}>
        <img
          src={logoPath}
          alt={name}
          loading="lazy"
          onError={() => setHasError(true)}
        />
      </div>
    )
  }

  return (
    <div className={`partner-brand-logo ${className}`}>
      <span className="brand-logo-text">{name}</span>
    </div>
  )
}