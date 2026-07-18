import type { Metadata } from 'next';
import { siteConfig } from '@/data/content';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.fullName} | Hotel 3★ frente al mar en Vichayito`,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.heroCopy,
  keywords: ['hotel', 'Vichayito', 'Máncora', 'playa', 'reserva WhatsApp', 'hotel 3 estrellas'],
  openGraph: {
    title: siteConfig.fullName,
    description: siteConfig.heroCopy,
    type: 'website',
    locale: 'es_PE',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
