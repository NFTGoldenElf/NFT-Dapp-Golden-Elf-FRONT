/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '10%': '10%',
        '106%': '106%',
      },
      width: {
        'GoldenElfLogo': '800px'
      },
      cursor: {
        'pencil': 'url("/pngegg.png"), pointer',
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
        'gold': '#635621',
      },
    },
  },
  plugins: [],

}