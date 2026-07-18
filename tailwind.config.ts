import type { Config } from 'tailwindcss';

/**
 * Sistema de diseño — Hotel Costa Blanca de Vichayito
 * ----------------------------------------------------
 * Principios (anti-ai-slop):
 *  - Paleta terrosa + mar profundo, NO turquesa neón ni ámbar chillón.
 *  - Un solo acento cálido (terracota) usado con disciplina.
 *  - Tipografía con contraste fuerte: serif editorial para titulares,
 *    grotesk para cuerpo/UI. Nada de fuentes "decorativas".
 *  - Ritmo espacial explícito vía tokens de sección, no paddings sueltos.
 *  - Sin glassmorphism ni gradientes "hero mágicos" por defecto.
 */

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Mar — azul petróleo profundo, no turquesa playa-cliché
        mar: {
          50: '#eef4f3',
          100: '#d4e2df',
          200: '#a9c5c0',
          300: '#7ba39c',
          400: '#4f7e76',
          500: '#356159', // base marca (oscuro, confiable)
          600: '#284b45',
          700: '#1d3934',
          800: '#142825',
          900: '#0d1a18',
        },
        // Arena — neutros cálidos, base del sitio
        arena: {
          50: '#faf7f1',
          100: '#f3ede2',
          200: '#e7ddcc',
          300: '#d6c8af',
          400: '#bfa886',
          500: '#a78a63',
          600: '#8a7050',
          700: '#6d5940',
          800: '#564636',
          900: '#3f3327',
        },
        // Sol — ámbar apagado, usado solo como acento puntual
        sol: {
          400: '#e8a33d',
          500: '#d98e2b',
          600: '#b6741f',
        },
        // Terracota — ÚNICO acento cálido, para CTAs y foco
        terracota: {
          500: '#c2562f',
          600: '#a8471f',
          700: '#8a3a18',
        },
      },
      fontFamily: {
        // Serif editorial para titulares (Fraunces tiene personalidad, no es Playfair genérico)
        display: ['Fraunces', 'Georgia', 'serif'],
        // Grotesk humano para UI/cuerpo
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Escala de titulares con line-height ajustado para serif
        'display-xl': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4.5vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      spacing: {
        // Ritmo de sección explícito
        'section-sm': '3rem',
        'section': '5rem',
        'section-lg': '7.5rem',
      },
      maxWidth: {
        content: '72rem', // 1152px — contenedor estándar
        prose: '38rem',   // para bloques de lectura
      },
      boxShadow: {
        // Sombras cálidas, bajas y difusas — no "flotantes"
        card: '0 1px 2px rgb(63 51 39 / 0.04), 0 8px 24px -12px rgb(63 51 39 / 0.12)',
        'card-hover': '0 1px 2px rgb(63 51 39 / 0.05), 0 16px 40px -16px rgb(63 51 39 / 0.2)',
        bar: '0 1px 0 rgb(63 51 39 / 0.08)',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};

export default config;
