import { MapPin, Navigation } from 'lucide-react';
import { siteConfig } from '@/data/content';

export const metadata = {
  title: 'Ubicación',
  description: 'Cómo llegar a Hotel Costa Blanca de Vichayito, frente a la playa y cerca de Máncora.',
};

const nearby = [
  { name: 'Playa de Vichayito', dist: 'A 2 min caminando' },
  { name: 'Máncora centro', dist: '10 min en auto' },
  { name: 'Las Pocitas', dist: '5 min en auto' },
  { name: 'Terminal Máncora', dist: '12 min en auto' },
];

export default function UbicacionPage() {
  return (
    <section className="section">
      <div className="container-site">
        <header className="section-head mb-10">
          <span className="eyebrow">Cómo llegar</span>
          <h1 className="section-title">Ubicación</h1>
          <p className="section-lead">
            En Vichayito, a pasos de la playa y cerca de los mejores puntos de la costa.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Mapa */}
          <div className="overflow-hidden rounded-2xl shadow-card">
            <iframe
              title="Mapa Hotel Costa Blanca de Vichayito"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4000.1431389776767!2d-81.10788462502407!3d-4.138062795835702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9036924dfc76fc99%3A0x21fa66befe732719!2sLos%20Cocos%20de%20Vichayito!5e1!3m2!1ses!2spe!4v1784386263779!5m2!1ses!2spe"
              className="h-64 w-full sm:h-80"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 shrink-0 text-mar-600" size={20} />
              <div>
                <h2 className="font-semibold text-mar-800">{siteConfig.address}</h2>
                <p className="text-sm text-arena-600">Frente a la playa de Vichayito, Máncora.</p>
              </div>
            </div>

            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-fit bg-mar-600 text-white hover:bg-mar-700"
            >
              <Navigation size={18} /> Abrir en Google Maps
            </a>

            <div>
              <h3 className="mb-3 font-semibold text-mar-800">Cerca de ti</h3>
              <ul className="space-y-2">
                {nearby.map((n) => (
                  <li
                    key={n.name}
                    className="flex flex-col gap-0.5 rounded-lg bg-arena-100 px-4 py-2.5 text-sm sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="font-medium text-arena-800">{n.name}</span>
                    <span className="text-arena-500 text-xs sm:text-sm sm:ml-2 shrink-0">{n.dist}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
