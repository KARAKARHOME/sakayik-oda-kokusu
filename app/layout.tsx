import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { defaultMetadata } from "@/lib/metadata"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { OrganizationSchema, WebsiteSchema } from "@/components/seo/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = defaultMetadata

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#D946A6' },
    { media: '(prefers-color-scheme: dark)', color: '#D946A6' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
