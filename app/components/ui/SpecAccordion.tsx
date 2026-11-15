'use client'

import React from 'react'
import { ProductSpec } from '@/app/data'
import { DataTable } from './DataTable'

interface SpecAccordionProps {
  specs: ProductSpec[]
}

export function SpecAccordion({ specs }: SpecAccordionProps) {
  return (
    <div className="spec-accordion-grid">
      {specs.map((spec, idx) => (
        <details key={idx} className="spec-accordion">
          <summary>{spec.category}</summary>
          <div className="spec-accordion-content">
            <DataTable rows={spec.rows} />
          </div>
        </details>
      ))}
    </div>
  )
}