// pages/index.tsx
"use client";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Typewriter } from "react-simple-typewriter";
import { MotionH1, MotionDiv, MotionP } from "../components/motion-safe";

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
        {/* 动态渐变圈背景（缓慢旋转，营造层次） */}
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
          className="mt-24 text-5xl md:text-7xl font-extrabold tracking-tight 
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

        {/* 响应式时间轴（移动端单列，桌面端左右交错 + 线条流动 + 节点脉冲） */}
        <section className="mt-16 md:mt-20 max-w-5xl w-full relative">
          <div className="relative mx-auto">
            {/* 中间竖线（移动端靠左，桌面端居中） */}
            <div
              className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] 
                         bg-gray-300 dark:bg-gray-700 transform -translate-x-0 md:-translate-x-1/2"
            ></div>

            {/* 动态高亮线条：进入视口时从上至下点亮 */}
            <MotionDiv
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute left-4 md:left-1/2 top-0 w-[2px] 
                         bg-gradient-to-b from-cyan-400 via-violet-400 to-pink-400 
                         transform -translate-x-0 md:-translate-x-1/2"
            />

            {[
              { year: "2022年6月", title: "团队成立初", desc: "以 SnowyMC 为团队名称，一个只有三个人的团队成立了！" },
              { year: "2023年8月", title: "服务器运营", desc: "从此时起 SnowCherry。服务器诞生了！" },
              { year: "2024年3月", title: "经济大危机", desc: "因服务商设备问题 玩家跑了 钱没了..." },
              { year: "2024年8月", title: "团队扩充中", desc: "团队规模扩展至 7 人！" },
              { year: "2025年3月", title: "新项目立项", desc: "NewWorld - Online" },
            ].map((item, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                className={`mb-10 md:mb-16 flex w-full ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
              >
                {/* 时间点（半透明描边 + 脉冲扩散动画） */}
                <div
                  className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-5 md:w-6 h-5 md:h-6 
                             rounded-full border-2 border-cyan-400/60 
                             bg-white/70 dark:bg-black/40 
                             shadow-[0_0_8px_rgba(34,211,238,0.5)] 
                             flex items-center justify-center"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <span className="absolute w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-cyan-400/40 animate-ping"></span>
                </div>

                {/* 信息卡片（移动端单列在右侧；桌面端左右交错） */}
                <div
                  className={`relative ml-10 md:ml-0 md:w-[45%] p-4 md:p-6 rounded-2xl 
                              backdrop-blur-xl bg-white/80 dark:bg-black/40 
                              border border-black/10 dark:border-white/20 shadow-lg
                              hover:scale-105 transition-transform duration-300
                              ${i % 2 === 0 ? "md:ml-10 md:text-left" : "md:mr-10 md:text-right"}`}
                >
                  <h3 className="text-base md:text-lg font-bold text-gray-800 dark:text-white">
                    {item.year} · {item.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-white/70">
                    {item.desc}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </section>

        {/* 漂浮光球装饰（响应式缩放与可见性） */}
        {/* 桌面端主光球 */}
        <MotionDiv
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="pointer-events-none hidden md:block absolute right-10 bottom-40 
                     w-28 h-28 lg:w-32 lg:h-32 rounded-full 
                     bg-gradient-to-tr from-cyan-400 via-violet-400 to-pink-400 
                     blur-3xl opacity-55"
        />
        {/* 桌面端次光球 */}
        <MotionDiv
          animate={{ x: [0, -25, 15, 0], y: [0, 15, -10, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          className="pointer-events-none hidden md:block absolute left-10 top-60 
                     w-16 h-16 lg:w-20 lg:h-20 rounded-full 
                     bg-gradient-to-tr from-pink-400 via-violet-400 to-cyan-400 
                     blur-2xl opacity-45"
        />
        {/* 桌面端第三光球 */}
        <MotionDiv
          animate={{ x: [0, 20, -15, 0], y: [0, -10, 15, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
          className="pointer-events-none hidden md:block absolute right-1/3 top-96 
                     w-14 h-14 rounded-full 
                     bg-gradient-to-tr from-violet-400 via-cyan-400 to-pink-400 
                     blur-xl opacity-40"
        />
        {/* 移动端小光球（避免遮挡，保留氛围） */}
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
