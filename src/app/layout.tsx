import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from "@/shared/layout/Header/Header";
import Footer from "@/shared/layout/Footer/Footer";

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://selfcast.com'),
  title: {
    default: 'Selfcast - Get Discovered. Get Booked.',
    template: '%s | Selfcast',
  },
  description: 'The #1 casting app for talents and producers. Create your profile, apply for roles in film, TV, and commercials, and get booked directly. No agents required.',
  keywords: ['casting', 'acting jobs', 'film production', 'talents', 'models', 'actors', 'extras', 'commercials', 'casting calls', 'auditions'],
  openGraph: {
    title: 'Selfcast - Get Discovered. Get Booked.',
    description: 'Join the world\'s leading casting platform. Connect directly with producers and get booked for real jobs in film, TV, and commercials.',
    url: 'https://selfcast.com',
    siteName: 'Selfcast',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selfcast - The Casting App for Everyone',
    description: 'Book jobs in film, TV, and commercials. No agents needed. Download Selfcast today.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="layout">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
