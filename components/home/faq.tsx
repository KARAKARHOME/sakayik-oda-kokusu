'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Şakayık esanslı oda kokusu kaç ay kullanılabilir?',
      answer: '<strong>120 güne</strong> kadar etki gösterir. Mekan sıcaklığı <u>yirmi derece</u> civarında tutulursa süre uzar. Havalandırma sıklığı, çubuk adedi kullanım süresini etkiler. <em>Sekiz çubuk</em> tam kapasite demektir.',
    },
    {
      question: 'Cilt hassasiyeti olanlar kullanabilir mi?',
      answer: 'Dermatolojik <strong>testler</strong> yapıldı, alerjen içermiyor. Doğrudan cilde <u>temas</u> önerilmez zira esans konsantredir. Hamilelik döneminde hekim <em>görüşü</em> alınmalı. Kronik rahatsızlıklarda uzman onayı gerekir.',
    },
    {
      question: 'Evcil dostlarım için risk var mı?',
      answer: '<u>Kedi</u> ve köpekler için tamamen güvenli. Organik formülasyon <strong>zararsız</strong> bileşenler içeriyor. Kuş türleri hassas solunum yapısına sahip, <em>dikkatli</em> kullanım şart. Kafes yakınına yerleştirmeyin.',
    },
    {
      question: 'Bambu çubukları ne sıklıkta ters çevirmeli?',
      answer: 'Haftada <strong>iki kez</strong> ters çevirme idealdir. Esans emilimi <u>eşit</u> dağılır, koku yoğunluğu korunur. İlk kullanımda <em>bir kez</em> çevirin, hızlı etki başlar. Düzenli bakım koku tazeliğini artırır.',
    },
    {
      question: 'Aşırı yoğun koku nasıl hafifletilir?',
      answer: 'Çubuk sayısını <u>dörde</u> düşürün. Sekiz yerine <strong>beş çubuk</strong> kullanmak dengeyi sağlar. Şişeyi az havalandırılan köşeye taşıyın. <em>Kapalı</em> dolapların içi uygun değil.',
    },
    {
      question: 'Şişe boşalınca yeniden dolum mümkün mü?',
      answer: '<strong>Yeniden</strong> kullanılabilir tasarım. Yedek esans satın alarak <u>aynı şişeyi</u> doldurun. Ekonomik tercih olur, <em>çevre dostu</em> yaklaşım sağlar. Cam şişe dayanıklı yapıda.',
    },
    {
      question: 'Gebelik sürecinde kullanım uygun mu?',
      answer: 'Organik içerik <strong>doğal</strong> kaynaklı. Yine de hamilelikte aromaterapi öncesi <u>doktor</u> görüşü alın. Her gebelik <em>farklı</em> seyreder. Koku hassasiyeti kişiye özel değişir.',
    },
    {
      question: 'Çocuk odalarında güvenle kullanılır mı?',
      answer: '<u>Üç yaş</u> üstü çocuklar için güvenli. Şişe yüksek rafa yerleştirilmeli, <strong>erişim</strong> engellensin. Esans yutulmamalı, <em>tehlike</em> oluşturur. Bebek odaları için pediatrist onayı şart.',
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <strong>Merak</strong> Edilenler ve <em>Yanıtları</em>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Şakayık esansı hakkında <u>en çok</u> sorulan sekiz soru. <strong>Detaylı</strong> açıklamalarla yanıtlandı.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold pr-8">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 text-muted-foreground transition-transform flex-shrink-0',
                    openIndex === index && 'transform rotate-180'
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-muted/30 border-t">
                  <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
