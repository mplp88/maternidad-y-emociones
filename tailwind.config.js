// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pink-soft': '#F4D6DC', // Rosa pálido
        'pink-coral': '#E89CA0', // Rosa coral
        'green-soft': '#A8C3A0', // Verde suave
        'green-dark': '#6B8F71', // Verde más oscuro
        'cream-light': '#F9F6F3', // Crema claro
      },
    },
  },
  plugins: [],
}
