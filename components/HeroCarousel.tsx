'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { galleryImages } from '@/data/content';

const heroSlides = galleryImages.filter(img =>
  img.src.includes('piscina.jpg') ||
  img.src.includes('piscina 2.jpg') ||
  img.src.includes('terraza.jpg') ||
  img.src.includes('areas comunes.jpg')
);

export default function HeroCarousel() {
  const slides = heroSlides.length > 0 ? heroSlides : galleryImages.slice(0, 4);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true" style={{ zIndex: 0 }}>
      {slides.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-1200 ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Velo de lectura — z-10: sobre imágenes, bajo el contenido del hero (z-20+) */}
      <div className="absolute inset-0 z-10" style={{
        background: 'linear-gradient(105deg, rgb(13 26 24 / 0.55) 0%, rgb(13 26 24 / 0.30) 50%, rgb(13 26 24 / 0.15) 100%)'
      }} />

      {/* Dots de navegación */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2" style={{ zIndex: 20 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'bg-white w-6' : 'bg-white/40 w-1.5'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
