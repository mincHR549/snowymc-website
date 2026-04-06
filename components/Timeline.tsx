"use client";

import { useEffect, useState, useRef } from "react";

const events = [
  { year: "2022", title: "团队成立", desc: "SnowyMC 成立，三个人的梦想开始", icon: "🚀" },
  { year: "2023", title: "服务器运营", desc: "SnowCherry 服务器诞生，正式运营", icon: "🎮" },
  { year: "2024", title: "风雨同舟", desc: "经历危机，团队扩展至7人", icon: "⚡" },
  { year: "2025", title: "NewWorld", desc: "全新 RPG 项目立项，开启新篇章", icon: "🌟" },
];

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll(".timeline-item").forEach((el) => {
        observerRef.current?.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="relative max-w-5xl mx-auto mt-20 md:mt-28">
      {/* 标题 */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift">
            我们的历程
          </span>
        </h2>
        <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500" />
      </div>

      {/* 时间轴容器 */}
      <div className="relative">
        {/* 中央主线 - 带发光效果 */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1">
          {/* 发光背景 */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-violet-400 to-pink-400 rounded-full animate-pulse-glow" />
          {/* 光晕 */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-violet-400 to-pink-400 rounded-full blur-sm opacity-60" />
        </div>

        {/* 事件列表 */}
        <div className="space-y-12 md:space-y-16">
          {events.map((event, i) => {
            const isLeft = i % 2 === 0;
            const isVisible = visibleItems.includes(i);
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={i}
                data-index={i}
                className={`timeline-item relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
                           transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* 移动端内容 */}
                <div className="md:hidden flex-1 ml-8">
                  <div className={`relative p-5 rounded-2xl backdrop-blur-md border transition-all duration-300 cursor-pointer
                    ${isHovered 
                      ? 'bg-white/95 dark:bg-black/80 border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.3)]' 
                      : 'bg-white/90 dark:bg-black/70 border-white/20'}`}>
                    {/* 顶部图标 */}
                    <div className={`absolute -top-4 left-4 w-8 h-8 rounded-xl bg-gradient-to-r ${
                      i % 4 === 0 ? 'from-cyan-400 to-blue-500' :
                      i % 4 === 1 ? 'from-violet-400 to-purple-500' :
                      i % 4 === 2 ? 'from-pink-400 to-rose-500' :
                      'from-amber-400 to-orange-500'
                    } flex items-center justify-center text-lg shadow-lg`}>
                    </div>
                    <div className="text-2xl absolute -top-3 left-4 w-9 h-9 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 flex items-center justify-center">
                      <span>{event.icon}</span>
                    </div>
                    
                    <div className="pt-4">
                      <div className="text-cyan-500 dark:text-cyan-400 font-bold text-sm mb-1">{event.year}</div>
                      <div className="font-bold text-gray-800 dark:text-white text-lg">{event.title}</div>
                      <div className="text-gray-600 dark:text-white/60 text-sm mt-1">{event.desc}</div>
                    </div>
                  </div>
                </div>

                {/* 中间圆点 - 桌面端 */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-10">
                  {/* 外圈发光 */}
                  <div className={`absolute w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 animate-pulse-ring ${isHovered ? 'scale-150 opacity-80' : 'scale-100 opacity-40'} transition-all duration-300`} />
                  {/* 内圈 */}
                  <div className={`relative w-5 h-5 rounded-full transition-all duration-300 ${
                    isHovered 
                      ? 'bg-gradient-to-r from-cyan-400 to-violet-400 scale-125 shadow-[0_0_20px_rgba(34,211,238,0.6)]' 
                      : 'bg-gradient-to-r from-cyan-300 to-violet-300'
                  }`}>
                    <div className="absolute inset-1 rounded-full bg-white/50" />
                  </div>
                </div>

                {/* 桌面端内容 */}
                <div className={`hidden md:block flex-1 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className={`relative p-6 rounded-2xl backdrop-blur-md border transition-all duration-500 cursor-pointer
                    ${isHovered 
                      ? 'bg-white/95 dark:bg-black/80 border-cyan-400/50 shadow-[0_0_40px_rgba(34,211,238,0.35)] transform scale-[1.02]' 
                      : 'bg-white/90 dark:bg-black/70 border-white/20 hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]'}`}>
                    
                    {/* 浮动图标 */}
                    <div className={`absolute -top-5 ${isLeft ? '-right-5' : '-left-5'} w-12 h-12 rounded-2xl bg-gradient-to-r ${
                      i % 4 === 0 ? 'from-cyan-400 to-blue-500' :
                      i % 4 === 1 ? 'from-violet-400 to-purple-500' :
                      i % 4 === 2 ? 'from-pink-400 to-rose-500' :
                      'from-amber-400 to-orange-500'
                    } flex items-center justify-center text-2xl shadow-xl transition-transform duration-500 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
                      <span>{event.icon}</span>
                    </div>

                    <div className={`${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="text-cyan-500 dark:text-cyan-400 font-bold text-lg mb-2">{event.year}</div>
                      <div className="font-extrabold text-gray-800 dark:text-white text-xl mb-2">{event.title}</div>
                      <div className="text-gray-600 dark:text-white/70 leading-relaxed">{event.desc}</div>
                    </div>

                    {/* 装饰线 */}
                    <div className={`absolute top-6 w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent ${isLeft ? '-left-8' : '-right-8'} ${isLeft ? 'md:block hidden' : ''}`} />
                    <div className={`absolute top-6 w-8 h-[2px] bg-gradient-to-l from-transparent to-cyan-400 ${isLeft ? '' : 'md:block hidden'}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部终止符 */}
        <div className="flex justify-center mt-12">
          <div className="relative">
            <div className="absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 blur-md animate-pulse" />
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
              <span className="text-white text-sm">✨</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; filter: blur(8px); }
          50% { opacity: 1; filter: blur(12px); }
        }
        
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.5); opacity: 0.8; }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
      `}</style>
    </div>
  );
}
