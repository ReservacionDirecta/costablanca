import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const isProd = process.env.NODE_ENV === "production";
const PORT = 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // API Route for BabyBot Chatbot using Gemini
  app.post("/api/chat", async (req: express.Request, res: express.Response) => {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Mensaje requerido." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Degrade gracefully with simulated responses if the key is not set.
      // This ensures the preview is always fully testable in the AI Studio environment.
      return res.json({
        text: `🤖 **[Modo Demostración - BabyBot]**\n\n¡Hola! Bienvenido al asistente del **Hotel Costablanca Vichayito**. Para habilitar mis respuestas inteligentes creadas por Inteligencia Artificial, pídele al administrador que configure la variable \`GEMINI_API_KEY\` en el panel de **Settings > Secrets**.\n\nMientras tanto, aquí van datos reales del hotel para ayudarte:\n- **Ubicación:** Playa Vichayito (Máncora). Estamos al pie del mar.\n- **Piscinas:** Contamos con 3 espectaculares piscinas frente al mar.\n- **Mascotas:** Somos 100% *Pet Friendly* (mascotas pequeñas entran gratis sin recargo).\n- **Habitaciones:** Desde S/ 100 por noche, incluye Wifi de fibra óptica, acceso a las piscinas y un delicioso desayuno americano de 7:30 am a 10:30 am.\n- **Contacto:** Puedes escribirnos directamente por WhatsApp al **+51 932 723 689**.\n\n¿Quieres que te cuente más sobre nuestras tarifas de habitaciones, tours para nadar con tortugas, o paquetes para viajes de promoción escolar? Te escucho.`
      });
    }

    try {
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          }
        }
      });

      const systemInstruction = `Eres "BabyBot", el asistente virtual 24/7 exclusivo de huéspedes y visitantes de Hotel Costablanca (Máncora, Playa Vichayito, Piura, Perú).
Tradición del hotel: Sirviendo con orgullo y tradición familiar desde 1998 (más de 25 años).
Razón Social: TURISMO COSTABLANCA SAC (RUC 20604660174).
Tu tono debe ser extremadamente cálido, acogedor, alegre, servicial, con un toque del orgullo norteño peruano y playero relajado. Usa español de Perú sutilmente (palabras como "hola", "casas de playa", "cebichito", "sunsets mágicos", etc., pero siempre profesional).

Información del Hotel para responder consultas:
- Ubicación: Playa Vichayito, Máncora, Piura. Al pie de la playa, a escasos metros de la orilla de la playa más hermosa de Máncora. A solo 5 km del centro de Máncora (se llega en mototaxi o taxi en 15 minutos, cuesta S/ 15-20).
- Instalaciones: 3 piscinas frente al mar, 2 restaurantes de comida típica, bar playero, estacionamiento vigilado 24/7.
- Mascotas (Pet Friendly): Aceptamos mascotas pequeñas sin ningún recargo o costo extra.
- Wifi: Internet de fibra óptica gratis en todo el hotel (habitaciones, piscina, bar, etc).
- Check-in: 15:00 (3:00 pm). El huésped puede llegar desde las 6:00 am y usar gratis piscina, vestuarios, wifi y restaurante mientras espera su habitación.
- Check-out: 11:00 am. Deben devolver las llaves a esa hora, pero pueden quedarse usando las instalaciones y piscinas sin cargo hasta las 9:00 pm del día de salida.
- Niños: Menores de 4 años no pagan. Cama adicional cuesta S/ 100 la noche con desayuno incluido.
- ¿Cómo reservar?: Depósito del 50% para separar habitación (BCP de Turismo Costablanca SAC), saldo se cancela en el hotel.

Habitaciones (97 en total, 79 con vista al mar y balcón privado, 18 sin vista):
1. Habitación Matrimonial (2 personas): S/ 200 la noche. Balcón al mar o vista panorámica, desayuno, Wifi.
2. Matrimonial Jacuzzi (2 personas): S/ 350 - S/ 599 la noche. Jacuzzi privado, balcón al mar, Wifi.
3. Habitación Doble (3 a 4 personas): S/ 200 - S/ 350 la noche. Balcón al mar, desayuno, Wifi.
4. Quíntuple (5 a 7 personas): S/ 400 - S/ 599 la noche. 30m2 de espacio, balcón al mar.
5. Matrimonial + Camarote (3 a 4 personas): S/ 200 - S/ 350 la noche. Balcón al mar.
* Todas las habitaciones incluyen baño con agua caliente, toallas, jabón, Wifi y desayuno americano (2 panes, mantequilla, mermelada, café y jugo) en horario de 7:30 am - 10:30 am.

Restaurante Costablanca:
- +60 platos de exquisita comida peruana (cebiches frescos, tiraditos, etc).
- Plato estrella: "Tacu Tacu en salsa de mariscos" (espectacular según reviews).
- Porciones abundantes con costo promedio S/ 40 soles.
- Horarios: Desayuno 7:00 am - 10:30 am. Almuerzo 12:00 pm - 4:30 pm. Cena 6:30 pm - 10:00 pm.
- Servicio de habitación (Room Service): Sin costo ni recargos adicionales.

Tours y Experiencias:
- Nadar con Tortugas: S/ 55 por persona. Recojo de hotel en mototaxi, traslado a muelle, chalecos, nado con tortugas de 1 hora, fotos y videos, retorno. Espectacular.
- Paseo Costero: S/ 55 por persona. Recojo en mototaxi, lancha rápida, avistamiento de lobos marinos, nado con tortugas de 1 hora, ceviche a bordo y fotos con GoPro. Dura 3.5 horas.
- Avistamiento de Ballenas (10 julio - 15 oct): S/ 55 a S/ 110. Paseo por Pocitas, Vichayito y Órganos para ver ballenas jorobadas con hidrófono para oír sus cantos.
- Manglares de Tumbes: S/ 80 a S/ 110. Paseo de día completo (12 hrs), bus con aire, playa Zorritos y Punta Sal, visita a manglares de Puerto Pizarro, Isla del Amor, criadero de cocodrilos.
- Baño de Barro Medicinal: S/ 90 por sesión de descanso restaurador.
- Paddle: S/ 60 por 2 personas, Buceo: S/ 230 por persona, Moto Acuática: S/ 100, Paseo en Banana: S/ 50.
- Masajes: Relajantes, descontracturantes, playeros en el Spa.

Viajes de Promoción (Colegios):
- Segmento estrella con más de 25 años de experiencia y más de 20,000 personas atendidas al año.
- Todo incluido: Alojamiento en formato seguro para estudiantes, alimentación completa, tours exclusivos (Tortugas, Banana, Manglares), Fiesta Blanca de promoción, DJ, cocktail de bienvenida sin alcohol, seguridad 24/7.
- Exclusividad: Cupo de solo 2 colegios por mes para garantizar máxima atención.
- Reserva garantizada: Devolución del 100% de lo pagado si ocurre cancelación por fuerza mayor.
- Inclusivo: Para alumnos cuyas familias no pueden pagarlo, el hotel lo beca GRATIS.
- Los organizadores y docentes pueden concertar visitas de inspección gratuitas antes del viaje.

Canales de Contacto:
- WhatsApp Principal/Reservas: +51 932 723 689
- WhatsApp Tours: +51 913 721 860
- WhatsApp Colegios: +51 985 510 282
- WhatsApp Spa: +51 920 995 197
- WhatsApp Habitaciones: +51 959 849 792
- Teléfono Fijo: (073) 25 8379

Instrucciones de Respuesta:
1. Responde de forma concisa, amena, playera y norteña.
2. Da precios exactos y alienta las personas a visitar nuestro hotel paradisíaco.
3. Brinda enlaces o números de WhatsApp específicos para cada tipo de reserva.`;

      // Helper function to call chat message with optional model choice
      async function trySendMessage(modelName: string) {
        const chat = ai.chats.create({
          model: modelName,
          history: history && Array.isArray(history) ? history.map((h: any) => ({
            role: h.role === "model" ? "model" : "user",
            parts: [{ text: h.content }]
          })) : [],
          config: {
            systemInstruction: systemInstruction,
          }
        });
        return await chat.sendMessage({ message });
      }

      let outcome;
      let lastError = null;
      const modelsToTry = ["gemini-3.5-flash", "gemini-3.1-flash-lite"];

      for (const model of modelsToTry) {
        let retries = 2; // Try up to 2 retries per model
        while (retries >= 0) {
          try {
            outcome = await trySendMessage(model);
            break; // Success! Exit retry loop
          } catch (err: any) {
            lastError = err;
            console.warn(`Error using model ${model} (Retries left: ${retries}):`, err.message);
            if (retries > 0) {
              // Wait 500ms before retrying
              await new Promise(resolve => setTimeout(resolve, 500));
            }
            retries--;
          }
        }
        if (outcome) {
          break; // Success! Exit model loop
        }
      }

      if (!outcome) {
        throw lastError || new Error("Failed to get response after model fallback.");
      }

      const reply = outcome.text || "No pude procesar tu solicitud en este momento. Por favor inténtalo de nuevo en unos momentos.";
      return res.json({ text: reply });

    } catch (err: any) {
      console.error("Gemini outage or error detected. Switching to offline-resilient local knowledge matching.", err);
      
      // Local graceful fallback generator - maps hotel data using keywords when API is unavailable or rate limited.
      const q = message.toLowerCase();
      let intro = `🤖 **[BabyBot - Asistente de Respaldo Local]**\n\n*Nota: Mis servidores de Inteligencia Artificial están experimentando una alta demanda, pero aquí tienes los datos exactos y actualizados de nuestra base de datos para ayudarte:* \n\n`;
      
      if (q.includes("precio") || q.includes("tarifa") || q.includes("habita") || q.includes("costo") || q.includes("bungalow") || q.includes("cuarto") || q.includes("alojar")) {
        return res.json({
          text: intro + `🛌 **Habitaciones y Tarifas por noche (con desayuno y Wifi de fibra óptica incluidos):**\n- **Habitación Matrimonial** (2 pers): S/ 200/noche. Balcón de cara al mar.\n- **Matrimonial Jacuzzi** (2 pers): S/ 350 - S/ 599/noche. Jacuzzi privado y balcón con excelente vista.\n- **Habitación Doble** (3-4 pers): S/ 200 - S/ 350/noche. Balcón al mar.\n- **Quíntuple** (5-7 pers): S/ 400 - S/ 599/noche (30m²).\n\n* El check-in es a las 15:00 (3:00 pm), pero puedes ingresar al hotel desde las 6:00 am para disfrutar de nuestras 3 piscinas frente al mar y restaurante.\n* Separa tu reserva con el 50% vía depósito o transferencia.\n\nComunícate por WhatsApp con reservas al **+51 932 723 689** o llámanos para confirmar disponibilidad inmediata.`
        });
      }
      
      if (q.includes("tortuga") || q.includes("nado") || q.includes("nadar") || q.includes("tour") || q.includes("excurs") || q.includes("lancha") || q.includes("ballena") || q.includes("manglar") || q.includes("actividad")) {
        return res.json({
          text: intro + `🐢 **Tours y Excursiones Recomendadas:**\n- **Nadar con Tortugas:** S/ 55 por persona. Moto-taxi de ida/vuelta desde el hotel, chaleco, guía y nado libre de 1 hora.\n- **Paseo Costero:** S/ 55 por persona. Lancha, avistamiento de lobos de mar, fotos GoPro y nado con tortugas (3.5 hrs).\n- **Avistamiento de Ballenas** (Jul 10 - Oct 15): S/ 55 - S/ 110. Escucha los cantos con hidrófono.\n- **Manglares de Tumbes:** S/ 80 - S/ 110. Tour completo de 12 horas, visita criadero de cocodrilos, Zorritos y Punta Sal.\n- **Paddle, Buceo, Moto Acuática y Banana:** Disponible a partir de S/ 50.\n\nEscribe al WhatsApp de Tours al **+51 913 721 860** para separar tus cupos.`
        });
      }

      if (q.includes("colegio") || q.includes("promo") || q.includes("viaje") || q.includes("estudia") || q.includes("escolar")) {
        return res.json({
          text: intro + `🎓 **Servicio de Viajes de Promoción Escolar (¡Nuestra Especialidad desde 1998!):**\n- **Todo Incluido:** Alojamiento seguro, comidas completas, tours (Tortugas, Banana), Fiesta Blanca de promoción con DJ, cocktail de bienvenida, seguridad total 24/7.\n- **Exclusividad:** Cupos para solo 2 colegios al mes para garantizar máxima atención.\n- **Beca de Apoyo:** Alumnos que no puedan pagarlo son becados totalmente GRATIS por el hotel.\n- **Garantía Total:** Devolución del 100% de lo pagado ante cancelaciones fortuitas de fuerza mayor.\n\nPara cotizar o coordinar una visita de inspección gratuita, comunícate con el Asesor de Colegios al WhatsApp **+51 985 510 282**.`
        });
      }

      if (q.includes("mascota") || q.includes("perro") || q.includes("gato") || q.includes("pet") || q.includes("animal")) {
        return res.json({
          text: intro + `🐶 **Políticas Pet Friendly (Gratis):**\n- ¡Somos 100% Pet Friendly! Aceptamos mascotas pequeñas sin ningún recargo ni depósitos de garantía adicionales.\n- Tu mascota podrá disfrutar del sol y los jardines a tu lado.\n\nSi tienes dudas adicionales, escríbenos al WhatsApp **+51 932 723 689**.`
        });
      }

      if (q.includes("llegar") || q.includes("talara") || q.includes("piura") || q.includes("ubica") || q.includes("donde") || q.includes("mapa") || q.includes("direcc")) {
        return res.json({
          text: intro + `📍 **Ubicación y Logística de Viaje:**\n- **Dirección:** Playa Vichayito, Máncora, Piura (a solo 5 km de la Plaza de Máncora, unos 15 minutos en mototaxi o taxi que cuesta de S/ 15 a S/ 20).\n- **Desde Talara:** Aeropuerto a 1.5 horas en auto.\n- **Desde Piura:** Aeropuerto a 3 horas en auto.\n- **Llegada anticipada:** Si tu viaje llega temprano, puedes acceder a las piscinas y delicias del restaurante desde las 6:00 am del check-in.\n\nPara coordinar choferes de confianza, comunícate al **+51 932 723 689**.`
        });
      }

      if (q.includes("comida") || q.includes("restaurante") || q.includes("carta") || q.includes("almuer") || q.includes("cena") || q.includes("comer") || q.includes("plat")) {
        return res.json({
          text: intro + `🍽️ **Gastronomía de nuestro Restaurante Costablanca:**\n- **Variedad:** Más de 60 platos tradicionales de la gastronomía peruana y marina fresca.\n- **Plato recomendado:** *Tacu Tacu en salsa de mariscos* (S/ 40 aprox).\n- **Room Service:** Servicio a la habitación de cortesía sin ningún costo extra.\n- **Horarios:** Desayunos de 7:30 am a 10:30 am, almuerzos de 12:00 pm a 4:30 pm, y cenas de 6:30 pm a 10:00 pm.`
        });
      }

      // Default fallback when API fails and no clear category matches
      return res.json({
        text: intro + `🌴 **¡Bienvenido a Hotel Costablanca Vichayito!**\nDisfruta de sol eterno, 3 piscinas al pie de la playa, de nuestra deliciosa cocina y tours increíbles.\n\n¿En qué te puedo asesorar hoy? Escribe una frase sobre:\n- **Tarifas y Habitaciones:** Matrimoniales con Jacuzzi, Habitaciones Dobles, familiares.\n- **Tours:** Nadar con tortugas en lanchas rápidas, Manglares de Tumbes, ballenas.\n- **Mascotas:** ¡Tu fiel amigo es bienvenido gratis!\n\n**WhatsApp Directo de Atención:**\n📞 Reservas/General: **+51 932 723 689**\n📞 Tours y Actividades: **+51 913 721 860**\n📞 Viajes de Promoción: **+51 985 510 282**`
      });
    }
  });

  // Serve static UI assets
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
