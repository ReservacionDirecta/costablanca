import React, { useState, useEffect } from "react";
import { Room } from "../types";
import { activeRooms } from "../data";
import { 
  Users, Waves, Coffee, Tv, Wifi, Shield, X, Check, 
  Sparkles, Calendar, MessageSquare, Anchor, Heart 
} from "lucide-react";
import { ParallaxImage } from "./ParallaxImage";
import { motion, AnimatePresence } from "motion/react";

// Variants for elegant micro-animations and staggered coordinate entrances
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }
};

interface RoomsViewProps {
  selectedRoomId: string | null;
  setSelectedRoomId: (id: string | null) => void;
}

export default function RoomsView({ selectedRoomId, setSelectedRoomId }: RoomsViewProps) {
  const [filterCapacity, setFilterCapacity] = useState<string>("all");
  const [activeModalRoom, setActiveModalRoom] = useState<Room | null>(null);

  // Quick book form state inside details modal
  const [inDate, setInDate] = useState("2026-06-15");
  const [outDate, setOutDate] = useState("2026-06-20");
  const [guestsCount, setGuestsCount] = useState("2");

  // Sync selectedRoomId from HomeView if set
  useEffect(() => {
    if (selectedRoomId) {
      const room = activeRooms.find(r => r.id === selectedRoomId);
      if (room) {
        setActiveModalRoom(room);
      }
    }
  }, [selectedRoomId]);

  const handleCloseModal = () => {
    setActiveModalRoom(null);
    setSelectedRoomId(null);
  };

  const filteredRooms = activeRooms.filter(room => {
    if (filterCapacity === "couples" && !room.capacidad.includes("1-2")) return false;
    if (filterCapacity === "families" && !(room.capacidad.includes("3-4") || room.capacidad.includes(" niño"))) return false;
    if (filterCapacity === "groups" && !room.capacidad.includes("5-7")) return false;
    return true;
  });

  const getWhatsAppBookingLink = (room: Room) => {
    const phone = "51959849792"; // Dedicated rooms WhatsApp channel
    const text = encodeURIComponent(
      `¡Hola Hotel Costablanca! Me interesa reservar la "${room.tipo}" para ${guestsCount} personas.\n` +
      `📅 Fecha de Ingreso: ${inDate}\n` +
      `📅 Fecha de Salida: ${outDate}\n` +
      `¿Tienen disponibilidad y me podrían cotizar por favor? ¡Muchas gracias!`
    );
    return `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
  };

  return (
    <div className="bg-natural-cream min-h-screen py-16 text-natural-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-natural-olive mb-2 block font-mono">Refugio de Ensueño</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-light text-natural-soil tracking-tight">
            Nuestras Habitaciones en la Playa
          </h1>
          <div className="w-12 h-0.5 bg-natural-olive mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-xs sm:text-sm text-natural-earth/80">
            Disfruta de la brisa marina y sunsets espectaculares. El check-in incluye acceso libre a nuestras 3 piscinas frente al mar y Wifi de fibra óptica.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 pb-6 border-b border-natural-sand">
          <button
            onClick={() => setFilterCapacity("all")}
            className={`px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
              filterCapacity === "all" 
                ? "bg-natural-olive text-white shadow-sm" 
                : "bg-natural-sand text-natural-earth hover:bg-natural-border/30 border border-transparent"
            }`}
          >
            Todas las Habitaciones ({activeRooms.length})
          </button>
          <button
            onClick={() => setFilterCapacity("couples")}
            className={`px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
              filterCapacity === "couples" 
                ? "bg-natural-olive text-white shadow-sm" 
                : "bg-natural-sand text-natural-earth hover:bg-natural-border/30 border border-transparent"
            }`}
          >
            Parejas (1 a 2 Personas)
          </button>
          <button
            onClick={() => setFilterCapacity("families")}
            className={`px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
              filterCapacity === "families" 
                ? "bg-natural-olive text-white shadow-sm" 
                : "bg-natural-sand text-natural-earth hover:bg-natural-border/30 border border-transparent"
            }`}
          >
            Familias (3 a 4 Personas / Niño)
          </button>
          <button
            onClick={() => setFilterCapacity("groups")}
            className={`px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
              filterCapacity === "groups" 
                ? "bg-natural-olive text-white shadow-sm" 
                : "bg-natural-sand text-natural-earth hover:bg-natural-border/30 border border-transparent"
            }`}
          >
            Grupos / Amigos (5 a 7 Personas)
          </button>
        </div>

        {/* Room Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={filterCapacity}
        >
          {filteredRooms.map((room) => {
            const hasVistaMar = !room.id.includes("adicional");
            return (
              <motion.div
                key={room.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-natural-border flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
                variants={cardVariants}
                layout
              >
                 {/* Room Image */}
                <div className="relative h-64 overflow-hidden bg-natural-sand">
                  <ParallaxImage
                    src={room.imagen}
                    alt={room.tipo}
                    className="w-full h-full"
                    imgClassName="group-hover:scale-110 transition-transform duration-500"
                    speed={25}
                  />
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#2C2623]/95 backdrop-blur-sm text-natural-sand rounded text-[10px] font-mono font-medium flex items-center gap-1 uppercase tracking-wider">
                    <Users className="w-3.5 h-3.5 text-natural-olive" />
                    {room.capacidad}
                  </div>
                  {hasVistaMar && (
                    <div className="absolute bottom-4 left-4 z-10 px-2.5 py-0.5 bg-natural-olive text-white text-[9px] font-mono rounded uppercase tracking-widest font-bold">
                      Vista al Mar
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-serif font-light text-natural-soil mb-2">{room.tipo}</h2>
                    <p className="text-xs text-natural-earth/80 line-clamp-3 mb-4 leading-relaxed">
                      {room.descripcion}
                    </p>

                    {/* features badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {room.caracteristicas.map((carac, index) => (
                        <span key={index} className="px-2 py-0.5 bg-natural-sand border border-natural-card-border text-natural-earth text-[11px] rounded">
                          {carac}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-natural-divider flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-natural-earth/50 block font-mono uppercase tracking-wider">Tarifa Desde</span>
                      <span className="text-lg font-bold text-natural-olive font-sans">S/ {room.precioSoles}</span>
                      <span className="text-natural-earth/50 text-xs font-mono"> / Noche</span>
                    </div>
                    <button
                      onClick={() => setActiveModalRoom(room)}
                      className="px-4 py-2 bg-natural-soil text-[#FDFBF7] hover:bg-natural-olive rounded text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* General Hotel Freebies / Policies */}
        <div className="mt-16 bg-natural-soil text-white rounded-lg p-8 border border-natural-olive/20 shadow-sm">
          <h3 className="text-lg font-serif font-light mb-4 flex items-center gap-2 text-white">
            <Anchor className="text-natural-olive" /> Amenidades incluidas para todos los Huéspedes:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm text-natural-sand/85">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-natural-olive flex-shrink-0" />
              <span>Baño privado con agua caliente</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-natural-olive flex-shrink-0" />
              <span>3 hermosas piscinas frente al mar</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-natural-olive flex-shrink-0" />
              <span>Internet gratis de fibra óptica</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-natural-olive flex-shrink-0" />
              <span>Estacionamiento vigilado 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-natural-olive flex-shrink-0" />
              <span>Desayuno americano completo diario</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-natural-olive flex-shrink-0" />
              <span>Pet Friendly (mascotas pequeñas)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-natural-olive flex-shrink-0" />
              <span>Televisor por cable de señal nítida</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-natural-olive flex-shrink-0" />
              <span>Toallas, jabón y papel higiénico</span>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-natural-earth/50 text-xs text-natural-sand/60 flex flex-col md:flex-row justify-between gap-2 font-sans">
            <span>🕒 Check-in: 15:00 (Puedes usar piscinas y resort gratis desde las 06:00 am).</span>
            <span>🕒 Check-out: 11:00 am (Puedes quedarte usando las piscinas hasta las 09:00 pm).</span>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {activeModalRoom && (
          <motion.div 
            className="fixed inset-0 z-50 overflow-y-auto bg-natural-soil/60 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div 
              className="relative bg-[#FDFBF7] rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-xl flex flex-col md:flex-row border border-natural-border text-left"
              initial={{ scale: 0.96, y: 12, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 12, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
            >
              
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 p-2 bg-natural-soil/90 rounded-full text-white hover:bg-natural-olive transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image and Amenidades list */}
              <div className="md:w-1/2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-natural-border">
                <div className="h-64 rounded overflow-hidden mb-6 bg-natural-sand shadow-inner relative">
                  <ParallaxImage 
                    src={activeModalRoom.imagen} 
                    alt={activeModalRoom.tipo} 
                    className="w-full h-full"
                    speed={15}
                  />
                </div>

                <h4 className="text-[10px] font-mono uppercase tracking-widest text-natural-earth/50 mb-3 font-bold">Inclusiones de la Habitación</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-natural-earth">
                  {activeModalRoom.amenidades.map((amenidad, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-natural-olive flex-shrink-0" />
                      <span>{amenidad}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Custom reservation form */}
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-natural-olive font-bold block mb-1">
                    Reserva Directa vía WhatsApp
                  </span>
                  <h3 className="text-2xl font-serif font-light text-natural-soil mb-1">{activeModalRoom.tipo}</h3>
                  <p className="text-natural-olive font-bold text-sm mb-4">{activeModalRoom.precioDisplay}</p>
                  <p className="text-xs text-natural-earth/80 leading-relaxed mb-6">
                    {activeModalRoom.descripcion}
                  </p>

                  {/* Form Simulation */}
                  <div className="bg-natural-sand border border-natural-border rounded p-4 space-y-3 mb-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono uppercase text-natural-earth/50 mb-1">
                          Llegada
                        </label>
                        <input
                          type="date"
                          value={inDate}
                          onChange={(e) => setInDate(e.target.value)}
                          className="w-full bg-natural-cream border border-natural-border rounded px-2.5 py-1.5 text-xs focus:outline-none focus:border-natural-olive"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono uppercase text-[#2C2623]/50 mb-1">
                          Salida
                        </label>
                        <input
                          type="date"
                          value={outDate}
                          onChange={(e) => setOutDate(e.target.value)}
                          className="w-full bg-natural-cream border border-natural-border rounded px-2.5 py-1.5 text-xs focus:outline-none focus:border-natural-olive"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-natural-earth/50 mb-1">
                        Huéspedes
                      </label>
                      <select
                        value={guestsCount}
                        onChange={(e) => setGuestsCount(e.target.value)}
                        className="w-full bg-natural-cream border border-natural-border rounded px-2.5 py-1.5 text-xs focus:outline-none focus:border-natural-olive"
                      >
                        <option value="1 Persona">1 Persona</option>
                        <option value="2 Personas">2 Personas (Capacidad Estándar)</option>
                        <option value="3 Personas">3 Personas</option>
                        <option value="4 Personas">4 Personas</option>
                        <option value="5 a 7 Personas">5 a 7 Personas</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <a
                    href={getWhatsAppBookingLink(activeModalRoom)}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-green-700 hover:bg-green-600 text-white font-bold rounded text-xs uppercase tracking-wider cursor-pointer transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-5 h-5 fill-current" />
                    Reservar esta habitación por WhatsApp
                  </a>
                  <p className="text-[10px] text-center text-natural-earth/40 mt-2 font-mono uppercase tracking-wider">
                    Sujeto a confirmación por depósito del 50%. RUC 20604660174.
                  </p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
