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
          primary: '#8bc34a',
          secondary: '#8348c1',
        },
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
      },
      borderWidth: {
        DEFAULT: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
