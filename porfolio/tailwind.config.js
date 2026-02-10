/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        bartle: ['"BBH Sans Bartle"', 'sans-serif'],
        hegarty: ['"BBH Sans Hegarty"', 'sans-serif'],
        bebas: ['"Bebas Neue"', "cursive"],
      },

    },
  },
  plugins: [],
}

