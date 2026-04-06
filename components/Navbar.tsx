"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "首页", icon: "🏠" },
    { href: "/about", label: "关于", icon: "👥" },
    { href: "/projects", label: "项目", icon: "📦" },
    { href: "/gallery", label: "美术", icon: "🎨" },
    { href: "/docs", label: "文档", icon: "📚" },
    { href: "/contact", label: "联系", icon: "📧" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-6xl px-4 pt-3">
        <div className="relative rounded-2xl overflow-hidden
                        bg-white/80 dark:bg-black/60 backdrop-blur-md
                        border border-black/5 dark:border-white/10
                        shadow-lg">
          <div className="flex items-center justify-between px-5 py-3">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-bold tracking-tight text-black dark:text-white hover:scale-105 transition-transform"
            >
              <Image
                src="/favicon.svg"
                alt="SnowyMC Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span>SnowyMC</span>
            </Link>

            {/* 桌面导航 */}
            <div className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => {
                const isActive = router.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm transition-all ${
                      isActive
                        ? "text-cyan-500 dark:text-cyan-400 font-semibold"
                        : "text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
                    }`}
                  >

                    <span className="relative">{link.label}</span>
                    {isActive && (
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] rounded bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400" />
                    )}
                  </Link>
                );
              })}
              <ThemeToggle />
            </div>

            {/* 移动端菜单按钮 */}
            <button
              className="lg:hidden text-xl text-black dark:text-white"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* 移动端菜单 - 论坛高亮显示 */}
        {menuOpen && (
          <div className="lg:hidden mt-2 mx-2">
            <div className="rounded-2xl overflow-hidden
                            bg-white/90 dark:bg-black/80 backdrop-blur-md
                            border border-black/5 dark:border-white/10
                            shadow-lg max-h-[70vh] overflow-y-auto">
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => {
                  const isActive = router.pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base transition-all ${
                        isActive
                          ? "text-cyan-500 dark:text-cyan-400 font-semibold bg-cyan-500/10"
                          : "text-black/80 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/5"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>{link.icon}</span>
                      <span>{link.label}</span>

                    </Link>
                  );
                })}
                <div className="pt-3 mt-2 border-t border-black/10 dark:border-white/10">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
