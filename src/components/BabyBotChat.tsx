import React, { useState, useRef, useEffect } from "react";
import { ChatMessage } from "../types";
import { 
  MessageSquare, Send, Sparkles, User, RefreshCw, 
  HelpCircle, Compass, Anchor, ArrowRight, ShieldAlert 
} from "lucide-react";

export default function BabyBotChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "model",
      content: "¡Hola! 🌴 Soy **BabyBot**, tu asistente virtual de **Hotel Costablanca Vichayito**.\n\nEstoy aquí durante las 24 horas del día para ayudarte con tus dudas:\n- Tarifas de habitaciones y bungalows 🛌\n- Itinerarios de tours (Tortugas, lanchas, cocodrilos) 🐢\n- ¿Cómo llegar desde Talara o Piura? ✈️\n- ¿Viajas con tu mascota? somos Pet Friendly gratis. 🐶\n\n¿En qué te puedo asesorar hoy para que prepares tus próximas vacaciones?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll logic
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const sampleQuestions = [
    { text: "Tarifas de Habitaciones", q: "¿Cuáles son los tipos de habitaciones y sus tarifas por noche?" },
    { text: "Nadar con Tortugas", q: "¿Qué incluye el tour para nadar con tortugas y cuánto cuesta?" },
    { text: "Cómo llegar de Talara", q: "¿Cómo llego al hotel si viajo en avión por Talara o Piura?" },
    { text: "Viajes de Promoción", q: "¿Tienen paquetes todo incluido para viajes de promoción de colegios?" },
    { text: "Condición sobre Mascotas", q: "¿Aceptan mascotas en las habitaciones y hay algún cobro?" },
  ];

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      role: "user",
      content: textToSend,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setLoading(true);

    try {
      const historyPayload = messages.map(m => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: historyPayload
        })
      });

      if (!res.ok) {
        throw new Error("Fallo en la comunicación con el servidor.");
      }

      const data = await res.json();
      const botMsg: ChatMessage = {
        id: Math.random().toString(),
        role: "model",
        content: data.text || "No obtuve respuesta del asistente de Inteligencia Artificial.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.warn("Fallo en la comunicación con el servidor. Usando el motor de respuesta offline de respaldo local de Vichayito:", err);
      
      const q = textToSend.toLowerCase();
      let responseText = "";

      if (q.includes("precio") || q.includes("tarifa") || q.includes("habita") || q.includes("costo") || q.includes("bungalow") || q.includes("cuarto") || q.includes("alojar")) {
        responseText = `🛌 **Habitaciones y Tarifas por noche (con desayuno buffet y Wifi de fibra óptica incluidos):**\n\n` +
          `• **Habitación Matrimonial** (2 personas): Desde **S/ 200/noche**. Balcón privado frente al mar.\n` +
          `• **Matrimonial Jacuzzi** (2 personas): Desde **S/ 350 - S/ 599/noche**. Cuenta con Jacuzzi privado y balcón con la mejor vista al atardecer.\n` +
          `• **Habitación Doble** (3-4 personas): Desde **S/ 200 - S/ 350/noche**. Equipado con balcón frente al mar.\n` +
          `• **Habitación Quíntuple** (5-7 personas): Desde **S/ 400 - S/ 599/noche**. Muy amplia (30m²).\n\n` +
          `* El check-in oficial es a las 15:00 (3:00 pm), pero puedes ingresar gratis al hotel desde las 6:00 am para usar las 3 piscinas templadas y el restaurante.\n` +
          `* Separa tu fecha especial abonando el 50% vía depósito, transferencia o Yape.\n\n` +
          `Contacta a reservas directas al WhatsApp **+51 932 723 689**.`;
      } else if (q.includes("tortuga") || q.includes("nado") || q.includes("nadar") || q.includes("tour") || q.includes("excurs") || q.includes("lancha") || q.includes("ballena") || q.includes("manglar") || q.includes("actividad")) {
        responseText = `🐢 **Tours y Excursiones Recomendadas por el Hotel:**\n\n` +
          `• **Nadar con Tortugas en el Ñuro:** **S/ 55 por persona**. Incluye traslado ida/vuelta desde el lobby del hotel, chaleco de seguridad, guía personalizado y nado libre de 1 hora.\n` +
          `• **Paseo Costero en Lancha:** **S/ 55 por persona**. Paseo por las bahías, avistamiento de lobos marinos, fotos GoPro y nado con tortugas (3.5 horas).\n` +
          `• **Avistamiento de Ballenas** (Jul 10 - Oct 15): Desde **S/ 55 hasta S/ 110**. Disfruta de acrobáticos saltos de ballenas y oye sus cantos con hidrófonos de altamar.\n` +
          `• **Manglares de Tumbes Completo:** **S/ 80 - S/ 110**. Tour full day (12 horas) hacia el Santuario Nacional, criadero de cocodrilos, Zorritos y Punta Sal.\n\n` +
          `Escribe al área de Tours al WhatsApp **+51 913 721 860** para separar cupos de mañana o tarde.`;
      } else if (q.includes("colegio") || q.includes("promo") || q.includes("viaje") || q.includes("estudia") || q.includes("escolar")) {
        responseText = `🎓 **Viajes de Promoción Escolar (Especialistas desde 1998):**\n\n` +
          `• **Servicio Todo Incluido:** Alojamiento de alta seguridad, desayuno + almuerzo + cena, tours guiados certificados (Tortugas, lancha, banana acuática), Fiesta Blanca de Promoción con DJ privado, coctel de bienvenida, y vigilancia permanente 24/7.\n` +
          `• **Exclusividad de Aforo:** Solo aceptamos 2 colegios al mes para garantizar la máxima atención y cuidado personalizado.\n` +
          `• **Programa de Becas:** Los alumnos que no puedan solventar su viaje son becados de forma 100% gratuita por nuestra administración escolar.\n` +
          `• **Garantía Reembolsable:** Ofrecemos reembolso del 100% ante cancelaciones ajenas o contingencias de fuerza mayor.\n\n` +
          `Solicita una cotización detallada o coordina una visita de inspección gratuita llamando al Asesor Especializado al WhatsApp **+51 985 510 282**.`;
      } else if (q.includes("mascota") || q.includes("perro") || q.includes("gato") || q.includes("pet") || q.includes("animal")) {
        responseText = `🐶 **Políticas Pet Friendly del Hotel (Gratis):**\n\n` +
          `• ¡Somos 100% Pet Friendly con mucho cariño! Aceptamos mascotas pequeñas de casa sin ningún recargo en la estadía ni depósitos adicionales.\n` +
          `• Tu mejor amigo podrá estar contigo en los jardines del resort y áreas exteriores compartiendo el sol eterno.\n\n` +
          `Si tienes una consulta especial sobre mascotas medianas, por favor escríbenos al WhatsApp **+51 932 723 689**.`;
      } else if (q.includes("llegar") || q.includes("talara") || q.includes("piura") || q.includes("ubica") || q.includes("donde") || q.includes("mapa") || q.includes("direcc")) {
        responseText = `📍 **Ubicación y Logística de Vial:**\n\n` +
          `• **Dirección:** Playa Vichayito Norte, Máncora, Piura (a solo 5 km de la Plaza Principal de Máncora, unos 12-15 minutos en un mototaxi seguro, con un costo habitual de S/ 15 a S/ 20).\n` +
          `• **Desde Aeropuerto de Talara:** Se encuentra a 1.5 horas en auto privado.\n` +
          `• **Desde Aeropuerto de Piura:** Se encuentra a 3 horas de camino.\n` +
          `• **Servicio de Bienvenida:** Si tu bus o vuelo llega por la mañana muy temprano, puedes ingresar al hotel desde las 6:00 am del check-in, acomodar el equipaje en custodia, y disfrutar del restaurante y piscinas.\n\n` +
          `Para coordinar traslados con choferes autorizados del hotel, comunícate al WhatsApp de atención al cliente **+51 932 723 689**.`;
      } else if (q.includes("comida") || q.includes("restaurante") || q.includes("carta") || q.includes("almuer") || q.includes("cena") || q.includes("comer") || q.includes("plat")) {
        responseText = `🍽️ **Gastronomía del Restaurante Costablanca:**\n\n` +
          `• **Carta Marina y Norteña:** Más de 60 platos tradicionales de pescados frescos, mariscos, lomo saltado, causas ricas y postres del norte.\n` +
          `• **El Plato Estrella del Chef:** *Tacu Tacu crujiente en salsa de mariscos al pisco* (Aprox. S/ 40).\n` +
          `• **Room Service Gratuito:** Llevamos tus delicias hasta la puerta de tu habitación o terraza sin ningún costo ni recargo por servicio.\n` +
          `• **Horarios del Salón:** Desayunos buffet de 7:30 am a 10:30 am, almuerzos de 12:00 pm a 4:30 pm, y cenas de 6:30 pm a 10:00 pm.`;
      } else {
        responseText = `🌴 **¡Bienvenido a Hotel Costablanca Vichayito!**\n\n` +
          `Contamos con sol eterno, 3 piscinas templadas frente al mar, cómodos bungalows y tours de aventura inolvidables en el norte.\n\n` +
          `Por favor, hazme una consulta sobre:\n` +
          `• **Habitaciones:** Precios y características de bungalows y matrimoniales.\n` +
          `• **Tours:** Nadar con tortugas gigantes en el Ñuro, avistamiento de ballenas.\n` +
          `• **Mascotas:** ¡Tu perrito o gatito es bienvenido gratis!\n` +
          `• **Colegios:** Planes todo incluido para viajes de promoción escolar.\n\n` +
          `**Canales de Contacto Directo WhatsApp:**\n` +
          `📞 Reservas y General: **+51 932 723 689**\n` +
          `📞 Actividades y Tours: **+51 913 721 860**\n` +
          `📞 Asesoría de Colegios: **+51 985 510 282**`;
      }

      const errorMsg: ChatMessage = {
        id: Math.random().toString(),
        role: "model",
        content: `🌴 **[Asistente de Respaldo Local]**\n\n${responseText}`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const parseMarkdown = (text: string) => {
    let html = text
      .replace(/\n/g, "<br />")
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/-\s(.*?)<br \/>/g, '• $1<br />');
    return { __html: html };
  };

  return (
    <div className="bg-natural-cream min-h-[90vh] py-16 flex flex-col items-center justify-center text-natural-earth">
      <div className="w-full max-w-4xl px-4 sm:px-6 flex flex-col h-[75vh]">
        
        {/* Page Title */}
        <div className="text-center max-w-xl mx-auto mb-6 flex-shrink-0">
          <span className="text-xs font-semibold uppercase tracking-widest text-natural-olive mb-1 block flex items-center justify-center gap-1 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-natural-olive animate-pulse" /> BabyBot Asistente 24/7
          </span>
          <h1 className="text-2xl font-serif font-light text-natural-soil tracking-tight">
            AI Travel Agent - Consulta al Experto
          </h1>
          <p className="text-xs text-natural-earth/70 mt-1">
            Nuestro chatbot conoce todo acerca de nuestras habitaciones, excursiones de Tortugas y Máncora.
          </p>
        </div>

        {/* Chat Area Container */}
        <div className="flex-1 bg-white rounded-lg shadow-sm border border-natural-border flex flex-col overflow-hidden min-h-0">
          
          {/* Header Bar of Chat */}
          <div className="bg-natural-soil py-3.5 px-6 border-b border-natural-olive/20 flex items-center justify-between flex-shrink-0 text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-natural-olive flex items-center justify-center text-white text-base font-semibold shadow-inner">
                🏝️
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white leading-none">BabyBot Costablanca</h3>
                <span className="text-[9px] text-[#DED9D0] font-mono tracking-widest uppercase font-bold flex items-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5A5A40] animate-ping inline-block"></span> En línea
                </span>
              </div>
            </div>
            
            <button
              onClick={() => {
                setMessages([
                  {
                    id: "welcome",
                    role: "model",
                    content: "¡Hola! 🌴 Soy **BabyBot**, tu asistente virtual de **Hotel Costablanca Vichayito**.\n\nEstoy aquí durante las 24 horas del día para ayudarte con tus dudas:\n- Tarifas de habitaciones y bungalows 🛌\n- Itinerarios de tours (Tortugas, lanchas, cocodrilos) 🐢\n- ¿Cómo llegar desde Talara o Piura? ✈️\n- ¿Viajas con tu mascota? somos Pet Friendly gratis. 🐶\n\n¿En qué te puedo asesorar hoy para que prepares tus próximas vacaciones?",
                    timestamp: new Date()
                  }
                ]);
              }}
              title="Reiniciar chat"
              className="p-1 px-2 border border-natural-olive/30 hover:bg-natural-olive text-[9px] uppercase font-mono tracking-widest font-semibold rounded text-[#F0ECE4] transition-colors cursor-pointer"
            >
              Reiniciar
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 scroll-smooth bg-[#FDFBF7]/30">
            {messages.map((msg) => {
              const mimeModel = msg.role === "model";
              return (
                <div 
                  key={msg.id}
                  className={`flex items-start gap-3 max-w-[85%] ${mimeModel ? "mr-auto text-left" : "ml-auto flex-row-reverse text-right"}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs ${mimeModel ? "bg-natural-olive" : "bg-natural-soil"}`}>
                    {mimeModel ? "🤖" : <User className="w-4 h-4" />}
                  </div>
                  <div>
                    <div 
                      dangerouslySetInnerHTML={parseMarkdown(msg.content)}
                      className={`p-4 rounded-lg text-xs sm:text-sm leading-relaxed shadow-xs whitespace-pre-line ${
                        mimeModel 
                        ? "bg-natural-sand text-[#2C2623] rounded-tl-none border border-natural-card-border" 
                        : "bg-natural-olive text-white rounded-tr-none"
                      }`}
                    />
                    <span className="block text-[9px] text-[#3C3633]/40 font-mono mt-1 px-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              );
            })}
            
            {/* Loading animation bubble */}
            {loading && (
              <div className="flex items-start gap-3 mr-auto max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-natural-olive flex items-center justify-center text-white text-xs">
                  🤖
                </div>
                <div className="bg-natural-sand p-4 rounded-lg rounded-tl-none border border-natural-card-border flex items-center gap-1 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-natural-earth/50 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-natural-earth/50 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-natural-earth/50 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions chips list - Flex shrink-0 */}
          <div className="px-4 py-2 bg-[#FDFBF7] border-t border-natural-border flex flex-wrap gap-1.5 overflow-x-auto select-none flex-shrink-0">
            {sampleQuestions.map((chip, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(chip.q)}
                disabled={loading}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-white border border-natural-border hover:border-natural-olive text-[11px] rounded-full cursor-pointer hover:bg-natural-sand text-natural-earth transition"
              >
                <HelpCircle className="w-3.5 h-3.5 text-natural-earth/40" />
                {chip.text}
              </button>
            ))}
          </div>

          {/* Input text send block - Flex shrink-0 */}
          <div className="p-3 bg-white border-t border-natural-border flex-shrink-0">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                disabled={loading}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu consulta sobre habitaciones, tours, clima..."
                className="flex-1 bg-natural-cream border border-natural-border rounded px-4 py-3 text-xs sm:text-sm text-natural-soil focus:outline-none focus:border-natural-olive focus:ring-1 focus:ring-natural-olive"
              />
              <button
                type="submit"
                disabled={loading || !inputValue.trim()}
                className="p-3 bg-natural-soil hover:bg-natural-olive disabled:bg-natural-border/30 text-white rounded transition-all shadow-xs cursor-pointer flex items-center justify-center"
              >
                <Send className="w-4 h-4 fill-current text-white" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
