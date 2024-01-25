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
      cursor: {
        'pencil': 'url("/pngegg.png"), pointer',
      },
    },
  },
  plugins: [],
}