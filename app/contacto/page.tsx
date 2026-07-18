'use client';

import { useState } from 'react';
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/data/content';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export default function ContactoPage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const link = generateWhatsAppLink(
    `Hola, soy ${name || '[tu nombre]'}. ${message || 'Quisiera información sobre el hotel.'}`
  );

  const fieldClass =
    'mt-1 w-full rounded-lg border border-arena-300 bg-white px-3 py-2 text-sm text-mar-900 outline-none transition focus:border-mar-500 focus:ring-2 focus:ring-mar-200';

  return (
    <section className="section">
      <div className="container-site">
        <header className="section-head mb-10">
          <span className="eyebrow">Hablemos</span>
          <h1 className="section-title">Contáctanos</h1>
          <p className="section-lead">Escríbenos por WhatsApp y te respondemos al instante.</p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {[
              { icon: MapPin, label: 'Dirección', value: siteConfig.address },
              { icon: Phone, label: 'Teléfono / WhatsApp', value: '+51 924 277 348' },
              { icon: Mail, label: 'Email', value: siteConfig.email },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="card flex items-center gap-3">
                  <Icon className="text-mar-600" size={22} />
                  <div>
                    <p className="font-semibold text-mar-800">{c.label}</p>
                    <p className="text-sm text-arena-600">{c.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <form className="card space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-arena-700">Tu nombre</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. María López"
                className={fieldClass}
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-arena-700">Mensaje</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Cuéntanos qué necesitas..."
                className={fieldClass}
              />
            </label>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa w-full"
            >
              <MessageCircle size={18} /> Enviar por WhatsApp
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
