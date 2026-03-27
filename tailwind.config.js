/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lensfit-bg': '#001734',
        'lensfit-red': '#D65D58',
        'lensfit-red-light': '#E36C65',
        'lensfit-dark': '#01232F',
      },
      fontFamily: {
        'gordita': ['Gordita', 'sans-serif'],
      },
      letterSpacing: {
        'lensfit-wide': '0.44em', // 440 tracking
        'lensfit-tight': '-0.06em', // -60 tracking
      },
      fontSize: {
        'lensfit-h1': ['50px', '55px'],
        'lensfit-h2': ['50px', '55px'],
        'lensfit-p': ['13px', '21px'],
        'lensfit-btn': ['12px', '1'],
      },
    },
  },
  plugins: [],
}
