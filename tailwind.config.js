/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'label-text': '#808080',
        'orange-button': '#FE850C8F',
        'input-border': '#E6E6E6',
        'black': '#000000',
        'bl-doe': '#272727',
        'white': '#FFFFFF',
        'black-input-value': '#4D4D4D',
        'icon-color': '#B3B3B3',
        'scroll-bar': '#C7C7C7',
      }
    },
  },
  plugins: [],
}

