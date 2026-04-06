"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function GlobalBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <>
      {/* 固定在底层 */}
      <div className="fixed inset-0 -z-20">
        {/* 基础背景 */}
        <div 
          className={`absolute inset-0 ${
            isDark 
              ? "bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900" 
              : "bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50"
          }`} 
        />
        
        {/* 动态光球1 - 左上 */}
        <div 
          className={`absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[120px] ${
            isDark 
              ? "bg-gradient-to-br from-cyan-500/20 to-violet-500/20" 
              : "bg-gradient-to-br from-cyan-300/40 to-purple-300/40"
          } animate-float-1`} 
        />
        
        {/* 动态光球2 - 右下 */}
        <div 
          className={`absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full blur-[100px] ${
            isDark 
              ? "bg-gradient-to-br from-pink-500/20 to-cyan-500/20" 
              : "bg-gradient-to-br from-pink-300/40 to-cyan-300/40"
          } animate-float-2`} 
        />
        
        {/* 动态光球3 - 中间 */}
        <div 
          className={`absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[80px] ${
            isDark 
              ? "bg-gradient-to-br from-violet-500/15 to-pink-500/15" 
              : "bg-gradient-to-br from-violet-300/30 to-pink-300/30"
          } animate-float-3`} 
        />

        {/* 网格纹理 - 增强一体感 */}
        <div 
          className={`absolute inset-0 ${
            isDark ? "opacity-[0.03]" : "opacity-[0.02]"
          }`}
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,${isDark ? '1' : '0'}) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,${isDark ? '1' : '0'}) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* 顶部渐变遮罩 */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/30 to-transparent dark:from-black/30 to-transparent pointer-events-none" />
        
        {/* 底部渐变遮罩 */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/20 to-transparent dark:from-black/20 to-transparent pointer-events-none" />
      </div>

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -20px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-3deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-25px, 30px) rotate(-5deg); }
          66% { transform: translate(20px, -15px) rotate(3deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15px, -25px) scale(1.05); }
        }
        
        .animate-float-1 {
          animation: float-1 20s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 25s ease-in-out infinite;
          animation-delay: -5s;
        }
        
        .animate-float-3 {
          animation: float-3 18s ease-in-out infinite;
          animation-delay: -10s;
        }
      `}</style>
    </>
  );
}
