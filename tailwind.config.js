/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  safelist: [
    'lg:row-span-2',
    'lg:col-span-2',
    'lg:col-span-3',
  ],
  theme: {
    extend: {
      colors: {
        // Colores principales de marca
        'brand': {
          'orange': '#f97316',
          'orange-dark': '#ea580c',
          'orange-light': '#fdba74',
        },
        'codo': {
          'blue': '#1e3a5f',
          'blue-dark': '#0f172a',
          'blue-light': '#334155',
        },
        // Colores de footer
        'footer': {
          'primary': '#1e293b',
          'secondary': '#0f172a',
        },
        // Legacy (mantener compatibilidad)
        'custom-blue-one': '#1d4d8b',
        'custom-blue-two': 'rgb(38, 27, 59)',
      },
      fontFamily: {
        'display': ['Work Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(249, 115, 22, 0.8) 0%, rgba(30, 58, 95, 0.9) 100%)',
        'card-gradient': 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%)',
      },
    },
  },
  plugins: [],
}