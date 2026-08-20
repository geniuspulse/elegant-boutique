import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#1a1613', light: '#3d3631', muted: '#6b625c' },
        cream: { DEFAULT: '#faf7f2', dark: '#f0ebe3', card: '#fffdf9' },
        gold: { DEFAULT: '#b8956a', light: '#d4b896', dark: '#9a7a52' },
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
