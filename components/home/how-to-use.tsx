import { Card, CardContent } from '@/components/ui/card'

export default function HowToUse() {
  const steps = [
    {
      number: '1',
      title: '<strong>Kapağı</strong> Açın',
      description: 'Şişenin üst kısmını <em>nazikçe</em> çıkarın. Kapağı <u>saklayın</u>.',
    },
    {
      number: '2',
      title: 'Çubukları <em>Daldırın</em>',
      description: 'Sekiz bambu çubuk <strong>esansa</strong> yerleştirilir. Eşit aralıkla <u>dağıtın</u>.',
    },
    {
      number: '3',
      title: '<u>İki</u> Saat Bekleyin',
      description: 'Esans çubuklara <em>emilir</em>. Koku yayılımı <strong>başlar</strong>.',
    },
    {
      number: '4',
      title: 'Yoğunluğu <strong>Ayarlayın</strong>',
      description: 'Küçük odalar <u>dört çubuk</u>, geniş alanlar <em>sekiz çubuk</em> gerektirir.',
    },
    {
      number: '5',
      title: 'Haftalık <em>Bakım</em>',
      description: 'Çubukları <strong>ters çevirin</strong>. Koku <u>tazeliği</u> korunur.',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <strong>Beş</strong> Adımda <em>Kullanım</em> Rehberi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Şakayık esansını <u>doğru</u> şekilde kullanın. Her aşama <strong>detaylı</strong> anlatıldı.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="relative">
                <CardContent className="pt-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2" dangerouslySetInnerHTML={{ __html: step.title }} />
                  <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: step.description }} />
                </CardContent>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="h-0.5 w-6 bg-primary/30" />
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-lg bg-primary/5 border border-primary/20">
            <h3 className="font-semibold text-lg mb-2"><strong>Uzman</strong> Tavsiyeleri</h3>
            <p className="text-sm text-muted-foreground">
              <u>Çubuk miktarı</u> mekan büyüklüğüne göre ayarlanır. On beş metrekareye kadar <em>dört çubuk</em> yeterli. 
              Otuz metrekare üstü alanlarda <strong>altı-sekiz çubuk</strong> kullanın. İlk gün çubukları <u>ters çevirin</u>, 
              esans emilimi hızlanır. Haftalık bakım <em>koku tazeliğini</em> korur.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
