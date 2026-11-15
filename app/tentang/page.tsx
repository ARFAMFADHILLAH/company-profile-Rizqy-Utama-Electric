'use client'

import React from 'react'
import { ShieldCheck, ArrowRight, Award, BadgeCheck, Building2, Factory, Users, Heart, Target } from 'lucide-react'
import { companyInfo } from '@/app/data'
import {
  ImageSlot,
  SectionTitle,
  Header,
  Footer,
  FloatingWhatsApp,
  KeunggulanGrid,
  StatsStrip,
} from '@/components/ui'

export default function TentangPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Tentang */}
      <section id="tentang-hero" style={{
        background: 'var(--surface)',
        paddingTop: '160px',
        paddingBottom: '96px',
      }}>
        <div className="container-main">
          <div style={{ maxWidth: '800px' }}>
            <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-text px-3 py-1 rounded-pill text-sm font-semibold" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', marginBottom: '16px' }}>
              <BadgeCheck className="w-4 h-4" />
              Tentang Kami
            </span>
            <h1 style={{
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: 'var(--navy)',
              marginBottom: '24px',
            }}>
              Solusi Elektrikal Terintegrasi<br />Sejak 2019
            </h1>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.65, color: 'var(--body)', maxWidth: '600px', marginBottom: '32px' }}>
              Berdiri sejak September 2019, <strong style={{ color: 'var(--navy)' }}>{companyInfo.name}</strong> hadir sebagai mitra terpercaya untuk sistem kelistrikan yang aman, efisien, dan berstandar tinggi untuk gedung komersial maupun fasilitas industri di seluruh Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Profil Perusahaan */}
      <section className="section-py" style={{ background: 'var(--white)' }}>
        <div className="container-main">
          <SectionTitle
            eyebrow="PROFIL PERUSAHAAN"
            title="Kami Menyediakan Solusi Elektrikal End-to-End"
            subtitle="Dari desain sistem hingga commissioning dan maintenance berkala — kami menangani seluruh siklus hidup instalasi elektrikal Anda."
          />
          <div className="grid-1-2" style={{ marginTop: '48px', gap: '48px' }}>
            <div>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--body)', marginBottom: '16px' }}>
                Kami menyediakan layanan komprehensif mulai dari penyediaan alat teknik berkualitas, perakitan panel listrik custom, hingga jasa instalasi dan perawatan berkala dengan standar keamanan tertinggi.
              </p>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--body)', marginBottom: '16px' }}>
                Dengan pengalaman lebih dari 5 tahun melayani berbagai sektor industri, kami memahami tantangan unik setiap proyek dan menawarkan solusi yang disesuaikan dengan kebutuhan spesifik setiap klien.
              </p>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--body)', marginBottom: '24px' }}>
                Kami berkomitmen pada keamanan, kualitas, dan kepuasan pelanggan — didukung tim teknis bersertifikat dan produk original bergaransi resmi.
              </p>
            </div>
            <div>
              <ImageSlot
                src="/images/tentang-workshop.jpg"
                label="Foto: tim teknisi di workshop"
                aspectRatio="4/3"
                alt="Tim teknisi Rizqy Utama Electric di workshop"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sejarah & Legalitas */}
      <section className="section-py" style={{ background: 'var(--surface)' }}>
        <div className="container-main">
          <SectionTitle
            eyebrow="SEJARAH & LEGALITAS"
            title="Perjalanan Kami Sejak 2019"
            subtitle="Berkembang dari workshop kecil menjadi mitra terpercaya ribuan perusahaan di Indonesia."
          />
          <div className="grid-1-2 tentang-block">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { year: '2019', title: 'Pendirian Perusahaan', desc: 'Rizqy Utama Electric didirikan di Jakarta dengan fokus pada suplai alat ukur listrik dan komponen panel.' },
                { year: '2020', title: 'Ekspansi Produk & Layanan', desc: 'Menambah kategori AC, Pompa Air, Water Heater, Alat Safety, dan Material Elektrikal. Mulai melayani instalasi listrik industri.' },
                { year: '2021', title: 'Resmi Menjadi Distributor', desc: 'Mendapatkan status distributor resmi 9 brand Alat Ukur ternama (Sanwa, Hioki, SEW, Lutron, Hozan, Goot, Appa, Sanfix, Owon).' },
                { year: '2022', title: 'Buka Workshop Bekasi', desc: 'Memperluas kapasitas produksi dengan membuka workshop kedua di Bekasi untuk melayani area Jabodetabek timur.' },
                { year: '2023-2024', title: 'Ekspansi Marketplace & Brand', desc: 'Resmi hadir di 4 marketplace besar (Tokopedia, Shopee, TikTok Shop, Blibli). Menambah 20+ brand partner untuk kategori AC, Pompa, Safety, Elektrikal.' },
              ].map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-year-col">
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-line" />
                  </div>
                  <div style={{ flex: 1, paddingTop: '2px', minWidth: 0 }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>{item.title}</h4>
                    <p style={{ color: 'var(--body)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: BadgeCheck, title: 'NIB & SIUP Terdaftar Resmi', desc: 'NIB: 2509260027047. Terdaftar resmi di Kementerian Hukum & HAM serta Kementerian Perindustrian.' },
                { icon: Award, title: 'Tenaga Teknis Bersertifikat', desc: 'K3 Umum, K3 Listrik, Ahli K3 Umum, Sertifikasi Kompetensi Teknis.' },
                { icon: Building2, title: 'Standar PUIL 2020 & IEC 61439', desc: 'Desain & perakitan panel mengacu standar PLN, IEC 61439, SNI.' },
                { icon: Factory, title: 'Garansi Resmi & After Sales', desc: 'Garansi resmi pabrik untuk semua produk. Layanan after sales & kalibrasi berkala.' },
              ].map((item, idx) => (
                <div key={idx} className="info-card">
                  <item.icon className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>{item.title}</h4>
                    <p className="info-card-desc" style={{ lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="section-py" style={{ background: 'var(--white)' }}>
        <div className="container-main">
          <SectionTitle
            eyebrow="VISI & MISI"
            title="Kompas Arah Perusahaan"
            subtitle="Prinsip yang memandu setiap keputusan dan tindakan kami sehari-hari."
          />
          <div className="grid-1-2" style={{ marginTop: '48px', gap: '48px' }}>
            <div style={{ padding: '32px', background: 'var(--surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Target className="w-6 h-6" style={{ color: '#fff' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>Visi</h3>
              </div>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--body)' }}>
                Menjadi penyedia solusi elektrikal terdepan di Indonesia yang dipercaya untuk keamanan, efisiensi, dan keberlanjutan setiap proyek.
              </p>
            </div>
            <div style={{ padding: '32px', background: 'var(--surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Heart className="w-6 h-6" style={{ color: '#fff' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>Misi</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Menyediakan produk elektrikal berkualitas tinggi bergaransi resmi dari brand ternama dunia.',
                  'Menghadirkan layanan instalasi & maintenance elektrikal dengan standar keselamatan tertinggi.',
                  'Memberikan edukasi teknis & dukungan penuh kepada klien untuk efisiensi operasional jangka panjang.',
                  'Membangun kemitraan jangka panjang berbasis kepercayaan, transparansi, & nilai tambah bersama.',
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--body)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    <span style={{ flexShrink: 0, width: '6px', height: '6px', borderRadius: '50%', background: 'var(--orange)', marginTop: '6px' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan (Mengapa Rizqy Utama) */}
      <section id="keunggulan" className="section-py" style={{ background: 'var(--white)' }}>
        <div className="container-main">
          <SectionTitle
            eyebrow="KEUNGGULAN"
            title="Mengapa Memilih Rizqy Utama Electric?"
            subtitle="Komitmen kami untuk memberikan solusi elektrikal terbaik dengan produk original, layanan profesional, dan dukungan teknis penuh."
          />
          <KeunggulanGrid />
          <StatsStrip />
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}