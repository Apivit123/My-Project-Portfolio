/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBg : "#BFBFBF",
        primaryTitle : "#038C7F",
        primaryContent : "#027368",
        primaryContent2 : "#04BFAD",
        primaryBase : "#8da8a6b8",
        primaryAccent : "#01403A",
      }
    },
  },
  plugins: [],
}

