'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { Quote, Star } from 'lucide-react'

type Review = {
  id: string
  name: string
  role: string
  rating: number
  text: string
  createdAt: string
}

const STORAGE_KEY = 'rue_reviews'
const BASE_RATING = 4.8
const BASE_COUNT = 55
const BASE_SOLD = 320

const seedReviews: Review[] = [
  {
    id: 'seed-1',
    name: 'Budi Santoso',
    role: 'Plant Manager, PT Industri Jaya',
    rating: 5,
    text: 'Tim Rizqy Utama Electric sangat profesional dalam menangani instalasi panel MDB untuk pabrik kami. Pengerjaan tepat waktu, rapi, dan semua sertifikat kelengkapan diserahkan dengan lengkap.',
    createdAt: '2026-01-10',
  },
  {
    id: 'seed-2',
    name: 'Siti Rahayu',
    role: 'QA Manager, PT Teknologi Mandiri',
    rating: 5,
    text: 'Kami menggunakan jasa kalibrasi alat ukur berkala dari RUE. Teknisi berpengalaman, laporan detail, dan sertifikat diakui KAN. Sangat memudahkan audit internal dan eksternal.',
    createdAt: '2026-02-14',
  },
  {
    id: 'seed-3',
    name: 'Dedi Prasetyo',
    role: 'Facility Manager, Gedung Cyber Tower',
    rating: 4,
    text: 'Instalasi AC VRV untuk gedung kantor 15 lantai selesai lancar. After-sales responsif, spare part tersedia, dan tim maintenance rutin bulanan sangat membantu operasional kami.',
    createdAt: '2026-03-02',
  },
]

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() || '')
    .join('') || 'U'
}

function Stars({ value, size = 16 }: { value: number; size?: number }) {
  return (
    <div className="stars" aria-label={`Rating ${value} dari 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={i <= Math.round(value) ? 'star filled' : 'star'}
          fill={i <= Math.round(value) ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  )
}

export function Testimoni() {
  const [userReviews, setUserReviews] = useState<Review[]>([])
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [rating, setRating] = useState(5)
  const [text, setText] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setUserReviews(JSON.parse(raw))
    } catch {}
  }, [])

  const allReviews = useMemo(() => [...userReviews, ...seedReviews], [userReviews])

  const stats = useMemo(() => {
    const extraCount = userReviews.length
    const extraSum = userReviews.reduce((sum, r) => sum + r.rating, 0)
    const count = BASE_COUNT + extraCount
    const avg = count > 0 ? (BASE_RATING * BASE_COUNT + extraSum) / count : BASE_RATING
    return { avg: Math.round(avg * 10) / 10, count, sold: BASE_SOLD }
  }, [userReviews])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !text.trim()) return
    const review: Review = {
      id: `${Date.now()}`,
      name: name.trim(),
      role: role.trim() || 'Pelanggan',
      rating,
      text: text.trim(),
      createdAt: new Date().toISOString().slice(0, 10),
    }
    const next = [review, ...userReviews]
    setUserReviews(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {}
    setName('')
    setRole('')
    setRating(5)
    setText('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="review-wrap">
      <div className="review-summary-card">
        <div className="review-summary-main">
          <div className="review-score">{stats.avg.toFixed(1)}</div>
          <div>
            <Stars value={stats.avg} size={18} />
            <div className="review-summary-meta">{stats.avg.toFixed(1)} ({stats.count}) • {stats.sold} terjual</div>
          </div>
        </div>
        <div className="review-summary-title">Rating &amp; Ulasan</div>
      </div>

      <div className="grid-1-2-3 review-grid">
        {allReviews.map((review) => (
          <div key={review.id} className="testimonial-card review-card">
            <div className="review-card-top">
              <Stars value={review.rating} size={14} />
              <span className="review-date">{review.createdAt}</span>
            </div>
            <Quote className="testimonial-quote" aria-hidden="true" />
            <p className="testimonial-text">{review.text}</p>
            <div className="testimonial-author mt-auto">
              <div className="testimonial-avatar">{initials(review.name)}</div>
              <div>
                <div className="testimonial-name">{review.name}</div>
                <div className="testimonial-role">{review.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="review-form-card">
        <h3 className="review-form-title">Tulis Ulasan</h3>
        <p className="review-form-sub">Bagikan pengalaman Anda. Ulasan akan ditampilkan di halaman ini.</p>
        {submitted && <div className="review-success">Terima kasih! Ulasan Anda berhasil dikirim.</div>}
        <form onSubmit={handleSubmit} className="review-form">
          <div className="form-grid">
            <div>
              <label htmlFor="review-name" className="form-label">Nama</label>
              <input id="review-name" className="form-input" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Nama Anda" />
            </div>
            <div>
              <label htmlFor="review-role" className="form-label">Perusahaan / Jabatan (opsional)</label>
              <input id="review-role" className="form-input" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Contoh: Purchasing, PT ABC" />
            </div>
          </div>
          <div>
            <span className="form-label">Rating</span>
            <div className="rating-picker" role="radiogroup" aria-label="Pilih rating">
              {[1, 2, 3, 4, 5].map((v) => (
                <button
                  key={v}
                  type="button"
                  className={`rating-pick ${rating >= v ? 'active' : ''}`}
                  onClick={() => setRating(v)}
                  aria-label={`${v} bintang`}
                  aria-pressed={rating === v}
                >
                  <Star size={20} fill={rating >= v ? 'currentColor' : 'none'} />
                </button>
              ))}
              <span className="rating-pick-label">{rating}/5</span>
            </div>
          </div>
          <div>
            <label htmlFor="review-text" className="form-label">Ulasan / Komentar</label>
            <textarea id="review-text" className="form-textarea" rows={4} value={text} onChange={(e) => setText(e.target.value)} required placeholder="Ceritakan pengalaman Anda..." />
          </div>
          <button type="submit" className="btn-primary" style={{ width: 'fit-content' }}>Kirim Ulasan</button>
        </form>
      </div>
    </div>
  )
}