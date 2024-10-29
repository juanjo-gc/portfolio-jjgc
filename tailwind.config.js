/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      gradientColorStops: {
        'from': '#ffffff', // Color inicial (blanco)
        'to': 'rgba(255, 255, 255, 0)' // Color final (transparente)
      },
      fontFamily: {
        Dosis: ['Dosis', 'sans-serif'],
        quicksand: ["Quicksand", 'sans-serif'],
        poiret: ["Poiret One", "sans-serif"]
      }
    },
  },
  plugins: [],
}