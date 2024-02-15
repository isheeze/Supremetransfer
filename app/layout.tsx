import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Nav from '@components/Nav'
import Footer from '@components/Footer'
import { theme } from '@sanity/lib/queries'
import { urlForImage } from '@sanity/lib/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: theme.websiteName,
  description: theme.websiteDescription,
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: urlForImage(theme.favicon),
        href: urlForImage(theme.favicon),
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: urlForImage(theme.favicon),
        href: urlForImage(theme.favicon),
      },
    ],
  },
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
