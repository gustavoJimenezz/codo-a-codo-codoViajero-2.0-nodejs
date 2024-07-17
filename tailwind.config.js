/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './views/layouts/partials/*.pug',
    './views/layouts/layout.pug',
    '/views/index.pug',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
