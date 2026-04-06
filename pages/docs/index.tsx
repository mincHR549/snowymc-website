// pages/docs/index.tsx
"use client";

import Head from "next/head";
import Link from "next/link";
import { MotionDiv, MotionH1 } from "../../components/motion-safe";
import { FaRocket, FaCode, FaServer, FaBook } from "react-icons/fa";

export default function DocsIndex() {
  return (
    <div className="min-h-screen relative">
      <Head>
        <title>文档中心 - SnowyMC</title>
        <meta name="description" content="SnowyMC 官方文档中心" />
      </Head>

      <main className="relative max-w-5xl mx-auto pt-32 px-6 pb-20">
        {/* 标题 */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              文档中心
            </span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
            插件开发教程、服务器运维指南、API文档 - 从入门到精通
          </p>
        </MotionDiv>

        {/* 文档分类 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: <FaRocket className="text-3xl" />,
              title: "快速开始",
              count: 3,
              href: "/docs/quick-start",
              color: "from-cyan-500 to-blue-500"
            },
            {
              icon: <FaCode className="text-3xl" />,
              title: "插件开发",
              count: 4,
              href: "/docs/basic-concepts",
              color: "from-violet-500 to-purple-500"
            },
            {
              icon: <FaServer className="text-3xl" />,
              title: "服务器运维",
              count: 2,
              href: "/docs/server-setup",
              color: "from-pink-500 to-rose-500"
            },
            {
              icon: <FaBook className="text-3xl" />,
              title: "API 参考",
              count: 5,
              href: "/docs/config-files",
              color: "from-orange-500 to-amber-500"
            },
          ].map((category, i) => (
            <MotionDiv
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <Link
                href={category.href}
                className="block p-6 rounded-2xl
                           bg-white/80 dark:bg-white/5 backdrop-blur-sm
                           border border-black/5 dark:border-white/10
                           shadow-lg hover:shadow-xl transition-all duration-300
                           hover:-translate-y-1 group"
              >
                {/* 顶部渐变条 */}
                <div className={`h-1 mb-4 rounded-full bg-gradient-to-r ${category.color} opacity-80`} />
                
                <div className={`mb-3 text-cyan-500`}>{category.icon}</div>
                <div className="font-bold text-gray-800 dark:text-white">{category.title}</div>
                <div className="text-sm text-gray-500 dark:text-white/50 mt-1">
                  {category.count} 篇文档
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>

        {/* 快速链接 */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 dark:text-white/50 mb-4">快速开始</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/docs/quick-start"
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500
                         text-white font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              🚀 快速开始
            </Link>
            <Link
              href="/docs/installation"
              className="px-6 py-2 rounded-xl bg-white/80 dark:bg-white/10
                         text-gray-800 dark:text-white font-medium
                         border border-black/10 dark:border-white/20
                         hover:shadow-lg hover:scale-105 transition-all"
            >
              ⚙️ 安装配置
            </Link>
          </div>
        </MotionDiv>

        <div className="h-20" />
      </main>
    </div>
  );
}
