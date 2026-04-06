// pages/about.tsx
"use client";

import Head from "next/head";
import Link from "next/link";
import { FaGithub, FaDiscord, FaQq } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen relative">
      <Head>
        <title>关于 SnowyMC - Minecraft 插件与像素美术</title>
        <meta name="description" content="SnowyMC 专注于 Minecraft 插件开发与像素美术创作。" />
        <meta property="og:title" content="关于 SnowyMC" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="relative max-w-4xl mx-auto pt-32 px-6 pb-20">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              关于 SnowyMC
            </span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-white/60">
            用技术与美学，打造独特的游戏体验
          </p>
        </div>

        {/* 简介卡片 */}
        <div className="p-8 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-sm 
                       border border-black/5 dark:border-white/10 shadow-xl mb-8">
          <p className="text-gray-700 dark:text-white/80 leading-relaxed text-lg">
            SnowyMC 是一个专注于 Minecraft 生态的创作团队。我们相信——
            每一个细节都值得被认真对待，每一行代码都可以追求极致。
          </p>
          <p className="mt-4 text-gray-600 dark:text-white/60 leading-relaxed">
            我们在高性能插件开发与像素风格美术上深耕，追求工程化与美学的统一。
          </p>
        </div>

        {/* 团队成员 */}
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          核心成员
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { name: "小浩", role: "插件开发 | NMS", avatar: "https://s21.ax1x.com/2025/10/19/pVLaUOS.jpg" },
            { name: "豆哥", role: "运维 | 硬件", avatar: "https://s21.ax1x.com/2025/10/19/pVLafw4.jpg" },
            { name: "伍行缺氧", role: "汉化 | 建筑", avatar: "https://s21.ax1x.com/2025/10/19/pVLaof1.jpg" },
            { name: "宏誓", role: "WF", avatar: "https://s21.ax1x.com/2025/10/19/pVLaDFs.jpg" },
            { name: "阿龙", role: "服务端", avatar: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
            { name: "谦演", role: "插件开发", avatar: "https://s21.ax1x.com/2025/10/19/pVLaWmF.jpg" },
            { name: "EndurAut", role: "团队成员", avatar: "https://s21.ax1x.com/2025/10/19/pVL6Dk8.jpg" },
          ].map((member) => (
            <div
              key={member.name}
              className="p-4 rounded-xl bg-white/80 dark:bg-white/5 backdrop-blur-sm
                         border border-black/5 dark:border-white/10 text-center
                         transition-shadow hover:shadow-lg"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover shadow-md"
              />
              <div className="font-semibold text-gray-800 dark:text-white text-sm">{member.name}</div>
              <div className="text-xs text-gray-500 dark:text-white/50 mt-1">{member.role}</div>
            </div>
          ))}
        </div>

        {/* 联系方式 */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">联系我们</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://github.com/SnowyMCT" className="p-3 rounded-xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10 hover:scale-110 transition-transform">
              <FaGithub className="text-xl text-gray-700 dark:text-white" />
            </a>
            <a href="https://qm.qq.com/q/wVbC2R3SsE" className="p-3 rounded-xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10 hover:scale-110 transition-transform">
              <FaQq className="text-xl text-blue-500" />
            </a>
            <a href="https://forum.snowymc.com" className="p-3 rounded-xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10 hover:scale-110 transition-transform">
              <FaDiscord className="text-xl text-indigo-500" />
            </a>
          </div>
        </div>

        <div className="h-20" />
      </main>
    </div>
  );
}
