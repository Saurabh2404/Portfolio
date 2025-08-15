/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode with class strategy
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0145a6",
      },
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        mukta: ["Mukta", "sans-serif"],
        fira: ["Fira Sans Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
