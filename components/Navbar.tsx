"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { MotionDiv, MotionNav } from "./motion-safe"; // ✅ 使用你的 motion-safe 封装

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "关于" },
    { href: "/projects", label: "项目" },
    { href: "/gallery", label: "美术" },
    { href: "/contact", label: "联系" },
    { href: "/docs", label: "文档" },
  ];

  return (
    <MotionNav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* 外层容器：背景层常驻，内容层淡入 */}
      <div
        className={`relative mx-auto max-w-6xl rounded-2xl mt-3 overflow-hidden border
                    transition-all duration-300 backdrop-blur-2xl
                    ${
                      scrolled
                        ? "bg-white/28 dark:bg-black/28 border-white/35 dark:border-white/12 shadow-[0_10px_30px_rgba(0,0,0,0.20)]"
                        : "bg-gradient-to-r from-white/18 via-white/10 to-white/18 dark:from-black/22 dark:via-black/14 dark:to-black/22 border-white/28 dark:border-white/12 shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
                    }`}
      >
        {/* 背景层：超级细微的流动光晕 */}
        <MotionDiv aria-hidden className="pointer-events-none absolute inset-0">
          <MotionDiv
            initial={{ x: -20, y: -10, opacity: 0.2 }}
            animate={{
              x: [-20, 5, -15, -20],
              y: [-10, -6, -12, -10],
              opacity: [0.18, 0.22, 0.2, 0.18],
            }}
            transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
            className="absolute -top-10 -left-16 w-56 h-56 rounded-full
                       bg-gradient-to-tr from-cyan-400/10 via-violet-400/10 to-pink-400/10 blur-2xl"
          />
          <MotionDiv
            initial={{ x: 10, y: 8, opacity: 0.18 }}
            animate={{
              x: [10, -6, 12, 10],
              y: [8, 14, 6, 8],
              opacity: [0.16, 0.2, 0.18, 0.16],
            }}
            transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
            className="absolute -bottom-14 -right-20 w-64 h-64 rounded-full
                       bg-gradient-to-tr from-pink-400/10 via-violet-400/10 to-cyan-400/10 blur-2xl"
          />
          {/* 轻薄渐变膜层（极轻） */}
          <MotionDiv
            initial={{ opacity: 0.06 }}
            animate={{ opacity: [0.05, 0.07, 0.06, 0.05] }}
            transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
            className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_20%,rgba(255,255,255,0.06),transparent_60%)]
                       dark:bg-[radial-gradient(1200px_600px_at_20%_20%,rgba(255,255,255,0.04),transparent_60%)]"
          />
        </MotionDiv>

        {/* 内容层：淡入，保持毛玻璃一直可见 */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex items-center justify-between px-6 py-3 relative"
        >
          {/* Logo + 品牌名 */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight text-black dark:text-white hover:scale-105 transition-transform"
          >
            <Image src="/8.svg" alt="SnowyMC Logo" width={32} height={32} className="w-8 h-8" />
            <span>SnowyMC</span>
          </Link>

          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center gap-6 relative">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm transition ${
                    isActive
                      ? "text-cyan-500 dark:text-cyan-400 font-semibold"
                      : "text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] rounded bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400"></span>
                  )}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>

          {/* 移动端汉堡按钮 */}
          <button
            className="md:hidden text-2xl text-black dark:text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </MotionDiv>
      </div>

      {/* 移动端菜单：AnimatePresence + 背景层常驻 + 内容层淡入淡出 */}
      <AnimatePresence>
        {menuOpen && (
          <MotionDiv
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden absolute top-[70px] left-0 w-full px-6"
          >
            <div
              className="relative rounded-2xl overflow-hidden border
                         backdrop-blur-2xl bg-gradient-to-br from-white/18 via-white/10 to-white/18
                         dark:from-black/24 dark:via-black/16 dark:to-black/24
                         border-white/26 dark:border-white/12 shadow-[0_10px_28px_rgba(0,0,0,0.22)]"
            >
              <MotionDiv aria-hidden className="pointer-events-none absolute inset-0">
                <MotionDiv
                  initial={{ x: -8, y: -6, opacity: 0.18 }}
                  animate={{
                    x: [-8, 4, -6, -8],
                    y: [-6, -2, -8, -6],
                    opacity: [0.16, 0.2, 0.18, 0.16],
                  }}
                  transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
                  className="absolute -top-10 -left-14 w-48 h-48 rounded-full
                             bg-gradient-to-tr from-cyan-400/10 via-violet-400/10 to-pink-400/10 blur-xl"
                />
                <MotionDiv
                  initial={{ x: 6, y: 8, opacity: 0.16 }}
                  animate={{
                    x: [6, -4, 8, 6],
                    y: [8, 10, 6, 8],
                    opacity: [0.14, 0.18, 0.16, 0.14],
                  }}
                  transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
                  className="absolute -bottom-12 -right-16 w-52 h-52 rounded-full
                             bg-gradient-to-tr from-pink-400/10 via-violet-400/10 to-cyan-400/10 blur-xl"
                />
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex flex-col gap-4 p-6"
              >
                {navLinks.map((link) => {
                  const isActive = router.pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative text-base transition ${
                        isActive
                          ? "text-cyan-500 dark:text-cyan-400 font-semibold"
                          : "text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] rounded bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400"></span>
                      )}
                    </Link>
                  );
                })}
                <ThemeToggle />
              </MotionDiv>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </MotionNav>
  );
}
