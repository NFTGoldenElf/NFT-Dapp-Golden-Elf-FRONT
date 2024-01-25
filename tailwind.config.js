/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '8%': '8%',
        '104%': '106%',
      },
      width: {
        'GoldenElfLogo': '800px'
      },
      fontFamily: {
        'GonB': ['GonB', 'sans-serif'],
        'GonM': ['GonM', 'sans-serif'], 
        'GonR': ['GonR', 'sans-serif'],
        'MonM': ['MonM', 'sans-serif'],
        'MonR': ['MonR', 'sans-serif'],
        'pala': ['pala', 'sans-serif'],
      },
      colors: {
        'dorado': '#635621',
        'gris': '##908d81'
      },

    },
  },
  plugins: [],
}