import React from "react";
import { Sparkles, MessageSquare, Check, HelpCircle, Heart, Anchor, Shield, Clock } from "lucide-react";
import { ParallaxImage } from "./ParallaxImage";

export default function SpaView() {
  const spaTreatments = [
    {
      nombre: "Baño de Barro Saludable",
      precio: "S/ 90",
      duracion: "1.5 Horas",
      desc: "Inmersión en lodo volcánico arcilloso rico en minerales y oligoelementos que purifican e hidratan la piel profundamente. Sentirás cómo reduce el estrés de inmediato.",
      popular: true
    },
    {
      nombre: "Masaje Relajante de Piedras Calientes",
      precio: "S/ 120",
      duracion: "1 Hora",
      desc: "Perfecta combinación de piedras de río calientes colocadas en puntos energéticos y aceites naturales aromáticos de coco y eucalipto para relajar los músculos del cuerpo.",
      popular: true
    },
    {
      nombre: "Masaje Descontracturante Profundo",
      precio: "S/ 140",
      duracion: "1.5 Horas",
      desc: "Excelente terapia para liberar la tensión acumulada por el trabajo diario. Se enfoca en la espalda, cuello y lumbares con técnicas de presión fuerte y digitopresión.",
      popular: false
    },
    {
      nombre: "Masaje Revitalizante de Aceites Cítricos",
      precio: "S/ 100",
      duracion: "1 Hora",
      desc: "Estimulante masaje corporal empleando aceites esenciales cítricos de limón norteño, mandarina y menta. Promueve la circulación y renueva la energía playera.",
      popular: false
    }
  ];

  const getWhatsAppSpaLink = (treatmentName: string) => {
    const phone = "51920995197"; // Specialized Spa WhatsApp channel
    const msg = encodeURIComponent(
      `¡Hola Costablanca Spa! Quisiera reservar una sesión para el tratamiento de "${treatmentName}".\n` +
      `¿Me brindarían las horas disponibles por favor? ¡Muchas gracias!`
    );
    return `https://api.whatsapp.com/send?phone=${phone}&text=${msg}`;
  };

  return (
    <div className="bg-natural-cream min-h-screen py-16 text-natural-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-natural-olive mb-2 block font-mono">Descanso & Bienestar</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-light text-natural-soil tracking-tight">
            Spa & Wellness Costablanca
          </h1>
          <div className="w-12 h-0.5 bg-natural-olive mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-xs sm:text-sm text-natural-earth/80">
            Relaja tu mente y cuerpo con el rumor de las olas. Nuestras terapeutas expertas emplean aceites esenciales orgánicos de coco, lavanda y limón para regresarle la vitalidad a tu cuerpo.
          </p>
        </div>

        {/* Hero Banner split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center bg-white rounded-lg overflow-hidden border border-natural-border shadow-sm animate-fade-in">
          <div className="h-96 md:h-full min-h-[350px] bg-natural-sand overflow-hidden relative">
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80" 
              alt="Masaje junto al mar" 
              className="w-full h-full"
              speed={20}
            />
          </div>
          <div className="p-8 lg:p-12">
            <span className="flex items-center gap-1.5 text-xs text-natural-olive font-mono font-bold uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4" /> Tratamientos Corporales Naturales
            </span>
            <h3 className="text-2xl font-serif font-light text-natural-soil mb-4">La magia sanadora del norte</h3>
            <p className="text-xs text-natural-earth/80 leading-relaxed mb-6">
              El aire marino posee iones negativos que optimizan la respiración y relajan el cerebro. Sumar a ello una sesión de masajes corporales o un relajante baño de barro saludable con lodo mineralizado potencia la eliminación de toxinas corporales y te deja una sensación de ligereza absoluta.
            </p>

            <ul className="space-y-3 mb-6 text-xs text-natural-earth">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-natural-olive flex-shrink-0" />
                <span>Salas individuales o matrimoniales en pareja con vista al mar.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-natural-olive flex-shrink-0" />
                <span>Uso de aceites naturales orgánicos sin fragancias químicas.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-natural-olive flex-shrink-0" />
                <span>Ducha escocesa post-tratamiento disponible gratis.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Treatment Menu cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {spaTreatments.map((tr, index) => (
            <div 
              key={index}
              className="bg-white p-6 md:p-8 rounded-lg border border-natural-border shadow-sm flex flex-col justify-between h-full group hover:border-natural-olive/40 hover:shadow-sm transition-all duration-200"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-serif font-bold text-natural-soil">{tr.nombre}</h4>
                    {tr.popular && (
                      <span className="px-2 py-0.5 bg-natural-sand text-natural-olive text-[9px] font-mono font-bold rounded uppercase tracking-widest">
                        TOP BIENESTAR
                      </span>
                    )}
                  </div>
                  <span className="text-xl font-bold text-natural-olive font-sans flex-shrink-0">{tr.precio}</span>
                </div>
                
                <div className="flex items-center gap-3 text-[10px] text-natural-earth/50 font-mono mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {tr.duracion}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5" /> Vichayito Wellness</span>
                </div>

                <p className="text-xs text-natural-earth/80 leading-relaxed mb-6">
                  {tr.desc}
                </p>
              </div>

              <div>
                <a
                  href={getWhatsAppSpaLink(tr.nombre)}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-natural-soil hover:bg-natural-olive text-white hover:text-white font-bold rounded text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  Reservar sesión por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Spa schedules listed in template details */}
        <div className="bg-natural-sand border border-natural-border rounded-lg p-6 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-6">
          <div className="text-natural-soil text-xs">
            <span className="font-bold block text-natural-olive mb-1 font-sans uppercase tracking-wider text-[10px]">⏰ Horario del Spa</span>
            <span className="text-xs text-natural-earth/80">Lunes a Domingo: 07:00 am – 09:00 pm</span>
          </div>
          <div className="text-natural-soil text-xs">
            <span className="font-bold block text-natural-olive mb-1 font-sans uppercase tracking-wider text-[10px]">⏰ Gimnasio / Fitness</span>
            <span className="text-xs text-natural-earth/80">Lunes a Domingo: 06:00 am – 09:00 pm</span>
          </div>
          <div className="text-natural-soil text-xs">
            <span className="font-bold block text-natural-olive mb-1 font-sans uppercase tracking-wider text-[10px]">⏰ Club de Salud & Piscinas</span>
            <span className="text-xs text-natural-earth/80">Lunes a Domingo: 10:00 am – 07:00 pm</span>
          </div>
        </div>

      </div>
    </div>
  );
}
