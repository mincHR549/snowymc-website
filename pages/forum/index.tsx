"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import { FaComments, FaGithub, FaPlus, FaSearch } from "react-icons/fa";

export default function Forum() {
  const [repo, setRepo] = useState("");
  const [repoId, setRepoId] = useState("");
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [term, setTerm] = useState("");

  // 默认配置（你可以更改这些）
  const DEFAULT_REPO = "mincHR549/snowymc-website";
  const DEFAULT_REPO_ID = ""; // 需要从 Giscus 官网获取
  const DEFAULT_CATEGORY = "General";
  const DEFAULT_CATEGORY_ID = ""; // 需要从 Giscus 官网获取

  useEffect(() => {
    // 尝试从 localStorage 读取配置
    const savedRepo = localStorage.getItem("giscus_repo") || DEFAULT_REPO;
    const savedRepoId = localStorage.getItem("giscus_repo_id") || DEFAULT_REPO_ID;
    const savedCategory = localStorage.getItem("giscus_category") || DEFAULT_CATEGORY;
    const savedCategoryId = localStorage.getItem("giscus_category_id") || DEFAULT_CATEGORY_ID;

    setRepo(savedRepo);
    setRepoId(savedRepoId);
    setCategory(savedCategory);
    setCategoryId(savedCategoryId);

    // 加载 Giscus script
    if (!document.getElementById("giscus-script")) {
      const script = document.createElement("script");
      script.src = "https://giscus.app/client.js";
      script.setAttribute("data-repo", savedRepo);
      script.setAttribute("data-repo-id", savedRepoId || "REPO_ID_HERE");
      script.setAttribute("data-category", savedCategory);
      script.setAttribute("data-category-id", savedCategoryId || "CATEGORY_ID_HERE");
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
    } else {
      // 如果脚本已加载，更新配置
      updateGiscusConfig(savedRepo, savedRepoId, savedCategory, savedCategoryId);
    }
  }, []);

  const updateGiscusConfig = (r: string, rid: string, c: string, cid: string) => {
    const iframe = document.querySelector<HTMLIFrameElement>("iframe.giscus-frame");
    if (!iframe) return;

    iframe.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            repo: r as `${string}/${string}`,
            repoId: rid,
            category: c,
            categoryId: cid,
            theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
          },
        },
      },
      "https://giscus.app"
    );
  };

  return (
    <div className="min-h-screen relative">
      <Head>
        <title>论坛 - SnowyMC</title>
        <meta name="description" content="SnowyMC 社区论坛" />
      </Head>

      <main className="relative max-w-5xl mx-auto pt-32 px-6 pb-20">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              社区论坛
            </span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-white/60">
            基于 GitHub Discussions 的免费无广告论坛
          </p>
        </div>

        {/* 功能说明卡片 */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-sm 
                          border border-black/5 dark:border-white/10 text-center">
            <FaComments className="text-3xl mx-auto mb-3 text-cyan-500" />
            <h3 className="font-semibold text-gray-800 dark:text-white">发帖讨论</h3>
            <p className="text-sm text-gray-500 dark:text-white/50 mt-2">
              创建话题，与社区成员交流
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-sm 
                          border border-black/5 dark:border-white/10 text-center">
            <FaGithub className="text-3xl mx-auto mb-3 text-violet-500" />
            <h3 className="font-semibold text-gray-800 dark:text-white">GitHub 登录</h3>
            <p className="text-sm text-gray-500 dark:text-white/50 mt-2">
              使用 GitHub 账号登录，无需注册
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-sm 
                          border border-black/5 dark:border-white/10 text-center">
            <FaSearch className="text-3xl mx-auto mb-3 text-pink-500" />
            <h3 className="font-semibold text-gray-800 dark:text-white">历史记录</h3>
            <p className="text-sm text-gray-500 dark:text-white/50 mt-2">
              话题永久保存，随时查阅
            </p>
          </div>
        </div>

        {/* Giscus 论坛区域 */}
        <div className="rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-sm 
                        border border-black/5 dark:border-white/10 overflow-hidden">
          {/* 顶部栏 */}
          <div className="px-6 py-4 border-b border-black/5 dark:border-white/10 
                          flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaGithub className="text-xl text-gray-700 dark:text-white" />
              <span className="font-semibold text-gray-800 dark:text-white">{repo || "mincHR549/snowymc-website"}</span>
            </div>
            <a
              href={`https://github.com/${repo || "mincHR549/snowymc-website"}/discussions`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-500 hover:text-cyan-400 transition-colors"
            >
              在 GitHub 上查看 →
            </a>
          </div>

          {/* Giscus 嵌入 */}
          <div className="giscus p-6" id="giscus-container">
            {/* Giscus 会在这里加载 */}
            <div className="text-center py-12 text-gray-500 dark:text-white/50">
              <div className="animate-pulse">
                <FaComments className="text-5xl mx-auto mb-4 text-gray-300 dark:text-white/20" />
                <p>正在加载论坛...</p>
              </div>
            </div>
          </div>
        </div>

        {/* 配置说明 */}
        <div className="mt-8 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20">
          <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">
            💡 如何配置论坛
          </h3>
          <ol className="text-sm text-gray-600 dark:text-white/70 space-y-1 list-decimal list-inside">
            <li>打开 <a href="https://giscus.app" target="_blank" className="text-cyan-500 hover:underline">giscus.app</a> 官网</li>
            <li>输入仓库：<code className="bg-black/10 px-1 rounded">mincHR549/snowymc-website</code></li>
            <li>选择分类（需要先在 GitHub 创建 Discussions 分类）</li>
            <li>复制生成的 <code className="bg-black/10 px-1 rounded">data-repo-id</code> 和 <code className="bg-black/10 px-1 rounded">data-category-id</code></li>
            <li>在 GitHub 仓库设置中启用 Discussions 功能</li>
          </ol>
        </div>

        {/* 底部留白 */}
        <div className="h-20" />
      </main>
    </div>
  );
}
