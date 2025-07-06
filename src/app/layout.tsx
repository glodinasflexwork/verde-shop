import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Providers } from '@/components/providers'
import { Toaster } from '@/components/ui/toaster'
import { ToastContainer } from '@/components/ui/toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flint & Glow - Duurzame Mode & Schoonheid',
  description: 'Ontdek onze collectie van duurzame mode en natuurlijke schoonheidsproducten bij Flint & Glow. Ethisch geproduceerd, milieuvriendelijk en stijlvol.',
  keywords: 'duurzame mode, natuurlijke schoonheid, eco-friendly, biologisch katoen, Nederland, Flint & Glow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  )
}

