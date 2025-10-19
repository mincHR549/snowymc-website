export default function Background() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* 1️⃣ 渐变背景：简化动画 + 降低频率 */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 
                   dark:from-slate-900 dark:via-violet-800 dark:to-zinc-800
                   bg-[length:300%_300%] animate-slow-gradient will-change-transform"
      ></div>

      {/* 2️⃣ 半透明雾层：减少 blur 强度 */}
      <div
        className="absolute inset-0 bg-white/65 dark:bg-black/35 
                   backdrop-blur-[2px] dark:backdrop-blur-[2px]"
      ></div>

      {/* 3️⃣ 光晕层：合并为一层 SVG 模糊光晕（GPU友好） */}
      <div className="absolute inset-0 -z-10 opacity-80 dark:opacity-60">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="glow1" cx="30%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id="glow2" cx="70%" cy="70%" r="55%">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.35" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id="glow3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#glow1)" />
          <rect width="100%" height="100%" fill="url(#glow2)" />
          <rect width="100%" height="100%" fill="url(#glow3)" />
        </svg>
      </div>
    </div>
  );
}
