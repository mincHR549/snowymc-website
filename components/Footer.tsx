"use client";

import { FaGithub, FaQq } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-24 pb-10 relative">
      <div className="mx-auto max-w-6xl px-6 py-8 rounded-2xl
                      backdrop-blur-xl bg-white/60 border border-black/10
                      dark:bg-black/30 dark:border-white/20 text-center">
        
        {/* 快速链接 */}
        <div className="flex justify-center gap-6 text-sm mb-6 flex-wrap">
          {[
            { href: "/", label: "首页" },
            { href: "/about", label: "关于" },
            { href: "/projects", label: "项目" },
            { href: "/gallery", label: "美术" },
            { href: "/forum", label: "论坛" },
            { href: "/docs", label: "文档" },
            { href: "/contact", label: "联系" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 dark:text-white/60 hover:text-cyan-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* 渐变分隔线 */}
        <div className="mx-auto my-4 h-[2px] w-32 rounded-full 
                        bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400" />

        {/* 社交按钮 */}
        <div className="flex justify-center gap-4 sm:gap-6 text-2xl mb-4">
          <a
            href="https://github.com/SnowyMCT"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
          <a
            href="https://qm.qq.com/q/wVbC2R3SsE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 hover:scale-110 transition-transform"
          >
            <FaQq />
          </a>
        </div>

        {/* 版权信息 */}
        <p className="text-sm text-gray-600 dark:text-white/60">
          © {new Date().getFullYear()} SnowyMC. All rights reserved.
        </p>
      </div>

      {/* 返回顶部按钮 */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full
                     bg-white/80 dark:bg-black/60
                     border border-black/10 dark:border-white/20
                     shadow-lg backdrop-blur-xl
                     hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]
                     transition-all"
          aria-label="返回顶部"
        >
          <FaArrowUp className="text-cyan-500 dark:text-cyan-400" />
        </button>
      )}
    </footer>
  );
}
