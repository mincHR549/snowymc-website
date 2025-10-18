// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surfaceLight: "#ffffff",
        surfaceDark: "#0b1020",
      },
      backgroundSize: {
        "400%": "400% 400%",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%,100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(10px,-10px,0)" },
        },
      },
      animation: {
        gradient: "gradient 15s ease infinite",
        float: "float 8s ease-in-out infinite",
      },
      boxShadow: {
        glassLight: "0 1px 20px rgba(0,0,0,0.06)",
        glassDark: "0 1px 20px rgba(255,255,255,0.06)",
      },
    },
  },
  plugins: [],
};
