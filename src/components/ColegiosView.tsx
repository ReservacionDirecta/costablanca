import React, { useState } from "react";
import { 
  Award, Shield, Gift, RefreshCw, Eye, HelpCircle, Check, 
  MessageSquare, Users, Calendar, Calculator, Sparkles 
} from "lucide-react";

export default function ColegiosView() {
  // Quote form state
  const [colegioName, setColegioName] = useState("");
  const [pax, setPax] = useState(25);
  const [nights, setNights] = useState(3);
  const [includeTortugas, setIncludeTortugas] = useState(true);
  const [includeBanana, setIncludeBanana] = useState(true);
  const [includeManglares, setIncludeManglares] = useState(false);
  const [includeFiesta, setIncludeFiesta] = useState(true);

  // Price calculations based on data audit metrics
  const lodgNightPrice = 100; // S/ 100
  const foodDayPrice = 75; // S/ 75
  const tortugPrice = 55;
  const bananaPrice = 50;
  const manglPrice = 110;
  const fiestaPrice = 100;

  const calculateTotal = () => {
    let pricePerPax = (lodgNightPrice * nights) + (foodDayPrice * nights);
    if (includeTortugas) pricePerPax += tortugPrice;
    if (includeBanana) pricePerPax += bananaPrice;
    if (includeManglares) pricePerPax += manglPrice;
    if (includeFiesta) pricePerPax += fiestaPrice;

    // Free slots logic (1 free spot per 12 payer students)
    const paidStudents = Math.max(0, pax - Math.floor(pax / 12));
    
    return {
      pricePerStudent: pricePerPax,
      paidPax: paidStudents,
      freePax: Math.floor(pax / 12),
      totalPrice: pricePerPax * paidStudents
    };
  };

  const quote = calculateTotal();

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!colegioName.trim()) {
      alert("Por favor ingresa el nombre de tu colegio para personalizar el presupuesto.");
      return;
    }

    const phone = "51985510282"; // Dedicated masivo/schools coordinate
    const text = encodeURIComponent(
      `¡Hola Coordinador de Colegios Costablanca!\n` +
      `Somos de la promoción del colegio "${colegioName}" y elaboramos un presupuesto en la web:\n\n` +
      `👨‍🎓 Total Alumnos: ${pax} (Estudiantes pagantes: ${quote.paidPax}, Becados gratis: ${quote.freePax})\n` +
      `🌙 Noches de estadía: ${nights} noches\n` +
      `👉 Tours elegidos:\n` +
      (includeTortugas ? `  - Nadar con Tortugas (S/ 55)\n` : "") +
      (includeBanana ? `  - Paseo en Banana (S/ 50)\n` : "") +
      (includeManglares ? `  - Full-Day Manglares (S/ 110)\n` : "") +
      (includeFiesta ? `  - Fiesta Blanca de Promoción con DJ (S/ 100)\n` : "") +
      `\n` +
      `💰 Tarifa estimada por alumno: S/ ${quote.pricePerStudent}\n` +
      `💰 Presupuesto estimado total: S/ ${quote.totalPrice}\n\n` +
      `¿Tienen fechas disponibles para visitarnos y coordinar los detalles presenciales? ¡Muchas gracias!`
    );
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${text}`, "_blank");
  };

  const corePillars = [
    {
      icon: <Award className="w-8 h-8 text-natural-olive" />,
      title: "Desde 1998 sirviendo colegios",
      desc: "Más de 25 años de experiencia y prestigio garantizando la logística e integración escolar."
    },
    {
      icon: <Gift className="w-8 h-8 text-natural-olive" />,
      title: "Becas escolares gratis",
      desc: "Inclusivo: Para alumnos cuyas familias no puedan costearlo, el alojamiento y tours son gratis."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-natural-olive" />,
      title: "Reserva con total confianza",
      desc: "Seguridad absoluta: Si se suspende el viaje de promoción, devolvemos el 100% de la cuota depositada."
    },
    {
      icon: <Eye className="w-8 h-8 text-natural-olive" />,
      title: "Visítanos sin costo",
      desc: "Te invitamos al resort a conocer nuestras instalaciones de forma gratuita antes de contratar."
    }
  ];

  return (
    <div className="bg-natural-cream min-h-screen py-16 text-natural-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-natural-olive mb-2 block font-mono">Integración & Diversión</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-light text-natural-soil tracking-tight">
            El Viaje de Promoción Soñado
          </h1>
          <div className="w-12 h-0.5 bg-natural-olive mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-xs sm:text-sm text-natural-earth/80">
            Disfruta de Vichayito con un paquete 'Todo Incluido' diseñado científicamente para la seguridad de los alumnos y la tranquilidad de los padres de familia.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {corePillars.map((pil, idx) => (
            <div key={idx} className="bg-white border border-natural-border p-6 rounded-lg shadow-sm">
              <div className="p-3 bg-natural-sand inline-block rounded mb-4">
                {pil.icon}
              </div>
              <h3 className="font-serif font-bold text-natural-soil text-base mb-2">{pil.title}</h3>
              <p className="text-xs text-natural-earth/80 leading-relaxed">{pil.desc}</p>
            </div>
          ))}
        </div>

        {/* Calculator and Quote Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form and Selection */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-lg border border-natural-border shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-natural-olive">
              <Calculator className="w-6 h-6" />
              <h3 className="text-xl font-serif font-light text-natural-soil">Cotizador de Promoción Escolar</h3>
            </div>

            <form onSubmit={handleSendQuote} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-natural-earth/50 mb-2">Colegio</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. Colegio San Agustín"
                    value={colegioName}
                    onChange={(e) => setColegioName(e.target.value)}
                    className="w-full bg-natural-cream border border-natural-border rounded px-3 py-2 text-xs text-natural-soil focus:outline-none focus:border-natural-olive"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase text-natural-earth/50 mb-2">Número Alumnos</label>
                  <input
                    type="number"
                    min={10}
                    max={200}
                    value={pax}
                    onChange={(e) => setPax(parseInt(e.target.value) || 25)}
                    className="w-full bg-natural-cream border border-natural-border rounded px-3 py-2 text-xs text-natural-soil focus:outline-none focus:border-natural-olive"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase text-natural-earth/50 mb-2">Estadía noches: {nights} noches</label>
                <div className="flex gap-2">
                  {[2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setNights(n)}
                      className={`flex-1 py-2 text-[11px] font-bold uppercase tracking-wider rounded cursor-pointer transition-all ${
                        nights === n 
                          ? "bg-natural-olive text-white shadow-sm" 
                          : "bg-natural-sand text-natural-earth hover:bg-natural-border/30"
                      }`}
                    >
                      {n} Noches
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase text-natural-earth/50 mb-2.5">Tours & Experiencias Opcionales</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 bg-natural-sand hover:bg-natural-border/20 border border-natural-card-border rounded-lg cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeTortugas}
                      onChange={(e) => setIncludeTortugas(e.target.checked)}
                      className="w-4 h-4 text-natural-olive focus:ring-natural-olive rounded"
                    />
                    <div className="text-left text-xs sm:text-sm">
                      <span className="font-bold text-natural-soil block">Nadar con Tortugas Marinas (+ S/ 55 / pax)</span>
                      <span className="text-xs text-natural-earth/60">Travesía en bote y nado asistido con tortugas verdes.</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 bg-natural-sand hover:bg-natural-border/20 border border-natural-card-border rounded-lg cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeBanana}
                      onChange={(e) => setIncludeBanana(e.target.checked)}
                      className="w-4 h-4 text-natural-olive focus:ring-natural-olive rounded"
                    />
                    <div className="text-left text-xs sm:text-sm">
                      <span className="font-bold text-natural-soil block">Paseo en Banana Acuática (+ S/ 50 / pax)</span>
                      <span className="text-xs text-natural-earth/60">Adrenalina pura arrastrados por lancha en la bahía de Vichayito.</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 bg-natural-sand hover:bg-natural-border/20 border border-natural-card-border rounded-lg cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeManglares}
                      onChange={(e) => setIncludeManglares(e.target.checked)}
                      className="w-4 h-4 text-natural-olive focus:ring-natural-olive rounded"
                    />
                    <div className="text-left text-xs sm:text-sm">
                      <span className="font-bold text-natural-soil block">Full-Day Manglares de Tumbes (+ S/ 110 / pax)</span>
                      <span className="text-xs text-natural-earth/60">Paseo en bote, zoocriadero de cocodrilos, Zorritos y Punta Sal.</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 bg-natural-sand hover:bg-natural-border/20 border border-natural-card-border rounded-lg cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeFiesta}
                      onChange={(e) => setIncludeFiesta(e.target.checked)}
                      className="w-4 h-4 text-natural-olive focus:ring-natural-olive rounded"
                    />
                    <div className="text-left text-xs sm:text-sm">
                      <span className="font-bold text-natural-soil block">Fiesta de Promoción Temática con DJ (+ S/ 100 / pax)</span>
                      <span className="text-xs text-natural-earth/60">Luces integradas, cocktail de bienvenida sin alcohol, equipo Pro.</span>
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-green-700 hover:bg-green-600 text-white uppercase text-xs font-bold tracking-widest rounded transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4.5 h-4.5 fill-current" />
                Enviar Cotización Personalizada al WhatsApp
              </button>
            </form>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-natural-soil rounded-lg text-[#FDFBF7] p-6 md:p-8 border border-natural-olive/25">
            <span className="text-[10px] font-mono uppercase tracking-widest text-natural-sand/60 mb-2 font-bold block">Resumen del Presupuesto</span>
            <h3 className="text-2xl font-serif font-light mb-4 text-[#FDFBF7]">Detalle Estimado</h3>
            <div className="w-10 h-0.5 bg-natural-olive mb-6 rounded"></div>

            <div className="space-y-4 text-xs mb-6 border-b border-natural-olive/20 pb-6 text-natural-sand/80 text-left">
              <div className="flex justify-between">
                <span>Huéspedes en Promoción:</span>
                <span className="font-mono text-white text-sm">{pax} estudiantes</span>
              </div>
              <div className="flex justify-between">
                <span>Alumnos pagantes:</span>
                <span className="font-mono text-white">{quote.paidPax} alumnos</span>
              </div>
              <div className="flex justify-between">
                <span>Becados Gratis (1 por cada 12):</span>
                <span className="font-mono text-[#DED9D0] font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-natural-olive" /> {quote.freePax} gratis
                </span>
              </div>
              <div className="flex justify-between">
                <span>Noches reservadas:</span>
                <span className="font-mono text-white">{nights} noches</span>
              </div>
              <div className="flex justify-between">
                <span>Hospedaje + Pensión completa:</span>
                <span className="font-mono text-white">S/ {nights * (lodgNightPrice + foodDayPrice)} / estudiante</span>
              </div>
              <div className="flex justify-between text-[#E5E1D8]">
                <span>Tours & Adicionales:</span>
                <span className="font-mono">
                  S/ {(includeTortugas ? tortugPrice : 0) + (includeBanana ? bananaPrice : 0) + (includeManglares ? manglPrice : 0) + (includeFiesta ? fiestaPrice : 0)} / estudiante
                </span>
              </div>
            </div>

            <div className="space-y-2 mb-8 text-left">
              <div className="flex justify-between items-end">
                <span className="text-[10px] text-natural-sand/60 uppercase">Tarifa por alumno:</span>
                <span className="text-2xl font-bold text-white font-sans">S/ {quote.pricePerStudent}</span>
              </div>
              <div className="flex justify-between items-end border-t border-natural-olive/20 pt-4">
                <span className="text-[10px] text-natural-sand/80 uppercase font-bold">Inversión Final de Promo:</span>
                <span className="text-3xl font-black text-white font-sans">S/ {quote.totalPrice}</span>
              </div>
            </div>

            <div className="p-4 bg-[#2C2623] rounded border border-natural-olive/20 text-xs text-natural-sand/50 leading-relaxed space-y-2 text-left">
              <p>📌 **Nota:** Este presupuesto es una simulación basada en nuestras tarifas formales corporativas para colegios de Perú y Ecuador.</p>
              <p>📌 **Todo Incluido:** Cuenta con monitores de resguardo, bebidas de hidratación en todo momento e ingresos libres.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
