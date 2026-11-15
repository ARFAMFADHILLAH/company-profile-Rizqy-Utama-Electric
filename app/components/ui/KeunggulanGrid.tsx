'use client'

import React from 'react'
import { Cable, Zap, HardHat, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Panel Maker (LV/MDB/Distribusi)',
    description: 'Perakitan panel listrik standar PUIL/IEC untuk gedung komersial, pabrik, dan fasilitas industri.',
  },
  {
    title: 'Instalasi Listrik Industri & Komersial',
    description: 'Pemasangan sistem tenaga & penerangan, grounding, lightning protection, hingga commissioning.',
  },
  {
    title: 'Maintenance & Trouble Shooting',
    description: 'Perawatan berkala, audit termografi, perbaikan gangguan, dan sertifikasi kelayakan instalasi.',
  },
]

export function KeunggulanGrid() {
  return (
    <div className="grid-1-2-3">
      {services.map((item, idx) => (
        <div key={idx} className="service-card">
          <div className="service-icon" aria-hidden="true">
            {idx === 0 && <Cable strokeWidth={1.5} />}
            {idx === 1 && <Zap strokeWidth={1.5} />}
            {idx === 2 && <HardHat strokeWidth={1.5} />}
          </div>
          <h3 className="service-title">{item.title}</h3>
          <p className="service-desc">{item.description}</p>
          <span className="service-link">
            Selengkapnya
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </span>
        </div>
      ))}
    </div>
  )
}