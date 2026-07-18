'use client';

import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/content';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export default function WhatsAppFloat() {
  const link = generateWhatsAppLink(`Hola, quiero reservar en ${siteConfig.fullName}.`);
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-wa fixed right-4 z-50 px-4 py-3 shadow-card-hover"
      style={{ bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))' }}
      aria-label="Reservar por WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="hidden font-semibold text-sm sm:inline">Reservar</span>
    </a>
  );
}
