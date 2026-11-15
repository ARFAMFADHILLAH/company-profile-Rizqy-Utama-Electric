'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/app/data'
import { ImageSlot } from './ImageSlot'

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'AC': ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 2-1 4-1 6s1 4 3 6 3-2 3-6"/><path d="M6 8h12"/><path d="M10 12v4"/><path d="M14 12v4"/></svg>,
  'Alat Ukur': ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  'Pompa': ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5"/><path d="M12 12a9 9 0 0 0 9-9"/><path d="M12 12a5 5 0 0 0-5-5"/><path d="M12 12a3 3 0 0 0-3-3"/></svg>,
  'Water Heater': ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5"/><path d="M16 14.08V17a4 4 0 0 1-8 0v-.92"/><path d="M8 10.1V7a4 4 0 0 1 8 0v3.1"/></svg>,
  'Alat Safety': ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10"/><path d="M8 14a4 4 0 1 1 8 0"/><path d="M8 22h12"/><path d="M12 14v8"/></svg>,
  'Material Elektrikal': ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/><path d="M18 8h.01"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>,
}

function getCategoryIcon(title: string) {
  const key = Object.keys(categoryIcons).find(k => title.includes(k))
  return key ? categoryIcons[key] : categoryIcons['Material Elektrikal']
}

export function CategoryGrid() {
  return (
    <div className="grid-1-2-6">
      {categories.map((cat, idx) => {
        const Icon = getCategoryIcon(cat.title)
        return (
          <article key={cat.slug} className="category-card">
            <div className="category-card-top-bar" />
            <div className="category-card-image-wrapper">
              <ImageSlot src={cat.image} label={`Foto: ${cat.title.toLowerCase()}`} aspectRatio="4/3" alt={cat.title} className="category-card-image" />
            </div>
            <div className="category-card-content">
              <h3 className="category-card-title">{cat.title}</h3>
              <p className="category-card-desc">{cat.description}</p>
              <span className="category-card-link">
                Lihat Produk
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </span>
            </div>
          </article>
        )
      })}
      <div className="col-span-full flex justify-center pt-8">
        <a href="/produk" className="btn-text">
          Lihat Semua Produk
          <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </a>
      </div>
    </div>
  )
}