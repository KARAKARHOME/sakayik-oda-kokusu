import { Card, CardContent } from '@/components/ui/card'
import { Sofa, Bed, Bath, Briefcase, Home, Heart } from 'lucide-react'

export default function UsageAreas() {
  const areas = [
    {
      icon: Sofa,
      title: '<strong>Salon</strong> ve Misafir Alanı',
      description: 'Konuklarınızı <em>sıcak</em> bir atmosferle karşılayın. <u>Şakayık</u> aroması sosyal ortamı zenginleştirir.',
    },
    {
      icon: Bed,
      title: 'Dinlenme <em>Odaları</em>',
      description: 'Uyku kalitenizi <strong>artıran</strong> rahatlatıcı notalar. Pudralı koku <u>huzur</u> veriyor.',
    },
    {
      icon: Bath,
      title: '<u>Banyo</u> ve Hijyen Alanları',
      description: 'Spa deneyimini evinize taşıyın. Günlük ritinizi <strong>lüks</strong> bir anla dönüştürün.',
    },
    {
      icon: Briefcase,
      title: 'Çalışma <strong>Mekanları</strong>',
      description: '<em>Konsantrasyon</em> seviyenizi yükselten aromaterapi. Stres azalır, <u>verimlilik</u> artar.',
    },
    {
      icon: Home,
      title: 'Giriş <u>Holü</u>',
      description: 'İlk izlenim unutulmaz olsun. Ziyaretçiler <strong>zarif</strong> kokuyla karşılanır.',
    },
    {
      icon: Heart,
      title: '<em>Yoga</em> ve Meditasyon',
      description: 'Ruhsal denge için <strong>ideal</strong> ortam. Odaklanma gücünüzü <u>destekleyen</u> aromaterapi.',
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Evinizin <strong>Her</strong> Köşesinde <em>Kullanım</em>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Şakayık esansı <u>altı farklı</u> mekanda test edildi. Salondan yatak odasına, <strong>her alan</strong> için uyumlu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2" dangerouslySetInnerHTML={{ __html: area.title }} />
                  <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: area.description }} />
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
