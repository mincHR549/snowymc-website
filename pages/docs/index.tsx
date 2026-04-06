// pages/docs/index.tsx
"use client";

import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { docCategories } from "../../data/docs";
import { MotionDiv, MotionH1, MotionP } from "../../components/motion-safe";

export default function DocsIndex() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Head>
        <title>文档中心 - SnowyMC</title>
        <meta
          name="description"
          content="SnowyMC 官方文档中心，包含插件开发教程、服务器运维指南等内容。"
        />
        <meta name="keywords" content="SnowyMC, 文档, Minecraft, 插件开发, 教程" />
        <meta property="og:title" content="SnowyMC 文档中心" />
        <meta property="og:description" content="官方文档中心" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.snowymc.top/docs" />
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
        <MotionH1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6
                     text-transparent bg-clip-text 
                     bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400
                     dark:from-cyan-300 dark:via-violet-300 dark:to-pink-300"
        >
          文档中心
        </MotionH1>

        {/* 简介 */}
        <MotionP
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-700 dark:text-white/80
                     backdrop-blur-xl bg-white/85 dark:bg-black/40
                     px-6 py-6 rounded-2xl border border-black/10 dark:border-white/15
                     shadow-sm mb-12 max-w-3xl mx-auto"
        >
          这里汇集了 SnowyMC 团队的所有技术文档、插件开发教程和服务器运维指南。
          无论你是新手还是老手，都能找到你需要的内容。
        </MotionP>

        {/* 分类卡片 */}
        <div className="grid md:grid-cols-3 gap-6">
          {docCategories.map((category, catIndex) => (
            <MotionDiv
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * catIndex, duration: 0.5 }}
              className="group relative backdrop-blur-xl bg-white/90 dark:bg-black/40 
                         rounded-2xl border border-transparent hover:border-transparent
                         p-6 shadow-lg hover:shadow-xl
                         before:absolute before:inset-0 before:rounded-2xl
                         before:p-[2px] before:bg-gradient-to-r
                         before:from-cyan-400 before:via-violet-400 before:to-pink-400
                         before:opacity-0 group-hover:before:opacity-100
                         before:transition before:duration-500 before:-z-10
                         transition-all duration-300"
            >
              {/* 图标 */}
              <div className="text-4xl mb-4">{category.icon}</div>
              
              {/* 标题 */}
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {category.name}
              </h2>
              
              {/* 描述 */}
              <p className="text-sm text-gray-600 dark:text-white/70 mb-4">
                {category.description}
              </p>
              
              {/* 文档数量 */}
              <div className="text-xs text-cyan-500 dark:text-cyan-400 font-medium">
                {category.docs.length} 篇文档
              </div>
              
              {/* 文档列表 */}
              <div className="mt-4 space-y-2">
                {category.docs.map((docSlug, docIndex) => {
                  const doc = getDocBySlugSafe(docSlug);
                  return (
                    <Link
                      key={docSlug}
                      href={`/docs/${docSlug}`}
                      className="flex items-center justify-between p-2 rounded-lg
                                 hover:bg-white/50 dark:hover:bg-white/10
                                 transition-colors text-sm"
                    >
                      <span className="text-gray-700 dark:text-white/80">
                        {doc?.title || docSlug}
                      </span>
                      <span className="text-cyan-400">→</span>
                    </Link>
                  );
                })}
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* 快速链接 */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            快速链接
          </h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/docs/quick-start"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-400
                         text-white font-medium hover:scale-105 transition-transform
                         shadow-lg hover:shadow-xl"
            >
              🚀 快速开始
            </Link>
            <Link
              href="/docs/installation"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-400 to-pink-400
                         text-white font-medium hover:scale-105 transition-transform
                         shadow-lg hover:shadow-xl"
            >
              ⚙️ 安装配置
            </Link>
            <Link
              href="/docs/basic-concepts"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-400 to-cyan-400
                         text-white font-medium hover:scale-105 transition-transform
                         shadow-lg hover:shadow-xl"
            >
              📚 基础概念
            </Link>
          </div>
        </MotionDiv>
      </main>

      <Footer />
    </div>
  );
}

function getDocBySlugSafe(slug: string) {
  // 延迟导入避免 SSR 问题
  try {
    const { docs } = require("../../data/docs");
    return docs[slug];
  } catch {
    return null;
  }
}
