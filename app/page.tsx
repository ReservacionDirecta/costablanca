import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import { MessageCircle, Star, Waves, Utensils, Wifi, Car, Clock, MapPin, ArrowRight, BedDouble } from 'lucide-react';
import BookingWidget from '@/components/BookingWidget';
import ServiceCard from '@/components/ServiceCard';
import HeroCarousel from '@/components/HeroCarousel';
import RoomCard from '@/components/RoomCard';
import { HotelSchema, FaqSchema } from '@/components/Schema';
import { siteConfig, services, testimonials, rooms, galleryImages } from '@/data/content';

export const metadata = {
  title: 'Inicio',
  description: `${siteConfig.heroCopy} ${siteConfig.tagline}`,
};

const highlights = [
  { icon: Waves, label: 'Piscina exterior', detail: 'Al aire libre, frente a jardín tropical' },
  { icon: Utensils, label: 'Restaurante', detail: 'Cocina fresca con ingredientes de la costa' },
  { icon: MapPin, label: 'Frente al mar', detail: 'A 2 minutos a pie de la playa de Vichayito' },
  { icon: Clock, label: 'Recepción 24 h', detail: 'Siempre disponibles durante tu estadía' },
];



export default function HomePage() {
  return (
    <>
      <HotelSchema />
      <FaqSchema />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-[85svh] flex flex-col justify-center overflow-hidden">
        <HeroCarousel />

        <div className="container-site relative z-20 grid gap-8 py-20 pt-28 md:grid-cols-2 md:items-center md:py-28 md:pt-28">
          {/* Copy izquierdo */}
          <div className="text-white">
            <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
              <Star size={11} className="text-sol-400" fill="currentColor" /> {siteConfig.category} · {siteConfig.location}
            </span>

            <h1 className="font-display text-display-lg font-semibold leading-[1.12] drop-shadow-sm sm:leading-[1.08]">
              {siteConfig.heroCopy}
            </h1>

            <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">
              {siteConfig.tagline}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(`Hola, quiero reservar en ${siteConfig.fullName}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa w-full sm:w-auto"
              >
                <MessageCircle size={17} /> Reservar ahora
              </a>
              <Link href="/habitaciones" className="btn border border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
                Ver habitaciones
              </Link>
            </div>

            {/* Píldoras de atributos */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
              <span className="flex items-center gap-1.5"><Waves size={14} /> Piscina exterior</span>
              <span className="flex items-center gap-1.5"><Utensils size={14} /> Restaurante</span>
              <span className="flex items-center gap-1.5"><Wifi size={14} /> Wi-Fi</span>
              <span className="flex items-center gap-1.5"><Car size={14} /> Estacionamiento</span>
            </div>
          </div>

          {/* Widget de reserva */}
          <div>
            <Suspense fallback={<div className="h-96 w-full animate-pulse rounded-2xl bg-white/10" />}>
              <BookingWidget />
            </Suspense>
          </div>
        </div>
      </section>

      {/* ── INTRO EDITORIAL ───────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">El hotel</span>
            <h2 className="section-title mt-2 text-display-md">
              Donde el mar de Vichayito<br className="hidden sm:block" /> se convierte en tu hogar
            </h2>
            <p className="section-lead mx-auto mt-5 max-w-2xl text-base leading-loose text-arena-700">
              El Hotel Costa Blanca está enclavado en Vichayito, uno de los rincones más tranquilos y hermosos de la
              costa norte del Perú. Aquí el ritmo es el de las olas: lento, generoso y sin prisa. Nuestras
              habitaciones, la piscina exterior y las áreas comunes forman un espacio pensado para que
              desconectes de verdad.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/habitaciones" className="btn btn-primary">
                <BedDouble size={16} /> Nuestras habitaciones
              </Link>
              <Link href="/galeria" className="btn btn-ghost">
                Ver galería <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS DEL HOTEL ──────────────────────────── */}
      <section className="section bg-arena-50">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-arena-200 bg-arena-200 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="flex flex-col items-center gap-2 bg-white px-4 py-6 text-center sm:px-6 sm:py-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mar-50 text-mar-600 sm:h-12 sm:w-12">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-display text-xs font-semibold text-mar-800 sm:text-sm">{label}</p>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-arena-500 sm:text-xs">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HABITACIONES PREVIEW ──────────────────────────── */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Donde descansar</span>
              <h2 className="section-title mt-1">Nuestras habitaciones</h2>
            </div>
            <Link href="/habitaciones" className="group inline-flex items-center gap-1 text-sm font-semibold text-mar-600 hover:text-mar-800 transition-colors">
              Ver todas <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {rooms.map((room, i) => (
              <RoomCard key={room.id} room={room} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PISCINA / AMBIENTE ──────────────────────────── */}
      <section className="relative overflow-hidden bg-mar-900 py-16 text-white sm:py-20 lg:py-24">
        <Image
          src="/images/piscina.jpg"
          alt="Piscina exterior del Hotel Costa Blanca en Vichayito"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="container-site relative z-10">
          <div className="max-w-xl">
            <span className="eyebrow text-terracota-400">La piscina</span>
            <h2 className="mt-2 font-display text-display-md font-semibold leading-tight">
              Un oasis al aire libre en la costa peruana
            </h2>
            <p className="mt-5 text-base leading-loose text-white/70">
              Nuestra piscina exterior te espera bajo el sol de Vichayito. Rodeada de áreas verdes y reposeras,
              es el lugar perfecto para descansar entre una visita a la playa y otra.
              Disponible durante todo el día para los huéspedes del hotel.
            </p>
            <Link href="/servicios" className="btn mt-8 border border-white/30 text-white hover:bg-white/10">
              Conocer todos los servicios <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── GALERÍA STRIP ─────────────────────────────────── */}
      <section className="section bg-arena-50">
        <div className="container-site">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <span className="eyebrow">Un vistazo</span>
              <h2 className="section-title mt-1">El hotel en imágenes</h2>
            </div>
            <Link href="/galeria" className="group hidden items-center gap-1 text-sm font-semibold text-mar-600 hover:text-mar-800 sm:inline-flex">
              Ver galería completa <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Bento grid: 1 imagen grande izquierda + 2×2 derecha */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3 lg:grid-cols-3 h-[300px] sm:h-[400px] lg:h-[500px]">
            {/* Imagen grande — ocupa toda la altura izquierda */}
            <Link
              href="/galeria"
              className="group relative row-span-2 overflow-hidden rounded-2xl bg-mar-100"
            >
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-mar-900/0 transition-colors duration-300 group-hover:bg-mar-900/15" />
            </Link>

            {/* 4 imágenes pequeñas en 2×2 */}
            {galleryImages.slice(1, 5).map((img, i) => (
              <Link
                key={img.src}
                href="/galeria"
                className="group relative overflow-hidden rounded-2xl bg-mar-100"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-mar-900/0 transition-colors duration-300 group-hover:bg-mar-900/15" />
              </Link>
            ))}
          </div>

          <div className="mt-5 text-center sm:hidden">
            <Link href="/galeria" className="btn btn-ghost text-sm">
              Ver galería completa <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>


      {/* ── SERVICIOS ─────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Todo incluido en tu estadía</span>
              <h2 className="section-title mt-1">Servicios del hotel</h2>
            </div>
            <Link href="/servicios" className="group hidden items-center gap-1 text-sm font-semibold text-mar-600 hover:text-mar-800 sm:inline-flex">
              Ver todos <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ───────────────────────────────────── */}
      <section className="section bg-arena-50">
        <div className="container-site">
          <div className="mb-12 text-center">
            <span className="eyebrow">Experiencias reales</span>
            <h2 className="section-title mt-1">Lo que dicen nuestros huéspedes</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-card border border-arena-200/60 sm:p-8">
                {/* Comilla decorativa */}
                <span className="absolute right-6 top-4 font-display text-[6rem] leading-none text-arena-100 select-none" aria-hidden>
                  &ldquo;
                </span>
                {/* Estrellas */}
                <div className="mb-4 flex gap-0.5">
                  {[1,2,3,4,5].map(n => (
                    <Star key={n} size={14} className="text-sol-400" fill="currentColor" />
                  ))}
                </div>
                <p className="relative text-base leading-relaxed text-arena-700 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-mar-100 font-display text-sm font-semibold text-mar-700">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-mar-800">{t.name}</span>
                    <span className="text-xs text-arena-400">{t.source}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA VICHAYITO ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-mar-900 py-16 text-white sm:py-20 lg:py-24">
        <Image
          src="/images/650022994_17896625775413833_6448142003164991351_n2.jpg"
          alt="Vista aérea de Vichayito"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="container-site relative z-10 text-center">
          <span className="eyebrow text-terracota-400">Vichayito, Perú</span>
          <h2 className="mt-3 font-display text-display-md font-semibold">
            La playa que siempre quisiste conocer<br className="hidden sm:block" /> te está esperando
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/65">
            Vichayito es la joya tranquila de la costa norte peruana. Aguas cálidas, arena blanca
            y un ritmo de vida que invita a quedarse más de lo planeado.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <a
              href={`https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(`Hola, quiero reservar en ${siteConfig.fullName}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa"
            >
              <MessageCircle size={17} /> Reservar por WhatsApp
            </a>
            <Link href="/ubicacion" className="btn border border-white/30 text-white hover:bg-white/10">
              <MapPin size={15} /> Cómo llegar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
