import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full backdrop-blur-xl bg-white/10 border-b border-white/20 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <img src="/snowy-logo.svg" alt="SnowyMC" className="h-8 w-8" />
          <span className="text-2xl font-bold text-white tracking-wide">SnowyMC</span>
        </Link>
        <div className="flex space-x-6 text-white font-medium">
          <Link href="/">首页</Link>
          <Link href="/about">团队介绍</Link>
          <Link href="/projects">项目展示</Link>
          <Link href="/gallery">美术资源</Link>
          <Link href="/join">加入我们</Link>
        </div>
      </div>
    </motion.nav>
  );
}
