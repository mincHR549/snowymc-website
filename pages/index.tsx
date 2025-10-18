// pages/index.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />

      <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
        
        {/* 渐变光晕背景 */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] 
                        bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 
                        opacity-30 blur-3xl rounded-full pointer-events-none" />

        {/* 标题 */}
        <motion.h1
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-24 text-6xl md:text-7xl font-extrabold tracking-tight 
                     bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 
                     bg-clip-text text-transparent drop-shadow-sm"
        >
          SnowyMC
        </motion.h1>

        {/* 打字机命令框 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 w-full max-w-xl mx-auto rounded-xl 
                     bg-black/80 text-green-400 font-mono text-left text-sm 
                     px-6 py-4 shadow-lg"
        >
          <span className="text-green-500">$ </span>
          <Typewriter
            words={[
              "java -jar SnowyCore.jar --start",
              "loading RPG modules...",
              "assets synced successfully!",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </motion.div>

        {/* 简介段落 */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 text-lg md:text-xl max-w-2xl
                     text-gray-700 dark:text-white/80
                     backdrop-blur-xl bg-white/90 dark:bg-black/40
                     px-6 py-4 rounded-2xl border border-black/10 dark:border-white/20"
        >
          专注于 Minecraft 插件开发与像素美术创作，用技术与美学打造独特的游戏体验。
        </motion.p>

        {/* 按钮组 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {[
            { label: "查看项目", href: "/projects" },
            { label: "美术资源", href: "/gallery" },
            { label: "加入我们", href: "/join" },
          ].map((btn, i) => (
            <motion.a
              key={i}
              href={btn.href}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-3 rounded-xl font-medium
                         text-gray-800 dark:text-white
                         border border-transparent
                         bg-white/80 dark:bg-black/30
                         transition
                         before:absolute before:inset-0 before:rounded-xl
                         before:p-[2px] before:bg-gradient-to-r before:from-cyan-400 before:to-pink-400
                         before:opacity-0 hover:before:opacity-100
                         before:transition before:duration-300
                         before:-z-10"
            >
              {btn.label}
            </motion.a>
          ))}
        </motion.div>

        {/* 卡片区块 */}
        <section className="mt-16 grid w-full max-w-6xl grid-cols-1 md:grid-cols-3 gap-6 px-2">
          {[
            { title: "插件框架", desc: "高性能、可扩展的 Minecraft 插件基础框架。" },
            { title: "RPG 系统", desc: "任务、技能与装备的完整生态系统。" },
            { title: "像素美术库", desc: "标准化角色立绘、Logo 与表情差分资源。" },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.95, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0 12px 30px rgba(0,0,0,0.2)"
              }}
              className="group rounded-2xl p-6 
                         backdrop-blur-xl bg-white/90 dark:bg-black/40
                         border border-black/10 dark:border-white/20
                         hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-white/80">{item.desc}</p>
              <div className="mt-4 h-1 w-0 group-hover:w-full transition-all
                              bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300
                              dark:from-cyan-400 dark:via-violet-400 dark:to-pink-400 rounded"></div>
            </motion.div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
