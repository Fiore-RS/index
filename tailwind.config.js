/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F3EBDC",
        ink: "#2B2620",
        "ink-soft": "#5C5344",
        "ink-muted": "#8A7F6A",
        line: "#C7BBA3",
        terracota: "#B5502E",
        bosque: "#3C6E5A",
        mostaza: "#A6791E",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
