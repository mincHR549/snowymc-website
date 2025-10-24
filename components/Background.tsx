// components/Background.tsx
"use client";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* 环境渐变（浅色） */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 bg-[length:300%_300%] animate-gradient-smooth dark:hidden" />

      {/* 环境渐变（深色） */}
      <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-[#0b0b0c] to-[#121314] bg-[length:300%_300%] animate-gradient-smooth opacity-90" />

      {/* 轻玻璃薄膜（降低对比与模糊） */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] dark:bg-white/[0.04] dark:backdrop-blur-[2px]" />

      {/* 环境光晕（低饱和、无明显漂浮） */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[12%] top-[10%] w-[36vmax] h-[36vmax] rounded-full blur-3xl bg-cyan-400/7 dark:bg-cyan-300/5" />
        <div className="absolute right-[10%] bottom-[8%] w-[34vmax] h-[34vmax] rounded-full blur-3xl bg-pink-400/6 dark:bg-pink-300/5" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vmax] h-[30vmax] rounded-full blur-3xl bg-violet-400/6 dark:bg-violet-300/5" />
      </div>

      {/* 顶/底光影过渡 */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/50 to-transparent dark:from-white/8" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/30 to-transparent dark:from-white/5" />

      {/* 颗粒纹理（更轻） */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.08] mix-blend-overlay pointer-events-none" />
    </div>
  );
}
