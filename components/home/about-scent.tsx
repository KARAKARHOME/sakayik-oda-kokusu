import { Card, CardContent } from '@/components/ui/card'
import { Flower2, Sparkles } from 'lucide-react'

export default function AboutScent() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Şakayık Kokusu Nedir */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Flower2 className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Şakayık Kokusu <strong>Nedir</strong>?
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <strong>Şakayık çiçeği</strong>, bahar aylarının en görkemli bitkilerinden biridir. 
                Paeonia türünden gelen bu çiçek, <u>pembe tonlarıyla</u> doğada kendine özgü bir yer edinmiştir. 
                Kokusu ise çiçeğin görsel güzelliği kadar etkileyicidir.
              </p>

              <p className="leading-relaxed">
                Şakayık aroması <em>çiçeksi</em> notalarla başlar. Tatlı bir açılış yapan koku, 
                zamanla <strong>pudralı</strong> bir karaktere bürünür. Gül ve yasemin gibi klasik çiçek kokularından 
                farklı olarak, şakayık <u>daha hafif</u> ve zarif bir profil sergiler.
              </p>

              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Koku Karakteristiği</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Çiçeksi notalar</strong>: Taze şakayık yapraklarının doğal esansı</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><em>Pudralı hava</em>: Yumuşak, kadifemsi bir his bırakır</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><u>Tatlı dokunuşlar</u>: Vanilya ve misk ile desteklenir</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Bahar tazeliği: Bergamot ile canlılık kazanır</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <p className="leading-relaxed">
                Parfümeride şakayık esansı, <strong>romantik</strong> ve feminen kompozisyonlarda tercih edilir. 
                Ancak modern aromaterapi uygulamalarında, mekan kokularında da sıkça kullanılmaya başlanmıştır. 
                Özellikle <em>yaşam alanlarına</em> zarif bir atmosfer katmak isteyenler için ideal seçimdir.
              </p>
            </div>
          </div>

          {/* Şakayık Kokusu Nasıldır */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Şakayık Kokusu <em>Nasıldır</em>?
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Şakayık kokusunu tarif etmek, <u>bahar sabahını</u> anlatmaya benzer. 
                İlk karşılaşmada <strong>taze</strong> ve canlı bir his verir. 
                Ağır parfümlerden farklı olarak, <em>hafif</em> yapısıyla mekanı bunaltmaz.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="text-2xl">🌸</span>
                      İlk İzlenim
                    </h3>
                    <p className="text-sm">
                      Koku <strong>açıldığında</strong> taze çiçek notaları hissedilir. 
                      Bergamot tazeliği ile birleşen şakayık esansı, <u>canlandırıcı</u> bir etki yaratır. 
                      Sabah saatlerinde özellikle ferahlatıcıdır.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="text-2xl">💫</span>
                      Gelişim Süreci
                    </h3>
                    <p className="text-sm">
                      Zamanla <em>pudralı</em> karakteri öne çıkar. 
                      Gül ve yasemin notaları devreye girer. 
                      Koku <strong>yumuşar</strong>, daha zarif bir hal alır. 
                      Bu aşama <u>birkaç saat</u> sürebilir.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="text-2xl">🌙</span>
                      Son Notalar
                    </h3>
                    <p className="text-sm">
                      Beyaz misk ve <strong>vanilya</strong> dip notaları belirir. 
                      Koku <em>sıcak</em> bir karakter kazanır. 
                      Akşam saatlerinde <u>rahatlatıcı</u> etki gösterir. 
                      Huzurlu bir ortam yaratır.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="text-2xl">✨</span>
                      Genel Etki
                    </h3>
                    <p className="text-sm">
                      Şakayık kokusu <strong>dengeli</strong> yapısıyla dikkat çeker. 
                      Ne çok hafif, ne de ağırdır. 
                      <u>Her mevsim</u> kullanıma uygundur. 
                      Misafirler tarafından <em>beğenilir</em>.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p className="leading-relaxed">
                Koku yoğunluğu <strong>ayarlanabilir</strong> özelliktedir. 
                Bambu çubuk sayısını değiştirerek istediğiniz seviyeye getirebilirsiniz. 
                Küçük odalarda <u>dört çubuk</u> yeterlidir. 
                Geniş salonlarda <em>sekiz çubuk</em> kullanılabilir.
              </p>

              <Card className="border-secondary/20 bg-secondary/5">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Kimler Tercih Eder?</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium mb-2">✓ Çiçek kokusu sevenler</p>
                      <p className="font-medium mb-2">✓ Zarif atmosfer arayanlar</p>
                      <p className="font-medium mb-2">✓ Doğal ürün kullanıcıları</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">✓ Ev dekorasyonuna önem verenler</p>
                      <p className="font-medium mb-2">✓ Aromaterapi meraklıları</p>
                      <p className="font-medium mb-2">✓ Premium kalite arayanlar</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
