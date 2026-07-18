'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/content';
import { generateWhatsAppLink } from '@/lib/whatsapp';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/habitaciones', label: 'Habitaciones' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/galeria', label: 'Galería' },
  { href: '/ubicacion', label: 'Ubicación' },
  { href: '/experiencias', label: 'Experiencias' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const waLink = generateWhatsAppLink(`Hola, quiero reservar en ${siteConfig.fullName}.`);
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar drawer al cambiar de ruta
  useEffect(() => { setOpen(false); }, [pathname]);

  const headerBase = 'sticky top-0 z-40 transition-all duration-300';
  const headerStyle = isHome && !scrolled
    ? 'bg-white/80 backdrop-blur-sm border-b border-arena-200/60'
    : 'bg-mar-900/95 backdrop-blur-md border-b border-mar-800 shadow-bar';

  const linkStyle = isHome && !scrolled
    ? 'text-mar-700 hover:text-mar-900'
    : 'text-white/85 hover:text-white';

  const logoStyle = isHome && !scrolled
    ? 'text-mar-800'
    : 'text-white';

  return (
    <header className={`${headerBase} ${headerStyle}`}>
      <div className="container-site flex items-center justify-between py-3 sm:py-3.5">

        {/* Logo */}
        <Link href="/" className={`flex flex-col transition-colors duration-300 ${logoStyle}`}>
          <span className="font-display text-base font-semibold leading-tight tracking-tight sm:text-lg">
            {siteConfig.name}
          </span>
          <span className={`text-[9px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 sm:text-[10px] ${
            isHome && !scrolled ? 'text-terracota-500' : 'text-white/50'
          }`}>
            Vichayito · {siteConfig.category}
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
          {navItems.slice(0, 6).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 ${linkStyle} ${
                pathname === item.href
                  ? (isHome && !scrolled ? 'text-mar-900 border-b border-mar-700 pb-px' : 'text-white border-b border-white/60 pb-px')
                  : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa py-2 px-4 text-xs"
          >
            <MessageCircle size={14} /> Reservar
          </a>
        </nav>

        {/* Burger mobile */}
        <button
          className={`flex items-center justify-center rounded-lg p-2 transition-colors lg:hidden ${
            isHome && !scrolled ? 'text-mar-800 hover:bg-arena-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer — full overlay para táctil */}
      {open && (
        <div className="border-t border-arena-200/30 bg-white lg:hidden">
          <nav className="container-site py-4 flex flex-col gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-mar-50 text-mar-700'
                    : 'text-arena-800 hover:bg-arena-50 hover:text-mar-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-arena-100">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn btn-wa w-full justify-center"
              >
                <MessageCircle size={16} /> Reservar por WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
