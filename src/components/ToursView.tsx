import React, { useState, useEffect } from "react";
import { Tour } from "../types";
import { activeTours } from "../data";
import { 
  Compass, MapPin, Clock, Shield, Check, Info, 
  MessageSquare, Anchor, Star, Sparkles, X, Heart 
} from "lucide-react";
import { ParallaxImage } from "./ParallaxImage";

interface ToursViewProps {
  selectedTourId: string | null;
  setSelectedTourId: (id: string | null) => void;
}

export default function ToursView({ selectedTourId, setSelectedTourId }: ToursViewProps) {
  const [activeModalTour, setActiveModalRoom] = useState<Tour | null>(null);

  // Sync selectedTourId from HomeView if set
  useEffect(() => {
    if (selectedTourId) {
      const tour = activeTours.find(t => t.id === selectedTourId);
      if (tour) {
        setActiveModalRoom(tour);
      }
    }
  }, [selectedTourId]);

  const handleCloseModal = () => {
    setActiveModalRoom(null);
    setSelectedTourId(null);
  };

  const getWhatsAppTourLink = (tour: Tour, numPax: string, date: string) => {
    const phone = "51913721860"; // Tour dedicated WhatsApp channel
    const msg = encodeURIComponent(
      `¡Hola Costablanca Tours! Quisiera separar el tour "${tour.nombre}" para ${numPax} personas.\n` +
      `📅 Fecha tentativa: ${date}\n` +
      `¿Me brindarían detalles de recojo y confirmación por favor? ¡Gracias!`
    );
    return `https://api.whatsapp.com/send?phone=${phone}&text=${msg}`;
  };

  // State inside modal
  const [paxCount, setPaxCount] = useState("2");
  const [tourDate, setTourDate] = useState("2026-06-18");

  return (
    <div className="bg-natural-cream min-h-screen py-16 text-natural-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-natural-olive mb-2 block font-mono">Aventuras y Excursiones</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-light text-natural-soil tracking-tight">
            Tours en Máncora & Vichayito
          </h1>
          <div className="w-12 h-0.5 bg-natural-olive mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-xs sm:text-sm text-natural-earth/80">
            Disponemos de transporte privado de ida y vuelta partiendo del lobby del hotel. Guías certificados norteños y equipamiento de seguridad homologado.
          </p>
        </div>

        {/* Tours Lists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activeTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-natural-border flex flex-col justify-between hover:shadow-md transition-all duration-200 group animate-fade-in"
            >
              <div className="relative h-60 overflow-hidden bg-natural-sand">
                <ParallaxImage
                  src={tour.imagen}
                  alt={tour.nombre}
                  className="w-full h-full"
                  imgClassName="group-hover:scale-110 transition-transform duration-500"
                  speed={25}
                />
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#2C2623]/95 backdrop-blur-sm text-natural-sand rounded text-[10px] font-mono font-semibold flex items-center gap-1 uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-natural-olive" />
                  {tour.duracion}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-natural-soil mb-1">{tour.nombre}</h3>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-natural-earth/50">{tour.tagline}</span>
                  <p className="text-xs text-natural-earth/80 mt-4 leading-relaxed line-clamp-3">
                    {tour.descripcion}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-natural-divider flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-natural-earth/50 block font-mono uppercase tracking-wider">Tarifa todo incl.</span>
                    <span className="text-lg font-bold text-natural-olive font-sans">S/ {tour.precioSoles}</span>
                  </div>
                  <button
                    onClick={() => setActiveModalRoom(tour)}
                    className="px-4 py-2 bg-natural-soil hover:bg-natural-olive text-white text-[11px] font-bold uppercase tracking-wider rounded cursor-pointer transition-colors"
                  >
                    Itinerario
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Free play activities list */}
        <div className="bg-white rounded-lg border border-natural-border shadow-sm p-8 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Anchor className="w-7 h-7 text-natural-olive" />
            <h3 className="text-xl font-serif font-light text-natural-soil uppercase tracking-wide">Actividades Deportivas Libres (Recepción)</h3>
          </div>
          <p className="text-xs text-natural-earth/80 leading-relaxed mb-6">
            Además de nuestras excursiones programadas, puedes alquilar directamente en la playa o lobby increíbles actividades de adrenalina para disfrutar en pareja o familia.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 bg-natural-sand rounded border border-natural-card-border text-center">
              <span className="font-bold text-natural-soil block text-xs mb-1 uppercase tracking-wider">Paddle Board</span>
              <span className="text-[10px] text-natural-earth/50 block mb-1">Sesión Guiada (2 pax)</span>
              <span className="text-natural-olive font-bold text-xs">S/ 60 soles</span>
            </div>
            <div className="p-4 bg-natural-sand rounded border border-natural-card-border text-center">
              <span className="font-bold text-natural-soil block text-xs mb-1 uppercase tracking-wider">Iniciación Buceo</span>
              <span className="text-[10px] text-natural-earth/50 block mb-1">Equipo + Instructor</span>
              <span className="text-natural-olive font-bold text-xs">S/ 230 soles</span>
            </div>
            <div className="p-4 bg-natural-sand rounded border border-natural-card-border text-center">
              <span className="font-bold text-natural-soil block text-xs mb-1 uppercase tracking-wider">Moto Acuática</span>
              <span className="text-[10px] text-natural-earth/50 block mb-1">Alquiler x Duración</span>
              <span className="text-natural-olive font-bold text-xs">S/ 100 soles</span>
            </div>
            <div className="p-4 bg-natural-sand rounded border border-natural-card-border text-center">
              <span className="font-bold text-natural-soil block text-xs mb-1 uppercase tracking-wider">Paseo en Banana</span>
              <span className="text-[10px] text-natural-earth/50 block mb-1">Adrenalina Grupal</span>
              <span className="text-natural-olive font-bold text-xs">S/ 50 soles</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Itinerary Details Modal */}
      {activeModalTour && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-natural-soil/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-[#FDFBF7] rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl flex flex-col border border-natural-border text-left">
            
            {/* Close */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 p-2 bg-natural-soil/90 rounded-full text-white hover:bg-natural-olive transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-60 overflow-hidden bg-[#FDFBF7] w-full relative">
              <ParallaxImage 
                src={activeModalTour.imagen} 
                alt={activeModalTour.nombre} 
                className="w-full h-full"
                speed={15}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-natural-soil to-transparent opacity-60 z-10"></div>
              <div className="absolute bottom-6 left-6 text-white text-left z-20">
                <span className="text-xs font-mono uppercase tracking-widest text-natural-sand font-semibold">{activeModalTour.duracion} de Duración</span>
                <h3 className="text-2xl font-serif font-light text-white">{activeModalTour.nombre}</h3>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#2C2623]/50 mb-2">Descripción del Tour</h4>
                <p className="text-xs text-[#2C2623]/80 leading-relaxed">
                  {activeModalTour.descripcion}
                </p>
              </div>

              {/* Itinerary points */}
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-natural-soil mb-4 flex items-center gap-1.5">
                  <Anchor className="w-4 h-4 text-natural-olive" /> Detalle del Itinerario Incluido:
                </h4>
                <div className="space-y-2 text-xs text-natural-earth bg-natural-sand border border-natural-divider p-4 rounded">
                  {activeModalTour.incluye.split("✔️").map((item, idx) => {
                    const text = item.trim();
                    if (!text) return null;
                    return (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-natural-olive mt-0.5 flex-shrink-0" />
                        <span>{text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Reservation simulation */}
              <div className="bg-natural-sand rounded p-4 border border-natural-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="grid grid-cols-2 gap-3 w-full sm:w-auto text-xs text-natural-soil">
                  <div>
                    <label className="block text-[9px] font-mono uppercase text-natural-earth/50 mb-1">Pasajeros</label>
                    <select
                      value={paxCount}
                      onChange={(e) => setPaxCount(e.target.value)}
                      className="bg-natural-cream border border-natural-border rounded px-2 py-1.5 focus:outline-none focus:border-natural-olive text-xs"
                    >
                      <option value="1 Persona">1 Persona</option>
                      <option value="2 Personas">2 Personas</option>
                      <option value="4 Personas">4 Personas</option>
                      <option value="6 Personas">6 Personas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[9px] font-mono uppercase text-natural-earth/50 mb-1">Fecha tentativa</label>
                    <input
                      type="date"
                      value={tourDate}
                      onChange={(e) => setTourDate(e.target.value)}
                      className="bg-natural-cream border border-natural-border rounded px-2 py-1.5 focus:outline-none focus:border-natural-olive text-xs"
                    />
                  </div>
                </div>

                <a
                  href={getWhatsAppTourLink(activeModalTour, paxCount, tourDate)}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-700 hover:bg-green-600 text-white font-bold rounded text-xs uppercase tracking-wider cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  Reservar este tour por WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
