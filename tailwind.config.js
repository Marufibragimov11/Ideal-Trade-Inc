/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primeBlue: "#0b1c2e",
        primeDark: "#050b14",
        accentBlue: "#00a8e8",
        accentOrange: "#ff6600",
        slateGrey: "#64748b",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Outfit"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.png')",
      },
    },
  },
  plugins: [],
}
