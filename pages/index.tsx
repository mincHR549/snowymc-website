// pages/index.tsx
"use client";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Typewriter } from "react-simple-typewriter";
import { MotionH1, MotionDiv, MotionP } from "../components/motion-safe";
import Timeline from "../components/Timeline";

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
        {/* 简化渐变圈 - 静态，减少GPU消耗 */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[600px] h-[600px] md:w-[700px] md:h-[700px] rounded-full 
                        bg-gradient-to-tr from-cyan-400/15 via-violet-400/15 to-pink-400/15 
                        blur-3xl" />

        {/* 标题 - 简化为淡入效果 + 保留光效 */}
        <MotionH1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mt-24 text-5xl md:text-7xl font-extrabold tracking-tight 
                     text-transparent bg-clip-text 
                     bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400
                     dark:from-cyan-300 dark:via-violet-300 dark:to-pink-300
                     cursor-pointer select-none"
          style={{
            filter: `
              drop-shadow(0 0 8px rgba(0, 217, 255, 0.6))
              drop-shadow(0 0 16px rgba(147, 51, 234, 0.5))
              drop-shadow(0 0 24px rgba(236, 72, 153, 0.4))
            `
          }}
        >
          SnowyMC
        </MotionH1>

        {/* 打字机命令框 */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 w-full max-w-xl mx-auto rounded-xl 
                     bg-black/80 text-green-400 font-mono text-left text-sm 
                     px-5 md:px-6 py-4 shadow-lg"
        >
          <span className="text-green-500">$ </span>
          <Typewriter
            words={[
              "rm -rf ./",
              "java -jar SnowyCore.jar --start",
              "loading RPG modules...",
              "assets synced successfully!",
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </MotionDiv>

        {/* 简介段落 */}
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 text-base md:text-xl max-w-2xl
                     text-gray-700 dark:text-white/80
                     bg-white/80 dark:bg-black/50 backdrop-blur-sm
                     px-5 md:px-6 py-4 rounded-2xl border border-black/5 dark:border-white/10"
        >
          专注于 Minecraft 插件开发与像素美术创作，用技术与美学打造独特的游戏体验。
        </MotionP>

        {/* 时间轴 */}
        <Timeline />

        {/* 简化装饰 - 仅桌面端显示，静态 */}
        <div className="pointer-events-none hidden md:block absolute right-10 bottom-40 
                        w-24 h-24 lg:w-28 lg:h-28 rounded-full 
                        bg-gradient-to-tr from-cyan-400/30 to-pink-400/30 blur-2xl" />
        <div className="pointer-events-none hidden md:block absolute left-10 top-60 
                        w-20 h-20 rounded-full 
                        bg-gradient-to-tr from-pink-400/30 to-violet-400/30 blur-2xl" />
      </main>

      <Footer />
    </div>
  );
}
