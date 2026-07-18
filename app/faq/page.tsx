import { siteConfig, faqs } from '@/data/content';
import { FaqSchema } from '@/components/Schema';

export const metadata = {
  title: 'Preguntas frecuentes',
  description: 'Respuestas sobre check-in, check-out, reservas por WhatsApp, niños, estacionamiento y más.',
};

export default function FaqPage() {
  return (
    <>
      <FaqSchema />
      <section className="section">
        <div className="container-site max-w-prose">
          <header className="section-head mb-10 text-center mx-auto">
            <span className="eyebrow">Dudas frecuentes</span>
            <h1 className="section-title">Preguntas frecuentes</h1>
            <p className="section-lead">Resolvemos lo que más nos consultan. ¿Dudas? Escríbenos por WhatsApp.</p>
          </header>

          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="card group">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-mar-800">
                  {f.q}
                  <span className="text-terracota-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-arena-600">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-mar-700 p-6 text-center text-arena-50">
            <p className="font-semibold">¿No encuentras tu respuesta?</p>
            <a
              href={`https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent('Hola, tengo una consulta sobre el hotel.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa mt-3"
            >
              Preguntar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
