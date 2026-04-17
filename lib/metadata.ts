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
  applicationName: siteName,
  referrer: 'origin-when-cross-origin',
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
  authors: [{ name: 'KARAKAR HOME', url: 'https://www.karakarhome.com.tr' }],
  creator: 'KARAKAR HOME',
  publisher: 'KARAKAR HOME',
  category: 'E-commerce',
  classification: 'Ev Dekorasyon, Oda Kokusu',
  alternates: {
    canonical: siteUrl,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    countryName: 'Turkey',
    emails: ['info@sakayikodakokusu.com.tr'],
    phoneNumbers: ['+905451814040'],
    images: [
      {
        url: `${siteUrl}/product.webp`,
        width: 1200,
        height: 630,
        alt: siteName,
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@karakarhome',
    creator: '@karakarhome',
    title: siteName,
    description: siteDescription,
    images: [`${siteUrl}/product.webp`],
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
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = '',
  image: string = '/product.webp'
): Metadata {
  const url = `${siteUrl}${path}`
  const fullImageUrl = `${siteUrl}${image}`
  
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
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/webp',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@karakarhome',
      creator: '@karakarhome',
      title,
      description,
      images: [fullImageUrl],
    },
  }
}
