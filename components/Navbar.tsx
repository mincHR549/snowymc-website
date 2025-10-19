"use client";

import { motion, MotionProps } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/router";

// ✅ 封装 MotionNav
type MotionNavProps = MotionProps & React.HTMLAttributes<HTMLElement>;
const MotionNav: React.FC<MotionNavProps> = (props) => <motion.nav {...props} />;

// ✅ 封装 MotionDiv
type MotionDivProps = MotionProps & React.HTMLAttributes<HTMLDivElement>;
const MotionDiv: React.FC<MotionDivProps> = (props) => <motion.div {...props} />;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "关于" },
    { href: "/projects", label: "项目" },
    { href: "/gallery", label: "美术" },
    { href: "/contact", label: "联系" },
  ];

  return (
    <MotionNav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div
        className={`mx-auto max-w-6xl px-6 py-3 flex items-center justify-between
                    rounded-2xl mt-3 transition-all duration-300
                    backdrop-blur-xl border
                    ${
                      scrolled
                        ? "bg-white/80 dark:bg-black/50 border-black/20 dark:border-white/30 shadow-lg"
                        : "bg-white/60 dark:bg-black/30 border-black/10 dark:border-white/20"
                    }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold tracking-tight text-black dark:text-white hover:scale-105 transition-transform"
        >
          SnowyMC
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
                {/* 渐变下划线 */}
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
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* 移动端菜单 */}
      {menuOpen && (
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-[70px] left-0 w-full px-6"
        >
          <div className="flex flex-col gap-4 backdrop-blur-xl bg-white/90 dark:bg-black/60 rounded-2xl p-6 border border-black/10 dark:border-white/20 shadow-lg">
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
          </div>
        </MotionDiv>
      )}
    </MotionNav>
  );
}
