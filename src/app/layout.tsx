import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Switch-Phone - The Future of Emergency Response',
  description: 'Revolutionary emergency response device with cutting-edge technology and intuitive design for immediate assistance when seconds count.',
  keywords: 'emergency response, switch phone, safety device, emergency communication, smart phone, emergency alert',
  authors: [{ name: 'Switch-Phone Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/favicon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'Switch-Phone - The Future of Emergency Response',
    description: 'Revolutionary emergency response device with cutting-edge technology and intuitive design for immediate assistance when seconds count.',
    type: 'website',
    images: [
      {
        url: '/switchphone.png',
        width: 1200,
        height: 630,
        alt: 'Switch-Phone Emergency Response Device',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Switch-Phone - The Future of Emergency Response',
    description: 'Revolutionary emergency response device with cutting-edge technology and intuitive design for immediate assistance when seconds count.',
    images: ['/switchphone.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-inter`}>
        <ClientLayout>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        </ClientLayout>
      </body>
    </html>
  )
} 