import { siteConfig } from '@/data/content';

export function formatDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00');
  if (isNaN(d.getTime())) return '';
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

export interface BookingData {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomType?: string;
}

export function buildBookingMessage(data: BookingData): string {
  const guests = data.adults + data.children;
  const lines = [
    `Hola, quiero reservar en ${siteConfig.fullName}.`,
    '',
    `Fecha de entrada: ${formatDate(data.checkIn)}`,
    `Fecha de salida: ${formatDate(data.checkOut)}`,
    `Adultos: ${data.adults}`,
    `Niños: ${data.children}`,
    `Huéspedes: ${guests}`,
  ];
  if (data.roomType && data.roomType.trim()) {
    lines.push(`Habitación: ${data.roomType.trim()}`);
  }
  lines.push('');
  lines.push('¿Me confirman disponibilidad y tarifa?');
  return lines.join('\n');
}

export function generateWhatsAppLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(message)}`;
}
