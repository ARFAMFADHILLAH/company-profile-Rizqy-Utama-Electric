import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const inter = localFont({
  src: [
    { path: '../public/fonts/Inter-Regular.ttf', weight: '400' },
    { path: '../public/fonts/Inter-Medium.ttf', weight: '500' },
    { path: '../public/fonts/Inter-SemiBold.ttf', weight: '600' },
    { path: '../public/fonts/Inter-Bold.ttf', weight: '700' },
  ],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = localFont({
  src: [
    { path: '../public/fonts/JetBrainsMono-Regular.ttf', weight: '400' },
    { path: '../public/fonts/JetBrainsMono-Medium.ttf', weight: '500' },
  ],
  variable: '--font-mono',
  display: 'swap',
})

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
    <html lang="id" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-white text-[#0B1A33] antialiased selection:bg-navy-200 selection:text-navy-900">
        {children}
      </body>
    </html>
  )
}