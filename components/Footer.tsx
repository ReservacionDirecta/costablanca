import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { siteConfig } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-mar-800 text-arena-100">
      {/* Banner Chamba.Digital */}
      <div className="border-b border-mar-700 bg-mar-900/40">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-3 sm:flex-row sm:gap-3 sm:py-4">
          <span className="text-xs text-arena-300">Sitio web desarrollado por</span>
          <a
            href="https://chamba.digital"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-sol-400"
          >
            <span className="font-display text-base">Chamba.Digital</span>
            <span className="rounded-full bg-sol-500/20 px-2 py-0.5 text-xs font-medium text-sol-400 group-hover:bg-sol-500/30">
              Agencia de turismo digital
            </span>
          </a>
        </div>
      </div>

      {/* Grid principal */}
      <div className="container-site grid gap-8 py-10 sm:grid-cols-2 sm:py-12 md:grid-cols-4 md:gap-10 lg:py-14">
        {/* Marca */}
        <div className="sm:col-span-2 md:col-span-1">
          <h3 className="font-display text-base font-semibold text-white sm:text-lg">{siteConfig.fullName}</h3>
          <p className="mt-2 text-sm leading-relaxed text-arena-300">{siteConfig.tagline}</p>
        </div>

        {/* Enlaces */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-arena-200 sm:text-sm">Enlaces</h4>
          <ul className="mt-3 space-y-2 text-sm sm:mt-4">
            <li><Link href="/habitaciones" className="text-arena-300 hover:text-white transition-colors">Habitaciones</Link></li>
            <li><Link href="/servicios" className="text-arena-300 hover:text-white transition-colors">Servicios</Link></li>
            <li><Link href="/galeria" className="text-arena-300 hover:text-white transition-colors">Galería</Link></li>
            <li><Link href="/ubicacion" className="text-arena-300 hover:text-white transition-colors">Cómo llegar</Link></li>
            <li><Link href="/faq" className="text-arena-300 hover:text-white transition-colors">Preguntas frecuentes</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-arena-200 sm:text-sm">Contacto</h4>
          <ul className="mt-3 space-y-2.5 text-sm sm:mt-4">
            <li className="flex items-start gap-2 text-arena-300">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex items-center gap-2 text-arena-300">
              <Phone size={14} className="shrink-0" />
              <a href={`tel:+${siteConfig.phone}`} className="hover:text-white transition-colors">+51 924 277 348</a>
            </li>
            <li className="flex items-center gap-2 text-arena-300">
              <Mail size={14} className="shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-white transition-colors">{siteConfig.email}</a>
            </li>
          </ul>
        </div>

        {/* Horarios */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-arena-200 sm:text-sm">Horarios</h4>
          <ul className="mt-3 space-y-2 text-sm text-arena-300 sm:mt-4">
            <li>Check-in: <span className="text-white">{siteConfig.checkIn}</span></li>
            <li>Check-out: <span className="text-white">{siteConfig.checkOut}</span></li>
            <li>Recepción 24 horas</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-mar-700 py-4 text-center text-xs text-arena-400">
        © {new Date().getFullYear()} {siteConfig.fullName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
