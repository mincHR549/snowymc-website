// pages/projects.tsx
"use client";

import Head from "next/head";
import Link from "next/link";
import { MotionDiv, MotionH2, MotionP } from "../components/motion-safe";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="min-h-screen relative">
      <Head>
        <title>项目展示 - SnowyMC</title>
        <meta name="description" content="SnowyMC 核心项目展示" />
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
              我们的项目
            </span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-white/60">
            从插件到服务器，探索无限可能
          </p>
        </MotionDiv>

        {/* 项目卡片 */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "KBBSToper",
              desc: "高版本顶贴插件，支持多版本适配，模块化设计。",
              tags: ["Spigot/Paper", "模块化"],
              link: "https://klpbbs.com/thread-125838-1-1.html",
              color: "from-cyan-500 to-blue-500"
            },
            {
              title: "RealmPlugin",
              desc: "玩家领域插件，创建独立世界、设置规则、邀请好友。",
              tags: ["Java", "Paper API"],
              link: "https://github.com/mincHR549/RealmPlugin",
              color: "from-violet-500 to-purple-500"
            },
            {
              title: "NewWorld-Online",
              desc: "全新 RPG 服务器包，更多精彩内容开发中。",
              tags: ["RPG", "高版本"],
              link: "#",
              color: "from-pink-500 to-rose-500"
            },
            {
              title: "SnowyCore",
              desc: "核心库，提供常用工具与统一框架。",
              tags: ["框架", "工具库"],
              link: "#",
              color: "from-orange-500 to-amber-500"
            },
          ].map((project, i) => (
            <MotionDiv
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl
                         bg-white/80 dark:bg-white/5 backdrop-blur-sm
                         border border-black/5 dark:border-white/10
                         shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* 顶部渐变条 */}
              <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-500 transition-colors"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
                
                <p className="mt-3 text-gray-600 dark:text-white/60 text-sm leading-relaxed">
                  {project.desc}
                </p>
                
                {/* 标签 */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium
                                 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400
                                 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        <div className="h-20" />
      </main>
    </div>
  );
}
