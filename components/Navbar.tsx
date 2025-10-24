"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { MotionDiv, MotionNav, MotionSpan } from "./motion-safe";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [supportsBlur, setSupportsBlur] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setSupportsBlur(CSS.supports("backdrop-filter", "blur(4px)"));
  }, []);

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
      animate={{
        y: 0,
        opacity: 1,
        scale: scrolled ? 0.98 : 1,
        boxShadow: scrolled
          ? "0 4px 30px rgba(0,0,0,0.15)"
          : "0 2px 10px rgba(0,0,0,0.05)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div
        className={`relative mx-auto max-w-6xl rounded-2xl mt-3 overflow-hidden border transition-all duration-300 ${
          supportsBlur ? "backdrop-blur-sm" : ""
        } ${
          scrolled
            ? "bg-white/60 dark:bg-black/40 border-white/20 dark:border-white/10"
            : "bg-white/30 dark:bg-black/30 border-white/10 dark:border-white/10"
        }`}
        style={{
          willChange: "transform, opacity, filter",
          transform: "translate3d(0,0,0)",
        }}
      >
        {/* ✨ 背景光效层 */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <MotionDiv
            animate={{
              x: [0, 20, 0],
              y: [0, -10, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-8 -left-10 w-40 h-40 rounded-full bg-cyan-400/15 blur-3xl"
          ></MotionDiv>

          <MotionDiv
            animate={{
              x: [0, -15, 0],
              y: [0, 10, 0],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 right-0 w-52 h-52 rounded-full bg-violet-400/15 blur-3xl"
          ></MotionDiv>
        </MotionDiv>

        {/* 🌟 内容层 */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex items-center justify-between px-6 py-3 relative"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight text-black dark:text-white hover:scale-105 transition-transform"
          >
            <Image
              src="/8.svg"
              alt="SnowyMC Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span>SnowyMC</span>
          </Link>

          {/* 桌面导航 */}
          <div className="hidden md:flex items-center gap-6 relative">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium group transition-all duration-200 ${
                    isActive
                      ? "text-cyan-500 dark:text-cyan-400"
                      : "text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
                  }`}
                >
                  <span className="group-hover:-translate-y-[2px] transition-transform duration-200 inline-block">
                    {link.label}
                  </span>

                  {/* 🌈 动态彩色横栏 */}
                  {isActive && (
                    <MotionSpan
                      layoutId="nav-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="absolute left-0 -bottom-1 w-full h-[2px] rounded bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400"
                    ></MotionSpan>
                  )}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>

          {/* 移动菜单按钮 */}
          <button
            className="md:hidden text-2xl text-black dark:text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </MotionDiv>
      </div>

      {/* 📱 移动端菜单 */}
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
              className={`relative rounded-2xl overflow-hidden border ${
                supportsBlur ? "backdrop-blur-sm" : ""
              } bg-white/70 dark:bg-black/60 border-white/20 dark:border-white/10 shadow-md`}
            >
              <MotionDiv
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      staggerChildren: 0.07,
                      delayChildren: 0.1,
                    },
                  },
                }}
                className="flex flex-col gap-4 p-6"
              >
                {navLinks.map((link) => {
                  const isActive = router.pathname === link.href;
                  return (
                    <MotionDiv
                      key={link.href}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 },
                      }}
                    >
                      <Link
                        href={link.href}
                        className={`relative text-base transition ${
                          isActive
                            ? "text-cyan-500 dark:text-cyan-400 font-semibold"
                            : "text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </MotionDiv>
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
