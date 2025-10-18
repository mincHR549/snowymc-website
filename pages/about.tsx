import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, type: "spring", stiffness: 120, damping: 15 } 
  },
};
const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95, rotate: -2 },
  visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 120, damping: 15 } },
};

export default function About() {
  return (
    <div className="min-h-screen relative">
      <Navbar />

      <main className="max-w-6xl mx-auto pt-32 px-6">
        {/* 标题 */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-gray-800 dark:text-white drop-shadow-sm"
        >
          关于 SnowyMC
        </motion.h2>

        {/* 简介段落 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="backdrop-blur-xl bg-white/90 dark:bg-black/40 
                     px-6 py-6 rounded-2xl border border-black/10 dark:border-white/20
                     text-gray-700 dark:text-white/80 shadow-md"
        >
          SnowyMC 是一个聚焦 Minecraft 生态的创作团队。我们在高性能插件与像素风格美术上深耕，
          追求工程化与美学统一：以标准化、可扩展、兼容适配为原则，打造稳定而富有创意的作品。
        </motion.p>

        {/* 愿景与理念 */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-white"
        >
          愿景与理念
        </motion.h3>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-4"
        >
          {[
            "技术：高性能、结构化架构",
            "美术：统一风格与细节还原",
            "协作：开放共享，偏好宽松协议",
          ].map((text, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }}
              className="backdrop-blur-xl bg-white/90 dark:bg-black/40 
                         p-5 rounded-2xl border border-black/10 dark:border-white/20
                         text-gray-700 dark:text-white/80 transition"
            >
              {text}
            </motion.div>
          ))}
        </motion.div>

        {/* 团队成员 */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-white"
        >
          团队成员
        </motion.h3>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { name: "小浩", role: "插件开发 | NMS 适配", avatar: "https://s21.ax1x.com/2025/10/19/pVLaUOS.jpg" },
            { name: "豆哥", role: "运维 | 硬件管理", avatar: "https://s21.ax1x.com/2025/10/19/pVLafw4.jpg" },
            { name: "伍行缺氧", role: "略懂汉化与建筑 | 对任何事物充满好奇", avatar: "https://s21.ax1x.com/2025/10/19/pVLaof1.jpg" },
            { name: "宏誓", role: "一个WF", avatar: "https://s21.ax1x.com/2025/10/19/pVLaDFs.jpg" },
            { name: "阿龙", role: "还得那边不是海", avatar: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
            { name: "谦演", role: "小插件开发｜服务端搭建", avatar: "https://s21.ax1x.com/2025/10/19/pVLaWmF.jpg" }
          ].map((m) => (
            <motion.div
              key={m.name}
              variants={item}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
              className="group backdrop-blur-xl bg-white/90 dark:bg-black/40 
                         p-6 rounded-2xl border border-black/10 dark:border-white/20
                         hover:shadow-lg transition"
            >
              {/* 头像 */}
              <div className="flex justify-center mb-4">
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="w-20 h-20 rounded-full border-2 border-transparent 
                             group-hover:border-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400
                             object-cover shadow-md transition"
                />
              </div>

              {/* 姓名与角色 */}
              <div className="text-xl font-semibold text-gray-800 dark:text-white text-center">
                {m.name}
              </div>
              <div className="mt-1 text-sm text-gray-700 dark:text-white/80 text-center">
                {m.role}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
