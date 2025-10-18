import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative min-h-screen bg-white text-black"
      >
        {/* 背景层：纯白底 + 彩色弥散光 */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-20 w-[40vmax] h-[40vmax] bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-[35vmax] h-[35vmax] bg-cyan-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-[30vmax] h-[30vmax] bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        </div>

        {/* 页面内容 */}
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
