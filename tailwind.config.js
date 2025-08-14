import defaultConfig from 'shadcn/ui/tailwind.config'
import tailwindAnimate from 'tailwindcss-animate'

export default {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...(defaultConfig.theme?.extend || {}),
      colors: {
        ...(defaultConfig.theme?.extend?.colors || {}),
        'pink-light': '#f4d6dc', // Rosa pálido
        'pink-coral': '#e89ca0', // Rosa coral
        'green-soft': '#a8c3a0', // Verde suave
        'green-olive': '#6b8f71', // Verde más oscuro
        cream: '#f9f6f3', // Crema claro
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [...(defaultConfig.plugins || []), tailwindAnimate],
}
