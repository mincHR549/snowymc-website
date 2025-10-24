// pages/index.tsx
"use client";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Typewriter } from "react-simple-typewriter";
import { MotionH1, MotionDiv, MotionP } from "../components/motion-safe";
import Timeline from "../components/Timeline";
import Background from "../components/Background";

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
      <Background />

      <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
        {/* 标题：纯色 + 轻动效 */}
        <MotionH1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
          className="mt-28 text-5xl md:text-7xl font-extrabold tracking-tight text-black dark:text-white"
        >
          SnowyMC
        </MotionH1>

        {/* 副标题：薄玻璃卡片 */}
        <MotionP
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-[15px] md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-200
                     mx-auto max-w-2xl px-6 py-4 rounded-2xl
                     bg-white/70 dark:bg-white/[0.06]
                     border border-black/5 dark:border-white/10
                     shadow-[0_1px_0_rgba(0,0,0,0.08)]"
        >
          专注于 Minecraft 插件开发与像素美术创作，用技术与美学打造独特的游戏体验。
        </MotionP>

        {/* 命令框*/}
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 w-full max-w-xl mx-auto rounded-2xl
                     bg-[#0b0f0d]/92 text-[#d7f1d0] font-mono text-left text-sm
                     px-5 md:px-6 py-4
                     ring-1 ring-white/5 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
        >
          <span className="text-[#a4e3a2]">$ </span>
          <Typewriter
            words={[
              "java -jar SnowyCore.jar --start",
              "loading RPG modules...",
              "assets synced successfully!",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={52}
            deleteSpeed={36}
            delaySpeed={1800}
          />
        </MotionDiv>

        {/* 时间轴 */}
        <Timeline />
      </main>

      <Footer />
    </div>
  );
}
