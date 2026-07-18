'use client';

import { MessageCircle, Users } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function RoomCard({ room, index }: { room: any; index: number }) {
  const router = useRouter();

  const handleSelect = () => {
    router.push(`?room=${room.id}`, { scroll: false });
    setTimeout(() => {
      const widget = document.getElementById('booking-widget-form');
      if (widget) widget.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-arena-200/60 shadow-card hover:shadow-card-hover transition-shadow duration-300">
      {/* Imagen con zoom en hover */}
      <div className="relative h-48 w-full overflow-hidden bg-mar-100 sm:h-56">
        <Image
          src={room.image}
          alt={room.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          priority={index < 2}
        />
        {/* Velo degradado */}
        <div className="absolute inset-0 bg-gradient-to-t from-mar-900/50 to-transparent z-10" />

        {/* Precio superpuesto */}
        <div className="absolute bottom-3 right-3 z-20">
          <div className="rounded-xl bg-white/95 backdrop-blur-sm px-2.5 py-1.5 text-right shadow-sm">
            <span className="block font-display text-sm font-semibold text-terracota-600 leading-tight sm:text-base">{room.price}</span>
            <span className="block text-[10px] text-arena-500 leading-tight">{room.priceNote}</span>
          </div>
        </div>

        {/* Vista badge */}
        <div className="absolute bottom-3 left-3 z-20">
          <span className="inline-block rounded-full bg-mar-900/70 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-white/90">
            {room.view}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Encabezado */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-sm font-semibold leading-snug text-mar-800 sm:text-[1.05rem]">
            {room.name}
          </h3>
          {/* Capacidad */}
          <div className="flex shrink-0 items-center gap-0.5">
            {Array.from({ length: room.capacity }).map((_, i) => (
              <Users key={i} size={10} className="text-arena-400" />
            ))}
          </div>
        </div>

        <p className="mt-2 flex-1 text-xs leading-relaxed text-arena-600 sm:text-sm">{room.description}</p>

        {/* Amenidades */}
        <div className="mt-3 flex flex-wrap gap-1 sm:mt-4 sm:gap-1.5">
          {room.amenities.slice(0, 3).map((a: string) => (
            <span key={a} className="amenity-tag text-[10px] sm:text-xs">{a}</span>
          ))}
          {room.amenities.length > 3 && (
            <span className="amenity-tag text-[10px] text-arena-500 sm:text-xs">+{room.amenities.length - 3}</span>
          )}
        </div>

        {/* CTA */}
        <button
          onClick={handleSelect}
          className="btn btn-wa mt-3 w-full text-xs sm:mt-4 sm:text-sm"
        >
          <MessageCircle size={14} /> Seleccionar y cotizar
        </button>
      </div>
    </article>
  );
}
