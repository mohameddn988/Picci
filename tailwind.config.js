/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Bordures rouges
    'border-red-500',
    'border-red-600',
    // Bordures bleues
    'border-blue-500',
    'border-blue-600',
    // Bordures jaunes
    'border-yellow-500',
    'border-yellow-600',
    // Bordures ambre
    'border-amber-700',
    'border-amber-800',
    // Bordures grises
    'border-gray-400',
    'border-gray-500',
    'border-gray-600',
    'border-gray-700',
    // Classes d'arrière-plan pour les barres de séparation
    'bg-red-500',
    'bg-blue-500',
    'bg-yellow-500',
    'bg-amber-700',
    'bg-gray-400',
    'bg-gray-600',
    // Classes d'ombre pour les icônes
    'shadow-red-500/20',
    'shadow-blue-500/20',
    'shadow-yellow-500/20',
    'shadow-amber-700/20',
    'shadow-gray-400/20',
    'shadow-gray-600/20',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'],
        serif: ['Butler', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        title: ['Butler', 'serif'],
      },
    },
  },
  plugins: [],
}

