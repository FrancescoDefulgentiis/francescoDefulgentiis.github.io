/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          red: '#ff6b6b',   // Pastel Red
          green: '#51cf66', // Pastel Green
        },
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
      },
      borderWidth: {
        DEFAULT: '2px', // Make default border thick
      },
    },
  },
  plugins: [],
}
