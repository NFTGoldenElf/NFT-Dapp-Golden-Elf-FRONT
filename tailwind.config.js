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
        '72%': '72%',
      },
      cursor: {
        'pencil': 'url("/pngegg.png"), pointer',
      }
    },
  },
  plugins: [],
}