import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import AnnouncementBar from '@components/AnnouncementBar'
import Nav from '@components/Nav'
import Footer from '@components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Supreme Transfer',
  description: 'The leading airport transfer service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}  
        <Footer />
      </body>
    </html>
  )
}
