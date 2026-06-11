import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string; // For the outer container (defines size/aspect-ratio)
  imgClassName?: string; // For the actual img
  speed?: number; // Offset movement range in pixels
}

/**
 * ParallaxImage tracks the element's position in the viewport
 * and moves the image vertically as the element scrolls past.
 * Uses a spring configuration for hyper-smooth scrolling feel.
 */
export function ParallaxImage({ 
  src, 
  alt, 
  className = "", 
  imgClassName = "", 
  speed = 40 
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Map 0 -> 1 progress to vertical pixel values
  const yRaw = useTransform(scrollYProgress, [0, 1], [-speed, speed]);
  
  // Apply a subtle spring damping to make the movement smoother and lag-free
  const y = useSpring(yRaw, { stiffness: 100, damping: 20 });

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ 
          y,
          // Scale it up slightly so that the offset doesn't reveal the white edges of the container
          scale: 1.15
        }}
        className={`w-full h-full object-cover origin-center ${imgClassName}`}
      />
    </div>
  );
}

interface ParallaxHeroProps {
  src: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * ParallaxHero is optimized for components fixed at the top of the viewport.
 * It maps page-level window scroll directly so that the background sinks slower than content.
 */
export function ParallaxHero({ src, className = "", children }: ParallaxHeroProps) {
  const { scrollY } = useScroll();
  
  // As page scrolls down (0 -> 800px), shift image down (0 -> 240px)
  const yRaw = useTransform(scrollY, [0, 800], [0, 240]);
  const y = useSpring(yRaw, { stiffness: 120, damping: 25 });
  
  // Fade out background slightly as user scrolls down for readability
  const opacity = useTransform(scrollY, [0, 600], [1, 0.45]);

  return (
    <div className={`relative overflow-hidden w-full h-full ${className}`}>
      <motion.div
        style={{ 
          y, 
          opacity, 
          backgroundImage: `linear-gradient(rgba(44, 38, 35, 0.35), rgba(44, 38, 35, 0.7)), url(${src})`,
          scale: 1.15
        }}
        className="absolute inset-0 bg-cover bg-center"
      />
      <div className="relative h-full w-full z-10">
        {children}
      </div>
    </div>
  );
}

interface ParallaxBannerProps {
  src: string;
  className?: string;
  children: React.ReactNode;
  speed?: number;
}

/**
 * ParallaxBanner provides a massive mid-page banner with content scrolling over a parallax background.
 */
export function ParallaxBanner({ src, className = "", children, speed = 100 }: ParallaxBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"]
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], [-speed, speed]);
  const y = useSpring(yRaw, { stiffness: 90, damping: 20 });

  return (
    <div 
      ref={bannerRef}
      className={`relative overflow-hidden w-full text-white bg-natural-soil ${className}`}
    >
      <motion.div
        style={{ 
          y,
          backgroundImage: `linear-gradient(rgba(44, 38, 35, 0.5), rgba(44, 38, 35, 0.8)), url(${src})`,
          scale: 1.25 // More scale since we have a higher speed offset
        }}
        className="absolute inset-0 bg-cover bg-center"
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
