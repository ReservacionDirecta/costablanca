// Datos únicos del Hotel Costa Blanca de Vichayito
// Fuente de verdad para textos, servicios, habitaciones y FAQ.

export const siteConfig = {
  name: 'Hotel Costa Blanca',
  location: 'Vichayito',
  fullName: 'Hotel Costa Blanca de Vichayito',
  category: '3 estrellas',
  phone: '51924277348', // reemplazar con el número real del hotel
  whatsappPhone: '51924277348',
  email: 'reservas@hotelcostablanca.pe',
  address: 'Vichayito, Máncora, Piura, Perú',
  mapsUrl: 'https://maps.google.com/?q=Vichayito+Mancora+Peru',
  checkIn: '15:00',
  checkOut: '12:00',
  heroCopy: 'Tu refugio frente al mar en Vichayito.',
  tagline: 'Piscina, descanso y playa a pasos de tu habitación.',
};

export const rooms = [
  {
    id: 'doble-mar',
    name: 'Habitación Doble Vista al Mar',
    description:
      'Amplia habitación con cama matrimonial y vista directa al océano. Despierta con el sonido de las olas y la brisa de Vichayito.',
    capacity: 2,
    view: 'Vista al mar',
    amenities: ['Aire acondicionado', 'Wi-Fi', 'TV cable', 'Baño privado', 'Frigobar'],
    price: 'S/ 180',
    priceNote: 'por noche · temporada baja',
    image: '/images/habitacion matrimonial.jpg',
  },
  {
    id: 'familiar-piscina',
    name: 'Habitación Familiar con Piscina',
    description:
      'Ideal para familias: dos camas y espacio extra, ubicada frente a la piscina exterior para que los niños disfruten sin límites.',
    capacity: 4,
    view: 'Vista a la piscina',
    amenities: ['Aire acondicionado', 'Wi-Fi', 'TV cable', 'Baño privado', 'Frigobar', 'Cuna bajo petición'],
    price: 'S/ 260',
    priceNote: 'por noche · temporada baja',
    image: '/images/habitacion cuadruple.jpg',
  },
  {
    id: 'matrimonial-jardin',
    name: 'Habitación Matrimonial Jardín',
    description:
      'Intimidad y descanso rodeados de jardín tropical. Perfecta para parejas que buscan una escapada tranquila.',
    capacity: 2,
    view: 'Vista al jardín',
    amenities: ['Aire acondicionado', 'Wi-Fi', 'TV cable', 'Baño privado', 'Frigobar'],
    price: 'S/ 160',
    priceNote: 'por noche · temporada baja',
    image: '/images/habitacion matrimonial3.jpg',
  },
  {
    id: 'triple-estandar',
    name: 'Habitación Triple Estándar',
    description:
      'Confortable habitación con tres camas, pensada para grupos de amigos o familias pequeñas que quieren explorar la costa.',
    capacity: 3,
    view: 'Vista interior',
    amenities: ['Aire acondicionado', 'Wi-Fi', 'TV cable', 'Baño privado'],
    price: 'S/ 210',
    priceNote: 'por noche · temporada baja',
    image: '/images/habitacion5.jpg',
  },
];

export const services = [
  {
    id: 'piscina',
    icon: 'waves',
    title: 'Piscina exterior',
    description: 'Piscina al aire libre para relajarte bajo el sol de Vichayito.',
  },
  {
    id: 'restaurante',
    icon: 'utensils',
    title: 'Restaurante',
    description: 'Comida fresca y variada con ingredientes locales del día.',
  },
  {
    id: 'wifi',
    icon: 'wifi',
    title: 'Wi-Fi gratis',
    description: 'Conexión de alta velocidad en todas las instalaciones.',
  },
  {
    id: 'parking',
    icon: 'car',
    title: 'Estacionamiento',
    description: 'Parqueo privado y gratuito para nuestros huéspedes.',
  },
  {
    id: 'recepcion',
    icon: 'clock',
    title: 'Recepción 24 horas',
    description: 'Atención ininterrumpida para lo que necesites.',
  },
  {
    id: 'habitacion',
    icon: 'bed',
    title: 'Servicio de habitaciones',
    description: 'Desayuno y pedidos directo a tu habitación.',
  },
  {
    id: 'traslado',
    icon: 'map-pin',
    title: 'Traslado y asistencia',
    description: 'Coordinamos tu traslado y te ayudamos a planear tu estadía.',
  },
];

export const faqs = [
  {
    q: '¿Cuál es el horario de check-in?',
    a: 'El check-in es a partir de las 15:00 horas. Si llegas antes, podemos guardar tu equipaje mientras preparamos tu habitación.',
  },
  {
    q: '¿Cuál es el horario de check-out?',
    a: 'El check-out es hasta las 12:00 del mediodía. Consulta por late check-out sujeto a disponibilidad.',
  },
  {
    q: '¿Cómo reservo?',
    a: 'Puedes reservar directamente por nuestro botón de WhatsApp. Elige tus fechas y número de huéspedes y te confirmamos disponibilidad y tarifa al instante.',
  },
  {
    q: '¿Aceptan niños?',
    a: 'Sí, somos un hotel familiar. Tenemos habitaciones familiares frente a la piscina y cunas disponibles bajo petición.',
  },
  {
    q: '¿El estacionamiento tiene costo?',
    a: 'No, el estacionamiento privado es gratuito para todos nuestros huéspedes.',
  },
  {
    q: '¿Incluye desayuno?',
    a: 'Ofrecemos servicio de desayuno en el restaurante y a la habitación. Consulta las opciones al reservar.',
  },
  {
    q: '¿Se permiten mascotas?',
    a: 'Por el momento no contamos con servicio para mascotas. Contáctanos para orientarte sobre opciones cercanas.',
  },
];

export const testimonials = [
  {
    name: 'Familia Ramírez',
    text: 'La piscina y la atención de 24h hicieron nuestra estadía perfecta. Los niños no quisieron irse.',
    source: 'Google Reviews',
  },
  {
    name: 'Carlos M.',
    text: 'Vistas al mar increíbles y un descanso total. Reservamos por WhatsApp y en minutos ya teníamos confirmación.',
    source: 'Booking.com',
  },
];

export const galleryImages = [
  { src: '/images/piscina.jpg', alt: 'Piscina exterior del Hotel Costa Blanca en Vichayito', category: 'piscina' },
  { src: '/images/piscina 2.jpg', alt: 'Piscina del hotel iluminada al atardecer', category: 'piscina' },
  { src: '/images/piscina 3.jpg', alt: 'Área de piscina y palmeras en un día soleado', category: 'piscina' },
  { src: '/images/piscina3.jpg', alt: 'Piscina limpia y reposeras listas para el descanso', category: 'piscina' },
  { src: '/images/piscina4.jpg', alt: 'Reposeras de playa junto a la piscina exterior', category: 'piscina' },
  { src: '/images/piscina6.jpg', alt: 'Relajante vista de la piscina exterior en Vichayito', category: 'piscina' },
  { src: '/images/terraza.jpg', alt: 'Terraza al aire libre con mesas y vista panorámica', category: 'servicios' },
  { src: '/images/areas comunes.jpg', alt: 'Áreas comunes del hotel rodeadas de naturaleza', category: 'jardin' },
  { src: '/images/vista areas comunes.jpg', alt: 'Vista general y vegetación de las áreas comunes', category: 'jardin' },
  { src: '/images/balcon.jpg', alt: 'Balcón privado con baranda de madera en habitación', category: 'habitaciones' },
  { src: '/images/habitacion matrimonial.jpg', alt: 'Habitación matrimonial con cama grande y decoración acogedora', category: 'habitaciones' },
  { src: '/images/habitacion matrimonial3.jpg', alt: 'Interior de habitación matrimonial ventilada y fresca', category: 'habitaciones' },
  { src: '/images/habitacion premium.jpg', alt: 'Habitación premium con finos acabados y gran comodidad', category: 'habitaciones' },
  { src: '/images/habitacion cuadruple.jpg', alt: 'Habitación familiar cuádruple con múltiples camas', category: 'habitaciones' },
  { src: '/images/habitracion cuadruple2.jpg', alt: 'Habitación cuádruple espaciosa para familias', category: 'habitaciones' },
  { src: '/images/habitacion doble.jpg', alt: 'Habitación doble con camas individuales muy cómoda', category: 'habitaciones' },
  { src: '/images/habitacion5.jpg', alt: 'Habitación clásica con decoración rústica', category: 'habitaciones' },
  { src: '/images/tv.jpg', alt: 'Habitación equipada con televisión y comodidades', category: 'servicios' },
  { src: '/images/650022994_17896625775413833_6448142003164991351_n2.jpg', alt: 'Vista del hotel Costa Blanca y atardecer en Vichayito', category: 'playa' },
];
