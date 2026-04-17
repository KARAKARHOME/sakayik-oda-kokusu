import { Metadata } from 'next'

const siteUrl = 'https://sakayik-oda-kokusu.com'
const siteName = 'Şakayık Çubuklu Oda Kokusu'
const siteDescription = 'Premium şakayık esanslı çubuklu oda kokusu. %100 doğal içerik, uzun ömürlü, zarif tasarım. Evinize doğal zarafet ve huzur katın.'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Evinize Doğal Zarafet`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'şakayık çubuklu oda kokusu',
    'çubuklu oda kokusu',
    'bambu çubuklu koku',
    'doğal oda kokusu',
    'ev parfümü',
    'aromaterapi çubuk',
    'oda spreyi',
    'ev kokusu',
    'şakayık kokusu',
    'premium oda kokusu',
    'lüks oda kokusu',
    'doğal aromaterapi',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: '/product.webp',
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: ['/product.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = ''
): Metadata {
  const url = `${siteUrl}${path}`
  
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
