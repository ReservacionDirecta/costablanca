import { Waves, Fish, Sun, Sailboat } from 'lucide-react';

export const metadata = {
  title: 'Experiencias',
  description: 'Experiencias en Vichayito y Máncora cerca de Hotel Costa Blanca: surf, pesca, atardeceres y más.',
};

const experiences = [
  { icon: Waves, title: 'Surf y tablas', desc: 'Olas para todos los niveles en Máncora y Las Pocitas.' },
  { icon: Fish, title: 'Pesca artesanal', desc: 'Salidas con pescadores locales al amanecer.' },
  { icon: Sun, title: 'Atardeceres', desc: 'Las puestas de sol de Vichayito son inolvidables.' },
  { icon: Sailboat, title: 'Paseos en bote', desc: 'Tours a la reserva de lobos marinos y más.' },
];

export default function ExperienciasPage() {
  return (
    <section className="section">
      <div className="container-site">
        <header className="section-head mb-10">
          <span className="eyebrow">Vive Vichayito</span>
          <h1 className="section-title">Experiencias</h1>
          <p className="section-lead">Vichayito y Máncora tienen mucho para vivir. Te ayudamos a planearlo.</p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((e) => {
            const Icon = e.icon;
            return (
              <div key={e.title} className="card text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sol-500/15 text-sol-600">
                  <Icon size={28} />
                </div>
                <h3 className="font-semibold text-mar-800">{e.title}</h3>
                <p className="mt-2 text-sm text-arena-600">{e.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
