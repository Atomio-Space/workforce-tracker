import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Workforce Tracker - Atomio Technologies',
  description: 'Program of Works tracking system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}