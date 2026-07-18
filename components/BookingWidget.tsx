'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CalendarDays, Users, MessageCircle, AlertCircle, CheckCircle2, ChevronDown } from 'lucide-react';
import { rooms, siteConfig } from '@/data/content';
import { buildBookingMessage, generateWhatsAppLink } from '@/lib/whatsapp';

export default function BookingWidget() {
  const searchParams = useSearchParams();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const roomParam = searchParams.get('room');
    if (roomParam) {
      const foundRoom = rooms.find((r) => r.id === roomParam);
      if (foundRoom) setRoomType(foundRoom.name);
    }
  }, [searchParams]);

  const today = new Date().toISOString().split('T')[0];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!checkIn || !checkOut) {
      setError('Selecciona las fechas de entrada y salida.');
      return;
    }
    if (new Date(checkOut) <= new Date(checkIn)) {
      setError('La fecha de salida debe ser posterior a la de entrada.');
      return;
    }
    if (adults < 1) {
      setError('Debe haber al menos 1 adulto.');
      return;
    }

    const message = buildBookingMessage({ checkIn, checkOut, adults, children, roomType });
    const link = generateWhatsAppLink(message);
    setSuccess(true);
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  const inputClass =
    'mt-1.5 w-full min-w-0 rounded-lg border border-white/15 bg-white/10 px-2 py-2.5 text-xs text-white placeholder-white/30 outline-none transition focus:border-white/40 focus:bg-white/15 focus:ring-1 focus:ring-white/20 sm:px-3 sm:text-sm';

  const selectClass =
    'mt-1.5 w-full min-w-0 rounded-lg border border-white/15 bg-white/10 px-2 py-2.5 text-xs text-white outline-none transition focus:border-white/40 focus:bg-white/15 focus:ring-1 focus:ring-white/20 appearance-none cursor-pointer sm:px-3 sm:text-sm';

  const labelClass = 'block text-[9px] font-semibold uppercase tracking-[0.12em] text-white/60 sm:text-xs';

  return (
    <form
      id="booking-widget-form"
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-2xl"
      style={{ background: 'linear-gradient(145deg, #142825 0%, #1d3934 100%)' }}
    >
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 80% 20%, #356159 0%, transparent 60%)',
      }} />

      <div className="relative p-4 sm:p-6">
        {/* Cabecera del widget */}
        <div className="mb-4 flex items-start gap-3 sm:mb-5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366]/20 sm:h-10 sm:w-10">
            <MessageCircle size={16} className="text-[#25D366] sm:hidden" />
            <MessageCircle size={18} className="hidden text-[#25D366] sm:block" />
          </div>
          <div>
            <h3 className="font-display text-base font-semibold leading-tight text-white sm:text-lg">
              Cotiza por WhatsApp
            </h3>
            <p className="mt-0.5 text-[11px] text-white/50 sm:text-xs">
              Sin intermediarios · Mejor precio garantizado
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block">
            <span className={labelClass}>Entrada</span>
            <input
              type="date"
              min={today}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className={inputClass}
            />
          </label>

          <label className="block">
            <span className={labelClass}>Salida</span>
            <input
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className={inputClass}
            />
          </label>

          <label className="block">
            <span className={labelClass}>Adultos</span>
            <div className="relative">
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className={selectClass}
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n} className="bg-mar-800 text-white">{n} {n === 1 ? 'adulto' : 'adultos'}</option>
                ))}
              </select>
              <ChevronDown size={13} className="pointer-events-none absolute right-3 top-1/2 translate-y-px mt-0.5 text-white/40" />
            </div>
          </label>

          <label className="block">
            <span className={labelClass}>Niños</span>
            <div className="relative">
              <select
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className={selectClass}
              >
                {[0, 1, 2, 3, 4].map((n) => (
                  <option key={n} value={n} className="bg-mar-800 text-white">{n === 0 ? 'Sin niños' : `${n} ${n === 1 ? 'niño' : 'niños'}`}</option>
                ))}
              </select>
              <ChevronDown size={13} className="pointer-events-none absolute right-3 top-1/2 translate-y-px mt-0.5 text-white/40" />
            </div>
          </label>

          <label className="block sm:col-span-2">
            <span className={labelClass}>Habitación</span>
            <div className="relative">
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className={selectClass}
              >
                <option value="" className="bg-mar-800 text-white">Sin preferencia</option>
                {rooms.map((r) => (
                  <option key={r.id} value={r.name} className="bg-mar-800 text-white">
                    {r.name} — {r.price}
                  </option>
                ))}
              </select>
              <ChevronDown size={13} className="pointer-events-none absolute right-3 top-1/2 translate-y-px mt-0.5 text-white/40" />
            </div>
          </label>
        </div>

        {error && (
          <p className="mt-3 flex items-center gap-2 rounded-lg bg-terracota-500/20 px-3 py-2 text-xs text-terracota-300 border border-terracota-500/30">
            <AlertCircle size={13} className="shrink-0" /> {error}
          </p>
        )}
        {success && (
          <p className="mt-3 flex items-center gap-2 rounded-lg bg-[#25D366]/15 px-3 py-2 text-xs text-[#25D366] border border-[#25D366]/30">
            <CheckCircle2 size={13} className="shrink-0" /> Abriendo WhatsApp con tu solicitud…
          </p>
        )}

        <button type="submit" className="btn btn-wa mt-4 w-full text-xs sm:mt-5 sm:text-sm">
          <MessageCircle size={16} /> Enviar solicitud por WhatsApp
        </button>

        <p className="mt-2.5 text-center text-[10px] text-white/35 sm:mt-3 sm:text-[11px]">
          Respondemos en menos de 10 min · Check-in {siteConfig.checkIn} · Check-out {siteConfig.checkOut}
        </p>
      </div>
    </form>
  );
}
