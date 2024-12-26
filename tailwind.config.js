/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sand-white': {
          50: '#faf7f2',
          100: '#f4ede0',
          200: '#ede2cf', // sand-white
          300: '#d8bf99',
          400: '#c8a06f',
          500: '#bc8853',
          600: '#af7547',
          700: '#915d3d',
          800: '#764c36',
          900: '#60402e',
          950: '#332017',
        },
        'light-ocean': {
          50: '#f3f8fb',
          100: '#e4eef5',
          200: '#cee3ef',
          300: '#add0e3',
          400: '#86b8d4',
          500: '#70a4cb', // light-ocean
          600: '#5589bb',
          700: '#4b76aa',
          800: '#41618c',
          900: '#385270',
          950: '#263345',
        },
        'coral-red': {
          50: '#fcf4f4',
          100: '#fae6e6',
          200: '#f7d1d1',
          300: '#f0b1b1',
          400: '#e16d6d', // coral-red
          500: '#d85b5b',
          600: '#c33f3f',
          700: '#a43131',
          800: '#882c2c',
          900: '#722a2a',
          950: '#3d1212',
        },
      },
    },
  },
  plugins: [],
  important: true, // Tailwind css 우선 https://tailwindcss.com/docs/configuration#important
};
