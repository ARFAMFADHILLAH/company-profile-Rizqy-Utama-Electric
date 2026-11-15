'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { ImageSlot } from './ImageSlot'

interface ProductCardProps {
  title: string
  desc: string
  image: string
  href: string
  label: string
}

export function ProductCard({ title, desc, image, href, label }: ProductCardProps) {
  return (
    <a href={href} className="category-card group">
      <div className="category-card-top-bar" />
      <div style={{ position: 'relative' }}>
        <ImageSlot src={image} label={label} aspectRatio="4/3" alt={title} />
      </div>
      <div className="category-card-content">
        <h3 className="category-card-title">{title}</h3>
        <p className="category-card-desc">{desc}</p>
        <span className="category-card-link">
          Lihat Produk
          <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </span>
      </div>
    </a>
  )
}