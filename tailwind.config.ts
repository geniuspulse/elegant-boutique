import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0f0f10', light: '#2a2a2c', muted: '#5c5c60' },
        cream: { DEFAULT: '#fffafd', dark: '#fde7f1', card: '#ffffff' },
        gold: { DEFAULT: '#d6127d', light: '#f472b6', dark: '#9d0857' },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { widest2: '0.25em' },
    },
  },
  plugins: [],
};
export default config;
