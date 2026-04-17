import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Card, CardContent } from '@/components/ui/card'
import { Award, Heart, Leaf, Shield, Users, Sparkles } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(
  'Hakkımızda - Şakayık Çubuklu Oda Kokusu',
  'Şakayık Çubuklu Oda Kokusu markası hakkında bilgi. Doğal, premium kalite ürünler ile evinize zarafet katıyoruz.',
  '/hakkimizda'
)

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Tutkuyla Üretim',
      description: 'Her ürünümüzü sevgiyle ve özenle üretiyoruz',
    },
    {
      icon: Leaf,
      title: '%100 Doğal',
      description: 'Sadece doğal ve güvenli içerikler kullanıyoruz',
    },
    {
      icon: Award,
      title: 'Premium Kalite',
      description: 'En yüksek kalite standartlarında üretim',
    },
    {
      icon: Users,
      title: 'Müşteri Memnuniyeti',
      description: 'Mutlu müşteriler bizim en büyük başarımız',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hakkımızda
          </h1>
          <p className="text-xl text-muted-foreground">
            Doğal ve premium kalite ürünlerle evinize zarafet katıyoruz
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-16">
          <h2>Hikayemiz</h2>
          <p>
            Şakayık Çubuklu Oda Kokusu, evinize doğal ve zarif bir atmosfer katma fikrinden doğdu. 
            Sentetik kokulardan uzak, %100 doğal içeriklerle üretilen{' '}
            <Link href="/urun/sakayik" className="text-primary hover:underline">ürünlerimiz</Link>, şakayık çiçeğinin 
            büyüleyici kokusunu evinize taşıyor.
          </p>
          <p>
            Premium kalite bambu çubuklar ve özel olarak formüle edilmiş esanslarımız ile 
            evinizin her köşesine lüks ve huzur katıyoruz. Fransız parfüm uzmanları ile 
            çalışarak geliştirdiğimiz koku notalarımız, hem rahatlatıcı hem de sofistike 
            bir deneyim sunuyor. <Link href="/" className="text-primary hover:underline">Ana sayfamızda</Link> detaylı bilgi bulabilirsiniz.
          </p>

          <h2>Misyonumuz</h2>
          <p>
            Evleri sadece yaşanan yerler değil, hissedilen mekanlar haline getirmek. 
            Doğal ve güvenli ürünlerle, her evin kendine özgü kokusunu yaratmasına 
            yardımcı olmak istiyoruz.
          </p>

          <h2>Vizyonumuz</h2>
          <p>
            Türkiye'nin en güvenilir ve tercih edilen doğal oda kokusu markası olmak. 
            Sürdürülebilir üretim ve çevre dostu yaklaşımımızla sektöre öncülük etmek.
            Sorularınız için <Link href="/iletisim" className="text-primary hover:underline">bizimle iletişime</Link> geçebilirsiniz.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Değerlerimiz</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Neden Şakayık?</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>%100 doğal ve güvenli içerikler</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Fransız parfüm uzmanları ile geliştirilen özel formül</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Dermatolojik olarak test edilmiş</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Evcil hayvan dostu</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Çevre dostu ve sürdürülebilir üretim</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Türkiye'de üretim</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
