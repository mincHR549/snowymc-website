"use client";

import { FaGithub, FaQq } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
        
        {/* 品牌标语 */}
        <p className="text-gray-800 dark:text-white font-semibold mb-4">
          SnowyMC — 技术与美学的交汇
        </p>

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

      {/* 返回顶部按钮（带动画） */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full
                       bg-white/80 dark:bg-black/60
                       border border-black/10 dark:border-white/20
                       shadow-lg backdrop-blur-xl
                       hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]
                       transition-transform"
            aria-label="返回顶部"
          >
            <FaArrowUp className="text-cyan-500 dark:text-cyan-400" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
