import { siteConfig, faqs } from '@/data/content';

export function HotelSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: siteConfig.fullName,
    description: siteConfig.heroCopy,
    starRating: { '@type': 'Rating', ratingValue: '3' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vichayito',
      addressRegion: 'Piura',
      addressCountry: 'PE',
    },
    telephone: `+${siteConfig.phone}`,
    url: 'https://hotelcostablanca.pe',
    acceptsReservations: 'True',
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
