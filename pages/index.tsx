// pages/index.tsx
"use client";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Typewriter } from "react-simple-typewriter";
import {
  MotionH1,
  MotionDiv,
  MotionP,
} from "../components/motion-safe";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Head>
        <title>SnowyMC - Minecraft 插件与像素美术</title>
        <meta
          name="description"
          content="SnowyMC 专注于 Minecraft 插件开发与像素美术创作，用技术与美学打造独特的游戏体验。"
        />
        <meta
          name="keywords"
          content="SnowyMC, Minecraft, 插件, 服务器, 像素美术"
        />
        <meta property="og:title" content="SnowyMC 官网" />
        <meta
          property="og:description"
          content="Minecraft 插件开发与像素美术创作。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.snowymc.top" />
        <meta
          property="og:image"
          content="https://www.snowymc.top/og-image.png"
        />
      </Head>

      <Navbar />

      <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
        {/* 动态渐变圈背景 */}
        <MotionDiv
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[800px] h-[800px] rounded-full 
                     bg-gradient-to-tr from-cyan-400/20 via-violet-400/20 to-pink-400/20 
                     blur-3xl"
        />

        {/* 标题 */}
        <MotionH1
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-24 text-6xl md:text-7xl font-extrabold tracking-tight 
                     bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 
                     bg-clip-text text-transparent drop-shadow-sm"
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
                     px-6 py-4 shadow-lg"
        >
          <span className="text-green-500">$ </span>
          <Typewriter
            words={[
              "rm -rf ./",
              "java -jar SnowyCore.jar --start",
              "loading RPG modules...",
              "assets synced successfully!",
            ]}
            loop={true}
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
          className="mt-6 text-lg md:text-xl max-w-2xl
                     text-gray-700 dark:text-white/80
                     backdrop-blur-xl bg-white/90 dark:bg-black/40
                     px-6 py-4 rounded-2xl border border-black/10 dark:border-white/20"
        >
          专注于 Minecraft 插件开发与像素美术创作，用技术与美学打造独特的游戏体验。
        </MotionP>

        {/* 时间轴区块 */}
        <section className="mt-20 max-w-4xl w-full relative">
          <div className="border-l-2 border-cyan-400/30 dark:border-cyan-300/30 ml-4">
            {[
              {
                year: "2021",
                title: "插件框架",
                desc: "高性能、可扩展的 Minecraft 插件基础框架。",
              },
              {
                year: "2022",
                title: "RPG 系统",
                desc: "任务、技能与装备的完整生态系统。",
              },
              {
                year: "2023",
                title: "像素美术库",
                desc: "标准化角色立绘、Logo 与表情差分资源。",
              },
              {
                year: "2024",
                title: "未来规划",
                desc: "更多创新玩法与跨平台支持正在开发中。",
              },
            ].map((item, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="mb-12 ml-6 relative"
              >
                {/* 改良版时间点圆圈 */}
                <span className="absolute -left-5 top-1 w-4 h-4 rounded-full 
                                 border-2 border-cyan-400/60 dark:border-cyan-300/60 
                                 bg-white/70 dark:bg-black/40 
                                 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></span>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {item.year} · {item.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-white/70">{item.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </section>

        {/* 漂浮光球装饰 */}
        <MotionDiv
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute right-10 bottom-40 w-32 h-32 rounded-full 
                     bg-gradient-to-tr from-cyan-400 via-violet-400 to-pink-400 
                     blur-3xl opacity-60"
        />

        <MotionDiv
          animate={{ x: [0, -25, 15, 0], y: [0, 15, -10, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          className="absolute left-10 top-60 w-20 h-20 rounded-full 
                     bg-gradient-to-tr from-pink-400 via-violet-400 to-cyan-400 
                     blur-2xl opacity-50"
        />

        <MotionDiv
          animate={{ x: [0, 20, -15, 0], y: [0, -10, 15, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
          className="absolute right-1/3 top-96 w-16 h-16 rounded-full 
                     bg-gradient-to-tr from-violet-400 via-cyan-400 to-pink-400 
                     blur-xl opacity-40"
        />
      </main>

      <Footer />
    </div>
  );
}
