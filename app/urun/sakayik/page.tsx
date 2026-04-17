import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Star, Package, Truck, Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = generatePageMetadata(
  'Şakayık Çubuklu Oda Kokusu - Ürün Detayı',
  'Premium şakayık esanslı çubuklu oda kokusu detaylı bilgileri, fiyat ve sipariş seçenekleri. %100 doğal, 4 ay dayanıklı, ücretsiz kargo.',
  '/urun/sakayik'
)

export default function ProductPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Şakayık Çubuklu Oda Kokusu',
    description: 'Premium şakayık esanslı çubuklu oda kokusu. 100ml, 8 bambu çubuk, 3-4 ay dayanıklı.',
    image: 'https://sakayikodakokusu.com.tr/product.webp',
    sku: 'SAKAYIK-001',
    brand: {
      '@type': 'Brand',
      name: 'Şakayık',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://sakayikodakokusu.com.tr/urun/sakayik',
      priceCurrency: 'TRY',
      price: '689',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Şakayık',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '250',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Ana Sayfaya Dön
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 sticky top-24">
              <Image
                src="/product.webp"
                alt="Şakayık Çubuklu Oda Kokusu - Premium bambu çubuklu oda kokusu"
                width={800}
                height={800}
                priority
                className="w-full h-full object-contain p-8"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
                <span className="text-sm text-muted-foreground">(250 değerlendirme)</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">Şakayık Çubuklu Oda Kokusu</h1>
              <p className="text-lg text-muted-foreground">
                Premium şakayık esansı ve doğal bambu çubuklar ile üretilmiş, evinize zarafet katan çubuklu oda kokusu.
              </p>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold text-primary">689₺</span>
              <span className="text-lg text-muted-foreground line-through">899₺</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                %23 İndirim
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>%100 Doğal İçerik</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>4 Ay Dayanıklı</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Ücretsiz Kargo</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>14 Gün İade</span>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4">Ürün Özellikleri</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hacim</span>
                    <span className="font-medium">100ml</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Çubuk Sayısı</span>
                    <span className="font-medium">8 adet bambu</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Koku Ailesi</span>
                    <span className="font-medium">Çiçeksi - Pudralı</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dayanıklılık</span>
                    <span className="font-medium">3-4 ay</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Üretim</span>
                    <span className="font-medium">Türkiye</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Button size="lg" className="w-full text-lg h-14" asChild>
                <a href="https://www.karakarhome.com.tr/sakayik-oda-kokusu/" target="_blank" rel="noopener noreferrer">
                  Hemen Sipariş Ver - 689₺
                </a>
              </Button>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Package className="h-6 w-6 text-primary" />
                  <span className="text-xs text-muted-foreground">Güvenli Paketleme</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Truck className="h-6 w-6 text-primary" />
                  <span className="text-xs text-muted-foreground">Hızlı Kargo</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="text-xs text-muted-foreground">Güvenli Ödeme</span>
                </div>
              </div>
            </div>

            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Koku Notaları</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Üst:</span>
                    <span className="text-muted-foreground ml-2">Şakayık çiçeği, bergamot</span>
                  </div>
                  <div>
                    <span className="font-medium">Orta:</span>
                    <span className="text-muted-foreground ml-2">Gül, yasemin</span>
                  </div>
                  <div>
                    <span className="font-medium">Alt:</span>
                    <span className="text-muted-foreground ml-2">Beyaz misk, vanilya</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <Link href="/" className="text-primary hover:underline font-medium">Ana sayfamızda</Link> şakayık kokusu hakkında detaylı bilgi bulabilirsiniz. 
                Sorularınız için <Link href="/iletisim" className="text-primary hover:underline font-medium">iletişim sayfamızı</Link> ziyaret edebilir, 
                firmamız hakkında <Link href="/hakkimizda" className="text-primary hover:underline font-medium">daha fazla bilgi</Link> alabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
