// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // 如使用 Next 13+ app 目录
  ],
  safelist: [
    // 防止构建时摇树删除某些任意值类（如你仍在 JSX 里使用它们）
    "bg-white/[0.06]",
    "ring-white/5",
    "shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
    "shadow-[0_1px_0_rgba(0,0,0,0.06),0_12px_28px_rgba(0,0,0,0.08)]",
    "shadow-[0_1px_0_rgba(0,0,0,0.06),0_16px_40px_rgba(0,0,0,0.12)]",
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
        cardSoft: "0 1px 0 rgba(0,0,0,0.06), 0 12px 28px rgba(0,0,0,0.08)",
        cardHover: "0 1px 0 rgba(0,0,0,0.06), 0 16px 40px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
