import { Card, CardContent } from '@/components/ui/card'
import { Flower2, Sparkles, Shield, Clock, Leaf, Heart } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: '<strong>Seçkin</strong> Üretim Standardı',
      description: 'Fransız parfüm teknolojisiyle hazırlanan esanslar, <em>titiz kalite kontrolünden</em> geçiyor. Her şişe laboratuvar onaylı.',
    },
    {
      icon: Leaf,
      title: 'Organik <u>Bileşen</u> Garantisi',
      description: 'Formülasyonda sentetik madde bulunmuyor. Bitkisel ekstraktlar ve <strong>doğal yağlar</strong> kullanılarak oluşturuldu.',
    },
    {
      icon: Clock,
      title: 'Dört Aylık Aromaterapi',
      description: 'Kesintisiz koku yayılımı <u>120 güne</u> kadar devam ediyor. Ekonomik tüketim, <em>maksimum verim</em> sağlıyor.',
    },
    {
      icon: Heart,
      title: 'Sağlık Onaylı <strong>Formül</strong>',
      description: 'Dermatolojik testlerden başarıyla geçti. Evcil dostlarınız için <u>tamamen zararsız</u>, alerji riski içermiyor.',
    },
  ]

  return (
    <section id="ozellikler" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Şakayık Oda Kokusunu <em>Farklı</em> Kılan Özellikler
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Yaşam alanınıza <strong>değer katacak</strong> detaylar, sağlığınızı koruyan <u>organik içerik</u> ve seçkin üretim anlayışı
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2" dangerouslySetInnerHTML={{ __html: feature.title }} />
                  <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: feature.description }} />
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
