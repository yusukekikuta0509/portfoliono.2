/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#2C5549',
        text: '#C7BDB5',
        accent: '#AF8C68',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        'jp': ['"Roboto"', 'sans-serif'],
      },
      spacing: {
        'screen': '100vh',
      }
    },
  },
  plugins: [],
}
