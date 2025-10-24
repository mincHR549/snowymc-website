export default function Background() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* 浅色渐变：顶部灰 → 底部白 */}
      <div className="absolute inset-0 bg-gradient-to-b 
                      from-slate-100 via-slate-50 to-white 
                      bg-[length:300%_300%] animate-gradient-smooth dark:hidden" />

      {/* 深色渐变 */}
      <div className="hidden dark:block absolute inset-0 
                      bg-gradient-to-b from-[#0b0b0c] to-[#121314] 
                      bg-[length:300%_300%] animate-gradient-smooth opacity-90" />

      {/* 轻玻璃薄膜 */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px] 
                      dark:bg-white/[0.04] dark:backdrop-blur-[2px]" />

      {/* 环境光晕 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[12%] top-[10%] w-[36vmax] h-[36vmax] 
                        rounded-full blur-3xl bg-cyan-400/10 dark:bg-cyan-300/5" />
        <div className="absolute right-[10%] bottom-[8%] w-[34vmax] h-[34vmax] 
                        rounded-full blur-3xl bg-pink-400/10 dark:bg-pink-300/5" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[30vmax] h-[30vmax] rounded-full blur-3xl 
                        bg-violet-400/10 dark:bg-violet-300/5" />
      </div>

      {/* 顶/底光影 */}
      <div className="absolute top-0 left-0 w-full h-40 
                      bg-gradient-to-b from-white/50 to-transparent dark:from-white/8" />
      <div className="absolute bottom-0 left-0 w-full h-40 
                      bg-gradient-to-t from-white/30 to-transparent dark:from-white/5" />

      {/* 颗粒纹理 */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.08] mix-blend-overlay pointer-events-none" />
    </div>
  );
}
