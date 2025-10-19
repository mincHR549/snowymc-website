// pages/gallery.tsx
"use client";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MotionDiv, MotionH2, MotionP, MotionImg } from "../components/motion-safe";

const items = [
  { title: "角色立绘 #01", type: "立绘", image: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
  { title: "Logo 设计 #NewWorld", type: "Logo", image: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
  { title: "表情差分 #Hero", type: "表情包", image: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
  { title: "UI 图标套件 #RPG", type: "UI", image: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
  { title: "像素角色贴图 #80x80", type: "贴图", image: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
  { title: "Banner 海报 #Diffuse", type: "海报", image: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 22 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

export default function Gallery() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Head>
        <title>美术资源 - SnowyMC 像素与品牌设计</title>
        <meta
          name="description"
          content="展示 SnowyMC 的标准化像素风格创作：立绘、Logo、表情差分、UI 图标、贴图与海报。"
        />
        <meta name="keywords" content="SnowyMC, 像素美术, Logo, UI, 贴图, 立绘, 海报" />
        <meta property="og:title" content="SnowyMC 美术资源库" />
        <meta property="og:description" content="统一风格与实际应用适配的像素美术作品集。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.snowymc.top/gallery" />
      </Head>

      <Navbar />

      {/* 背景层：缓慢旋转的渐变圈 + 轻微噪点纹理 */}
      <MotionDiv
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
        aria-hidden="true"
        className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[840px] h-[840px]
                   rounded-full blur-3xl pointer-events-none
                   bg-gradient-to-tr from-cyan-400/18 via-violet-400/18 to-pink-400/18"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-soft-light
                   bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%221%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22/></svg>')]"
      />

      <main className="relative max-w-6xl mx-auto pt-32 px-6">
        {/* 标题 */}
        <MotionH2
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          美术资源
        </MotionH2>

        {/* 简介 */}
        <MotionP
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 mb-8 backdrop-blur-xl bg-white/85 dark:bg-black/40 
                     px-6 py-6 rounded-2xl border border-black/10 dark:border-white/15
                     text-gray-700 dark:text-white/80 shadow-sm"
        >
          展示标准化的像素风格创作：支持透明背景、符号预留、风格统一与实际应用场景适配。
        </MotionP>

        {/* 渐变分隔线 */}
        <div
          aria-hidden="true"
          className="mb-8 h-[2px] w-full rounded-full
                     bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300
                     dark:from-cyan-400 dark:via-violet-400 dark:to-pink-400"
        />

        {/* 资源卡片 */}
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          role="list"
          aria-label="美术资源卡片网格"
        >
          {items.map((it) => (
            <MotionDiv
              key={it.title}
              variants={itemVariants}
              whileHover={{ scale: 1.04, y: -4, rotate: 0.5 }}
              className="group relative overflow-hidden rounded-2xl 
                         backdrop-blur-xl bg-white/90 dark:bg-black/40 
                         border border-transparent hover:border-transparent 
                         transition shadow-sm"
              role="listitem"
              aria-label={`${it.title}（类型：${it.type}）`}
            >
              {/* 渐变描边（使用 before 实现流动边框） */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-r before:from-cyan-400 before:via-violet-400 before:to-pink-400 before:opacity-0 group-hover:before:opacity-100 before:transition before:duration-500 before:-z-10" />

              {/* 图片展示 */}
              <div className="aspect-[4/3] overflow-hidden">
                <MotionImg
                  src={it.image}
                  alt={`${it.title} - ${it.type}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  initial={{ filter: "saturate(0.92)" }}
                  whileHover={{ filter: "saturate(1)" }}
                />
              </div>

              {/* 顶部标签条（轻微霓虹） */}
              <div
                aria-hidden="true"
                className="absolute top-3 left-3 z-[2] px-2.5 py-1.5 rounded-full 
                           text-xs font-medium text-white/90
                           bg-black/40 backdrop-blur-md
                           shadow-[0_0_18px_rgba(34,211,238,0.35)]"
              >
                {it.type}
              </div>

              {/* 底部信息条 */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 p-4 
                           bg-gradient-to-t from-black/45 to-transparent"
              >
                <div className="text-sm md:text-base font-semibold text-white">
                  {it.title}
                </div>
                <div className="mt-0.5 text-xs text-white/80">{it.type}</div>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* 底部提示 */}
        <MotionP
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-10 text-sm text-gray-600 dark:text-white/60 text-center"
        >
          所有资源遵循统一风格与工程化标准。如果需要商业或项目级使用，请先与我们联系获取授权与源文件规范。
        </MotionP>
      </main>

      <Footer />
    </div>
  );
}
