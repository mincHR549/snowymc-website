// pages/projects.tsx
"use client";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MotionDiv, MotionH2, MotionP } from "../components/motion-safe";

const projects = [
  {
    title: "KBBSToper",
    desc: "高版本 顶贴 插件，支持多版本适配",
    tags: ["Spigot/Paper", "模块化"],
    link: "https://klpbbs.com/thread-125838-1-1.html",
  },
  {
    title: "NewWorld-Online",
    desc: "全新 RPG 服务器包",
    tags: ["RPG", "可牛逼了", "高版本"],
    link: "#",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95, rotate: -2 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

export default function Projects() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Head>
        <title>项目展示 - SnowyMC 核心作品</title>
        <meta
          name="description"
          content="展示 SnowyMC 的核心项目与资源，强调性能、适配与美学统一。"
        />
        <meta
          name="keywords"
          content="SnowyMC, Minecraft, 插件, 项目, RPG, NMS, 模块化"
        />
        <meta property="og:title" content="SnowyMC 项目展示" />
        <meta
          property="og:description"
          content="SnowyMC 的核心插件与服务器项目，兼顾性能与美学。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.snowymc.top/projects" />
      </Head>

      <Navbar />

      {/* 背景光晕 */}
      <MotionDiv
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        aria-hidden="true"
        className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[800px] h-[800px]
                   rounded-full blur-3xl pointer-events-none
                   bg-gradient-to-tr from-cyan-400/18 via-violet-400/18 to-pink-400/18"
      />

      <main className="relative max-w-6xl mx-auto pt-32 px-6">
        {/* 标题 */}
        <MotionH2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white"
        >
          项目展示
        </MotionH2>

        {/* 简介 */}
        <MotionP
          className="mb-8 backdrop-blur-xl bg-white/85 dark:bg-black/40 
                     px-6 py-6 rounded-2xl border border-black/10 dark:border-white/15
                     text-gray-700 dark:text-white/80 shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          展示 SnowyMC 的核心项目与资源，强调性能、适配与美学统一。
        </MotionP>

        {/* 项目卡片 */}
        <MotionDiv
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-6"
          role="list"
          aria-label="项目卡片列表"
        >
          {projects.map((p) => (
            <MotionDiv
              key={p.title}
              variants={item}
              whileHover={{
                scale: 1.05,
                y: -5,
                rotate: 1,
                boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
              }}
              className="group relative backdrop-blur-xl bg-white/90 dark:bg-black/40 
                         p-6 rounded-2xl border border-transparent hover:border-transparent
                         before:absolute before:inset-0 before:rounded-2xl
                         before:p-[2px] before:bg-gradient-to-r
                         before:from-cyan-400 before:via-violet-400 before:to-pink-400
                         before:opacity-0 group-hover:before:opacity-100
                         before:transition before:duration-500 before:-z-10
                         hover:shadow-xl transition overflow-hidden"
              role="listitem"
              aria-label={`${p.title}（${p.desc}）`}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {p.title}
              </h3>
              <div
                aria-hidden="true"
                className="mt-2 h-[2px] w-12 bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 rounded"
              />
              <p className="mt-3 text-sm text-gray-700 dark:text-white/80">
                {p.desc}
              </p>

              {/* 标签 */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full 
                               bg-gradient-to-r from-cyan-300/40 to-pink-300/40
                               dark:from-cyan-400/30 dark:to-pink-400/30
                               text-gray-800 dark:text-white/80
                               border border-black/10 dark:border-white/20
                               transition"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* 链接 */}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm font-medium relative
                           text-gray-800 dark:text-white
                           px-3 py-1 rounded-md
                           before:absolute before:inset-0 before:rounded-md
                           before:p-[1px] before:bg-gradient-to-r before:from-cyan-400 before:to-pink-400
                           before:opacity-0 hover:before:opacity-100
                           before:transition before:duration-300
                           before:-z-10
                           hover:shadow-[0_0_18px_rgba(34,211,238,0.35)]"
              >
                了解更多
              </a>

              {/* 底部渐变条 */}
              <div
                aria-hidden="true"
                className="mt-4 h-1 w-0 group-hover:w-full transition-all 
                           bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300
                           dark:from-cyan-400 dark:via-violet-400 dark:to-pink-400 rounded"
              />
            </MotionDiv>
          ))}
        </MotionDiv>
      </main>

      <Footer />
    </div>
  );
}
