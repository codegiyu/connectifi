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
      },
      backgroundImage: {
        homeHero: "linear-gradient(180deg, rgba(0, 113, 188, 0.01) 0%, rgba(166, 213, 243, 0.09) 100%)"
      },
      boxShadow: {
        reviewBox: "0px 4px 15px 0px rgba(0, 113, 188, 0.17)"
      }
    },
  },
  plugins: [],
}

