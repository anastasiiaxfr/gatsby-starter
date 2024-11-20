/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        main: '#dc2626',
        dark_1: '#0d0e0f', 
        dark_2: '#111621',
        dark_3: '#181c2e',
        dark_4: '#1f2439'
      },
    },
  },
  variants: {
    extend: {
        backgroundImage: ['dark']
    }
},
  plugins: [],
};
