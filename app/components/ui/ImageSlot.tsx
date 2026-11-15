'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface ImageSlotProps {
  src: string
  label: string
  aspectRatio?: '4/3' | '16/9' | '1/1'
  alt?: string
  className?: string
}

export function ImageSlot({ src, label, aspectRatio = '4/3', alt, className = '' }: ImageSlotProps) {
  const [hasError, setHasError] = useState(false)

  const aspectStyles: Record<string, string> = {
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-[16/9]',
    '1/1': 'aspect-square',
  }

  if (hasError) {
    return (
      <div className={`bg-gray-25 border border-gray-100 flex items-center justify-center ${aspectStyles[aspectRatio]} ${className}`}>
        <span className="text-gray-300 text-sm font-medium">{label}</span>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden bg-gray-25 ${aspectStyles[aspectRatio]} ${className}`}>
      <Image
        src={src}
        alt={alt || label}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
        className="object-cover transition-transform duration-300"
        onError={() => setHasError(true)}
        placeholder="blur"
        blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23F4F7FB' width='1' height='1'/%3E%3C/svg%3E"
      />
    </div>
  )
}