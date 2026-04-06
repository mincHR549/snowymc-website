"use client";

import Head from "next/head";
import { useEffect } from "react";
import { FaComments, FaGithub, FaRocket, FaHeart } from "react-icons/fa";

export default function Forum() {
  useEffect(() => {
    // 动态加载 Giscus
    const existingScript = document.getElementById("giscus-script");
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "mincHR549/snowymc-website");
    script.setAttribute("data-repo-id", "R_kgDO"); // 需要替换为实际值
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDO"); // 需要替换为实际值
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "zh-CN");
    script.setAttribute("data-loading", "lazy");
    script.crossOrigin = "anonymous";
    script.async = true;
    script.id = "giscus-script";
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("giscus-script");
      if (s) s.remove();
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <Head>
        <title>论坛 - SnowyMC</title>
        <meta name="description" content="SnowyMC 社区论坛 - 与开发者和其他玩家交流" />
      </Head>

      <main className="relative max-w-5xl mx-auto pt-32 px-4 pb-20">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full 
                          bg-gradient-to-r from-cyan-500/10 to-pink-500/10 
                          border border-cyan-500/20 mb-6">
            <FaComments className="text-2xl text-cyan-500" />
            <span className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              社区论坛
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              加入我们的社区
            </span>
          </h1>
          
          <p className="text-gray-600 dark:text-white/60 max-w-xl mx-auto">
            在这里你可以讨论插件开发、分享作品、提出问题，与其他开发者和玩家交流
          </p>
        </div>

        {/* 特性展示 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { icon: <FaGithub />, title: "GitHub 登录", desc: "使用 GitHub 账号直接登录", color: "from-gray-600 to-gray-800" },
            { icon: <FaComments />, title: "自由讨论", desc: "创建话题，参与讨论", color: "from-cyan-500 to-blue-500" },
            { icon: <FaComments />, title: "无广告", desc: "纯净的社区环境", color: "from-violet-500 to-purple-500" },
            { icon: <FaHeart />, title: "免费使用", desc: "基于 GitHub Discussions", color: "from-pink-500 to-rose-500" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-sm 
                             border border-black/5 dark:border-white/10 text-center
                             hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-xl`}>
                {item.icon}
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white">{item.title}</h3>
              <p className="text-xs text-gray-500 dark:text-white/50 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 论坛主区域 */}
        <div className="rounded-2xl bg-white/90 dark:bg-white/5 backdrop-blur-sm 
                        border border-black/5 dark:border-white/10 overflow-hidden shadow-xl">
          {/* 顶部栏 */}
          <div className="px-6 py-4 border-b border-black/5 dark:border-white/10 
                          flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 flex items-center justify-center">
                <FaGithub className="text-white text-lg" />
              </div>
              <div>
                <h2 className="font-bold text-gray-800 dark:text-white">mincHR549/snowymc-website</h2>
                <p className="text-xs text-gray-500 dark:text-white/50">GitHub Discussions</p>
              </div>
            </div>
            <a
              href="https://github.com/mincHR549/snowymc-website/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                         bg-gradient-to-r from-cyan-500 to-violet-500
                         text-white text-sm font-medium
                         hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              <FaRocket className="text-sm" />
              <span>在 GitHub 上访问</span>
            </a>
          </div>

          {/* Giscus 容器 */}
          <div className="giscus p-6" />
        </div>

        {/* 配置提示 */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 
                        border border-amber-500/20">
          <h3 className="font-bold text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-2">
            <span>💡</span>
            <span>论坛使用指南</span>
          </h3>
          <div className="space-y-3 text-sm text-gray-600 dark:text-white/70">
            <p>
              本论坛基于 <strong className="text-amber-500">Giscus</strong>（GitHub Discussions），免费、无广告、永久保存。
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-xl bg-white/50 dark:bg-black/30">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">🚀 快速开始</h4>
                <ol className="text-xs space-y-1 list-decimal list-inside">
                  <li>点击上方「在 GitHub 上访问」</li>
                  <li>登录 GitHub 账号</li>
                  <li>点击 New Discussion 创建话题</li>
                </ol>
              </div>
              <div className="p-4 rounded-xl bg-white/50 dark:bg-black/30">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">📋 话题分类</h4>
                <ul className="text-xs space-y-1 list-disc list-inside">
                  <li><strong>General</strong> - 通用讨论</li>
                  <li><strong>Q&A</strong> - 问答专区</li>
                  <li><strong>Ideas</strong> - 创意建议</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-500 dark:text-white/40">
              如果 Giscus 没有正常加载，请在 GitHub Discussions 中查看完整论坛内容。
            </p>
          </div>
        </div>

        {/* 底部留白 */}
        <div className="h-16" />
      </main>
    </div>
  );
}
