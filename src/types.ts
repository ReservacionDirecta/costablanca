export interface Room {
  id: string;
  tipo: string;
  capacidad: string;
  precioSoles: number;
  precioDisplay: string;
  tamaño: string | null;
  caracteristicas: string[];
  imagen: string;
  descripcion: string;
  amenidades: string[];
}

export interface Tour {
  id: string;
  nombre: string;
  precioSoles: number;
  precioDisplay: string;
  incluye: string;
  descripcion: string;
  imagen: string;
  duracion: string;
  tagline: string;
}

export interface Dish {
  id: string;
  nombre: string;
  categoria: "Entradas" | "Platos de Fondo" | "Ceviches y Tiraditos" | "Bebidas" | "Postres";
  precioSoles: number;
  descripcion: string;
  popular?: boolean;
}

export interface FAQItem {
  id: number;
  q: string;
  a: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp: Date;
}
