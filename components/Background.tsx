export default function Background() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* 简化渐变背景 - 静态，减少重绘 */}
      <div className="absolute inset-0 bg-gradient-to-br 
                      from-pink-200 via-purple-100 to-cyan-100 
                      dark:from-slate-900 dark:via-violet-950 dark:to-slate-900"></div>

      {/* 静态半透明层 */}
      <div className="absolute inset-0 bg-white/60 dark:bg-black/50"></div>

      {/* 简化光晕 - 只用一个，位置固定或极慢移动 */}
      <div className="hidden dark:block absolute top-1/4 left-1/4 w-[50vmax] h-[50vmax]
                      rounded-full blur-3xl bg-gradient-to-tr from-violet-500/20 to-cyan-500/20"></div>

      {/* 非暗色模式下的简化光晕 */}
      <div className="dark:hidden absolute top-1/4 right-1/4 w-[50vmax] h-[50vmax]
                      rounded-full blur-3xl bg-gradient-to-tr from-pink-300/30 to-purple-300/30"></div>

      {/* 顶部渐变遮罩 */}
      <div className="absolute top-0 left-0 w-full h-32 
                      bg-gradient-to-b from-white/50 to-transparent 
                      dark:from-black/30 dark:to-transparent pointer-events-none"></div>
    </div>
  );
}
