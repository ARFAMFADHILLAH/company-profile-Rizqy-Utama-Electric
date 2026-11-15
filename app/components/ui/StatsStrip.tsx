'use client'

import React from 'react'
import { Building2, Award, HardHat, ShieldCheck } from 'lucide-react'

const stats = [
  { icon: Building2, value: '500+', label: 'Proyek Selesai' },
  { icon: Award, value: '150+', label: 'Klien' },
  { icon: HardHat, value: '10+', label: 'Tahun Pengalaman' },
  { icon: ShieldCheck, value: '50+', label: 'Merk Partner' },
]

export function StatsStrip() {
  return (
    <div className="stats-strip">
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-item">
            <stat.icon className="stat-icon" aria-hidden="true" strokeWidth={1.5} />
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
