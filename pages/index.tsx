"use client";

import Head from "next/head";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { FaRocket, FaCode, FaPalette, FaServer } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Head>
        <title>SnowyMC - Minecraft 插件与像素美术</title>
        <meta
          name="description"
          content="SnowyMC 专注于 Minecraft 插件开发与像素美术创作，用技术与美学打造独特的游戏体验。"
        />
        <meta name="keywords" content="SnowyMC, Minecraft, 插件, 服务器, 像素美术" />
        <meta property="og:title" content="SnowyMC 官网" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.snowymc.top" />
      </Head>

      <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">

        {/* 标题区域 - 带视差效果 */}
        <div 
          className="relative z-10 mt-24 transition-transform duration-100"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight relative">
            {/* 光晕背景 */}
            <span className="absolute inset-0 blur-3xl bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 opacity-50 animate-pulse-slow" />
            
            {/* 主标题 */}
            <span className="relative bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent animate-gradient-flow">
              SnowyMC
            </span>
          </h1>
          
          {/* 发光装饰 */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-violet-400/20 to-pink-400/20 rounded-3xl blur-2xl -z-10 animate-float" />
        </div>

        {/* 打字机命令框 */}
        <div 
          className="relative z-10 mt-10 w-full max-w-xl mx-auto rounded-2xl 
                      bg-black/80 backdrop-blur-xl text-green-400 font-mono text-left text-sm 
                      px-6 py-5 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10
                      hover:border-cyan-400/30 transition-all duration-500 group"
        >
          <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-gray-500 ml-2">terminal</span>
          </div>
          <span className="text-green-500">❯ </span>
          <Typewriter
            words={[
              "loading SnowyCore v3.0...",
              "initializing RPG modules...",
              "syncing player data...",
              "server ready!",
            ]}
            loop
            cursor
            cursorStyle="▋"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </div>

        {/* 简介 */}
        <div className="relative z-10 mt-10 max-w-2xl text-base md:text-lg text-gray-600 dark:text-white/70
                       bg-white/70 dark:bg-black/50 backdrop-blur-xl
                       px-8 py-5 rounded-2xl border border-black/5 dark:border-white/10
                       shadow-xl hover:shadow-2xl hover:border-cyan-400/20 transition-all duration-500">
          <span className="absolute -top-2 left-8 px-3 py-1 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full text-xs text-white font-medium">
            专注
          </span>
          <p>
            专注于 Minecraft 插件开发与像素美术创作，用技术与美学打造独特的游戏体验。
          </p>
        </div>

        {/* 功能卡片 */}
        <div className="relative z-10 mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">
          {[
            { icon: <FaCode />, title: "插件开发", desc: "高性能插件", color: "from-cyan-400 to-blue-500" },
            { icon: <FaServer />, title: "服务器运维", desc: "稳定高效", color: "from-violet-400 to-purple-500" },
            { icon: <FaPalette />, title: "像素美术", desc: "风格统一", color: "from-pink-400 to-rose-500" },
            { icon: <FaRocket />, title: "RPG系统", desc: "创新玩法", color: "from-amber-400 to-orange-500" },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-sm 
                         border border-black/5 dark:border-white/10
                         hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              {/* 顶部渐变条 */}
              <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${item.color} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* 图标容器 */}
              <div className={`w-14 h-14 mb-4 rounded-2xl bg-gradient-to-r ${item.color} p-3 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <div className="w-full h-full text-white">{item.icon}</div>
              </div>
              
              <div className="font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-cyan-400 transition-colors">{item.title}</div>
              <div className="text-xs text-gray-500 dark:text-white/50">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* 时间轴 - 已美化 */}
        <div className="relative z-10 w-full max-w-4xl mt-20 mb-8">
          <Timeline />
        </div>

        {/* CTA 按钮 */}
        <div className="relative z-10 mt-10 flex gap-5 flex-wrap justify-center">
          <Link
            href="/projects"
            className="group relative px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-500 to-purple-500
                       text-white font-bold shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30
                       hover:-translate-y-1 transition-all duration-500 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-3">
              查看项目
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
          <Link
            href="/docs"
            className="px-10 py-4 rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur-sm
                       text-gray-800 dark:text-white font-bold border border-black/10 dark:border-white/20
                       hover:shadow-xl hover:-translate-y-1 hover:border-cyan-400/50
                       transition-all duration-500"
          >
            阅读文档
          </Link>
        </div>

        <div className="h-24" />
      </main>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 4s ease infinite;
        }
      `}</style>
    </div>
  );
}

// Timeline component inline for cleaner code
import Timeline from "../components/Timeline";
