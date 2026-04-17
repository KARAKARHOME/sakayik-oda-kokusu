import Hero from '@/components/home/hero'
import Features from '@/components/home/features'
import ProductDetail from '@/components/home/product-detail'
import AboutScent from '@/components/home/about-scent'
import UsageAreas from '@/components/home/usage-areas'
import HowToUse from '@/components/home/how-to-use'
import FAQ from '@/components/home/faq'
import InternalLinks from '@/components/home/internal-links'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Şakayık Çubuklu Oda Kokusu',
    description: 'Premium şakayık esanslı çubuklu oda kokusu. %100 doğal içerik, uzun ömürlü, zarif tasarım.',
    image: 'https://sakayikodakokusu.com.tr/product.webp',
    brand: {
      '@type': 'Brand',
      name: 'Şakayık',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'TRY',
      price: '689',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '250',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Features />
      <ProductDetail />
      <AboutScent />
      <UsageAreas />
      <HowToUse />
      <FAQ />
      <InternalLinks />
    </>
  )
}
