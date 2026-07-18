import { Suspense } from 'react';
import RoomCard from '@/components/RoomCard';
import BookingWidget from '@/components/BookingWidget';
import { rooms } from '@/data/content';

export const metadata = {
  title: 'Habitaciones',
  description: 'Conoce las habitaciones de Hotel Costa Blanca de Vichayito: vista al mar, piscina, jardín y más.',
};

export default function HabitacionesPage() {
  return (
    <section className="section">
      <div className="container-site">
        <header className="section-head mb-10">
          <span className="eyebrow">Donde descansar</span>
          <h1 className="section-title">Nuestras habitaciones</h1>
          <p className="section-lead">
            Cada espacio pensado para tu descanso frente al mar. Elige el que mejor se adapte a tu viaje.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
            {rooms.map((room, i) => (<RoomCard key={room.id} room={room} index={i} />))}
          </div>
          <aside className="lg:sticky lg:top-20 h-fit">
            <Suspense fallback={<div className="h-96 w-full animate-pulse rounded-2xl bg-arena-100/50" />}>
              <BookingWidget />
            </Suspense>
          </aside>
        </div>
      </div>
    </section>
  );
}
