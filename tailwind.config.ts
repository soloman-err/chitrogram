import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1900px',
        },
      },
      colors: {
        light: '#ffffff',
        dark: '#111111',
        warn: '#ffcc3d',
        danger: '#ff3d3d',
        transparent: '#ffffff00',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
