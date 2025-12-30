import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import EmbedScript from '@/components/embed-script'

export const metadata: Metadata = {
  title: 'Trainee Tracker',
  description: 'Trainee Tracker',
  generator: 'Trainee Tracker',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      

      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
       
        {children}
        
        <Analytics />
      </body>
    </html>
  )
}
