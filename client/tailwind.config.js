/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'form':  '#7272AB',
        'button': '#0F1C37',
        'red-button': '#ff5353',
        'red-button-hover': '#fc6060',
        'button-hover': '#1A2A4A',
        'bgcolor': '#C8D9EE',
        'text': '#0F1C37',
        'form-blue': '#12c2e9',
        'form-pink': '#f64f59',
        'form-purple': '#c471ed',
        'form-pink-dark': '#ec38bc',
        'form-purple-dark': '#7303c0',
        'form-blue-dark': '#03001e'
      }
    },
  },
  plugins: [],
}

