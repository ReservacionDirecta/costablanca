import React, { useState } from "react";
import { activeFAQs } from "../data";
import { 
  HelpCircle, ChevronDown, ChevronUp, Mail, Phone, MapPin, 
  Send, ShieldCheck, CheckSquare 
} from "lucide-react";

export default function FAQView() {
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(1);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const toggleAccordion = (id: number) => {
    if (openAccordionId === id) {
      setOpenAccordionId(null);
    } else {
      setOpenAccordionId(id);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setContactName("");
      setContactEmail("");
      setContactPhone("");
      setContactMessage("");
      alert("¡Muchas gracias por escribirnos! Tu mensaje ha sido registrado. Un asesor de reservas del Hotel Costablanca se comunicará contigo a la brevedad.");
    }, 2000);
  };

  return (
    <div className="bg-natural-cream min-h-screen py-16 text-natural-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-natural-olive mb-2 block font-mono">Soporte & Consultas</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-light text-natural-soil tracking-tight">
            Preguntas Frecuentes y Contacto
          </h1>
          <div className="w-12 h-0.5 bg-natural-olive mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-xs sm:text-sm text-natural-earth/80">
            Encuentra respuestas inmediatas a todas las dudas de reservas, políticas de check-in, cobros por niños, mascotas o envíanos tu consulta personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-serif font-light text-natural-soil mb-6 flex items-center gap-2">
              <HelpCircle className="w-5.5 h-5.5 text-natural-olive" /> Consultas frecuentes resueltas
            </h3>

            {activeFAQs.map((faq) => {
              const isOpen = openAccordionId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="bg-white rounded-lg border border-natural-border shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full px-6 py-4 text-left font-serif font-medium text-natural-soil hover:bg-natural-sand/40 transition-colors flex items-center justify-between gap-4 cursor-pointer text-sm sm:text-base"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-natural-olive flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-natural-earth/50 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs text-natural-earth/80 leading-relaxed border-t border-natural-sand bg-natural-sand/10 whitespace-pre-line">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Contact form and Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Form */}
            <div className="bg-white p-6 md:p-8 rounded-lg border border-natural-border shadow-sm">
              <h3 className="text-lg font-serif font-semibold text-natural-soil mb-6 flex items-center gap-2">
                <Mail className="w-5.5 h-5.5 text-natural-olive" /> Envíanos tu consulta
              </h3>

              <form onSubmit={handleContactSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-natural-earth/50 mb-1.5">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. Juan Pérez"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-natural-cream border border-natural-border rounded px-3.5 py-2.5 text-xs text-natural-soil focus:outline-none focus:border-natural-olive"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-natural-earth/50 mb-1.5">Correo Electrónico</label>
                    <input
                      type="email"
                      required
                      placeholder="juan@email.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full bg-natural-cream border border-natural-border rounded px-3.5 py-2.5 text-xs text-natural-soil focus:outline-none focus:border-natural-olive"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-natural-earth/50 mb-1.5">Celular / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+51 987 654 321"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full bg-natural-cream border border-natural-border rounded px-3.5 py-2.5 text-xs text-natural-soil focus:outline-none focus:border-natural-olive"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-natural-earth/50 mb-1.5">Mensaje o Consulta</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="¿Tienes alguna consulta sobre traslados o reservas especiales?"
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full bg-natural-cream border border-natural-border rounded px-3.5 py-2.5 text-xs text-natural-soil focus:outline-none focus:border-natural-olive"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSent}
                  className="w-full bg-natural-soil hover:bg-natural-olive text-white font-bold py-3.5 rounded text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4 fill-current text-white" />
                  {isSent ? "Enviando..." : "Enviar Consulta"}
                </button>
              </form>
            </div>

            {/* General Corporate data */}
            <div className="bg-natural-soil text-natural-sand/85 p-6 md:p-8 rounded-lg border border-natural-olive/20 space-y-4 text-left">
              <span className="text-[10px] font-sans tracking-widest uppercase text-natural-sand/60 font-bold block mb-1">TURISMO COSTABLANCA SAC</span>
              
              <div className="flex items-start gap-3 text-xs leading-relaxed">
                <MapPin className="w-5 h-5 text-natural-olive mt-1 flex-shrink-0" />
                <span>Antigua Panamericana Norte Km. 1212, Playa Vichayito, Máncora, Piura, CP 20840 Perú.</span>
              </div>
              
              <div className="flex items-start gap-2 text-xs leading-relaxed">
                <Phone className="w-5 h-5 text-natural-olive flex-shrink-0" />
                <div className="space-y-1">
                  <p>🔸 Reservas Habitaciones: **+51 959 849 792**</p>
                  <p>🔸 Tours y Excursiones: **+51 913 721 860**</p>
                  <p>🔸 Delegaciones Colegios: **+51 985 510 282**</p>
                </div>
              </div>

              <div className="pt-4 border-t border-natural-olive/20 text-[10px] text-natural-sand/50 flex items-center gap-2">
                <ShieldCheck className="w-5.5 h-5.5 text-natural-olive flex-shrink-0" />
                <span>Compañía registrada formalmente en SUNAT. Boletas y Facturas disponibles de forma inmediata. RUC: 20604660174.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
