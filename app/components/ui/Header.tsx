'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { MessageCircle, Home, Award, Building2, Wrench, Package, PhoneCall } from 'lucide-react'
import { companyInfo } from '@/app/data'

const navItems = [
  { href: '#beranda', label: 'Beranda', icon: Home },
  { href: '#brand', label: 'Brand', icon: Award },
  { href: '#tentang', label: 'Tentang', icon: Building2 },
  { href: '#layanan', label: 'Layanan', icon: Wrench },
  { href: '#produk', label: 'Produk', icon: Package },
  { href: '#kontak', label: 'Kontak', icon: PhoneCall },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-wrap">
          <div className="container-main navbar navbar-pill">
            <Link href="#beranda" className="brand" aria-label={companyInfo.name}>
              <img src="/logo/circle-logo-rizqyutama.png" alt="" className="brand-logo" />
              <div className="brand-text">
                <span className="brand-name">{companyInfo.name}</span>
                <span className="brand-tag">Electrical Contractor & Supplier</span>
              </div>
            </Link>

            <nav className="nav-links" aria-label="Navigasi utama">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
              ))}
            </nav>

            <div className="nav-actions">
              <a href={companyInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm nav-wa" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      <nav className="mobile-bottom-nav" aria-label="Navigasi mobile">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <a key={item.href} href={item.href} className="mobile-bottom-link">
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </a>
          )
        })}
      </nav>
    </>
  )
}
