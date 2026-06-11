import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import RoomsView from "./components/RoomsView";
import RestaurantView from "./components/RestaurantView";
import ToursView from "./components/ToursView";
import ColegiosView from "./components/ColegiosView";
import SpaView from "./components/SpaView";
import FAQView from "./components/FAQView";
import BabyBotChat from "./components/BabyBotChat";
import { Anchor, Phone, Mail, MapPin, Instagram, Facebook, ShieldCheck, ChevronRight, MessageSquare } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("inicio");
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [selectedTourId, setSelectedTourId] = useState<string | null>(null);

  const renderActiveView = () => {
    switch (activeTab) {
      case "inicio":
        return (
          <HomeView
            setActiveTab={setActiveTab}
            setSelectedRoomId={setSelectedRoomId}
            setSelectedTourId={setSelectedTourId}
          />
        );
      case "habitaciones":
        return (
          <RoomsView
            selectedRoomId={selectedRoomId}
            setSelectedRoomId={setSelectedRoomId}
          />
        );
      case "restaurante":
        return <RestaurantView />;
      case "tours":
        return (
          <ToursView
            selectedTourId={selectedTourId}
            setSelectedTourId={setSelectedTourId}
          />
        );
      case "colegios":
        return <ColegiosView />;
      case "spa":
        return <SpaView />;
      case "babybot":
        return <BabyBotChat />;
      case "faq":
        return <FAQView />;
      default:
        return (
          <HomeView
            setActiveTab={setActiveTab}
            setSelectedRoomId={setSelectedRoomId}
            setSelectedTourId={setSelectedTourId}
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-natural-cream text-natural-earth selection:bg-natural-olive selection:text-white">
      {/* Top Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-grow">{renderActiveView()}</main>

      {/* Footer */}
      <footer className="bg-natural-soil text-natural-sand/85">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
            {/* Branding Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-natural-olive rounded-full text-white">
                  <Anchor className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xl font-serif tracking-tight font-light text-white">COSTA BLANCA</span>
                  <span className="text-[9px] tracking-[0.2em] -mt-1 opacity-60 uppercase font-sans text-natural-sand">Resort & Spa • Perú</span>
                </div>
              </div>
              <p className="text-xs text-natural-sand/70 leading-relaxed font-sans mt-2">
                La playa más hermosa de Máncora “Vichayito” en Piura, Perú. Atardeceres de ensueño, sol todo el año, gastronomía marina premiada, 3 piscinas frente al mar y recuerdos que se quedan para siempre.
              </p>
              <div className="text-[10px] font-mono uppercase bg-natural-earth border border-natural-olive/20 p-2.5 rounded text-natural-sand w-max leading-none">
                Fundado en 1998 · +25 Años
              </div>
            </div>

            {/* Nav links Column */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-mono">Enlaces Rápidos</h3>
              <ul className="space-y-2.5 text-xs text-natural-sand/80">
                <li>
                  <button 
                    onClick={() => { setActiveTab("inicio"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-natural-olive" /> Inicio y Reservas
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setActiveTab("habitaciones"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-natural-olive" /> Habitaciones & Jacuzzis
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setActiveTab("restaurante"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-natural-olive" /> Restaurante Mariscos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setActiveTab("tours"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-natural-olive" /> Tours de Tortugas Máncora
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setActiveTab("colegios"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-natural-olive" /> Colegios todo incluido
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setActiveTab("spa"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-natural-olive" /> Spa Wellness & Barro
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-mono">Portal Informativo</h3>
              <ul className="space-y-2.5 text-xs text-natural-sand/80">
                <li>
                  <button 
                    onClick={() => { setActiveTab("babybot"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-natural-olive" /> Chatear con BabyBot de IA
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setActiveTab("faq"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-natural-olive" /> Preguntas Frecuentes
                  </button>
                </li>
                <li className="pt-2">
                  <span className="text-natural-sand/50 text-[10px] uppercase font-mono block mb-1">Páginas Legales del original</span>
                  <div className="flex gap-2.5 text-[11px] text-natural-sand/85">
                    <span className="hover:text-white cursor-pointer underline">Privacidad</span>
                    <span>·</span>
                    <span className="hover:text-white cursor-pointer underline">Términos</span>
                    <span>·</span>
                    <span className="hover:text-white cursor-pointer underline">Reembolsos</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Coordinates Column */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Canales de Contacto</h3>
              <div className="space-y-3 text-xs text-natural-sand/85">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4.5 h-4.5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Antigua Panamericana Norte Km. 1212 s/n, Vichayito, Máncora, Piura, Perú.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4.5 h-4.5 text-natural-sand/90 mt-0.5 flex-shrink-0" />
                  <span>+51 932 723 689 (Principal)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4.5 h-4.5 text-natural-sand/90 mt-0.5 flex-shrink-0" />
                  <span>reservas@costablanca.pe</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 pt-2">
                <a 
                  href="https://www.facebook.com/costablancademancora" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="p-2 bg-natural-earth rounded-full hover:bg-natural-olive text-natural-sand hover:text-white transition-colors"
                >
                  <Facebook className="w-4.5 h-4.5" />
                </a>
                <a 
                  href="https://www.instagram.com/costablanca.pe/" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="p-2 bg-natural-earth rounded-full hover:bg-natural-olive text-natural-sand hover:text-white transition-colors"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-natural-earth/50 flex flex-col md:flex-row justify-between items-center text-xs text-natural-sand/60 gap-4">
            <p>© {new Date().getFullYear()} TURISMO COSTA BLANCA S.A.C. Todos los derechos reservados.</p>
            <div className="flex items-center gap-1 text-[11px] font-mono text-natural-sand/60">
              <ShieldCheck className="w-4 h-4 text-natural-olive" />
              <span>Plataforma Oficial Digitalizada bajo Ley de Protección de Datos Personales N° 29733 (Perú).</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Convert Direct WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/51932723689"
          target="_blank"
          referrerPolicy="no-referrer"
          className="flex items-center gap-2 px-4.5 py-3 rounded-full bg-green-700 hover:bg-green-600 text-white font-bold text-xs uppercase tracking-wider shadow-2xl transition-all duration-200 hover:-translate-y-0.5 group"
        >
          <MessageSquare className="w-5 h-5 fill-current animate-pulse text-white group-hover:scale-110 transition-transform" />
          <span>¡WhatsApp Reservas!</span>
        </a>
      </div>
    </div>
  );
}
