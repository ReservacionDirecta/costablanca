import Image from 'next/image';
import { galleryImages } from '@/data/content';

export const metadata = {
  title: 'Galería',
  description: 'Galería de Hotel Costa Blanca de Vichayito: piscina, playa, habitaciones y jardines.',
};

export default function GaleriaPage() {
  return (
    <section className="section">
      <div className="container-site">
        <header className="section-head mb-10">
          <span className="eyebrow">Un vistazo</span>
          <h1 className="section-title">Galería</h1>
          <p className="section-lead">Tu próxima escapada frente al mar, en imágenes.</p>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
              <div className="photo-veil absolute inset-0 z-10 flex items-end">
                <span className="m-4 text-sm font-medium text-white/90">{img.alt}</span>
              </div>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
