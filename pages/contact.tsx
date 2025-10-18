import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaQq, FaDiscord, FaForumbee, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen relative">
      <Navbar />

      <main className="max-w-4xl mx-auto pt-32 px-6 text-center">
        {/* 标题 */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-gray-800 dark:text-white drop-shadow-sm"
        >
          联系我们
        </motion.h2>

        {/* 简介 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10 text-gray-700 dark:text-white/80"
        >
          欢迎加入 SnowyMC 社区！你可以通过以下方式找到我们：
        </motion.p>

        {/* 按钮组 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {[
            {
              href: "https://qm.qq.com/q/wVbC2R3SsE",
              label: "加入QQ群",
              icon: <FaQq className="text-2xl text-blue-500" />,
            },
            {
              href: "https://forum.snowymc.com",
              label: "访问论坛",
              icon: <FaForumbee className="text-2xl text-yellow-500" />,
            },
            {
              href: "https://github.com/SnowyMCT",
              label: "GitHub",
              icon: <FaGithub className="text-2xl" />,
            },
            // 如果需要 Discord，取消注释
            // {
            //   href: "https://discord.gg/xxxx",
            //   label: "加入 Discord",
            //   icon: <FaDiscord className="text-2xl text-indigo-500" />,
            // },
          ].map((btn, i) => (
            <motion.a
              key={i}
              href={btn.href}
              target="_blank"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl
                         backdrop-blur-xl bg-white/90 dark:bg-black/40
                         border border-black/10 dark:border-white/20
                         text-gray-800 dark:text-white font-medium
                         transition"
            >
              {btn.icon}
              <span>{btn.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* 额外介绍 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 backdrop-blur-xl bg-white/90 dark:bg-black/40 
                     p-6 rounded-2xl border border-black/10 dark:border-white/20 shadow-md"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            我们的社区
          </h3>
          <p className="text-gray-700 dark:text-white/80">
            SnowyMC 致力于打造一个开放、友好的 Minecraft 创作社区。  
            无论你是开发者、美术师还是玩家，都能在这里找到归属感。
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
