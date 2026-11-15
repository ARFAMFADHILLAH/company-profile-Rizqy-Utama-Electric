'use client'

import React, { useState } from 'react'
import { ArrowRight, MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { companyInfo } from '@/app/data'
import { WorkshopLocations } from './WorkshopLocations'

export function ContactSplit() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    await new Promise(resolve => setTimeout(resolve, 800))
    setFormStatus('success')
    setTimeout(() => setFormStatus('idle'), 4000)
    e.currentTarget.reset()
  }

  return (
    <section id="kontak" className="section-py bg-soft">
      <div className="container-main">
        <div className="grid-1-2" style={{ alignItems: 'stretch', gap: '2rem' }}>
          <div>
            <span className="section-eyebrow">KONTAK KAMI</span>
            <h2 className="section-title">Diskusikan Kebutuhan Proyek Anda</h2>
            <p className="section-subtext">Hubungi tim kami untuk konsultasi panel, instalasi, pengadaan produk, atau permintaan penawaran.</p>
            <div className="mt-6 bg-white rounded-xl border p-5" style={{ borderColor: 'var(--border)' }}>
              {formStatus === 'success' && <div style={{ background:'#ecfdf3', border:'1px solid #86efac', color:'#166534', padding:'12px', borderRadius:'8px', marginBottom:'12px', fontSize:'.875rem' }}>Pesan terkirim. Kami akan segera menghubungi Anda.</div>}
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="form-grid">
                  <div><label htmlFor="nama" className="form-label">Nama Lengkap</label><input id="nama" name="nama" className="form-input" required /></div>
                  <div><label htmlFor="email" className="form-label">Email</label><input id="email" name="email" type="email" className="form-input" required /></div>
                  <div><label htmlFor="whatsapp" className="form-label">No. WhatsApp</label><input id="whatsapp" name="whatsapp" className="form-input" required /></div>
                  <div><label htmlFor="perusahaan" className="form-label">Perusahaan</label><input id="perusahaan" name="perusahaan" className="form-input" /></div>
                </div>
                <div><label htmlFor="kebutuhan" className="form-label">Kebutuhan</label><textarea id="kebutuhan" name="kebutuhan" className="form-textarea" rows={4} required /></div>
                <button type="submit" className="btn-primary" style={{ width:'fit-content' }} disabled={formStatus==='submitting'}>
                  <MessageCircle className="w-4 h-4" /> {formStatus==='submitting' ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
              </form>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="bg-white rounded-xl border overflow-hidden" style={{ borderColor: 'var(--border)' }}>
              <div style={{ padding: '1rem 1rem 0' }}><h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)' }}>Informasi Kontak</h3></div>
              <div style={{ padding: '0 1rem 1rem' }}>
                <div className="contact-card"><Phone className="contact-icon" /><div className="contact-text"><a href={companyInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>{companyInfo.phone}</a></div></div>
                <div className="contact-card"><Mail className="contact-icon" /><div className="contact-text">{companyInfo.email}</div></div>
                <div className="contact-card"><Clock className="contact-icon" /><div className="contact-text">{companyInfo.operationalHours}</div></div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '3rem' }}>
          <span className="section-eyebrow">LOKASI WORKSHOP</span>
          <h3 className="section-title" style={{ marginBottom: '1.5rem' }}>Workshop Jakarta & Bekasi</h3>
          <WorkshopLocations embedded />
        </div>
      </div>
    </section>
  )
}
