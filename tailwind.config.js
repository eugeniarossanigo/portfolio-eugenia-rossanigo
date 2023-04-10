/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'nunito-sans': ['"Nunito Sans"', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      }
    },
    colors: {
      'white': '#f1f5e0',
      'dark': '#383838',
      'light-grey': '#F2F2F4',
      'dark-grey': '#777777',
    }
  },
  plugins: [],
}

