'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'

const steps = [
  { number: 1, title: 'Konsultasi', description: 'Diskusi kebutuhan, survey lokasi, dan analisis beban listrik proyek Anda.' },
  { number: 2, title: 'Survei & Desain', description: 'Tim teknis melakukan survei detail dan membuat desain sistem (SLD, layout, BOQ).' },
  { number: 3, title: 'Pengerjaan', description: 'Instalasi panel, kabel, grounding, alat ukur, AC, pompa, safety sesuai desain.' },
  { number: 4, title: 'Uji & Commissioning', description: 'Pengujian isolasi, kebocoran arus, fungsi proteksi, performa AC/pompa, kalibrasi alat.' },
  { number: 5, title: 'Serah Terima', description: 'Dokumentasi as-built, sertifikat, pelatihan operator, dan garansi resmi bersangkutan.' },
]

export function StepperProses() {
  return (
    <div className="stepper">
      {steps.map((step, idx) => (
        <div key={idx} className="stepper-item">
          <div className="stepper-circle">{step.number}</div>
          <h4 className="stepper-title">{step.title}</h4>
          <p className="stepper-desc">{step.description}</p>
        </div>
      ))}
    </div>
  )
}