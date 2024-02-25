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
      <head>
      <script
        defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDZLZ7lGMz9xDLBFhp9mpV9R50X44I9T04&libraries=places&callback"
      ></script>
      </head>
      <body className={inter.className}>
        {children}  
        <Footer />
        <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=afc9c955-3cd6-4f3c-8e01-c18f85072bb3"> </script>
      </body>
    </html>
  )
}
