// pages/about.tsx
"use client";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  MotionDiv,
  MotionH2,
  MotionH3,
  MotionP,
  MotionImg,
} from "../components/motion-safe";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

export default function About() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Head>
        <title>关于 SnowyMC - 团队介绍与愿景</title>
        <meta
          name="description"
          content="SnowyMC 是一个聚焦 Minecraft 生态的创作团队，专注于高性能插件与像素美术，用工程化与美学统一打造稳定而富有创意的作品。"
        />
        <meta name="keywords" content="SnowyMC, Minecraft, 插件, 团队, 美术, RPG" />
        <meta property="og:title" content="关于 SnowyMC" />
        <meta
          property="og:description"
          content="了解 SnowyMC 的团队故事、创作理念与成员介绍。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.snowymc.top/about" />
      </Head>

      <Navbar />

      {/* 背景层（缓慢旋转的渐变圈 + 轻微噪点纹理） */}
      <MotionDiv
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        aria-hidden="true"
        className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[780px] h-[780px]
                   rounded-full blur-3xl pointer-events-none
                   bg-gradient-to-tr from-cyan-400/18 via-violet-400/18 to-pink-400/18"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-soft-light
                   bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%221%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22/></svg>')]"
      />

      <main className="relative max-w-6xl mx-auto pt-32 px-6">
        {/* 标题与引导文案 */}
        <MotionH2
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          关于 SnowyMC
        </MotionH2>

        <MotionP
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-4 text-base md:text-lg leading-relaxed text-gray-700 dark:text-white/80
                     backdrop-blur-xl bg-white/85 dark:bg-black/40
                     px-6 py-6 rounded-2xl border border-black/10 dark:border-white/15
                     shadow-sm"
        >
          SnowyMC 是一个聚焦 Minecraft 生态的创作团队。我们在高性能插件与像素风格美术上深耕，
          追求工程化与美学统一：以标准化、可扩展、兼容适配为原则，打造稳定而富有创意的作品。
        </MotionP>

        {/* 渐变分隔线 */}
        <div
          aria-hidden="true"
          className="mt-8 h-[2px] w-full rounded-full
                     bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300
                     dark:from-cyan-400 dark:via-violet-400 dark:to-pink-400"
        />

        {/* 愿景与理念 */}
        <MotionH3
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-10 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          愿景与理念
        </MotionH3>

        <MotionDiv
          variants={container}
          initial="hidden"
          animate="visible"
          className="mt-4 grid md:grid-cols-3 gap-5"
          role="list"
          aria-label="愿景与理念要点"
        >
          {[
            { k: "技术", v: "高性能、结构化架构" },
            { k: "美术", v: "统一风格与细节还原" },
            { k: "协作", v: "开放共享，偏好宽松协议" },
          ].map((pair) => (
            <MotionDiv
              key={pair.k}
              variants={item}
              whileHover={{
                scale: 1.04,
                y: -4,
                boxShadow: "0 10px 26px rgba(0,0,0,0.16)",
              }}
              className="group relative p-5 rounded-2xl
                         backdrop-blur-xl bg-white/90 dark:bg-black/40
                         border border-transparent
                         before:absolute before:inset-0 before:rounded-2xl
                         before:p-[2px] before:bg-gradient-to-r
                         before:from-cyan-400 before:via-violet-400 before:to-pink-400
                         before:opacity-0 group-hover:before:opacity-100
                         before:transition before:duration-500 before:-z-10
                         text-gray-800 dark:text-white/85 transition"
              role="listitem"
            >
              <div className="text-sm uppercase tracking-wide text-gray-500 dark:text-white/60">
                {pair.k}
              </div>
              <div className="mt-1 text-lg font-medium">{pair.v}</div>
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* 渐变分隔线 */}
        <div
          aria-hidden="true"
          className="mt-10 h-[2px] w-full rounded-full
                     bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300
                     dark:from-cyan-400 dark:via-violet-400 dark:to-pink-400"
        />

        {/* 团队成员 */}
        <MotionH3
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          团队成员
        </MotionH3>

        <MotionDiv
          variants={container}
          initial="hidden"
          animate="visible"
          className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6"
          role="list"
          aria-label="团队成员列表"
        >
          {[
            {
              name: "小浩",
              role: "插件开发 | NMS 适配",
              avatar: "https://s21.ax1x.com/2025/10/19/pVLaUOS.jpg",
            },
            {
              name: "豆哥",
              role: "运维 | 硬件管理",
              avatar: "https://s21.ax1x.com/2025/10/19/pVLafw4.jpg",
            },
            {
              name: "伍行缺氧",
              role: "略懂汉化与建筑 | 对任何事物充满好奇",
              avatar: "https://s21.ax1x.com/2025/10/19/pVLaof1.jpg",
            },
            {
              name: "宏誓",
              role: "一个WF",
              avatar: "https://s21.ax1x.com/2025/10/19/pVLaDFs.jpg",
            },
            {
              name: "阿龙",
              role: "还得那边不是海",
              avatar: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg",
            },
            {
              name: "谦演",
              role: "小插件开发｜服务端搭建",
              avatar: "https://s21.ax1x.com/2025/10/19/pVLaWmF.jpg",
            },
          ].map((m) => (
            <MotionDiv
              key={m.name}
              variants={item}
              whileHover={{
                scale: 1.03,
                y: -4,
                boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
              }}
              className="group relative p-6 rounded-2xl
                         backdrop-blur-xl bg-white/90 dark:bg-black/40
                         border border-transparent hover:border-transparent
                         before:absolute before:inset-0 before:rounded-2xl
                         before:p-[2px] before:bg-gradient-to-r
                         before:from-cyan-400 before:via-violet-400 before:to-pink-400
                         before:opacity-0 group-hover:before:opacity-100
                         before:transition before:duration-500 before:-z-10
                         transition"
              role="listitem"
              aria-label={`${m.name}（${m.role}）`}
            >
              {/* 头像：发光、轻微漂浮 */}
              <div className="flex justify-center mb-4">
                <MotionImg
                  src={m.avatar}
                  alt={`${m.name} 的头像`}
                  className="w-20 h-20 rounded-full object-cover
                             ring-2 ring-transparent group-hover:ring-cyan-300/70
                             shadow-md group-hover:shadow-[0_0_28px_rgba(34,211,238,0.35)]
                             transition"
                  initial={{ y: 0 }}
                  whileHover={{ y: -2 }}
                />
              </div>

              {/* 姓名与角色 */}
              <div className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                {m.name}
              </div>
              <div className="mt-1 text-sm text-gray-700 dark:text-white/80 text-center">
                {m.role}
              </div>

              {/* 卡片底部细线（渐变动画显现） */}
              <div
                aria-hidden="true"
                className="mt-5 h-[2px] w-0 group-hover:w-full transition-all
                           bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300
                           dark:from-cyan-400 dark:via-violet-400 dark:to-pink-400 rounded"
              />
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* 页面底部分隔与小提示 */}
        <div
          aria-hidden="true"
          className="mt-12 h-[2px] w-full rounded-full
                     bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300
                     dark:from-cyan-400 dark:via-violet-400 dark:to-pink-400"
        />
        <MotionP
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-6 text-sm text-center text-gray-600 dark:text-white/60"
        >
          如果你认同我们的理念，欢迎加入 SnowyMC，一起把有趣的想法变成稳定的作品。
        </MotionP>
      </main>

      <Footer />
    </div>
  );
              }
