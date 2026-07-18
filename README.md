# Hotel Costa Blanca de Vichayito — Sitio Web

Sitio web de conversión para el Hotel Costa Blanca de Vichayito (3★), construido con **Next.js 14 + TypeScript + Tailwind CSS**.

## Características
- Home con hero, booking widget y servicios destacados.
- Motor de reservas por WhatsApp (sin pagos, pre-reserva con datos dinámicos).
- Páginas: Habitaciones, Servicios, Galería, Ubicación, Experiencias, FAQ, Contacto.
- Componentes reutilizables (Header, Footer, BookingWidget, RoomCard, ServiceCard, WhatsAppFloat).
- SEO: title único por página, meta description, JSON-LD (Hotel + FAQ).
- Diseño responsive mobile-first.

## Estructura
```
app/                 # Páginas (App Router)
components/          # Componentes reutilizables
data/content.ts      # Datos del hotel (textos, servicios, habitaciones, FAQ)
lib/whatsapp.ts      # Generación de mensaje y link de WhatsApp
```

## Configurar
1. Edita `data/content.ts` con los datos reales del hotel (teléfono, dirección, habitaciones).
2. Coloca imágenes en `public/images/` (hero.jpg, room-1.jpg, etc.).

## Desarrollo
```bash
npm install
npm run dev      # http://localhost:3000
```

## Producción / Deploy en Vercel
```bash
npm run build
npm run start
```
Conecta el repo a Vercel y listo. Sin variables de entorno requeridas.

## Nota
Reemplaza `whatsappPhone` en `data/content.ts` por el número real del hotel en formato internacional sin "+" (ej. 51924277348).
