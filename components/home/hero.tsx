import { Button } from '@/components/ui/button'
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Star className="h-4 w-4 fill-current" />
              <span>4.9/5 - 250+ Memnun Müşteri</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Şakayık Çubuklu Oda Kokusu
              <span className="block text-primary mt-2">Yaşam Alanınıza <em>Zarif</em> Dokunuş</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground">
              <strong>Premium şakayık esansı</strong>, doğal bambu çubukların inceliğiyle buluşuyor. 
              Mekanınızın atmosferini <u>dört ay boyunca</u> değiştiren bu koku deneyimi, 
              tamamen organik bileşenlerle hazırlanmıştır.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold"><strong>Organik</strong> Formülasyon</p>
                  <p className="text-sm text-muted-foreground">Kimyasal katkısız üretim</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold"><u>120 Gün</u> Etki Süresi</p>
                  <p className="text-sm text-muted-foreground">Kalıcı aromaterapi deneyimi</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Seçkin <em>Bambu</em> Çubuklar</p>
                  <p className="text-sm text-muted-foreground">Sekiz adet özel işlenmiş</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Anadolu <strong>Üretimi</strong></p>
                  <p className="text-sm text-muted-foreground">Yerli kaynaklarla imalat</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild>
                <a 
                  href="https://www.karakarhome.com.tr/sakayik-oda-kokusu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Hemen Sipariş Ver
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <Link href="/urun/sakayik">
                  Detaylı İncele
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
              <Image
                src="/product.webp"
                alt="Şakayık Çubuklu Oda Kokusu - Premium bambu çubuklu oda kokusu"
                width={600}
                height={600}
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
