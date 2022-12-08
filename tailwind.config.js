/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#131313',
        secondary: '#5BA300'
      },
      screens: {
        'ph': {'max': '769px'}
      },
      backgroundSize: {
        '50%': '100%',
        '100%': '60%'
      }
    },
  },
  plugins: [],
}