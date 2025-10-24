// pages/index.tsx
"use client";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Typewriter } from "react-simple-typewriter";
import { MotionH1, MotionDiv, MotionP } from "../components/motion-safe";
import Timeline from "../components/Timeline"; // 引入新的时间轴组件

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
        {/* 动态渐变圈背景 */}
        <MotionDiv
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[700px] h-[700px] md:w-[800px] md:h-[800px] rounded-full 
                     bg-gradient-to-tr from-cyan-400/18 via-violet-400/18 to-pink-400/18 
                     blur-3xl"
        />

        {/* 标题 */}
<MotionH1
  initial={{ scale: 0.92, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  whileHover={{ scale: 1.08, rotate: -1 }}   // 鼠标经过时放大+轻微旋转
  whileTap={{ scale: 0.95 }}                 // 点击时轻微缩小
  className="mt-24 text-5xl md:text-7xl font-extrabold tracking-tight 
             bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 
             bg-[length:200%_200%] animate-gradient 
             bg-clip-text text-transparent drop-shadow-sm 
             cursor-pointer transition-transform duration-300"
>
  SnowyMC
</MotionH1>


        {/* 打字机命令框 */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
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
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 text-base md:text-xl max-w-2xl
                     text-gray-700 dark:text-white/80
                     backdrop-blur-xl bg-white/90 dark:bg-black/40
                     px-5 md:px-6 py-4 rounded-2xl border border-black/10 dark:border-white/20"
        >
          专注于 Minecraft 插件开发与像素美术创作，用技术与美学打造独特的游戏体验。
        </MotionP>

        {/* 时间轴 */}
        <Timeline />

        {/* 漂浮光球装饰 */}
        <MotionDiv
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="pointer-events-none hidden md:block absolute right-10 bottom-40 
                     w-28 h-28 lg:w-32 lg:h-32 rounded-full 
                     bg-gradient-to-tr from-cyan-400 via-violet-400 to-pink-400 
                     blur-3xl opacity-55"
        />
        <MotionDiv
          animate={{ x: [0, -25, 15, 0], y: [0, 15, -10, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          className="pointer-events-none hidden md:block absolute left-10 top-60 
                     w-16 h-16 lg:w-20 lg:h-20 rounded-full 
                     bg-gradient-to-tr from-pink-400 via-violet-400 to-cyan-400 
                     blur-2xl opacity-45"
        />
        <MotionDiv
          animate={{ x: [0, 20, -15, 0], y: [0, -10, 15, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
          className="pointer-events-none hidden md:block absolute right-1/3 top-96 
                     w-14 h-14 rounded-full 
                     bg-gradient-to-tr from-violet-400 via-cyan-400 to-pink-400 
                     blur-xl opacity-40"
        />
        <MotionDiv
          animate={{ x: [0, 12, -8, 0], y: [0, -10, 6, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
          className="pointer-events-none md:hidden absolute right-6 bottom-28 
                     w-16 h-16 rounded-full 
                     bg-gradient-to-tr from-cyan-400 via-violet-400 to-pink-400 
                     blur-xl opacity-45"
        />
        <MotionDiv
          animate={{ x: [0, -10, 6, 0], y: [0, 8, -6, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="pointer-events-none md:hidden absolute left-6 top-48 
                     w-12 h-12 rounded-full 
                     bg-gradient-to-tr from-pink-400 via-violet-400 to-cyan-400 
                     blur-lg opacity-40"
        />
      </main>

      <Footer />
    </div>
  );
}