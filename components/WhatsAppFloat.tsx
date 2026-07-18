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
      className="btn btn-wa fixed right-4 z-50 px-4 py-3 shadow-card-hover hover:scale-105"
      style={{ bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))' }}
      aria-label="Reservar por WhatsApp"
    >
      <div className="pulse-ring" />
      <MessageCircle size={22} className="relative z-10" />
      <span className="hidden font-semibold text-sm sm:inline relative z-10">Reservar</span>
    </a>
  );
}
