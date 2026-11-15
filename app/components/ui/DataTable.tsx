'use client'

import React from 'react'
import { SpecRow } from '@/app/data'

interface DataTableProps {
  rows: SpecRow[]
  className?: string
}

export function DataTable({ rows, className = '' }: DataTableProps) {
  const hasData = rows.some(row => row.value && row.value.trim() !== '')

  if (!hasData) {
    return (
      <div className="bg-gray-25 border border-gray-100 rounded-lg p-8 text-center">
        <p className="text-gray-300 text-sm">Data spesifikasi belum tersedia</p>
        <p className="text-gray-300 text-xs mt-1">TODO: Isi data asli dari katalog/teknis</p>
      </div>
    )
  }

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="spec-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Nilai</th>
            <th>Satuan</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            row.value && row.value.trim() !== '' ? (
              <tr key={idx}>
                <td className="param">{row.parameter}</td>
                <td className="value">{row.value}</td>
                <td className="text-gray-300 text-xs font-mono">{row.unit || '-'}</td>
              </tr>
            ) : null
          ))}
        </tbody>
      </table>
    </div>
  )
}