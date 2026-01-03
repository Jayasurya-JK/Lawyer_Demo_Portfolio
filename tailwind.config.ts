import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Professional lawyer color palette - Updated for mobile-first design
        primary: {
          50: '#f5f5f0', // Warm off-white background
          100: '#e9e9e0',
          200: '#d3d3c1',
          300: '#bcbca2',
          400: '#a6a683',
          500: '#8f8f64',
          600: '#6c6c4d',
          700: '#494936',
          800: '#262620',
          900: '#1a1f2e', // Deep navy/charcoal - trust and authority
        },
        accent: {
          50: '#fef9f0',
          100: '#fdefd9',
          200: '#f7ddb3',
          300: '#e8c88d',
          400: '#d9b467',
          500: '#c9a961', // Gold/bronze - prestige and success
          600: '#b08741',
          700: '#896829',
          800: '#624a19',
          900: '#3d2f0d',
        },
        navy: {
          50: '#f0f2f5',
          100: '#d9dfe6',
          200: '#b3c0cd',
          300: '#8ca0b4',
          400: '#66819b',
          500: '#4a6278',
          600: '#3a4e60',
          700: '#2a3948',
          800: '#1a2530',
          900: '#1a1f2e', // Deep navy/charcoal
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      minHeight: {
        'screen-60': '60vh',
        'screen-70': '70vh',
        'screen-80': '80vh',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

export default config
