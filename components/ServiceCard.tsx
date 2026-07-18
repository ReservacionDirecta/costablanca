import { Waves, Utensils, Wifi, Car, Clock, BedDouble, MapPin, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  waves: Waves,
  utensils: Utensils,
  wifi: Wifi,
  car: Car,
  clock: Clock,
  bed: BedDouble,
  'map-pin': MapPin,
};

export default function ServiceCard({ service }: { service: any }) {
  const Icon = iconMap[service.icon] ?? Waves;
  return (
    <div className="group flex items-start gap-4 rounded-xl p-5 transition-all duration-200 hover:bg-white hover:shadow-card border border-transparent hover:border-arena-200/60">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mar-50 text-mar-600 group-hover:bg-mar-100 transition-colors duration-200">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-mar-800">{service.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-arena-600">{service.description}</p>
      </div>
    </div>
  );
}
