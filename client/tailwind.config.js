/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'form':  '#7272AB',
        'button': '#0F1C37',
        'button-hover': '#1A2A4A',
        'bgcolor': '#C8D9EE',
        'text': '#0F1C37'
      }
    },
  },
  plugins: [],
}

