// 'use client';

import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

export const metadata: Metadata = {
  title: 'My Cosmic Portfolio',
  description: 'Exploring the universe of Blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}