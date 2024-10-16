/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {
      'blue-primary': '#115372',
      'neutral-gray': '#484646',
      'main-background': '#F4F0EF',
      'text-white': '#E8F7FE',
      'secondary-orange': '#CB7A01',
      'blue-login': 'E8F7FE',
    },
    fontFamily: {
      mainFont: ['Niramit', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}