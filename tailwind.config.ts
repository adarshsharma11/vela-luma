import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './context/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0F1E35',
          800: '#162540',
          700: '#1A2E4A',
          600: '#1E3555',
        },
        gold: {
          500: '#C9A227',
          400: '#D4AF37',
          300: '#E8C95A',
        },
        blue: {
          600: '#1A6BC4',
          500: '#2179D4',
          400: '#4A96E8',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 30, 53, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
