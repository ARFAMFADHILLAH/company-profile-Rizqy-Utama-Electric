import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rizqy Utama Electric - Kontraktor & Supplier Elektrikal',
  description: 'Pusat layanan kontraktor elektrikal, panel maker, dan supplier alat listrik, AC, pompa, water heater, dan alat safety terpercaya.',
  icons: {
    icon: '/logo/circle-logo-rizqyutama.png',
    shortcut: '/logo/circle-logo-rizqyutama.png',
    apple: '/logo/circle-logo-rizqyutama.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="bg-slate-50 text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  )
}
