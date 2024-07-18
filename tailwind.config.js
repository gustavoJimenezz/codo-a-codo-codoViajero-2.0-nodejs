/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.pug"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1d4d8b',
      },
    },
  },
  plugins: [],
}
