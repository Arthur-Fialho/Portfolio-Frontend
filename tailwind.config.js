/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Diz para o Tailwind olhar todos os ficheiros dentro de src
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0D2818',
          med: '#04471C',
          light: '#058C42',
        }
      }
    },
  },
  plugins: [],
}