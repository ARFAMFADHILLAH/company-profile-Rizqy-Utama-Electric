'use client'

import React, { useState } from 'react'
import { ArrowRight, MapPin, Phone, Mail, Clock, MessageCircle, BadgeCheck, Building2, Factory, Users, Heart, Target } from 'lucide-react'
import { companyInfo, marketplaces } from '@/app/data'
import {
  ImageSlot,
  SectionTitle,
  Header,
  Footer,
  FloatingWhatsApp,
} from '@/components/ui'

export default function KontakPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    await new Promise(resolve => setTimeout(resolve, 1000))
    setFormStatus('success')
    setTimeout(() => setFormStatus('idle'), 5000)
    e.currentTarget.reset()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Kontak */}
      <section id="kontak-hero" style={{
        background: 'var(--surface)',
        paddingTop: '160px',
        paddingBottom: '96px',
      }}>
        <div className="container-main">
          <div style={{ maxWidth: '800px' }}>
            <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-text px-3 py-1 rounded-pill text-sm font-semibold" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', marginBottom: '16px' }}>
              <span className="w-4 h-4">📍</span>
              HUBUNGI KAMI
            </span>
            <h1 style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: 'var(--navy)',
              marginBottom: '16px',
            }}>
              Mari Wujudkan Proyek Anda
            </h1>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.65, color: 'var(--body)', maxWidth: '600px', marginBottom: '32px' }}>
              Tim ahli kami siap membantu kebutuhan panel maker, instalasi listrik, AC, pompa, water heater, alat safety, hingga kalibrasi alat ukur. Isi formulir di bawah, kami akan menghubungi Anda dalam 1×24 jam.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <a href={companyInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: 'var(--whatsapp)', color: '#fff' }}>
                <span className="w-4 h-4">💬</span>
                Chat WhatsApp
                <span className="w-4 h-4">→</span>
              </a>
              <a href={`mailto:${companyInfo.email}`} className="btn-outline-navy">Email Kami</a>
            </div>
          </div>
        </div>
      </section>

      {/* Split Contact Form + Photo */}
      <section id="kontak" className="section-py" style={{ background: 'var(--white)' }}>
        <div className="container-main">
          <div className="grid-1-2" style={{ gap: '2rem', alignItems: 'stretch' }}>
            {/* Photo Left */}
            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', minHeight: '280px' }}>
              <ImageSlot
                src="/images/cta-banner.jpg"
                label="Foto: teknisi di lokasi proyek"
                aspectRatio="16/9"
                alt="Tim teknisi Rizqy Utama Electric di lokasi proyek"
                className="w-full h-full"
              />
            </div>

            {/* Form Right */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="section-eyebrow">HUBUNGI KAMI</div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.2, marginBottom: '12px' }}>
                Mari Wujudkan Proyek Anda
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.65, marginBottom: '24px' }}>
                Tim ahli kami siap membantu kebutuhan panel maker, instalasi listrik, AC, pompa, water heater, alat safety, hingga kalibrasi alat ukur. Isi formulir di bawah, kami akan menghubungi Anda dalam 1×24 jam.
              </p>

              {formStatus === 'success' && (
                <div style={{ background: '#DCFCE7', border: '1px solid #86EFAC', color: '#166534', padding: '16px', borderRadius: 'var(--radius)', marginBottom: '24px', fontSize: '0.875rem' }}>
                  Pesan Anda telah terkirim. Tim kami akan menghubungi Anda segera via WhatsApp/Email.
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="form-grid">
                  <div>
                    <label htmlFor="nama" className="form-label">Nama Lengkap</label>
                    <input type="text" id="nama" name="nama" className="form-input" placeholder="Nama Anda" required aria-required="true" />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" name="email" className="form-input" placeholder="email@perusahaan.com" required aria-required="true" />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="form-label">No. WhatsApp</label>
                    <input type="tel" id="whatsapp" name="whatsapp" className="form-input" placeholder="08xx-xxxx-xxxx" required aria-required="true" />
                  </div>
                  <div>
                    <label htmlFor="perusahaan" className="form-label">Perusahaan / Instansi</label>
                    <input type="text" id="perusahaan" name="perusahaan" className="form-input" placeholder="Nama Perusahaan" />
                  </div>
                </div>
                <div>
                  <label htmlFor="kebutuhan" className="form-label">Kebutuhan Anda</label>
                  <textarea id="kebutuhan" name="kebutuhan" className="form-textarea" rows={5} placeholder="Jelaskan kebutuhan proyek, lokasi, timeline, atau pertanyaan teknis..." required aria-required="true"></textarea>
                </div>
                <button type="submit" className="btn-primary" disabled={formStatus === 'submitting'} style={{ width: 'fit-content' }}>
                  <span className="w-4 h-4">💬</span>
                  {formStatus === 'submitting' ? 'Mengirim...' : 'Kirim Pesan'}
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </button>
              </form>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginBottom: '12px' }}>Atau hubungi kami langsung:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <a href={companyInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: 'var(--whatsapp)', color: '#fff' }}>
                    <span className="w-4 h-4">💬</span>
                    Chat WhatsApp
                  </a>
                  <a href={`mailto:${companyInfo.email}`} className="btn-outline-navy">
                    <span className="w-4 h-4">✉️</span>
                    Email Kami
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Cards + Map */}
          <div className="grid-1-2" style={{ gap: '24px', marginTop: '3rem' }}>
            <div style={{ padding: '24px', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', background: '#fff' }}>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>Lokasi Workshop</div>
              <div className="contact-card">
                <MapPin className="contact-icon" />
                <div className="contact-text">
                  <strong>Jakarta:</strong> Jl. Glodok Jaya No.3, Mangga Besar, Jakarta Barat
                </div>
              </div>
              <div className="contact-card">
                <MapPin className="contact-icon" />
                <div className="contact-text">
                  <strong>Bekasi:</strong> Jl. Parpostel No.111, Jatiasih, Bekasi
                </div>
              </div>
              <div className="contact-card">
                <Phone className="contact-icon" style={{ color: 'var(--orange-text)' }} />
                <div className="contact-text">{companyInfo.phone}</div>
              </div>
              <div className="contact-card">
                <Mail className="contact-icon" style={{ color: 'var(--orange-text)' }} />
                <div className="contact-text">{companyInfo.email}</div>
              </div>
              <div className="contact-card">
                <Clock className="contact-icon" style={{ color: 'var(--orange-text)' }} />
                <div className="contact-text">{companyInfo.operationalHours}</div>
              </div>
            </div>

            <div style={{ padding: '0', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--ink)', padding: '24px 24px 0' }}>Peta Lokasi</div>
              <div style={{ height: '320px', width: '100%' }}>
                <iframe
                  src={companyInfo.workshops[0].mapUrl + '&output=embed'}
                  width="100%"
                  height="100%"
                  style={{ border: 'none', borderTop: '1px solid var(--border)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Workshop Jakarta - Rizqy Utama Electric"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="section-py" style={{ background: 'var(--surface)' }}>
        <div className="container-main">
          <SectionTitle
            eyebrow="INFORMASI TAMBAHAN"
            title="Layanan & Dukungan Penuh"
            subtitle="Kami hadir untuk mendukung kebutuhan elektrikal Anda dari awal hingga selesai."
          />
          <div className="grid-1-2-3" style={{ marginTop: '48px' }}>
            {[
              { icon: BadgeCheck, title: 'Konsultasi Gratis', desc: 'Diskusi kebutuhan proyek tanpa biaya. Survey lokasi & analisis beban listrik.' },
              { icon: Building2, title: 'Desain & Engineering', desc: 'SLD, layout panel, perhitungan beban, seleksi peralatan sesuai standar PUIL/IEC.' },
              { icon: Factory, title: 'Instalasi & Commissioning', desc: 'Pemasangan panel, kabel, grounding, lightning protection hingga uji fungsi.' },
              { icon: Users, title: 'Maintenance Berkala', desc: 'Perawatan preventif, audit termografi, kalibrasi alat ukur, sertifikasi panel.' },
              { icon: Heart, title: 'After Sales Support', desc: 'Garansi resmi, spare parts ready, tim teknisi darurat 24/7 untuk emergency.' },
              { icon: Target, title: 'Kalibrasi & Sertifikasi', desc: 'Kalibrasi alat ukur rutin, sertifikasi KAN, laporan lengkap untuk audit.' },
            ].map((item, idx) => (
              <div key={idx} style={{ padding: '24px', background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', transition: 'box-shadow .2s, border-color .2s, transform .2s', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <item.icon className="w-6 h-6" style={{ color: '#fff' }} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>{item.title}</h3>
                <p style={{ color: 'var(--body)', fontSize: '0.875rem', lineHeight: 1.6, flex: 1 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}