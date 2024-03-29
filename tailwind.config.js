/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      inset:{
        '88':'22rem',
        '76':'19rem'

      },
      backgroundImage:{
        'hero-banner':"url('/src/assets/dashboard-hero-section.svg')",
      },
      fontFamily:{
        'oswald': ['Oswald', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif']
      }
    },
    screens: {
      'xs': '320px',
      'sm': '540px', 
      'md': '720px',
      'lg': '920px',
      'xl': '1040px',
      '2xl':'1460px'
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

