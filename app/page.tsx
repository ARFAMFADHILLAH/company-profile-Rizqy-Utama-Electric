'use client'

import React, { useState, useEffect } from 'react'
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, 
  Cpu, Zap, Wrench, Wind, Activity, Droplet, Flame, 
  ShieldAlert, Layers, CheckCircle, ArrowRight, ExternalLink,
  Home as HomeIcon, Package, Tag, MapPin as MapPinIcon, ShieldCheck
} from 'lucide-react'
import { companyInfo, services, categories, measuringBrands, acBrands, pumpBrands, safetyBrands, electricalBrands } from './data'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Chunk measuringBrands into pairs of 2
  const brandPairs = []
  for (let i = 0; i < measuringBrands.length; i += 2) {
    brandPairs.push(measuringBrands.slice(i, i + 2))
  }

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % brandPairs.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [isPaused, brandPairs.length])

  const getIcon = (name: string) => {
    switch(name) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-orange" />
      case 'Zap': return <Zap className="w-5 h-5 text-orange" />
      case 'Wrench': return <Wrench className="w-5 h-5 text-orange" />
      case 'Wind': return <Wind className="w-5 h-5 text-orange" />
      case 'Activity': return <Activity className="w-5 h-5 text-orange" />
      case 'Droplet': return <Droplet className="w-5 h-5 text-orange" />
      case 'Flame': return <Flame className="w-5 h-5 text-orange" />
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-orange" />
      default: return <Layers className="w-5 h-5 text-orange" />
    }
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-800 pb-20 md:pb-0">
      
      {/* Top Bar - Navy */}
      <div className="bg-navy text-slate-300 text-[11px] sm:text-xs py-2 px-4 border-b border-navy-dark">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-orange" /> {companyInfo.phone}</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-orange" /> {companyInfo.email}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-orange" />
            <span>Jam Operasional: {companyInfo.operationalHours}</span>
          </div>
        </div>
      </div>

      {/* Header - Navy */}
      <header className="sticky top-0 z-50 bg-navy border-b border-navy-dark">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo/circle-logo-rizqyutama.png" alt="Logo" className="w-10 h-10 object-contain" />
            <div>
              <span className="font-bold text-white text-base sm:text-lg leading-none block tracking-tight">{companyInfo.name}</span>
              <span className="text-[11px] font-medium text-slate-300 block mt-0.5 tracking-wider uppercase">Electrical Contractor & Supplier</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#beranda" className="hover:text-orange transition">Beranda</a>
            <a href="#tentang" className="hover:text-orange transition">Tentang Kami</a>
            <a href="#layanan" className="hover:text-orange transition">Layanan</a>
            <a href="#kategori" className="hover:text-orange transition">Produk</a>
            <a href="#merk" className="hover:text-orange transition">Brand</a>
            <a href="#kontak" className="hover:text-orange transition">Kontak</a>
          </nav>

          <div className="hidden md:block">
            <a 
              href={companyInfo.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange hover:bg-orange-hover text-white font-medium px-5 py-2.5 rounded-lg text-xs tracking-wider uppercase flex items-center gap-2 transition shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation - Clean & Fixed */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg py-2 px-3 flex justify-around items-center">
        <a href="#beranda" className="flex flex-col items-center gap-0.5 text-[11px] text-slate-600 hover:text-orange transition">
          <HomeIcon className="w-5 h-5" />
          <span>Beranda</span>
        </a>
        <a href="#kategori" className="flex flex-col items-center gap-0.5 text-[11px] text-slate-600 hover:text-orange transition">
          <Package className="w-5 h-5" />
          <span>Produk</span>
        </a>
        <a href="#merk" className="flex flex-col items-center gap-0.5 text-[11px] text-slate-600 hover:text-orange transition">
          <Tag className="w-5 h-5" />
          <span>Brand</span>
        </a>
        <a href="#kontak" className="flex flex-col items-center gap-0.5 text-[11px] text-slate-600 hover:text-orange transition">
          <MapPinIcon className="w-5 h-5" />
          <span>Kontak</span>
        </a>
        <a 
          href={companyInfo.whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 text-[11px] text-white bg-orange px-3 py-1 rounded-full shadow"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="font-medium">WA</span>
        </a>
      </nav>

      {/* Hero Section - Navy */}
      <section id="beranda" className="bg-navy text-white py-16 lg:py-24 border-b border-navy-dark">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-flex items-center gap-2 bg-orange/20 border border-orange/30 px-3.5 py-1.5 rounded-full text-orange text-xs font-semibold tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4 text-orange" /> Terpercaya & Berpengalaman Sejak September 2019
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Solusi Profesional Kontraktor Elektrikal & Supplier Alat Listrik
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {companyInfo.tagline}. Melayani pengadaan material listrik, perakitan panel, AC, pompa, water heater, dan alat safety untuk kebutuhan komersial serta industri.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href={companyInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange hover:bg-orange-hover text-white text-xs font-semibold tracking-wider uppercase px-7 py-3.5 rounded-lg flex items-center gap-2 transition shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" /> Hubungi WhatsApp
                </a>
                <a 
                  href="#kategori"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs font-semibold tracking-wider uppercase px-7 py-3.5 rounded-lg flex items-center gap-2 transition"
                >
                  Lihat Katalog Produk <ArrowRight className="w-4 h-4 text-orange" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-navy-dark p-6 sm:p-8 rounded-2xl border border-navy shadow-sm space-y-4">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider border-b border-navy pb-3">Keunggulan Layanan</h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-orange flex-shrink-0" />
                  <span>Produk 100% Original & Bergaransi</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-orange flex-shrink-0" />
                  <span>Tim Teknisi Ahli & Bersertifikat</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-orange flex-shrink-0" />
                  <span>Workshop di Jakarta & Bekasi</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-orange flex-shrink-0" />
                  <span>Pelayanan Retail & Skala Industri</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami - Clean White */}
      <section id="tentang" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="text-orange font-bold tracking-wider text-xs uppercase bg-orange/10 px-3.5 py-1 rounded-full">Tentang Perusahaan</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">Mitra Terpercaya Kebutuhan Elektrikal & Teknik</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Berdiri sejak September 2019, <strong className="text-navy">{companyInfo.name}</strong> hadir sebagai jawaban atas kebutuhan sistem kelistrikan yang aman, handal, dan berstandar tinggi untuk gedung komersial maupun fasilitas industri.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Kami menyediakan layanan komprehensif mulai dari penyediaan alat teknik, perakitan panel listrik, hingga jasa instalasi dan perawatan berkala.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl space-y-4 shadow-sm">
              <h3 className="font-bold text-navy text-sm uppercase tracking-wider">Ringkasan Profil</h3>
              <ul className="text-xs text-slate-600 space-y-3">
                <li className="flex justify-between border-b border-slate-200 pb-2.5">
                  <span className="text-slate-500">Tahun Berdiri:</span> <span className="font-semibold text-navy">September 2019</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-2.5">
                  <span className="text-slate-500">Jam Operasional:</span> <span className="font-semibold text-navy">09.00 - 17.00 WIB (Senin - Sabtu)</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-2.5">
                  <span className="text-slate-500">Cakupan Layanan:</span> <span className="font-semibold text-navy">Nasional (B2B & Retail)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-500">Workshop:</span> <span className="font-semibold text-navy">Jakarta & Bekasi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan - Slate-50 */}
      <section id="layanan" className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-14 text-center max-w-2xl mx-auto space-y-2">
            <span className="text-orange font-bold tracking-wider text-xs uppercase bg-orange/10 px-3.5 py-1 rounded-full">Layanan Kami</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">Spesialisasi Jasa Elektrikal</h2>
            <p className="text-sm text-slate-600">Solusi pengerjaan teknis profesional untuk instalasi, perakitan, dan perawatan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-orange transition duration-300 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center mb-6">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-3">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kategori Produk - White */}
      <section id="kategori" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-14 text-center max-w-2xl mx-auto space-y-2">
            <span className="text-orange font-bold tracking-wider text-xs uppercase bg-orange/10 px-3.5 py-1 rounded-full">Katalog Produk</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">Kategori Material & Alat Teknik</h2>
            <p className="text-sm text-slate-600">Penyediaan perlengkapan lengkap berkualitas tinggi untuk berbagai kebutuhan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-orange transition duration-300 shadow-sm">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center mb-6">
                  {getIcon(cat.icon)}
                </div>
                <h3 className="font-bold text-navy text-lg mb-3">{cat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand & Partner - Slate-50 */}
      <section id="merk" className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 mb-14 text-center max-w-2xl mx-auto space-y-2">
          <span className="text-orange font-bold tracking-wider text-xs uppercase bg-orange/10 px-3.5 py-1 rounded-full">Brand & Partner</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">Merk Terpercaya per Kategori</h2>
          <p className="text-sm text-slate-600">Kami menyediakan produk asli dan bergaransi resmi dari brand global.</p>
        </div>

        <div className="max-w-5xl mx-auto px-4 space-y-8">
          {/* Alat Ukur */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-navy mb-5">1. Alat Ukur Listrik</h3>
            <div 
              className="relative overflow-hidden py-3"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {brandPairs.map((pair, pIdx) => (
                  <div key={pIdx} className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-4 px-1">
                    {pair.map((brand, bIdx) => (
                      <div key={bIdx} className="bg-slate-50 border border-slate-200 h-28 rounded-xl flex items-center justify-center p-4">
                        <img src={brand.logo} alt={brand.name} className="h-16 max-w-[160px] object-contain" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AC */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-navy mb-4">2. AC (Air Conditioner)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {acBrands.map((b, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 hover:border-orange py-3 px-2 rounded-xl text-center text-xs font-semibold text-slate-700 transition">
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Pompa */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-navy mb-4">3. Pompa Air & Industri</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {pumpBrands.map((b, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 hover:border-orange py-3 px-2 rounded-xl text-center text-xs font-semibold text-slate-700 transition">
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Safety */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-navy mb-4">4. Alat Safety (APD)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {safetyBrands.map((b, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 hover:border-orange py-3 px-2 rounded-xl text-center text-xs font-semibold text-slate-700 transition">
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Elektrikal */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-navy mb-4">5. Elektrikal & Panel</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {electricalBrands.map((b, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 hover:border-orange py-3 px-2 rounded-xl text-center text-xs font-semibold text-slate-700 transition">
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kontak & Lokasi - White */}
      <section id="kontak" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-14 text-center max-w-2xl mx-auto space-y-2">
            <span className="text-orange font-bold tracking-wider text-xs uppercase bg-orange/10 px-3.5 py-1 rounded-full">Kontak Kami</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">Lokasi Workshop & Informasi</h2>
            <p className="text-sm text-slate-600">Silakan kunjungi workshop kami atau hubungi tim untuk konsultasi cepat.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-6 shadow-sm lg:sticky lg:top-28">
              <h3 className="font-bold text-navy text-base uppercase tracking-wider">Kontak Langsung</h3>
              <div className="text-xs text-slate-600 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-orange flex-shrink-0" />
                  <span className="font-medium text-slate-800">{companyInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-orange flex-shrink-0" />
                  <span className="font-medium text-slate-800">{companyInfo.email}</span>
                </div>
              </div>
              <div className="pt-2">
                <a 
                  href={companyInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-orange hover:bg-orange-hover text-white font-medium py-3 rounded-lg text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" /> Chat WhatsApp
                </a>
              </div>
            </div>
            
            {/* Workshop Jakarta & Bekasi */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Jakarta */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
                <div className="p-5 border-b border-slate-200">
                  <h4 className="font-bold text-navy text-sm mb-1.5">Workshop Jakarta</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{companyInfo.workshops[0].address}</p>
                </div>
                <div className="w-full h-52 bg-slate-200 overflow-hidden">
                  <iframe 
                    title="Google Maps Jakarta"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(companyInfo.workshops[0].address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* Bekasi */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
                <div className="p-5 border-b border-slate-200">
                  <h4 className="font-bold text-navy text-sm mb-1.5">Workshop Bekasi</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{companyInfo.workshops[1].address}</p>
                </div>
                <div className="w-full h-52 bg-slate-200 overflow-hidden">
                  <iframe 
                    title="Google Maps Bekasi"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(companyInfo.workshops[1].address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Clean Modern Agency Dark */}
      <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 text-xs">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <img src="/logo/circle-logo-rizqyutama.png" alt="Logo" className="w-8 h-8 object-contain bg-white rounded-lg p-0.5" />
            <span className="text-white font-semibold">{companyInfo.name} © {new Date().getFullYear()}</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 font-medium">
            <a href="#beranda" className="hover:text-orange transition">Beranda</a>
            <a href="#tentang" className="hover:text-orange transition">Tentang Kami</a>
            <a href="#layanan" className="hover:text-orange transition">Layanan</a>
            <a href="#kategori" className="hover:text-orange transition">Produk</a>
            <a href="#kontak" className="hover:text-orange transition">Kontak</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp - Desktop Only */}
      <a 
        href={companyInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-50 bg-orange hover:bg-orange-hover text-white p-4 rounded-full shadow-lg items-center justify-center transition hover:scale-105"
        aria-label="WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  )
}
