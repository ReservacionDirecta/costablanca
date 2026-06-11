import { Room, Tour, Dish, FAQItem } from "./types";

export const activeRooms: Room[] = [
  {
    id: "matrimonial",
    tipo: "Habitación Matrimonial",
    capacidad: "1-2 Huéspedes",
    precioSoles: 200,
    precioDisplay: "S/ 200 Soles / por Noche",
    tamaño: "22 m²",
    caracteristicas: ["Balcón Privado al Mar", "Desayuno Americano Inc.", "Frente a las 3 Piscinas"],
    imagen: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    descripcion: "Ofrecemos románticas habitaciones matrimoniales con hermosa vista y balcón de madera privado al mar, a escasos metros de la orilla de Playa Vichayito. Ideal para parejas que buscan una escapada mágica con sunsets de ensueño.",
    amenidades: ["Cama Queen de 2 Plazas", "Baño privado con agua caliente", "WiFi Fibra Óptica gratis", "Televisor Smart con cable", "Toallas, jabón y papel higiénico", "Ventilador y closet"]
  },
  {
    id: "jacuzzi",
    tipo: "Matrimonial Jacuzzi",
    capacidad: "1-2 Huéspedes",
    precioSoles: 450,
    precioDisplay: "S/ 450 Soles / por Noche",
    tamaño: "22 m²",
    caracteristicas: ["Jacuzzi de Hidromasaje Privado", "Balcón al Mar", "Desayuno Premium Inc."],
    imagen: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    descripcion: "Nuestra habitación más exclusiva y romántica. Cuenta con una tina de hidromasaje / jacuzzi privado en el balcón frente al mar, ofreciendo una vista panorámica celestial del atardecer de Vichayito.",
    amenidades: ["Tina Jacuzzi de hidromasaje", "Cama Queen Premium", "Balcón de madera con tumbonas", "Baño privado con agua caliente", "WiFi Fibra Óptica", "TV Smart de 50\" con canales Premium", "Arreglo floral al ingresar"]
  },
  {
    id: "doble",
    tipo: "Habitación Doble",
    capacidad: "3-4 Huéspedes",
    precioSoles: 300,
    precioDisplay: "S/ 300 Soles / por Noche",
    tamaño: "24 m²",
    caracteristicas: ["2 Camas de 2 Plazas", "Balcón y Vista al Mar", "Desayunos Inc."],
    imagen: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    descripcion: "Habitación espaciosa para familias o grupos de amigos. Equipada con dos confortables camas de 2 plazas, balcón privado de madera con vista al mar ya las áreas comunes del resort.",
    amenidades: ["2 Camas de 2 plazas", "Baño privado con agua caliente", "WiFi Fibra Óptica", "Televisor Smart con cable", "Toallas, jabón y papel higiénico", "Servicio de Room Service gratuito"]
  },
  {
    id: "camarote",
    tipo: "Matrimonial + Camarote",
    capacidad: "3-4 Huéspedes",
    precioSoles: 250,
    precioDisplay: "S/ 250 Soles / por Noche",
    tamaño: "22 m²",
    caracteristicas: ["Matrimonial + Litera Familiar", "Ideal para Niños", "Balcón al Mar"],
    imagen: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
    descripcion: "Habitación de distribución eficiente para parejas con dos niños. Consta de una cama matrimonial de 2 plazas junto a una litera de madera (camarote) de 1.5 plazas, con un lindo espacio de balcón playero.",
    amenidades: ["1 Cama Matrimonial de 2 plazas", "1 Camarote / Litera (2 niveles de 1.5 plazas)", "Baño privado con agua caliente", "WiFi Fibra Óptica", "Excelente ventilación marina", "Toallas y artículos de aseo personal"]
  },
  {
    id: "quintuple",
    tipo: "Habitación Quíntuple",
    capacidad: "5-7 Huéspedes",
    precioSoles: 550,
    precioDisplay: "S/ 550 Soles / por Noche",
    tamaño: "32 m²",
    caracteristicas: ["Súper Amplia", "Terraza con Vista Marina", "Perfecta para Grupos"],
    imagen: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
    descripcion: "Nuestra habitación familiar más amplia. Cuenta con tres camas de 2 plazas y camas adicionales opcionales, distribuidas de forma cómoda con una gran terraza para descansar gozando del atardecer norteño.",
    amenidades: ["3 Camas de 2 plazas", "Amplio baño privado con agua caliente", "WiFi Fibra Óptica", "Televisor Smart de 50\" con cable", "Mesa de terraza con sillas", "Estacionamiento vigilado incluido"]
  },
  {
    id: "adicional",
    tipo: "Cama Adicional",
    capacidad: "+1 Persona / Niño",
    precioSoles: 100,
    precioDisplay: "S/ 100 Soles / por Noche",
    tamaño: "1.5 Plazas",
    caracteristicas: ["Cama de 1.5 Plazas", "Incluye Desayuno extra"],
    imagen: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    descripcion: "Servicio de cama de 1.5 plazas ideal para grupos que desean albergar a un miembro familiar adicional en la misma habitación. Incluye toallas extras y un boleto para el buffet de desayunos americanos del día siguiente.",
    amenidades: ["Cama de resorte de 1.5 Plazas", "Almohadas y sábanas limpias adicionales", "Bojo de desayuno americano incluido"]
  }
];

export const activeTours: Tour[] = [
  {
    id: "tortugas",
    nombre: "Nadar con Tortugas Marinas",
    precioSoles: 55,
    precioDisplay: "S/ 55 soles por persona",
    tagline: "Un encuentro mágico con tortugas gigantes de más de 100 años",
    duracion: "3 Horas",
    imagen: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=800&q=80",
    descripcion: "Vive la experiencia incomparable de nadar en Playa Vichayito o muelle El Ñuro con majestuosas tortugas marinas verdes gigantes en su hábitat natural, guiado por expertos.",
    incluye: "Recojo del lobby del hotel en Moto-Taxi turístico de ida y vuelta ✔️ Guía bilingüe certificado ✔️ Chaleco salvavidas y equipamiento de flotación ✔️ Traslado a muelle flotante en deslizador ✔️ 1 hora completa de nado con tortugas ✔️ Fotos y videos bajo el agua para tus redes sociales"
  },
  {
    id: "costero",
    nombre: "Paseo Costero en Lancha",
    precioSoles: 55,
    precioDisplay: "S/ 55 soles por persona",
    tagline: "Lancha moderna, avistamiento de lobos marinos y cebiche a bordo",
    duracion: "3.5 Horas",
    imagen: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    descripcion: "Recorre la espectacular bahía de Máncora, Pocitas y Órganos en nuestro deslizador moderno. Incluye nado con tortugas marinas y una degustación de ceviche preparado a bordo por marineros locales.",
    incluye: "Recojo del hotel en Moto-Taxi especial ✔️ Travesía en embarcación con música ✔️ Equipo de snorkel completo ✔️ Avistamiento de lobos marinos durmiendo en boyas ✔️ Nado asistido con tortugas ✔️ Degustación de Cebiche fresco preparado en vivo ✔️ Fotos y videos submarinos con Go-Pro pro"
  },
  {
    id: "ballenas",
    nombre: "Avistamiento de Ballenas Jorobadas",
    precioSoles: 110,
    precioDisplay: "S/ 110 soles por persona (temporada)",
    tagline: "Disponible del 10 de julio al 15 de octubre. Escucha sus cantos",
    duracion: "4 Horas",
    imagen: "https://images.unsplash.com/photo-1615859131861-052f0641a60e?auto=format&fit=crop&w=800&q=80",
    descripcion: "Disfruta de acrobáticos saltos de ballenas jorobadas procedentes del polo sur. Nuestras de embarcaciones cuentan con hidrófonos especiales para oír las hermosas canciones que cantan los machos bajo el agua.",
    incluye: "Recojo de lobby de hotel ida y vuelta ✔️ Lancha con biólogo marino a bordo ✔️ Hidrófono de alta fidelidad para escuchar los cantos ✔️ Chaleco salvavidas de seguridad ✔️ Merienda y bebidas de cortesía ✔️ Navegación por Pocitas, Vichayito y Órganos"
  },
  {
    id: "manglares",
    nombre: "Manglares de Tumbes Completo",
    precioSoles: 110,
    precioDisplay: "S/ 110 soles por persona",
    tagline: "Tour de día entero recorriendo Zorritos, Punta Sal y Manglares",
    duracion: "12 Horas (Día Completo)",
    imagen: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80",
    descripcion: "Acompáñanos a un viaje inolvidable hasta la frontera con Ecuador. Visitaremos hermosas playas, daremos un paseo en bote por los manglares de Puerto Pizarro, visitaremos el zoocriadero de cocodrilos e islas preciosas.",
    incluye: "Bus ida y vuelta con aire acondicionado desde Máncora ✔️ Paseo en bote por el delta del río Tumbes ✔️ Visita a la Isla del Amor, Isla de los Pájaros e Isla Hueso Ballena ✔️ Avistamiento de aves exóticas y cangrejos robadores ✔️ Visita oficial al Zoocriadero de Cocodrilos americanos ✔️ Almuerzo en restaurante local en Tumbes (opcional/libre)"
  },
  {
    id: "barro",
    nombre: "Baño de Barro Terapéutico",
    precioSoles: 90,
    precioDisplay: "S/ 90 soles por sesión",
    tagline: "Relajación y regeneración de la piel con lodo mineralizado",
    duracion: "2.5 Horas",
    imagen: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    descripcion: "Visita la piscina natural de lodo arcilloso mineralizado ubicada en los cerros norteños. El barro contiene azufre, magnesio y minerales esenciales que suavizan e hidratan la piel profundamente.",
    incluye: "Guiado y mototaxi privado de ida y vuelta ✔️ Acceso a la piscina natural ✔️ Explicación de las propiedades medicinales ✔️ Sesión de secado del lodo al sol ✔️ Lavado con agua fresca y toalla limpia incluida"
  }
];

export const restauranteMenu: Dish[] = [
  // Ceviches
  {
    id: "cev-pescado",
    nombre: "Ceviche Clásico de Pescado",
    categoria: "Ceviches y Tiraditos",
    precioSoles: 45,
    descripcion: "Cachitos de pescado fresco del día marinados en zumo de limón de Chulucanas, cebolla roja crujiente, ají limo, cilantro, camote glaseado, choclo desgranado y tortas de choclo norteño.",
    popular: true
  },
  {
    id: "cev-mariscos",
    nombre: "Ceviche Mixto de Mariscos",
    categoria: "Ceviches y Tiraditos",
    precioSoles: 48,
    descripcion: "Pescado fresco, pulpo, calamar, colas de langostinos, conchas de abanico, marinados con limón norteño y servido con chifles piuranos crujientes.",
    popular: true
  },
  {
    id: "tiradito-clasico",
    nombre: "Tiradito Costablanca de Ají Amarillo",
    categoria: "Ceviches y Tiraditos",
    precioSoles: 45,
    descripcion: "Finas láminas de lenguado marinadas al momento con un delicado aliño cítrico y crema de ají amarillo asado, coronado con granos de choclo y batata dulce."
  },
  // Entradas
  {
    id: "causa-atun",
    nombre: "Causa Rellena de Cerveza y Atún",
    categoria: "Entradas",
    precioSoles: 35,
    descripcion: "Masa fina de papa amarilla piurana sazonada con ají amarillo y limón norteño, rellena de abundante pulpa de atún de altura, palta fuerte y mayonesa de la casa."
  },
  {
    id: "pionono-papa",
    nombre: "Pionono de Papa con Pollo",
    categoria: "Entradas",
    precioSoles: 35,
    descripcion: "Suave pionono elaborado con masa compacta de papa amarilla rellena con filete de pollo deshilachado, apio, pecanas, láminas de palta y mayonesa especial."
  },
  {
    id: "papa-huancaina",
    nombre: "Papa a la Huancaína Tradicional",
    categoria: "Entradas",
    precioSoles: 30,
    descripcion: "Rodajas de papa sancochada bañadas en una cremosa salsa de queso fresco andino, ají amarillo sancochado, leche y galletas de soda, decorado con aceituna de botija y huevo duro."
  },
  {
    id: "tequenos-queso",
    nombre: "Tequeños Crujientes de Queso",
    categoria: "Entradas",
    precioSoles: 30,
    descripcion: "Masa wonton rellena de queso fresco andino fritos al momento, acompañados de una generosa porción de salsa guacamole cremosa."
  },
  // Platos de Fondo
  {
    id: "tacu-tacu",
    nombre: "Tacu Tacu Costablanca en Salsa de Mariscos",
    categoria: "Platos de Fondo",
    precioSoles: 55,
    descripcion: "Nuestra gran especialidad de la casa. Arroz y frejoles norteños salteados a la sartén en forma de tortilla, sellados de forma crujiente y bañados en una abundante y cremosa salsa de mixtura de mariscos (langostinos, calamares, pulpo) al ají panca.",
    popular: true
  },
  {
    id: "arroz-mariscos",
    nombre: "Arroz con Mariscos de Altamar",
    categoria: "Platos de Fondo",
    precioSoles: 45,
    descripcion: "Arroz graneado sazonado con aderezo criollo a base de ají colorado, vino blanco y caldo de mariscos, mezclado con langostinos, calamares y pulpo, acompañado de sarsa criolla.",
    popular: true
  },
  {
    id: "arroz-pollo",
    nombre: "Arroz con Pollo Criollo",
    categoria: "Platos de Fondo",
    precioSoles: 42,
    descripcion: "Típico del norte peruano. Arroz verde cocido con cerveza rubia norteña, cilantro molido, pimientos, arvejas y acompañado de una jugosa pierna o encuentro de pollo frito y sarsa criolla con ají limo."
  },
  {
    id: "pescado-ajillo",
    nombre: "Pescado al Ajillo con Arroz Jardinero",
    categoria: "Platos de Fondo",
    precioSoles: 50,
    descripcion: "Filete de pescado entero a la plancha bañado en una deliciosa y perfumada salsa de ajos caramelizados y mantequilla, acompañado de arroz a la jardinera con choclo y zanahoria."
  },
  {
    id: "asado-pure",
    nombre: "Asado de Res con Arroz y Puré de Papas",
    categoria: "Platos de Fondo",
    precioSoles: 40,
    descripcion: "Jugoso asado de carne de res cocido a fuego lento durante horas en su propio jugo con aderezo norteño, servido con arroz blanco y puré de papas rústico elaborado con abundante mantequilla."
  },
  {
    id: "chuleta-chancho",
    nombre: "Chuleta de Cerdo a la Plancha",
    categoria: "Platos de Fondo",
    precioSoles: 45,
    descripcion: "Amplia chuleta de cerdo sazonada de forma criolla, sellada en s sartén, acompañada de papas doradas rústicas y arroz graneado."
  },
  {
    id: "pollo-horno",
    nombre: "Pollo al Horno con Ensalada Rusa",
    categoria: "Platos de Fondo",
    precioSoles: 42,
    descripcion: "Cuarto de pollo marinado en hierbas aromáticas, asado al horno para lograr una piel dorada y crocante, servido con la clásica ensalada rusa de beterraga, zanahorias y alverjitas con mayonesa."
  },
  {
    id: "chicharron-pollo",
    nombre: "Chicharrón de Pollo Playero",
    categoria: "Platos de Fondo",
    precioSoles: 38,
    descripcion: "Trozos medianos de pechuga de pollo super crujientes, marinados en sillao y limón, fritos y servidos con papas fritas norteñas y crema tártara casera."
  },
  // Bebidas
  {
    id: "jugo-maracuya",
    nombre: "Jarra de Jugo de Maracuyá",
    categoria: "Bebidas",
    precioSoles: 18,
    descripcion: "Refrescante jarra elaborada con pulpa de maracuyá fresca y madura de las chacras del norte, servida heladísima con cubos de hielo."
  },
  {
    id: "limonada-jarra",
    nombre: "Jarra de Limonada Especial",
    categoria: "Bebidas",
    precioSoles: 18,
    descripcion: "Jarra de limonada recién exprimida empleando limones ácidos piuranos de cáscara delgada, el acompañamiento perfecto para la grasa de los mariscos."
  },
  // Postres
  {
    id: "postre-mousse",
    nombre: "Mousse de Maracuyá Frío",
    categoria: "Postres",
    precioSoles: 15,
    descripcion: "Suave y aireado postre con el punto de acidez perfecto, elaborado con crema batida, leche condensada y jalea dulce de maracuyá."
  },
  {
    id: "postre-limon",
    nombre: "Pie de Limón Costablanca",
    categoria: "Postres",
    precioSoles: 15,
    descripcion: "Base crujiente de galleta de vainilla norteña, rellena con una sedosa crema ácida de limón de Chulucanas, coronada con merengue italiano flameado al soplete."
  }
];

export const activeFAQs: FAQItem[] = [
  {
    id: 1,
    q: "¿Cuál es la mejor temporada para viajar a Máncora?",
    a: "Máncora destaca por contar con más de 300 días cálidos y soleados al año. Las temperaturas fluctúan entre los 25°C como mínimo y 34°C como máximo, dentro de un clima tropical seco. No hay invierno frío. Sinceramente, cualquier día del año que decidas visitarnos será excelente, garantizando sol, aguas templadas de mar y sunsets de ensueño frente a nuestras piscinas."
  },
  {
    id: 2,
    q: "¿Cómo es el régimen de reserva y pago?",
    a: "Para asegurar su habitación solicitamos un depósito previo del 50% de la estadía total mediante transferencia bancaria. El 50% restante se cancela directamente al hacer su check-in en el hotel. Trabajamos bajo la personería de TURISMO COSTABLANCA SAC, con RUC 20604660174, garantizándole una transacción 100% segura y formal con facturación."
  },
  {
    id: 3,
    q: "¿Tienen piscina disponible y a qué distancia de la playa se encuentra el hotel?",
    a: "Contamos con tres espectaculares piscinas ubicadas estratégicamente en nuestra terraza frente al mar. El Hotel Costablanca está construido literalmente al pie del mar, por lo que las habitaciones se encuentran a escasos pasos de la arena y de las tibias aguas de Playa Vichayito."
  },
  {
    id: 4,
    q: "¿Cuáles son los horarios de Check-in y Check-out?",
    a: "Nuestro horario oficial de entrega de habitaciones (Check-in) es a las 15:00 (3:00 pm). El horario oficial para devolver las llaves en recepción (Check-out) es a las 11:00 am. Sin embargo, para mayor comodidad de nuestros clientes, si llega temprano (desde las 6:00 am) puede registrarse, dejar las maletas, y empezar a usar sin cargo adicional las 3 piscinas, el Wifi, restaurantes y baños. Igualmente al Check-out si entrega su habitación a las 11:00 am, se puede quedar disfrutando del resort y las piscinas hasta las 9:00 pm de la noche."
  },
  {
    id: 5,
    q: "¿Cómo son las políticas de niños y camas adicionales?",
    a: "Los niños de 4 años o menores no pagan tasa de alojamiento si duermen en las camas existentes de la habitación. Si solicita una Cama Adicional móvil de 1.5 plazas (para un adulto o un niño mayor), el costo de la misma es de S/ 100 por noche, lo cual le faculta a incluir sábanas extras, toallas y un desayuno americano completo adicional."
  },
  {
    id: 6,
    q: "¿Aceptan mascotas? ¿Tiene costo?",
    a: "¡Sí, por supuesto! Somos uno de los pocos hoteles selectos que son auténticamente Pet Friendly en Máncora de forma gratuita. Aceptamos mascotas de tamaño pequeño o mediano sin ningún cargo o suplemento adicional en la tarifa. Pedimos únicamente cuidar la higiene del resort y el descanso armónico de los otros huéspedes."
  },
  {
    id: 7,
    q: "¿Cómo llegar de forma fácil al Hotel Costablanca desde Lima?",
    a: "Puede volar a cualquiera de los tres aeropuertos cercanos: Talara (a 1h 15m), Tumbes (a 1h 30m) o Piura (a 2h 50m). Desde allí, operan buses modernos de forma horaria que lo dejan en la plaza o terminal de Máncora en un viaje seguro de S/ 15 a S/ 45. Una vez en el terminal de Máncora, puede tomar un taxi (S/ 20) o una mototaxi turística (S/ 15) que lo llevará directo a nuestra entrada en Playa Vichayito en solo 15 minutos."
  },
  {
    id: 8,
    q: "¿Hay internet inalámbrico (Wi-Fi) gratis en las instalaciones?",
    a: "Contamos con una red inalámbrica con soporte de Fibra Óptica propia e Internet de banda ancha de alta velocidad totalmente gratis para todos nuestros huéspedes en todo el resort: en las habitaciones, junto a las piscinas, en los restaurantes y en el bar de la playa."
  },
  {
    id: 9,
    q: "¿Cuentan con servicio de comida o restaurante?",
    a: "Sí, tenemos dos restaurantes frente al mar que preparan más de 60 platos a la carta basados en la gastronomía marina clásica del norte peruano. Además, si prefiere la tranquilidad, le enviamos su plato favorito directamente a la terraza de su habitación sin ningún recargo adicional."
  },
  {
    id: 10,
    q: "¿Cómo manejan los viajes de promoción de los colegios?",
    a: "Llevamos más de 25 años sirviendo a delegaciones de colegios peruanos y ecuatorianos bajo sistemas 'Todo Incluido' diseñados para la seguridad integral y el divertimento de los estudiantes. Tenemos políticas inclusivas extraordinarias donde estudiantes destacados o cuyas familias tengan dificultades económicas viajan completamente gratis (becados). Coordinamos visitas previas sin ningún costo para los directivos encargados del comité."
  }
];
