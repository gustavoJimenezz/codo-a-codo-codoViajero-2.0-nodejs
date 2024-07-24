/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.pug"],
  theme: {
    extend: {
      colors: {
        'custom-blue-one': '#1d4d8b',
        'custom-blue-two': 'rgb(38, 27, 59)',
      },

    },
  },
  plugins: [],
}