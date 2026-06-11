import React, { useState, useEffect } from "react";
import { 
  Star, Wifi, Waves, Heart, Award, ArrowRight, Shield, Calendar, 
  MapPin, Clock, Users, Coffee, Sparkles, CheckCircle, Flame, UserCheck,
  ChevronLeft, ChevronRight 
} from "lucide-react";
import { activeRooms, activeTours } from "../data";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ParallaxImage, ParallaxBanner } from "./ParallaxImage";

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  setSelectedRoomId: (id: string | null) => void;
  setSelectedTourId: (id: string | null) => void;
}

export default function HomeView({ setActiveTab, setSelectedRoomId, setSelectedTourId }: HomeViewProps) {
  const { scrollY } = useScroll();
  const yRaw = useTransform(scrollY, [0, 800], [0, 240]);
  const heroY = useSpring(yRaw, { stiffness: 120, damping: 25 });

  // 14 cohesive, wide-angle cinematic beach resort common-area slides
  const heroSlides = [
    {
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80",
      sub: "Bienvenido al Paraíso de Sol Eterno",
      title: "Costablanca Vichayito Resort",
      desc: "A escasos metros de la orilla de la playa más hermosa del norte. Relájate con amaneceres mágicos y 3 piscinas templadas frente al mar."
    },
    {
      img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=80",
      sub: "Sazón Marina Premiada Mundialmente",
      title: "60+ Platos Típicos a la Carta",
      desc: "Deléitate con nuestro famoso Tacu Tacu en Salsa de Mariscos y ceviches frescos servidos directamente en la terraza privada de tu habitación."
    },
    {
      img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=80",
      sub: "Las Tres Piscinas del Hotel",
      title: "La Piscina Central de Espejo de Agua",
      desc: "Nuestra gran piscina te espera para disfrutar del cálido sol del norte peruano, rodeada de palmeras y refrescantes brisas marinas."
    },
    {
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
      sub: "Frente al Mar en Playa Vichayito",
      title: "Pérgolas y Sombrillas Privadas",
      desc: "Relájate en nuestras exclusivas tumbonas playeras frente a las cálidas olas de Vichayito con atención de bar personalizada."
    },
    {
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
      sub: "Atardeceres Únicos del Norte",
      title: "Infinity Terrazas & Zonas de Estar",
      desc: "Conecta con el infinito azul. Contempla el atardecer en cómodos muebles rústicos mientras cae la tarde en Máncora."
    },
    {
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
      sub: "Instalaciones de Primer Nivel",
      title: "El Lobby & Terraza Central",
      desc: "Espacios abiertos y ventilados con arquitectura rústica mediterránea diseñados para tu máximo confort y desconexión absoluta."
    },
    {
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
      sub: "Desayunos frente al Océano",
      title: "Nuestra Terraza Comedor del Mar",
      desc: "Comienza tus mañanas con nuestro desayuno americano buffet cortesía con una vista panorámica celestial del Pacífico."
    },
    {
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80",
      sub: "Spa y Bienestar del Alma",
      title: "Spa Vichayito con Masajes de Lujo",
      desc: "Renueva energías con nuestro relajante baño de barro o masajes descontracturantes con el arrullo de las olas de fondo."
    },
    {
      img: "https://images.unsplash.com/photo-1527030280862-64139fbe04ca?auto=format&fit=crop&w=1400&q=80",
      sub: "Senderos Ecológicos del Resort",
      title: "Paseos de Palmeras del Hotel",
      desc: "Camina por nuestros hermosos jardines tropicales 100% Pet Friendly donde tus engreídos corren libremente sin costo alguno."
    },
    {
      img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1400&q=80",
      sub: "Bebidas de Bienvenida de Cortesía",
      title: "The Cappa Sunset Beach Bar",
      desc: "Deléitate con los mejores tragos tropicales y cocteles de bienvenida elaborados con frutas frescas piuranas en el bar del mar."
    },
    {
      img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=80",
      sub: "El Descanso Definitivo",
      title: "Hamacas & Camastros de Vichayito",
      desc: "Duerme una siesta frente a las palmeras en el exclusivo sector de descanso rústico privado del hotel."
    },
    {
      img: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=1400&q=80",
      sub: "Cenas Románticas Bajo las Estrellas",
      title: "El Segundo Restaurante Costablanca",
      desc: "Ambiente cálido e iluminado para cenar deliciosas pastas o pescados a la luz de las velas frente al mar iluminado."
    },
    {
      img: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1400&q=80",
      sub: "Experiencias de Altamar",
      title: "El Mirador del Embarcadero",
      desc: "La base perfecta para zarpar a tus tours estelares, nadar con tortugas o subirte a las motos acuáticas rumbo al sol."
    },
    {
      img: "https://images.unsplash.com/photo-1473116763269-25541579ffb7?auto=format&fit=crop&w=1400&q=80",
      sub: "Sol Eterno Más de 300 Días al Año",
      title: "Nuestra Zona de Playa Privada",
      desc: "Descubre por qué somos el hotel preferido de las familias y viajes de promoción con arenas limpias y mar templado sin rocas."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // Quick book states
  const [inDate, setInDate] = useState("2026-06-15");
  const [outDate, setOutDate] = useState("2026-06-20");
  const [guests, setGuests] = useState("2");
  const [isBooked, setIsBooked] = useState(false);

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    setTimeout(() => {
      setIsBooked(false);
      setActiveTab("habitaciones");
    }, 2500);
  };

  const hotelPillars = [
    {
      icon: <Waves className="w-8 h-8 text-natural-olive" />,
      title: "3 Piscinas al Mar",
      desc: "Disponibles a escasos metros de la orilla de la playa para un descanso insuperable."
    },
    {
      icon: <Heart className="w-8 h-8 text-natural-olive" />,
      title: "Pet Friendly Sin Recargo",
      desc: "Adoramos a tus engreídos. Mascotas pequeñas entran gratis sin cobros sorpresas."
    },
    {
      icon: <Coffee className="w-8 h-8 text-natural-olive" />,
      title: "Desayunos Totales",
      desc: "Cada noche reservada incluye desayuno americano gratis de 7:30 am a 10:30 am."
    },
    {
      icon: <Award className="w-8 h-8 text-natural-olive" />,
      title: "Tradición desde 1998",
      desc: "Más de 25 años brindando hospitalidad de talla mundial y recuerdos inolvidables."
    }
  ];

  const customerReviews = [
    {
      name: "Eduardo Lévano",
      source: "Facebook Reviews",
      content: "Recomiendo el Hotel Costablanca. Excelente la atención de todo el staff piurano... y muy bueno el Tacu Tacu en salsa de mariscos en el almuerzo playero.",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Alexandra Tapia",
      source: "Facebook Reviews",
      content: "Buena vista, excelente ubicación y piscinas a elección de cada uno. Todo excelente, pasamos un bonito fin de semana con mi familia frente al sunset.",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Wesly Flores Alvarez",
      source: "Facebook Reviews",
      content: "Recomiendo el Hotel Costablanca, excelente ubicación para desconectarse, las habitaciones son lindas con balcón privado, muy buena atención del personal.",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="font-sans antialiased bg-natural-cream text-natural-earth">
      {/* Dynamic Hero Slider with Scroll Parallax */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-natural-soil">
        <motion.div 
          className="absolute inset-x-0 -top-20 -bottom-20 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{ 
            backgroundImage: `linear-gradient(rgba(44, 38, 35, 0.35), rgba(44, 38, 35, 0.7)), url(${heroSlides[currentSlide].img})`,
            y: heroY
          }}
        />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-natural-olive/20 text-natural-sand text-xs font-semibold uppercase tracking-wider mb-4 border border-natural-sand/30">
                <Sparkles className="w-3.5 h-3.5" />
                {heroSlides[currentSlide].sub}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight leading-tight mb-6">
                {heroSlides[currentSlide].title.split(" & ").map((p, i) => (
                  <span key={i} className={i > 0 ? "text-natural-sand block" : "block"}>{p}</span>
                ))}
              </h1>
              <p className="text-sm sm:text-base text-natural-sand/90 mb-8 max-w-xl leading-relaxed">
                {heroSlides[currentSlide].desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setActiveTab("habitaciones")}
                  className="px-6 py-3 bg-natural-olive hover:bg-natural-olive-hover text-white font-bold uppercase tracking-wider text-xs rounded transition-all duration-200 cursor-pointer"
                >
                  Ver Habitaciones
                </button>
                <button
                  onClick={() => setActiveTab("babybot")}
                  className="px-6 py-3 bg-transparent border-2 border-natural-sand hover:bg-natural-sand hover:text-natural-soil text-natural-sand font-bold uppercase tracking-wider text-xs rounded transition-all duration-200 cursor-pointer"
                >
                  Consultar BabyBot AI
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Controls with Chevrons and Small Dots */}
        <div className="absolute bottom-16 right-4 sm:right-8 lg:right-24 flex items-center gap-3 bg-[#2C2623]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 z-20 shadow-lg">
          <button
            onClick={handlePrevSlide}
            className="p-1 hover:bg-white/15 rounded-full text-white/80 hover:text-white transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Diapositiva anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="hidden sm:flex items-center gap-1.5 py-1">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentSlide === i ? "bg-natural-sand w-4" : "bg-white/30 hover:bg-white/60 w-1.5"
                }`}
              />
            ))}
          </div>

          <span className="font-mono text-[10px] text-natural-sand/90 px-1 font-semibold select-none">
            {currentSlide + 1} / {heroSlides.length}
          </span>

          <button
            onClick={handleNextSlide}
            className="p-1 hover:bg-white/15 rounded-full text-white/80 hover:text-white transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Siguiente diapositiva"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Quick Booking Bar */}
      <section className="relative z-10 max-w-6xl mx-auto -mt-12 px-4 shadow-sm">
        <div className="bg-natural-soil text-white rounded-lg p-6 border border-natural-earth">
          <form onSubmit={handleQuickBook} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end text-left">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-[#F3EFE9]/70 mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-natural-sand" /> Fecha de Ingreso
              </label>
              <input
                type="date"
                value={inDate}
                onChange={(e) => setInDate(e.target.value)}
                className="w-full bg-natural-earth border border-natural-olive/30 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-natural-olive focus:ring-1 focus:ring-natural-olive"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-[#F3EFE9]/70 mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-natural-sand" /> Fecha de Salida
              </label>
              <input
                type="date"
                value={outDate}
                onChange={(e) => setOutDate(e.target.value)}
                className="w-full bg-natural-earth border border-natural-olive/30 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-natural-olive focus:ring-1 focus:ring-natural-olive"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-[#F3EFE9]/70 mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-natural-sand" /> Huéspedes
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-natural-earth border border-natural-olive/30 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-natural-olive focus:ring-1 focus:ring-natural-olive"
              >
                <option value="1">1 Persona</option>
                <option value="2">2 Personas (Recomendado)</option>
                <option value="3">3 Personas</option>
                <option value="4">4 Personas</option>
                <option value="5">5 a 7 Personas</option>
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-natural-olive hover:bg-natural-olive-hover text-white uppercase text-xs font-bold tracking-widest py-3 rounded cursor-pointer transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                {isBooked ? "Verificando..." : "Comprobar"}
              </button>
            </div>
          </form>
          {isBooked && (
            <div className="mt-4 p-3 bg-natural-olive/30 border border-natural-olive/30 rounded text-natural-sand text-xs text-center animate-fade-in">
              ✔️ ¡Disponibilidad encontrada! Redirigiéndote a nuestro catálogo en tiempo real...
            </div>
          )}
        </div>
      </section>

      {/* Pillars of Premium Service */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-natural-olive mb-2">Resort & Spa Costablanca</h2>
          <p className="text-3xl sm:text-4xl font-serif font-light text-natural-soil tracking-tight">
            Paraíso de relax en la playa más linda del Perú
          </p>
          <div className="w-12 h-0.5 bg-natural-olive mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hotelPillars.map((pill, i) => (
            <div 
              key={i} 
              className="bg-natural-sand p-6 rounded-lg border border-natural-border/60 shadow-sm hover:shadow-md transition-all duration-200 text-left"
            >
              <div className="p-3 bg-white inline-block rounded-lg mb-4">
                {pill.icon}
              </div>
              <h3 className="text-base font-bold text-natural-soil mb-2 uppercase tracking-wider">{pill.title}</h3>
              <p className="text-xs text-natural-earth/80 leading-relaxed">{pill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Room Carousel Preview */}
      <section className="bg-natural-sand py-20 border-y border-natural-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-natural-olive mb-2 block font-mono">Habitaciones & Bungalows</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-natural-soil">Descanso frente al mar</h2>
            </div>
            <button 
              onClick={() => setActiveTab("habitaciones")}
              className="mt-4 md:mt-0 flex items-center gap-1.5 text-natural-olive hover:text-natural-olive-hover font-semibold cursor-pointer group text-xs uppercase tracking-wider"
            >
              Ver todas las habitaciones 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeRooms.slice(0, 3).map((room) => (
              <div 
                key={room.id}
                className="bg-natural-cream rounded-lg overflow-hidden shadow-sm border border-natural-border group flex flex-col h-full text-left"
              >
                <div className="relative h-60 overflow-hidden bg-natural-sand">
                  <ParallaxImage 
                    src={room.imagen} 
                    alt={room.tipo}
                    className="w-full h-full"
                    imgClassName="group-hover:scale-110 transition-transform duration-500"
                    speed={30}
                  />
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-natural-soil/90 text-white rounded text-[10px] font-mono whitespace-nowrap uppercase tracking-wider">
                    {room.capacidad}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="flex text-amber-600">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-natural-earth/50">Vichayito</span>
                    </div>
                    <h3 className="text-xl font-serif font-light text-natural-soil mb-2">{room.tipo}</h3>
                    <p className="text-xs text-natural-earth/80 line-clamp-2 mb-4 leading-relaxed">{room.descripcion}</p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {room.caracteristicas.map((carac, x) => (
                        <span key={x} className="px-2 py-0.5 bg-white text-natural-olive text-[11px] rounded border border-natural-border">
                          {carac}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-natural-divider flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-natural-earth/50 block font-mono uppercase tracking-wider">Tarifa Especial</span>
                      <span className="text-base font-bold text-natural-olive">{room.precioDisplay.split(" / ")[0]}</span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedRoomId(room.id);
                        setActiveTab("habitaciones");
                      }}
                      className="px-4 py-2 bg-natural-soil hover:bg-natural-olive text-white text-[11px] font-bold uppercase tracking-wider rounded cursor-pointer transition-colors"
                    >
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Conversion Colegios Excerpt Section with Parallax Background */}
      <ParallaxBanner
        src="https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80"
        className="py-24"
        speed={100}
      >
        <div className="absolute inset-0 bg-natural-soil/55 mix-blend-multiply z-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-natural-olive/35 text-natural-sand text-xs font-mono uppercase tracking-wider mb-4 border border-natural-sand/20">
                <Award className="w-3.5 h-3.5 text-natural-sand" /> Estudiantes & Promociones
              </span>
              <h2 className="text-4xl font-serif font-light tracking-tight mb-6 text-[#FDFBF7]">
                Viajes de Promoción Frente al Mar en Vichayito Máncora
              </h2>
              <div className="w-12 h-0.5 bg-natural-olive mb-6 rounded-full"></div>
              <p className="text-xs sm:text-sm text-natural-sand/80 mb-8 leading-relaxed">
                Llevamos más de 25 años sirviendo con orgullo a comités y colegios de todo el Perú y Ecuador. Nuestro hotel provee una experience protegida, con 3 piscinas, alimentación completa de restaurantes locales y tours estrella (nadar con tortugas, motos acuáticas y paseos costeros), todo incluido para que no se preocupen por nada.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-natural-olive flex-shrink-0" />
                  <span className="text-xs sm:text-sm"><strong>Garantía Total:</strong> Devolución del 100% de lo pagado en contingencias.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-natural-olive flex-shrink-0" />
                  <span className="text-xs sm:text-sm"><strong>Compromiso:</strong> Becamos gratis a alumnos cuyas familias no lo costeen.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-natural-olive flex-shrink-0" />
                  <span className="text-xs sm:text-sm"><strong>Inspección Gratuita:</strong> Coordinadores escolares visitan nuestro resort gratis.</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setActiveTab("colegios")}
                  className="px-6 py-3.5 bg-natural-olive hover:bg-natural-olive-hover text-[#FDFBF7] text-xs font-bold uppercase tracking-widest rounded transition-colors"
                >
                  Conocer Paquetes Todo Incluido
                </button>
              </div>
            </div>

            <div className="bg-[#2C2623]/90 backdrop-blur border border-natural-olive/20 p-8 rounded-lg flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-natural-sand/60 mb-2 font-bold block">Reservas Rápidas Escolares</span>
              <h3 className="text-2xl font-serif font-light mb-4">Separa el cupo de tu Colegio</h3>
              <p className="text-natural-sand/80 text-xs mb-6 leading-relaxed">
                Para mantener la máxima personalización, solo recibimos un cupo certificado de <strong>2 colegios por mes</strong>. Consulta disponibilidad y armemos el presupuesto juntos.
              </p>

              <div className="p-4 bg-natural-soil rounded border border-natural-olive/15 mb-6 font-mono text-xs text-natural-sand/90 space-y-2">
                <p>🔹 Habitación frente al mar: <strong>S/ 100 / noche</strong></p>
                <p>🔹 Alimentación completa: <strong>S/ 75 / día</strong></p>
                <p>🔹 Nadar con tortugas: <strong>S/ 55 por alumno</strong></p>
                <p>🔹 Fiesta de Promoción Temática: <strong>S/ 100 por alumno</strong></p>
              </div>

              <a
                href="https://wa.me/51985510282?text=Hola,%20quisiera%20solicitar%20un%20presupuesto%20para%20viaje%20de%20promocion%20escolar%20tod%20incluido"
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-full bg-natural-olive hover:bg-natural-olive-hover text-[#FDFBF7] font-bold text-xs uppercase tracking-widest py-3 px-4 rounded text-center transition-colors shadow-sm block"
              >
                Comunícate Directo al +51 985 510 282
              </a>
            </div>
          </div>
        </div>
      </ParallaxBanner>

      {/* Featured Tours List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-natural-olive mb-2 block font-mono">Aventuras Piuranas</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-natural-soil tracking-tight">Tours inolvidables en Máncora</h2>
          <div className="w-12 h-0.5 bg-natural-olive mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTours.slice(0, 3).map((tour) => (
            <div 
              key={tour.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-natural-border flex flex-col justify-between h-full hover:shadow-md transition-all duration-200 text-left"
            >
              <div className="relative h-56 overflow-hidden">
                <ParallaxImage 
                  src={tour.imagen} 
                  alt={tour.nombre}
                  className="w-full h-full"
                  imgClassName="group-hover:scale-110 transition-transform duration-500"
                  speed={25}
                />
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-natural-olive text-white text-[10px] uppercase font-mono tracking-wider rounded font-medium">
                  {tour.duracion}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-natural-soil mb-1">{tour.nombre}</h3>
                  <p className="text-[10px] text-amber-700 font-mono tracking-widest uppercase mb-3">{tour.tagline}</p>
                  <p className="text-xs text-natural-earth/80 line-clamp-3 mb-4 leading-relaxed">{tour.descripcion}</p>
                </div>
                <div className="pt-4 border-t border-natural-divider flex items-center justify-between">
                  <span className="text-base font-bold text-natural-olive">{tour.precioDisplay.split(" / ")[0]}</span>
                  <button
                    onClick={() => {
                      setSelectedTourId(tour.id);
                      setActiveTab("tours");
                    }}
                    className="flex items-center gap-1 text-xs font-bold text-natural-soil hover:text-natural-olive uppercase tracking-wider transition-colors"
                  >
                    Itinerario <ArrowRight className="w-3.5 h-3.5 text-natural-olive" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facebook Testimonials extracted from Costablanca logs */}
      <section className="bg-natural-soil text-white py-20 relative overflow-hidden">
        {/* Abstract tropical details */}
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-natural-olive/10 blur-xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F3EFE9]/70 mb-2 block font-mono">Opiniones Reales</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light tracking-tight text-white">¿Qué dicen nuestros huéspedes?</h2>
            <div className="w-12 h-0.5 bg-natural-olive mx-auto mt-4 rounded-full"></div>
            <p className="text-natural-sand/60 text-xs mt-4 font-mono uppercase tracking-widest">Extraído de nuestro portal oficial de Facebook Reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerReviews.map((rev, idx) => (
              <div 
                key={idx}
                className="bg-[#2C2623] p-6 rounded-lg border border-natural-olive/15 flex flex-col justify-between h-full shadow-sm"
              >
                <div>
                  <div className="flex text-amber-500 gap-0.5 mb-4">
                    {[...Array(rev.stars)].map((_, s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-xs sm:text-sm text-natural-sand/85 italic leading-relaxed mb-6">
                    {`"${rev.content}"`}
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-natural-olive/10">
                  <img src={rev.avatar} alt={rev.name} className="w-10 h-10 rounded-full object-cover border border-natural-olive/30" />
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider">{rev.name}</h4>
                    <span className="text-[10px] text-natural-sand/50 font-mono uppercase tracking-widest flex items-center gap-1">
                      <UserCheck className="w-3 h-3 text-natural-olive" /> {rev.source}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Interactive Widget pointing to BabyBot AI */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="bg-natural-sand border border-natural-border rounded-xl p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 bg-natural-olive text-white border-l border-b border-natural-border text-[9px] font-mono uppercase font-bold tracking-widest flex items-center gap-1 rounded-bl-xl">
            <Flame className="w-3 h-3 text-white animate-pulse" /> Novedad 2026
          </div>
          <Flame className="w-12 h-12 text-natural-olive mx-auto mb-4" />
          <h3 className="text-2xl font-serif font-light text-[#2C2623] mb-2">Conoce a nuestro Asistente BabyBot AI playero</h3>
          <p className="text-xs text-natural-earth/80 max-w-xl mx-auto mb-6 leading-relaxed">
            ¿Tienes dudas sobre cómo llegar desde el aeropuerto de Talara? ¿Quieres consultar tarifas de las habitaciones matrimoniales o detalles de las 3 piscinas frente al mar? Conversa con nuestro chatbot interactivo en tiempo real de forma gratuita.
          </p>
          <button
            onClick={() => {
              setActiveTab("babybot");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-6 py-3 bg-natural-olive hover:bg-natural-olive-hover text-white text-xs font-bold uppercase tracking-widest rounded cursor-pointer transition-colors"
          >
            Chatear con BabyBot ahora
          </button>
        </div>
      </section>
    </div>
  );
}
