export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KARAKAR HOME',
    url: 'https://www.karakarhome.com.tr',
    logo: 'https://sakayik-oda-kokusu.com/logo.webp',
    description: 'Premium kalitede oda kokuları ve ev dekorasyon ürünleri',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Esenyalı Mah. Edebali Cad. No:13/A',
      addressLocality: 'Pendik',
      addressRegion: 'İstanbul',
      postalCode: '34903',
      addressCountry: 'TR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-545-181-4040',
      contactType: 'customer service',
      email: 'info@sakayikodakokusu.com.tr',
      areaServed: 'TR',
      availableLanguage: 'Turkish',
    },
    sameAs: [
      'https://www.instagram.com/karakarhome',
      'https://www.facebook.com/KARAKARHOME/',
      'https://x.com/karakarhome',
      'https://www.youtube.com/@KARAKARHOME',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Şakayık Çubuklu Oda Kokusu',
    url: 'https://sakayik-oda-kokusu.com',
    description: 'Premium şakayık esanslı çubuklu oda kokusu. %100 doğal içerik, uzun ömürlü, zarif tasarım.',
    publisher: {
      '@type': 'Organization',
      name: 'KARAKAR HOME',
      url: 'https://www.karakarhome.com.tr',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://sakayik-oda-kokusu.com/?s={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
