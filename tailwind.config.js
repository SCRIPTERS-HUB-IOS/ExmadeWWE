/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neonRed: '#ff073a',
        neonBlue: '#3abfff',
        blackGlass: 'rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(0,0,0,0.3))',
      }
    },
  },
  plugins: [],
}
