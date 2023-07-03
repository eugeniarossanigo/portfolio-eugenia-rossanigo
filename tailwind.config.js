/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'nunito': ['Nunito', 'sans-serif'],
        // 'nunito-sans': ['"Nunito Sans"', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      }
    },
    colors: {
      'green': '#329d9b',
      'light': '#f1f5e0',
      'white': '#fff',
      'dark': '#383838',
      'light-grey': '#F2F2F4',
      'dark-grey': '#767676',
      'strong-grey': '#515252',
      'strong-dark': '#080F0F',
    }
  },
  plugins: [],
}

