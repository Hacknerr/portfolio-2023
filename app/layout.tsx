import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export const metadata = {
  title: 'André Gärtner | Portfolio',
  description: 'A comprehensive showcase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
