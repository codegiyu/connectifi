/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sf: ["'SF Pro Display'", "sans-serif"]
      },
      colors: {
        "pri-blue": "#0071BC",
        "grey-89": "#898989",
        "grey-d9": "#D9D9D9",
        "dark-19": "#191919",
        "bright-blue": "#049BFF"
      }
    },
  },
  plugins: [],
}

