// pages/docs/[slug].tsx
"use client";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { MotionDiv, MotionH1 } from "../../components/motion-safe";
import { docs, docCategories, getDocBySlug, getPrevNextDoc } from "../../data/docs";
import { FaArrowLeft, FaArrowRight, FaClock, FaUser, FaTag } from "react-icons/fa";

export default function DocPage() {
  const router = useRouter();
  const { slug } = router.query;
  
  if (!slug || typeof slug !== "string") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            加载中...
          </h1>
          <Link href="/docs" className="text-cyan-500 hover:underline">
            返回文档中心
          </Link>
        </div>
      </div>
    );
  }

  const doc = getDocBySlug(slug);
  
  if (!doc) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            文档未找到
          </h1>
          <Link href="/docs" className="text-cyan-500 hover:underline">
            返回文档中心
          </Link>
        </div>
      </div>
    );
  }

  const { prev, next } = getPrevNextDoc(slug);
  const category = docCategories.find(c => c.id === doc.category);

  // 简单的 Markdown 渲染
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactElement[] = [];
    let inCodeBlock = false;
    let codeContent: string[] = [];
    let codeLanguage = "";
    let listItems: string[] = [];
    let inList = false;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-1 my-4 text-gray-700 dark:text-white/80">
            {listItems.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        );
        listItems = [];
      }
      inList = false;
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // 代码块
      if (line.startsWith("```")) {
        if (!inCodeBlock) {
          flushList();
          inCodeBlock = true;
          codeLanguage = line.slice(3).trim();
          codeContent = [];
        } else {
          inCodeBlock = false;
          elements.push(
            <div key={`code-${elements.length}`} className="my-4 rounded-xl overflow-hidden">
              {codeLanguage && (
                <div className="bg-gray-800 text-gray-400 text-xs px-4 py-2">
                  {codeLanguage}
                </div>
              )}
              <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto text-sm font-mono">
                <code>{codeContent.join("\n")}</code>
              </pre>
            </div>
          );
        }
        continue;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        continue;
      }

      // 列表
      if (line.startsWith("- ")) {
        inList = true;
        listItems.push(line.slice(2));
        continue;
      } else if (inList && (line.trim() === "" || !line.startsWith(" "))) {
        flushList();
      }

      // 空行
      if (line.trim() === "") continue;

      // 标题
      if (line.startsWith("# ")) {
        flushList();
        elements.push(
          <h1 key={i} className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            {line.slice(2)}
          </h1>
        );
        continue;
      }
      if (line.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={i} className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">
            {line.slice(3)}
          </h2>
        );
        continue;
      }
      if (line.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={i} className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-2">
            {line.slice(4)}
          </h3>
        );
        continue;
      }

      // 粗体
      let processedLine = line.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      elements.push(
        <p 
          key={i} 
          className="text-gray-700 dark:text-white/80 leading-relaxed my-2"
          dangerouslySetInnerHTML={{ __html: processedLine }}
        />
      );
    }

    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Head>
        <title>{doc.title} - SnowyMC 文档</title>
        <meta name="description" content={doc.description} />
        <meta property="og:title" content={`${doc.title} - SnowyMC 文档`} />
        <meta property="og:description" content={doc.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.snowymc.top/docs/${slug}`} />
      </Head>

      <Navbar />

      {/* 背景光晕 */}
      <MotionDiv
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        aria-hidden="true"
        className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[900px] h-[900px]
                   rounded-full blur-3xl pointer-events-none
                   bg-gradient-to-tr from-cyan-400/12 via-violet-400/12 to-pink-400/12"
      />

      <main className="relative max-w-4xl mx-auto pt-28 px-6 pb-20">
        {/* 返回链接 */}
        <Link
          href="/docs"
          className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 
                     transition-colors mb-6 text-sm"
        >
          <FaArrowLeft />
          <span>返回文档中心</span>
        </Link>

        {/* 文章容器 */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-xl bg-white/90 dark:bg-black/40 
                     rounded-2xl border border-black/10 dark:border-white/15
                     shadow-xl overflow-hidden"
        >
          {/* 头部 */}
          <div className="p-8 border-b border-black/10 dark:border-white/10">
            {/* 分类 */}
            {category && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                             bg-gradient-to-r from-cyan-400/20 to-pink-400/20
                             text-sm text-cyan-600 dark:text-cyan-400 mb-4">
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </div>
            )}

            {/* 标题 */}
            <MotionH1
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
            >
              {doc.title}
            </MotionH1>

            {/* 描述 */}
            <p className="text-gray-600 dark:text-white/70 text-lg mb-4">
              {doc.description}
            </p>

            {/* 元信息 */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-white/60">
              <div className="flex items-center gap-1">
                <FaUser />
                <span>{doc.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaClock />
                <span>{doc.lastUpdated}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaTag />
                <span>{doc.tags.join(", ")}</span>
              </div>
            </div>
          </div>

          {/* 内容 */}
          <div className="p-8">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              {renderContent(doc.content)}
            </article>
          </div>

          {/* 底部导航 */}
          <div className="p-6 border-t border-black/10 dark:border-white/10 
                        bg-white/50 dark:bg-black/20">
            <div className="flex justify-between items-center gap-4">
              {prev ? (
                <Link
                  href={`/docs/${prev.slug}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg
                             bg-white/80 dark:bg-white/10 hover:bg-white/100 dark:hover:bg-white/20
                             transition-colors text-sm group"
                >
                  <FaArrowLeft className="text-cyan-400 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500 dark:text-white/60">上一篇</div>
                    <div className="text-gray-900 dark:text-white font-medium">{prev.title}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {next && (
                <Link
                  href={`/docs/${next.slug}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg
                             bg-white/80 dark:bg-white/10 hover:bg-white/100 dark:hover:bg-white/20
                             transition-colors text-sm group"
                >
                  <div className="text-right">
                    <div className="text-xs text-gray-500 dark:text-white/60">下一篇</div>
                    <div className="text-gray-900 dark:text-white font-medium">{next.title}</div>
                  </div>
                  <FaArrowRight className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        </MotionDiv>

        {/* 侧边栏占位 */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-white/60">
          完整功能开发中...
        </div>
      </main>

      <Footer />
    </div>
  );
}
