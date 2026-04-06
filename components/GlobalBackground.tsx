"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function GlobalBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 避免水合不匹配
  if (!mounted) {
    return (
      <div 
        className="fixed inset-0 -z-20" 
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)'
        }}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 -z-20">
      {/* 基础背景 - 静态，不动画 */}
      <div 
        className={`absolute inset-0 ${
          isDark 
            ? "bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900" 
            : "bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50"
        }`} 
      />
      
      {/* 光晕层 - 静态，不动画，避免闪烁 */}
      <div 
        className={`absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full ${
          isDark 
            ? "bg-gradient-to-br from-cyan-900/30 to-violet-900/30" 
            : "bg-gradient-to-br from-cyan-200/50 to-purple-200/50"
        } blur-[100px]`}
      />
      
      <div 
        className={`absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full ${
          isDark 
            ? "bg-gradient-to-br from-pink-900/30 to-cyan-900/30" 
            : "bg-gradient-to-br from-pink-200/50 to-cyan-200/50"
        } blur-[100px]`}
      />
      
      <div 
        className={`absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full ${
          isDark 
            ? "bg-gradient-to-br from-violet-900/20 to-pink-900/20" 
            : "bg-gradient-to-br from-violet-200/40 to-pink-200/40"
        } blur-[80px]`}
      />

      {/* 网格纹理 - 静态 */}
      <div 
        className={`absolute inset-0 ${
          isDark ? "opacity-[0.03]" : "opacity-[0.02]"
        }`}
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
    </div>
  );
}
