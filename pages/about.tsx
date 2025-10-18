import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3f51b5] via-[#2196f3] to-[#26c6da] text-white">
      <Navbar />
      <main className="max-w-6xl mx-auto pt-32 px-6">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          关于 SnowyMC
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="backdrop-blur-xl bg-white/10 p-6 rounded-2xl"
        >
          SnowyMC 是一个聚焦 Minecraft 生态的创作团队。我们在高性能插件与像素风格美术上深耕，
          追求工程化与美学统一：以标准化、可扩展、兼容适配为原则，打造稳定而富有创意的作品。
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-semibold mt-10 mb-4"
        >
          愿景与理念
        </motion.h3>

        <motion.div variants={container} initial="hidden" animate="visible" className="grid md:grid-cols-3 gap-4">
          {["技术：高性能、结构化架构", "美术：统一风格与细节还原", "协作：开放共享，偏好宽松协议"].map((text, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="backdrop-blur-xl bg-white/10 p-5 rounded-2xl border border-white/20"
            >
              {text}
            </motion.div>
          ))}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-semibold mt-10 mb-4"
        >
          团队成员
        </motion.h3>

        <motion.div variants={container} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "开发者 A", role: "插件开发 / NMS 适配" },
            { name: "美术 B", role: "像素立绘 / Logo / UI" },
            { name: "运维 C", role: "服务器与部署" },
          ].map((m) => (
            <motion.div
              key={m.name}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="backdrop-blur-xl bg-white/10 p-6 rounded-2xl border border-white/20"
            >
              <div className="text-xl font-semibold">{m.name}</div>
              <div className="mt-1 text-sm opacity-90">{m.role}</div>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
