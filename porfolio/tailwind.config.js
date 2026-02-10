/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        bartle: ['Georgia', 'Noto Serif', 'serif'],
        hegarty: ['Georgia', 'Noto Serif', 'serif'],
        bebas: ['Georgia', 'Noto Serif', 'serif'],
      },
      colors: {
        'nyt-black': '#000000',
        'nyt-white': '#FFFFFF',
        'nyt-red': '#CC0000',
        'nyt-gray': '#404040',
        'nyt-light-gray': '#F7F7F7',
      },
    },
  },
  plugins: [],
}

