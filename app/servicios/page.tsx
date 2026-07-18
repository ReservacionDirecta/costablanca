import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/content';

export const metadata = {
  title: 'Servicios',
  description: 'Servicios de Hotel Costa Blanca de Vichayito: piscina, restaurante, Wi-Fi, estacionamiento y más.',
};

export default function ServiciosPage() {
  return (
    <section className="section">
      <div className="container-site">
        <header className="section-head mb-10">
          <span className="eyebrow">Todo lo que necesitas</span>
          <h1 className="section-title">Servicios del hotel</h1>
          <p className="section-lead">
            Pensados para que solo te preocupes por disfrutar tu estadía.
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (<ServiceCard key={s.id} service={s} />))}
        </div>
      </div>
    </section>
  );
}
