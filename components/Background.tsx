export default function Background() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* 1️⃣ 动态柔和渐变层 */}
      <div className="absolute inset-0 bg-gradient-to-r 
                      from-pink-300 via-purple-300 to-cyan-300 
                      bg-[length:600%_600%] animate-gradient-smooth dark:hidden"></div>

      {/* 暗色模式渐变 */}
      <div className="hidden dark:block absolute inset-0 
                      bg-gradient-to-r from-slate-800 via-violet-700 to-zinc-800
                      bg-[length:600%_600%] animate-gradient-smooth opacity-70"></div>

      {/* 2️⃣ 半透明背景层（柔和模糊） */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-sm 
                      dark:bg-black/40 dark:backdrop-blur-sm"></div>

      {/* 3️⃣ 光晕层 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-16 w-[42vmax] h-[42vmax]
                        rounded-full blur-3xl animate-float-breath
                        bg-pink-300/50 mix-blend-multiply 
                        dark:bg-pink-500/30 dark:mix-blend-screen"></div>

        <div className="absolute bottom-24 right-16 w-[38vmax] h-[38vmax]
                        rounded-full blur-3xl animate-float-breath
                        bg-cyan-300/50 mix-blend-multiply 
                        dark:bg-cyan-400/25 dark:mix-blend-screen"
             style={{ animationDelay: "0.6s" }}></div>

        <div className="absolute top-1/2 left-1/2 w-[34vmax] h-[34vmax]
                        -translate-x-1/2 -translate-y-1/2 
                        rounded-full blur-3xl animate-float-breath
                        bg-purple-300/40 mix-blend-multiply 
                        dark:bg-violet-500/25 dark:mix-blend-screen"
             style={{ animationDelay: "1.2s" }}></div>
      </div>

      {/* 4️⃣ 顶部 / 底部光影层 */}
      <div className="absolute top-0 left-0 w-full h-40 
                      bg-gradient-to-b from-white/40 to-transparent 
                      dark:from-white/10"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 
                      bg-gradient-to-t from-white/20 to-transparent 
                      dark:from-white/5"></div>

      {/* 5️⃣ 颗粒纹理层 */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
    </div>
  );
}
