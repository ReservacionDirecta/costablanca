import React, { useState } from "react";
import { restauranteMenu } from "../data";
import { Dish } from "../types";
import { 
  Utensils, Search, Clock, Award, Star, Flame, Sparkles, 
  MapPin, Coffee, ChefHat, CheckSquare 
} from "lucide-react";
import { ParallaxImage } from "./ParallaxImage";

export default function RestaurantView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const categories = ["Todos", "Entradas", "Ceviches y Tiraditos", "Platos de Fondo", "Bebidas", "Postres"];

  const filteredDishes = restauranteMenu.filter((dish) => {
    const matchesSearch = dish.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          dish.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === "Todos" || dish.categoria === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-natural-cream min-h-screen py-16 text-natural-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-natural-olive mb-2 block font-mono">Gastronomía del Norte</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-light text-natural-soil tracking-tight">
            Restaurante Costablanca Vichayito
          </h1>
          <div className="w-12 h-0.5 bg-natural-olive mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-xs sm:text-sm text-natural-earth/80">
            Disfruta de más de 60 platos típicos preparados con la pesca más fresca del muelle. Servidos en abundancia con el sazón marino norteño premiada a nivel nacional.
          </p>
        </div>

        {/* Hero Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-lg overflow-hidden shadow-sm relative h-96">
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80" 
              alt="Platos del Mar" 
              className="w-full h-full"
              speed={35}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-natural-soil/95 to-transparent z-10 flex flex-col justify-end p-8 text-white">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-natural-olive text-[#FDFBF7] text-[10px] font-bold uppercase tracking-wider rounded w-max mb-3">
                <Flame className="w-3.5 h-3.5 fill-current text-white" /> Recomendado por Huéspedes
              </span>
              <h3 className="text-2xl font-serif font-light mb-2 text-white">Tacu Tacu en Salsa de Mariscos</h3>
              <p className="text-xs text-natural-sand/90 leading-relaxed font-sans">
                Crujiente tortilla de arroz y frejoles sazonados, colmada de una cremosa salsa de pulpos, langostinos y calamares al pisco. ¡Nuestro plato estrella!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-natural-border shadow-sm p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-natural-olive">
                <ChefHat className="w-7 h-7" />
                <h3 className="text-lg font-serif font-semibold text-natural-soil">Nuestra propuesta culinaria</h3>
              </div>
              <p className="text-xs text-natural-earth/80 leading-relaxed mb-6">
                El Hotel cuenta con **dos amplios restaurantes** con preciosas terrazas de madera orientadas frente a los atardeceres. Ofrecemos exquisitos cebiches, mariscos crujientes, parihuelas y postres rústicos típicos de Piura.
              </p>
              
              <ul className="space-y-3 mb-6 text-xs text-natural-earth">
                <li className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-natural-olive flex-shrink-0" />
                  <span><strong>Porciones Abundantes:</strong> Precio promedio cómodo de S/ 40 por plato de fondo.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-natural-olive flex-shrink-0" />
                  <span><strong>Servicio a la Habitación:</strong> Te llevamos la carta a tu balcón sin recargos.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-natural-olive flex-shrink-0" />
                  <span><strong>Pesca del día:</strong> Garantía de frescura absoluta directo del muelle.</span>
                </li>
              </ul>
            </div>

            {/* Schedules */}
            <div className="pt-6 border-t border-natural-border grid grid-cols-3 gap-2 text-[10px] uppercase font-mono tracking-wider">
              <div className="p-3 bg-natural-sand rounded text-center">
                <span className="font-bold block text-natural-soil mb-1">Desayuno</span>
                <span className="text-natural-earth/70">07:00 am - 10:30 am</span>
              </div>
              <div className="p-3 bg-natural-sand rounded text-center">
                <span className="font-bold block text-natural-soil mb-1">Almuerzo</span>
                <span className="text-natural-earth/70">12:00 pm - 04:30 pm</span>
              </div>
              <div className="p-3 bg-natural-sand rounded text-center">
                <span className="font-bold block text-natural-soil mb-1">Cena</span>
                <span className="text-natural-earth/70">06:30 pm - 10:00 pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Bar and Search */}
        <div className="bg-white rounded-lg border border-natural-border shadow-sm p-6 mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Quick Categories */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-2 text-[10px] font-bold uppercase rounded transition-all cursor-pointer ${
                  activeCategory === cat 
                    ? "bg-natural-olive text-white shadow-sm" 
                    : "bg-natural-sand text-natural-earth hover:bg-natural-border/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input bar */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-natural-earth/50 pointer-events-none">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Buscar ceviche, tacu tacu, postres..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-natural-cream border border-natural-border rounded pl-10 pr-4 py-2.5 text-xs text-natural-soil focus:outline-none focus:border-natural-olive focus:ring-1 focus:ring-natural-olive"
            />
          </div>
        </div>

        {/* Menu Listings Container */}
        {filteredDishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredDishes.map((dish) => (
              <div 
                key={dish.id} 
                className="bg-white p-6 rounded-lg border border-natural-border shadow-sm flex flex-col justify-between hover:border-natural-olive/40 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-base font-serif font-bold text-natural-soil">{dish.nombre}</h4>
                      {dish.popular && (
                        <span className="inline-flex items-center gap-0.5 px-2 py-0.5 bg-natural-sand text-[#5A5A40] text-[9px] uppercase font-bold tracking-widest rounded font-mono">
                          <Star className="w-2.5 h-2.5 fill-current text-natural-olive" /> Popular
                        </span>
                      )}
                    </div>
                    <span className="text-lg font-bold text-natural-olive font-sans flex-shrink-0">S/ {dish.precioSoles}</span>
                  </div>
                  <p className="text-[10px] text-natural-earth/50 font-mono tracking-widest uppercase mb-3">{dish.categoria}</p>
                  <p className="text-xs text-natural-earth/80 leading-relaxed">{dish.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-lg border border-natural-border p-8">
            <Utensils className="w-12 h-12 text-natural-earth/30 mx-auto mb-4" />
            <p className="text-natural-earth/70 font-medium text-xs">No encontramos platos que coincidan con tu búsqueda.</p>
            <button 
              onClick={() => { setSearchTerm(""); setActiveCategory("Todos"); }}
              className="mt-4 text-natural-olive hover:text-natural-olive-hover text-xs font-bold uppercase tracking-widest cursor-pointer underline"
            >
              Restablecer filtros
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
