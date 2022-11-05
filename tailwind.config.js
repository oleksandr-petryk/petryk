/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    titles: {
      weight: '600',
      h1: '2.5rem',
      h2: '2.1rem',
      h3: '1.6rem',
      h4: '1.2rem',
      h5: '1rem',
    },
    screens: {
      '2xl': { max: '9999px' },
      // => @media (min-width: 1201px) { ... }

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
        primary: '#598A13',
      },
    },
  },
  plugins: [],
};
