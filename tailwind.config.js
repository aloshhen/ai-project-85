/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10B981',
          dark: '#0E9F72'
        },
        secondary: {
          DEFAULT: '#3B82F6',
          dark: '#2563EB'
        },
        dark: {
          DEFAULT: '#0A0A0A',
          light: '#141414'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}