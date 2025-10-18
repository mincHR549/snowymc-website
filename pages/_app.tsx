// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import Background from "../components/Background";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.pathname}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.98 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* 全局容器 */}
          <div className="relative min-h-screen overflow-hidden text-black dark:text-white">
            {/* 全局动态渐变 + 光晕背景 */}
            <Background />

            {/* 页面内容 */}
            <Component {...pageProps} />
          </div>
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
