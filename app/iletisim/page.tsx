import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata(
  'İletişim - Şakayık Çubuklu Oda Kokusu',
  'Şakayık Çubuklu Oda Kokusu ile iletişime geçin. Sorularınız için bize ulaşın.',
  '/iletisim'
)

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'E-posta',
      content: 'info@sakayikodakokusu.com.tr',
      link: 'mailto:info@sakayikodakokusu.com.tr',
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+90 545 181 40 40',
      link: 'tel:+905451814040',
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Esenyalı Mah. Edebali Cad. No:13/A 34903 Pendik / İstanbul',
      link: null,
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      content: 'Pazartesi - Cumartesi: 09:00 - 19:00',
      link: null,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            İletişim
          </h1>
          <p className="text-xl text-muted-foreground">
            Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk duyarız
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            const content = info.link ? (
              <a href={info.link} className="hover:text-primary transition-colors">
                {info.content}
              </a>
            ) : (
              <span>{info.content}</span>
            )

            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <div className="text-sm text-muted-foreground">{content}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-6">Sıkça Sorulan Sorular</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Sipariş nasıl verebilirim?</h3>
                <p className="text-sm text-muted-foreground">
                  <Link href="/urun/sakayik" className="text-primary hover:underline">Ürün sayfasından</Link> &quot;Sipariş Ver&quot; butonuna tıklayarak online mağazamızdan sipariş verebilirsiniz. 
                  Alternatif olarak bizi arayarak da sipariş verebilirsiniz. <Link href="/" className="text-primary hover:underline">Ana sayfamızda</Link> detaylı bilgi bulabilirsiniz.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Kargo ücreti ne kadar?</h3>
                <p className="text-sm text-muted-foreground">
                  Türkiye geneline kargo ücretsizdir.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">İade politikanız nedir?</h3>
                <p className="text-sm text-muted-foreground">
                  Ürünü teslim aldıktan sonra 14 gün içinde iade edebilirsiniz. 
                  Ürün kullanılmamış ve orijinal ambalajında olmalıdır.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Toplu sipariş verebilir miyim?</h3>
                <p className="text-sm text-muted-foreground">
                  Evet, toplu siparişler için özel fiyatlandırma yapıyoruz. 
                  <Link href="/hakkimizda" className="text-primary hover:underline">Hakkımızda</Link> sayfasından firmamız hakkında bilgi alabilir, bizimle iletişime geçebilirsiniz.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 p-8 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 text-center">
          <h2 className="text-2xl font-bold mb-4">Bize Ulaşın</h2>
          <p className="text-muted-foreground mb-6">
            Herhangi bir sorunuz mu var? Size yardımcı olmaktan mutluluk duyarız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@sakayikodakokusu.com.tr"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              E-posta Gönder
            </a>
            <a
              href="tel:+905451814040"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              Bizi Arayın
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
