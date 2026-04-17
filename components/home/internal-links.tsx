import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function InternalLinks() {
  const links = [
    {
      title: 'Ürün Detayları',
      description: 'Şakayık çubuklu oda kokusunun tüm özellikleri, fiyat bilgisi ve sipariş seçenekleri.',
      href: '/urun/sakayik',
    },
    {
      title: 'Hakkımızda',
      description: 'Markamız, değerlerimiz ve doğal ürün üretim sürecimiz hakkında bilgi edinin.',
      href: '/hakkimizda',
    },
    {
      title: 'İletişim',
      description: 'Sorularınız için bizimle iletişime geçin. Telefon, e-posta ve canlı destek seçenekleri.',
      href: '/iletisim',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Daha Fazla <strong>Bilgi</strong>
          </h2>
          <p className="text-muted-foreground">
            Şakayık oda kokusu hakkında <em>detaylı</em> bilgilere ulaşın
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer group">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {link.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Detayları Gör
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
