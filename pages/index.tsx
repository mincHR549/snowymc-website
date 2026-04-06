// pages/index.tsx
"use client";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Typewriter } from "react-simple-typewriter";
import { MotionH1, MotionDiv, MotionP } from "../components/motion-safe";
import Link from "next/link";
import { FaRocket, FaCode, FaPalette, FaServer } from "react-icons/fa";

export default function Home() {
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
        <meta property="og:description" content="Minecraft 插件开发与像素美术创作。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.snowymc.top" />
        <meta property="og:image" content="https://www.snowymc.top/og-image.png" />
      </Head>

      <Navbar />

      <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
        {/* 动态渐变背景 */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* 主背景渐变 */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20 dark:from-slate-900 dark:via-violet-950 dark:to-slate-900" />
          
          {/* 动态光球1 */}
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 blur-[100px] animate-float-slow" />
          
          {/* 动态光球2 */}
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-pink-500/30 to-cyan-500/30 blur-[80px] animate-float-slow animation-delay-2000" />
          
          {/* 网格纹理 */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
               style={{
                 backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                 backgroundSize: '60px 60px'
               }} 
          />
        </div>

        {/* 标题区域 */}
        <div className="relative z-10">
          <MotionH1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mt-20 text-6xl md:text-8xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(147,51,234,0.5)]">
              SnowyMC
            </span>
            {/* 标题光晕 */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-pink-500/20 blur-xl rounded-3xl -z-10" />
          </MotionH1>
        </div>

        {/* 打字机命令框 */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 w-full max-w-xl mx-auto rounded-2xl 
                     bg-black/70 backdrop-blur-md text-green-400 font-mono text-left text-sm 
                     px-6 py-4 shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/5"
        >
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
        </MotionDiv>

        {/* 简介 */}
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 text-base md:text-lg max-w-2xl text-gray-600 dark:text-white/70
                     bg-white/60 dark:bg-black/40 backdrop-blur-sm
                     px-6 py-4 rounded-2xl border border-black/5 dark:border-white/10
                     shadow-lg"
        >
          专注于 Minecraft 插件开发与像素美术创作，用技术与美学打造独特的游戏体验。
        </MotionP>

        {/* 功能卡片 */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full"
        >
          {[
            { icon: <FaCode />, title: "插件开发", desc: "高性能插件" },
            { icon: <FaServer />, title: "服务器运维", desc: "稳定高效" },
            { icon: <FaPalette />, title: "像素美术", desc: "风格统一" },
            { icon: <FaRocket />, title: "RPG系统", desc: "创新玩法" },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-5 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-sm 
                         border border-black/5 dark:border-white/10
                         hover:border-cyan-400/50 dark:hover:border-cyan-400/50
                         transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
                         hover:-translate-y-1"
            >
              <div className="text-3xl mb-2 text-cyan-500">{item.icon}</div>
              <div className="font-semibold text-gray-800 dark:text-white text-sm">{item.title}</div>
              <div className="text-xs text-gray-500 dark:text-white/50">{item.desc}</div>
            </div>
          ))}
        </MotionDiv>

        {/* 时间轴 - 美化版 */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="w-full max-w-4xl mt-16 mb-8"
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
              我们的历程
            </span>
          </h2>
          
          <div className="relative">
            {/* 时间轴主线 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-violet-400 to-pink-400 rounded-full shadow-lg shadow-cyan-400/30" />
            
            {/* 时间轴事件 */}
            <div className="space-y-8">
              {[
                { year: "2022", title: "团队成立", desc: "三个人的梦想开始", side: "left" },
                { year: "2023", title: "服务器运营", desc: "SnowCherry 诞生", side: "right" },
                { year: "2024", title: "风雨同舟", desc: "团队扩展到7人", side: "left" },
                { year: "2025", title: "NewWorld", desc: "新项目正式立项", side: "right" },
              ].map((event, i) => (
                <div
                  key={i}
                  className={`relative flex items-center ${event.side === 'left' ? 'justify-start' : 'justify-end'} md:justify-between`}
                >
                  {/* 内容卡片 */}
                  <div className={`w-[45%] ${event.side === 'left' ? 'md:pr-8' : 'md:pl-8'} order-1`}>
                    <div className="p-4 rounded-xl bg-white/90 dark:bg-black/50 backdrop-blur-sm 
                                    border border-black/10 dark:border-white/10
                                    shadow-lg hover:shadow-xl transition-all duration-300
                                    hover:-translate-y-0.5 group">
                      <div className="text-cyan-500 font-bold text-sm">{event.year}</div>
                      <div className="font-semibold text-gray-800 dark:text-white mt-1 group-hover:text-cyan-400 transition-colors">
                        {event.title}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-white/60 mt-1">{event.desc}</div>
                    </div>
                  </div>
                  
                  {/* 中间圆点 */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full 
                                  bg-gradient-to-r from-cyan-400 to-violet-400 
                                  shadow-[0_0_15px_rgba(34,211,238,0.6)]
                                  border-2 border-white dark:border-gray-800 z-10" />
                  
                  {/* 占位 */}
                  <div className="w-[45%] hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </MotionDiv>

        {/* CTA 按钮 */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-8 flex gap-4 flex-wrap justify-center"
        >
          <Link
            href="/projects"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500
                       text-white font-semibold shadow-lg hover:shadow-xl
                       hover:scale-105 transition-all duration-300"
          >
            查看项目 →
          </Link>
          <Link
            href="/docs"
            className="px-8 py-3 rounded-xl bg-white/80 dark:bg-white/10
                       text-gray-800 dark:text-white font-semibold backdrop-blur-sm
                       border border-black/10 dark:border-white/20
                       hover:scale-105 transition-all duration-300"
          >
            阅读文档
          </Link>
        </MotionDiv>

        {/* 底部留白 */}
        <div className="h-20" />
      </main>

      <Footer />

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.05); }
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
