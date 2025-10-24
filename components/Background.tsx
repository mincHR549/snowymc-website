export default function Background() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* 浅色渐变：顶部淡蓝 → 中部灰白 → 底部白 */}
      <div
        className="absolute inset-0 bg-gradient-to-b 
                   from-[#e8f0ff] via-[#f9fafb] to-white
                   bg-[length:300%_300%] animate-gradient-smooth dark:hidden"
      />

      {/* 深色渐变 */}
      <div
        className="hidden dark:block absolute inset-0 
                   bg-gradient-to-b from-[#0b0b0c] via-[#141518] to-[#1a1d1f]
                   bg-[length:300%_300%] animate-gradient-smooth opacity-90"
      />

      {/* 轻玻璃薄膜（透明度更低） */}
      <div
        className="absolute inset-0 bg-white/20 backdrop-blur-[2px] 
                   dark:bg-white/[0.04] dark:backdrop-blur-[2px]"
      />

      {/* 环境光晕（更明显，打破纯白） */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-[15%] top-[12%] w-[36vmax] h-[36vmax] 
                     rounded-full blur-3xl bg-cyan-400/15 dark:bg-cyan-300/8"
        />
        <div
          className="absolute right-[12%] bottom-[10%] w-[34vmax] h-[34vmax] 
                     rounded-full blur-3xl bg-pink-400/15 dark:bg-pink-300/8"
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[30vmax] h-[30vmax] rounded-full blur-3xl 
                     bg-violet-400/12 dark:bg-violet-300/6"
        />
      </div>

      {/* 顶/底光影 */}
      <div
        className="absolute top-0 left-0 w-full h-40 
                   bg-gradient-to-b from-white/60 to-transparent dark:from-white/8"
      />
      <div
        className="absolute bottom-0 left-0 w-full h-40 
                   bg-gradient-to-t from-white/40 to-transparent dark:from-white/5"
      />

      {/* 颗粒纹理 */}
      <div
        className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.08] mix-blend-overlay pointer-events-none"
      />
    </div>
  );
}
