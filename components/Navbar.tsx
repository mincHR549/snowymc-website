import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const MotionNav = (props: HTMLMotionProps<"nav">) => <motion.nav {...props} />;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <Link
          href="/"
          className="font-semibold tracking-tight text-black dark:text-white"
        >
          SnowyMC
        </Link>

        <div className="flex items-center gap-5">
          <Link
            href="/about"
            className="text-sm text-black/80 hover:text-black transition dark:text-white/80 dark:hover:text-white"
          >
            关于
          </Link>
          <Link
            href="/projects"
            className="text-sm text-black/80 hover:text-black transition dark:text-white/80 dark:hover:text-white"
          >
            项目
          </Link>
          <Link
            href="/gallery"
            className="text-sm text-black/80 hover:text-black transition dark:text-white/80 dark:hover:text-white"
          >
            美术
          </Link>
          <Link
            href="/contact"
            className="text-sm text-black/80 hover:text-black transition dark:text-white/80 dark:hover:text-white"
          >
            联系
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </MotionNav>
  );
}
