# 🌸 Şakayık Çubuklu Oda Kokusu

Premium şakayık esanslı çubuklu [oda kokusu](https://www.karakarhome.com.tr) web sitesi. Next.js 14, TypeScript ve TailwindCSS ile geliştirilmiş, SEO optimizasyonlu modern web uygulaması.

## 🏢 KARAKAR HOME

Bu proje **[KARAKAR HOME](https://www.karakarhome.com.tr)** şirketine aittir. KARAKAR HOME, premium kalitede [oda kokuları](https://www.karakarhome.com.tr) ve ev dekorasyon ürünleri konusunda uzmanlaşmış bir Türk markasıdır.

### 📍 İletişim Bilgileri

- **Web**: [www.karakarhome.com.tr](https://www.karakarhome.com.tr)
- **E-posta**: info@sakayikodakokusu.com.tr
- **Telefon**: +90 545 181 40 40
- **Adres**: Esenyalı Mah. Edebali Cad. No:13/A 34903 Pendik / İstanbul

### 🌐 Sosyal Medya

- [Instagram](https://www.instagram.com/karakarhome)
- [Facebook](https://www.facebook.com/KARAKARHOME/)
- [Twitter/X](https://x.com/karakarhome)
- [YouTube](https://www.youtube.com/@KARAKARHOME)

## ✨ Özellikler

- ✅ **Next.js 14** (App Router) - Static Site Generation
- ✅ **TypeScript** - Tip güvenli kod
- ✅ **TailwindCSS** + **shadcn/ui** - Modern UI bileşenleri
- ✅ **SEO Optimized** - Schema.org, Meta Tags, Sitemap, robots.txt
- ✅ **%100 Mobil Uyumlu** - Responsive tasarım
- ✅ **Core Web Vitals** - Performans optimizasyonu
- ✅ **Database-free** - Statik içerik yönetimi
- ✅ **Accessibility** - WCAG uyumlu
- ✅ **PWA Ready** - Progressive Web App desteği

## Kurulum

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Build

```bash
npm run build
```

## 📁 Proje Yapısı

```
sakayik/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Ana sayfa
│   ├── urun/sakayik/        # Ürün detay sayfası
│   ├── hakkimizda/          # Hakkımızda sayfası
│   └── iletisim/            # İletişim sayfası
├── components/
│   ├── home/                # Ana sayfa bileşenleri
│   ├── layout/              # Layout bileşenleri (Header, Footer)
│   └── ui/                  # shadcn/ui bileşenleri
├── lib/                     # Utility fonksiyonlar
│   └── metadata.ts          # SEO metadata yönetimi
└── public/                  # Statik dosyalar
    ├── product.webp         # Ürün görseli
    ├── logo.webp            # Logo
    ├── robots.txt           # SEO robots
    └── sitemap.xml          # Sitemap
```

## 🎨 Tasarım Sistemi

### Renk Paleti

- **Primary**: `#D946A6` (Şakayık Pembe)
- **Secondary**: `#7C3AED` (Mor)
- **Accent**: `#F472B6` (Açık Pembe)

### Tipografi

- **Font**: System UI Stack (Inter fallback)
- **Başlıklar**: Bold, 2xl-6xl
- **Metin**: Regular, sm-lg

## 🛠️ Teknoloji Stack

- **Framework**: Next.js 14.2.3
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 3.4
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Deployment**: Static Export

## 📝 İçerik Yönetimi

İçerikleri güncellemek için ilgili dosyaları düzenleyin:

### Ana Sayfa Bileşenleri
- `components/home/hero.tsx` - Hero bölümü
- `components/home/features.tsx` - Özellikler
- `components/home/product-detail.tsx` - Ürün detayları
- `components/home/about-scent.tsx` - Şakayık kokusu hakkında
- `components/home/usage-areas.tsx` - Kullanım alanları
- `components/home/how-to-use.tsx` - Nasıl kullanılır
- `components/home/faq.tsx` - Sıkça sorulan sorular

### SEO ve Metadata
- `lib/metadata.ts` - Global SEO ayarları
- `app/layout.tsx` - Root layout ve metadata
- `public/sitemap.xml` - Sitemap
- `public/robots.txt` - Robots.txt

## 🚀 Deployment

### Vercel (Önerilen)

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=out
```

### Manuel Static Export

```bash
npm run build
# out/ klasörü herhangi bir static hosting'e yüklenebilir
```

## 🔧 Geliştirme Notları

- Tüm içerikler statik olarak yönetilir (veritabanı yok)
- Fiyat güncellemeleri için `app/page.tsx` ve `app/urun/sakayik/page.tsx` dosyalarını düzenleyin
- İletişim bilgileri `components/layout/footer.tsx` ve `app/iletisim/page.tsx` içinde
- Sosyal medya linkleri footer'da tanımlı

## 📄 Lisans

**Tüm hakları saklıdır © 2026 [KARAKAR HOME](https://www.karakarhome.com.tr)**

Bu proje KARAKAR HOME şirketine aittir. İzinsiz kullanım, kopyalama veya dağıtım yasaktır.

---

**Geliştirici**: KARAKAR HOME Yazılım Ekibi  
**Web**: [www.karakarhome.com.tr](https://www.karakarhome.com.tr)  
**Ürün**: [Şakayık Çubuklu Oda Kokusu](https://www.karakarhome.com.tr/sakayik-oda-kokusu/)
