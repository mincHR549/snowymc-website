export default function Background() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* 1️⃣ 动态柔和渐变层（浅色模式） */}
      <div
        className="absolute inset-0 bg-gradient-to-tr 
                   from-pink-200 via-purple-200 to-cyan-200
                   bg-[length:600%_600%] animate-gradient-smooth dark:hidden"
      />

      {/* 2️⃣ 动态柔和渐变层（深色模式） */}
      <div
        className="hidden dark:block absolute inset-0 
                   bg-gradient-to-tr from-slate-900 via-violet-800 to-zinc-900
                   bg-[length:600%_600%] animate-gradient-smooth opacity-80"
      />

      {/* 3️⃣ 半透明玻璃薄膜 */}
      <div
        className="absolute inset-0 bg-white/40 backdrop-blur-sm 
                   dark:bg-black/30 dark:backdrop-blur-sm"
      />

      {/* 4️⃣ 光晕层（多彩柔和光球） */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-20 left-16 w-[42vmax] h-[42vmax]
                     rounded-full blur-3xl animate-float-breath
                     bg-pink-300/40 mix-blend-multiply 
                     dark:bg-pink-500/25 dark:mix-blend-screen"
        />
        <div
          className="absolute bottom-24 right-16 w-[38vmax] h-[38vmax]
                     rounded-full blur-3xl animate-float-breath
                     bg-cyan-300/40 mix-blend-multiply 
                     dark:bg-cyan-400/25 dark:mix-blend-screen"
          style={{ animationDelay: "0.6s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[34vmax] h-[34vmax]
                     -translate-x-1/2 -translate-y-1/2 
                     rounded-full blur-3xl animate-float-breath
                     bg-purple-300/35 mix-blend-multiply 
                     dark:bg-violet-500/20 dark:mix-blend-screen"
          style={{ animationDelay: "1.2s" }}
        />
      </div>

      {/* 5️⃣ 顶部 / 底部光影层 */}
      <div
        className="absolute top-0 left-0 w-full h-40 
                   bg-gradient-to-b from-white/50 to-transparent 
                   dark:from-white/10"
      />
      <div
        className="absolute bottom-0 left-0 w-full h-40 
                   bg-gradient-to-t from-white/30 to-transparent 
                   dark:from-white/5"
      />

      {/* 6️⃣ 颗粒纹理层 */}
      <div
        className="absolute inset-0 bg-[url('/noise.png')] opacity-15 mix-blend-overlay pointer-events-none"
      />
    </div>
  );
}
