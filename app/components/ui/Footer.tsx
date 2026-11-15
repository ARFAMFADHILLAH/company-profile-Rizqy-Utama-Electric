'use client'

import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { companyInfo } from '@/app/data'

export function Footer() {
  return (
    <footer style={{ background: 'var(--navy-dark)', color: '#fff' }}>
      <div className="container-main section-py" style={{ paddingBottom: '2rem' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px,1fr))', gap:'2rem' }}>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:'.75rem', marginBottom:'1rem' }}>
              <img src="/logo/circle-logo-rizqyutama.png" alt="" style={{ width:44, height:44 }} />
              <div>
                <div style={{ fontWeight:800, fontSize:'1.1rem' }}>{companyInfo.name}</div>
                <div style={{ fontSize:'.8rem', color:'rgba(255,255,255,.7)' }}>Electrical Contractor & Supplier</div>
              </div>
            </div>
            <p style={{ color:'rgba(255,255,255,.75)', fontSize:'.9375rem' }}>Penyedia solusi panel listrik, instalasi, maintenance, dan perlengkapan elektrikal untuk kebutuhan industri, komersial, dan residensial.</p>
          </div>
          <div>
            <h4 style={{ color:'#fff', marginBottom:'.75rem' }}>Menu</h4>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'grid', gap:'.5rem', color:'rgba(255,255,255,.8)' }}>
              <li><a href="#beranda" className="footer-link">Beranda</a></li>
              <li><a href="#tentang" className="footer-link">Tentang Kami</a></li>
              <li><a href="#layanan" className="footer-link">Layanan</a></li>
              <li><a href="#produk" className="footer-link">Produk</a></li>
              <li><a href="#kontak" className="footer-link">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color:'#fff', marginBottom:'.75rem' }}>Kategori</h4>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'grid', gap:'.5rem', color:'rgba(255,255,255,.8)' }}>
              <li className="footer-link">Alat Ukur</li>
              <li className="footer-link">Air Conditioner</li>
              <li className="footer-link">Pompa</li>
              <li className="footer-link">Water Heater</li>
              <li className="footer-link">Alat Safety</li>
              <li className="footer-link">Material Elektrikal</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color:'#fff', marginBottom:'.75rem' }}>Kontak</h4>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'grid', gap:'.6rem', color:'rgba(255,255,255,.8)', fontSize:'.9375rem' }}>
              <li style={{ display:'flex', gap:'.5rem' }}><MapPin className="w-4 h-4 mt-1" /> Jakarta & Bekasi</li>
              <li style={{ display:'flex', gap:'.5rem' }}><Phone className="w-4 h-4 mt-1" /> {companyInfo.phone}</li>
              <li style={{ display:'flex', gap:'.5rem' }}><Mail className="w-4 h-4 mt-1" /> {companyInfo.email}</li>
              <li style={{ display:'flex', gap:'.5rem' }}><Clock className="w-4 h-4 mt-1" /> {companyInfo.operationalHours}</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ borderTop:'1px solid rgba(255,255,255,.12)' }}>
        <div className="container-main" style={{ padding:'1rem 1rem', textAlign:'center', color:'rgba(255,255,255,.65)', fontSize:'.875rem' }}>
          © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
