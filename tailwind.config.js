/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    titles: {
      weight: '700',
      h1: '2.5rem',
      h2: '2.1rem',
      h3: '1.6rem',
      h4: '1.2rem',
      h5: '1rem',
    },
    screens: {
      '2xl': { max: '9999px' },
      // => @media (max-width: 9999px) { ... }

      xl: { max: '1200px' },
      // => @media (max-width: 1200px) { ... }

      lg: { max: '1024px' },
      // => @media (max-width: 1024px) { ... }

      md: { max: '768px' },
      // => @media (max-width: 768px) { ... }

      sm: { max: '480px' },
      // => @media (max-width: 480px) { ... }
    },
    extend: {
      fontFamily: {
        Nunito: ['Nunito'],
        base: [
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      colors: {
        background: {
          dark: '#353A44',
          DEFAULT: '#EDF2FC',
          light: '#EDF2FC',
        },
        color: {
          dark: '#393B45',
          DEFAULT: '#393B45',
          light: '#FCFEFD',
        },
        link: '#027FFE',
        primary: {
          DEFAULT: '#A5BC83',
          100: '#C6DBA8',
          200: '#9EB977',
          300: '#86A855',
          400: '#7BA63D',
          500: '#598A13',
          600: '#48720B',
          700: '#385908',
          800: '#203404',
        },
      },
    },
  },
  plugins: [],
};
