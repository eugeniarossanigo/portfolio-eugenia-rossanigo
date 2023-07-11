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
      black: '#000',
      white: '#fff',
      colorChanged: 'var(--color-changed)',
      baseColor: 'var(--color-text-base)',
      green: 'var(--color-text-color)',
      outsideBg: 'var(--bg-outside)',
      insideBg: 'var(--bg-inside)',
      light: '#f1f5e0',
      white: '#fff',
      dark: '#383838',
      lightGray: '#a6b1b1',
      darkGray: '#767676',
      strongGray: '#515252',
      strongDark: '#080f0f ',
    }
  },
  plugins: [],
}

