export default function Background() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* 🌈 1️⃣ 柔和动态渐变层 */}
      <div
        className="absolute inset-0 bg-[length:300%_300%]
                   bg-gradient-to-r from-pink-300 via-violet-300 to-cyan-300
                   dark:from-[#0f172a] dark:via-[#312e81] dark:to-[#0f172a]
                   animate-gradient-x"
      ></div>

      {/* 🌫️ 2️⃣ 半透明雾面层 */}
      <div
        className="absolute inset-0 bg-white/70 dark:bg-black/40 
                   backdrop-blur-[2px] dark:backdrop-blur-[2px]
                   will-change-[backdrop-filter,opacity]"
      ></div>

      {/* 💫 3️⃣ 柔光漂浮层 */}
      <div className="absolute inset-0 pointer-events-none opacity-80 dark:opacity-60">
        <div
          className="absolute top-[15%] left-[10%] w-[38vmax] h-[38vmax]
                     rounded-full bg-pink-300/40 dark:bg-pink-500/25
                     blur-3xl animate-float-slow mix-blend-screen"
        ></div>

        <div
          className="absolute bottom-[10%] right-[8%] w-[36vmax] h-[36vmax]
                     rounded-full bg-cyan-300/40 dark:bg-cyan-400/20
                     blur-3xl animate-float-slower mix-blend-screen"
          style={{ animationDelay: "2.5s" }}
        ></div>

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-[40vmax] h-[40vmax] rounded-full
                     bg-violet-300/35 dark:bg-violet-500/20
                     blur-3xl animate-float-slowest mix-blend-screen"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
    </div>
  );
}
