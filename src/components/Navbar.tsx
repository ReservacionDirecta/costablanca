import React, { useState } from "react";
import { Menu, X, Phone, Anchor, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "habitaciones", label: "Habitaciones" },
    { id: "restaurante", label: "Restaurante" },
    { id: "tours", label: "Tours" },
    { id: "colegios", label: "Colegios" },
    { id: "spa", label: "Spa" },
    { id: "babybot", label: "Asistente" },
    { id: "faq", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-natural-cream/95 backdrop-blur-md text-natural-earth border-b border-natural-sand shadow-sm">
      {/* Top Formal Business Bar */}
      <div className="bg-natural-soil text-natural-sand/80 py-1.5 px-4 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-natural-sand" />
            <span>TURISMO COSTABLANCA S.A.C. — RUC: 20604660174</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Anchor className="w-3.5 h-3.5 text-natural-sand" /> Playa Vichayito, Máncora, Piura, Perú
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-natural-sand/90" /> (073) 25 8379 (Fijo)
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Tagline */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => {
              setActiveTab("inicio");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="p-2.5 bg-natural-olive text-natural-cream rounded-full shadow-sm flex items-center justify-center">
              <Anchor className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-2xl font-serif tracking-tight font-light text-natural-soil">COSTA BLANCA</span>
              <span className="text-[9px] tracking-[0.25em] -mt-1 opacity-60 uppercase font-sans">Resort & Spa • Perú</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 font-sans">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="relative px-3 py-2 rounded-md text-xs uppercase tracking-wider font-semibold transition-colors duration-200 cursor-pointer text-natural-earth"
                >
                  {/* Sliding Active Pill */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-natural-olive rounded-md -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className={isActive ? "text-white" : "text-natural-earth/80 hover:text-natural-soil"}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:block">
            <motion.a
              href="https://wa.me/51932723689"
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-natural-olive text-natural-cream text-xs font-bold uppercase tracking-widest hover:bg-natural-olive-hover transition-all duration-200"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Reservar Ahora
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-natural-earth hover:text-natural-soil hover:bg-natural-sand focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden bg-natural-cream border-t border-natural-sand py-3 px-4 space-y-1 overflow-hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`block w-full text-left px-4 py-3 rounded-md text-[13px] uppercase tracking-wider font-medium transition-colors ${
                  activeTab === item.id
                    ? "bg-natural-olive text-white font-semibold"
                    : "text-natural-earth hover:bg-natural-sand"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 pb-2 border-t border-natural-sand">
              <a
                href="https://wa.me/51932723689"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex w-full items-center justify-center px-4 py-3 rounded-md bg-natural-olive font-bold text-xs uppercase tracking-widest text-[#FDFBF7] text-center hover:bg-natural-olive-hover transition-colors"
              >
                Escríbenos al WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
