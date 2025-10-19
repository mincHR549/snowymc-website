"use client";

import { FaGithub, FaQq } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import React from "react";

// ✅ 封装 MotionButton
type MotionButtonProps = MotionProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
const MotionButton: React.FC<MotionButtonProps> = (props) => <motion.button {...props} />;

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
      {/* ... 省略上半部分 Footer 内容 ... */}

      {/* 返回顶部按钮（带动画） */}
      <AnimatePresence>
        {showTop && (
          <MotionButton
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
          </MotionButton>
        )}
      </AnimatePresence>
    </footer>
  );
}
