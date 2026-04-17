import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function ProductDetail() {
  const productInfo = [
    { label: '<strong>Esans</strong> Miktarı', value: '<u>100ml</u> seçkin formülasyon' },
    { label: 'Bambu <em>Çubuk</em>', value: 'Sekiz adet özel işlenmiş' },
    { label: 'Koku <strong>Profili</strong>', value: 'Çiçeksi notalar - Pudralı hava' },
    { label: 'Kullanım <u>Süresi</u>', value: '120 güne kadar etki' },
  ]

  const scentNotes = [
    { title: '<strong>Açılış</strong> Notaları', notes: 'Şakayık çiçeği esansı, <em>bergamot</em> tazeliği' },
    { title: '<u>Kalp</u> Notaları', notes: 'Gül yaprakları, yasemin <strong>ekstraktı</strong>' },
    { title: 'Dip <em>Notaları</em>', notes: 'Beyaz misk aroması, <u>vanilya</u> sıcaklığı' },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
              <Image
                src="/product.webp"
                alt="Şakayık Çubuklu Oda Kokusu - Detaylı ürün görseli"
                width={800}
                height={800}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <strong>Teknik</strong> Özellikler ve <em>İçerik</em> Bilgisi
              </h2>
              <p className="text-lg text-muted-foreground">
                Şakayık esansının <u>100 mililitre</u> hacimde sunulduğu bu aromaterapi ürünü, sekiz adet bambu çubukla birlikte geliyor. Formülasyon tamamen bitkisel kaynaklı.
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {productInfo.map((info, index) => (
                    <div key={index} className="flex justify-between items-center pb-4 border-b last:border-0 last:pb-0">
                      <span className="font-semibold text-muted-foreground" dangerouslySetInnerHTML={{ __html: info.label }} />
                      <span className="font-medium" dangerouslySetInnerHTML={{ __html: info.value }} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-xl font-semibold mb-4">Koku Notaları</h3>
              <div className="space-y-3">
                {scentNotes.map((note, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-1" dangerouslySetInnerHTML={{ __html: note.title }} />
                    <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: note.notes }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
