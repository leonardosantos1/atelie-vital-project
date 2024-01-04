/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bege-50': '#faf0e6',
        'bege-100': '#fff0db',
        'bege-200': '#eed9c4',
        'bege-300': '#e4d5b7',
        'bege-400': '#d9b99b',
      },
      fontFamily: {
        playfair: ['Playfair Display'],
        ephesis: ['Ephesis'],
        garamond: ['EB Garamond'],
        dancing: ['Dancing Script'],
      },
    },
    plugins: [],
  },
}
