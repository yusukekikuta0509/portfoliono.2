/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // ダークモードを有効化
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#2C5549',
          gradientEnd: '#AF8C68',
          dark: '#121212', // ダークモード用背景色
        },
        text: {
          DEFAULT: '#C7BDB5',
          dark: '#E0E0E0', // ダークモード用テキスト色
        },
        accent: {
          DEFAULT: '#AF8C68',
          dark: '#FFC107', // ダークモード用アクセント色
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        jp: ['Roboto', 'sans-serif'],
      },
      spacing: {
        screen: '100vh',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        wave: 'wave 10s linear infinite',
      },
      textShadow: {
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, #092635, #1B4242)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-textshadow'),
  ],
};
