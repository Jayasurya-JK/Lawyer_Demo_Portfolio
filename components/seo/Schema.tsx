import { SITE_CONFIG, LAWYER_PROFILE } from '@/lib/constants'

export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: LAWYER_PROFILE.name,
    jobTitle: LAWYER_PROFILE.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.contact.email,
    telephone: SITE_CONFIG.contact.phone,
    knowsAbout: LAWYER_PROFILE.specializations,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LegalServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    provider: {
      '@type': 'Person',
      name: LAWYER_PROFILE.name,
      jobTitle: LAWYER_PROFILE.title,
    },
    areaServed: 'India',
    serviceType: LAWYER_PROFILE.specializations,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.contact.email,
    telephone: SITE_CONFIG.contact.phone,
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ArticleSchema({ 
  title, 
  description, 
  publishedAt, 
  author,
  url 
}: { 
  title: string
  description: string
  publishedAt: string
  author: string
  url: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    datePublished: publishedAt,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Person',
      name: LAWYER_PROFILE.name,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
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
