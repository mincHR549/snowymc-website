// components/Navbar.tsx
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div
        className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between
                   backdrop-blur-xl bg-white/60 border border-black/10 rounded-2xl mt-3
                   dark:bg-black/30 dark:border-white/20"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold tracking-tight text-black dark:text-white"
        >
          SnowyMC
        </Link>

        {/* 导航按钮 */}
        <div className="flex items-center gap-5">
          <Link
            href="/about"
            className="text-sm text-black/80 hover:text-black transition
                       dark:text-white/80 dark:hover:text-white"
          >
            关于
          </Link>
          <Link
            href="/projects"
            className="text-sm text-black/80 hover:text-black transition
                       dark:text-white/80 dark:hover:text-white"
          >
            项目
          </Link>
          <Link
            href="/gallery"
            className="text-sm text-black/80 hover:text-black transition
                       dark:text-white/80 dark:hover:text-white"
          >
            美术
          </Link>
          {/* <Link
            href="/join"
            className="text-sm text-black/80 hover:text-black transition
                       dark:text-white/80 dark:hover:text-white"
          >
            加入
          </Link> */}
          <Link
            href="/contact"
            className="text-sm text-black/80 hover:text-black transition
                       dark:text-white/80 dark:hover:text-white"
          >
            联系
          </Link>
          {/* <Link
            href="/blog"
            className="text-sm text-black/80 hover:text-black transition
                       dark:text-white/80 dark:hover:text-white"
          >
            博客
          </Link> */}

          {/* 主题切换按钮 */}
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
