'use client'

import React from 'react'

const industries = [
  'Konstruksi & Properti',
  'Manufaktur',
  'Migas & Pertambangan',
  'Gedung & Perhotelan',
  'Pertanian & Perikanan',
]

const industryColors = [
  '#1E5AA8',
  '#00A3C4',
  '#2F80ED',
  '#E8590C',
  '#FFC20E',
]

export function IndustryGrid() {
  return (
    <div className="industry-grid">
      {industries.map((industry, idx) => (
        <div
          key={idx}
          className="industry-item"
          style={{ borderBottomColor: industryColors[idx % industryColors.length] }}
        >
          {industry}
        </div>
      ))}
    </div>
  )
}