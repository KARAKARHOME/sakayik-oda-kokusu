import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Mail, Phone, MapPin, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.webp"
                alt="Şakayık Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Şakayık
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium şakayık esanslı çubuklu oda kokusu ile evinize doğal zarafet katın.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/urun/sakayik" className="text-muted-foreground hover:text-primary transition-colors">
                  Ürün Detayı
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-muted-foreground hover:text-primary transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-muted-foreground hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@sakayikodakokusu.com.tr" className="hover:text-primary transition-colors">
                  info@sakayikodakokusu.com.tr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+905451814040" className="hover:text-primary transition-colors">
                  +90 545 181 40 40
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Esenyalı Mah. Edebali Cad. No:13/A<br />34903 Pendik / İstanbul</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Bizi Takip Edin</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/karakarhome"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/KARAKARHOME/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/karakarhome"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@KARAKARHOME"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <a href="https://wa.me/905451814040?text=Merhaba" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">
                WhatsApp Destek
              </a>
              <a href="https://tawk.to/karakar" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">
                Canlı Destek
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="mb-2">&copy; {currentYear} Şakayık Çubuklu Oda Kokusu. Tüm hakları saklıdır.</p>
          <p>
            Daha fazla seçenek için{' '}
            <a 
              href="https://www.karakarhome.com.tr/oda-kokulari/" 
              target="_blank" 
              rel="dofollow"
              className="text-primary hover:underline font-medium"
            >
              Oda Kokuları
            </a>
            {' '}koleksiyonumuzu keşfedin.
          </p>
        </div>
      </div>
    </footer>
  )
}
