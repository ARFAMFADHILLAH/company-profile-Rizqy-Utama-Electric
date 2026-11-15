import React from 'react'
import { companyInfo } from '@/app/data'

type WorkshopLocationsProps = {
  embedded?: boolean
}

export function WorkshopLocations({ embedded = false }: WorkshopLocationsProps) {
  const workshops = companyInfo.workshops

  const content = (
    <div className="workshop-grid">
      {workshops.map((ws) => (
        <article key={ws.city} className="workshop-card">
          <span className="workshop-label">Workshop</span>
          <h2 className="workshop-city">{ws.city}</h2>
          <div className="workshop-meta">
            <span>{ws.address}</span>
            <span className="workshop-meta-sub">
              {companyInfo.operationalHours} &nbsp;·&nbsp; {companyInfo.phone}
            </span>
          </div>
          <div className="workshop-map">
            <iframe
              src={`${ws.mapUrl}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Peta Workshop ${ws.city} - ${companyInfo.name}`}
            />
          </div>
          <div className="workshop-actions">
            <a href={ws.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">
              Buka di Google Maps
            </a>
            <a href={companyInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">
              Chat WhatsApp
            </a>
          </div>
        </article>
      ))}
    </div>
  )

  if (embedded) return content

  return (
    <section id="workshops" className="workshop-section">
      <div className="container-main">{content}</div>
    </section>
  )
}