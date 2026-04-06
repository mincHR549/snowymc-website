"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function GlobalBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* 基础渐变背景 */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ${
          isDark 
            ? "bg-gradient-to-br from-slate-950 via-violet-950 via-purple-950 to-slate-900" 
            : "bg-gradient-to-br from-cyan-100 via-purple-50 to-pink-100"
        }`} 
      />
      
      {/* 动态光球1 - 左上 */}
      <div 
        className={`absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full animate-float-orb-1 ${
          isDark 
            ? "bg-gradient-to-br from-cyan-500/25 via-purple-500/20 to-pink-500/15" 
            : "bg-gradient-to-br from-cyan-300/60 via-purple-300/40 to-pink-300/30"
        } blur-[120px]`}
      />
      
      {/* 动态光球2 - 右下 */}
      <div 
        className={`absolute -bottom-40 -right-40 w-[550px] h-[550px] rounded-full animate-float-orb-2 ${
          isDark 
            ? "bg-gradient-to-br from-pink-500/20 via-violet-500/25 to-cyan-500/15" 
            : "bg-gradient-to-br from-pink-300/50 via-violet-300/40 to-cyan-300/30"
        } blur-[100px]`}
      />
      
      {/* 动态光球3 - 右上 */}
      <div 
        className={`absolute -top-20 right-1/4 w-[400px] h-[400px] rounded-full animate-float-orb-3 ${
          isDark 
            ? "bg-gradient-to-br from-violet-500/20 to-pink-500/20" 
            : "bg-gradient-to-br from-violet-300/40 to-pink-300/30"
        } blur-[80px]`}
      />

      {/* 动态光球4 - 左下 */}
      <div 
        className={`absolute bottom-1/4 -left-20 w-[350px] h-[350px] rounded-full animate-float-orb-4 ${
          isDark 
            ? "bg-gradient-to-br from-cyan-500/15 to-violet-500/15" 
            : "bg-gradient-to-br from-cyan-300/30 to-violet-300/25"
        } blur-[70px]`}
      />

      {/* 网格纹理 - 暗色模式下更明显 */}
      <div 
        className={`absolute inset-0 ${
          isDark ? "opacity-[0.04]" : "opacity-[0.015]"
        }`}
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* 噪点纹理 */}
      <div 
        className={`absolute inset-0 opacity-[0.015] ${
          isDark ? "" : "invert-[0.1]"
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <style jsx>{`
        @keyframes float-orb-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(40px, -30px) scale(1.05); }
          50% { transform: translate(20px, 20px) scale(0.95); }
          75% { transform: translate(-30px, 10px) scale(1.02); }
        }
        
        @keyframes float-orb-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-35px, 25px) scale(1.03); }
          50% { transform: translate(-15px, -20px) scale(0.98); }
          75% { transform: translate(25px, -15px) scale(1.05); }
        }
        
        @keyframes float-orb-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, 20px) scale(1.08); }
          66% { transform: translate(-20px, -25px) scale(0.95); }
        }
        
        @keyframes float-orb-4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-25px, -15px) scale(1.05); }
          66% { transform: translate(15px, 25px) scale(0.97); }
        }
        
        .animate-float-orb-1 {
          animation: float-orb-1 18s ease-in-out infinite;
        }
        
        .animate-float-orb-2 {
          animation: float-orb-2 22s ease-in-out infinite;
          animation-delay: -5s;
        }
        
        .animate-float-orb-3 {
          animation: float-orb-3 15s ease-in-out infinite;
          animation-delay: -8s;
        }
        
        .animate-float-orb-4 {
          animation: float-orb-4 20s ease-in-out infinite;
          animation-delay: -12s;
        }
      `}</style>
    </div>
  );
}
