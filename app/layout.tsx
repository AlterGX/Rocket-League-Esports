import React from "react"
import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Inter, Poppins } from 'next/font/google'

import './globals.css'

const bebasNeue = Bebas_Neue({ 
  subsets: ['latin'],
  variable: '--font-bebas',
  weight: ['400']
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['700']
})

export const metadata: Metadata = {
  title: 'RL26 - Market | La Tabla Renovada',
  description: 'La Tabla ahora renovada muestra estadisticas, ofertas y premios',
  keywords: ['Rocket League', 'E-Sports', 'Market', 'RL26', 'Gaming'],
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${bebasNeue.variable} ${inter.variable} ${poppins.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
