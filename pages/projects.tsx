import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const projects = [
  {
    title: "KBBSToper",
    desc: "高版本 顶贴 插件，支持多版本适配",
    tags: ["Spigot/Paper", "NMS 适配", "模块化"],
    link: "https://klpbbs.com/thread-125838-1-1.html",
  },
  {
    title: "NewWorld-Online",
    desc: "全新 RPG 服务器包",
    tags: ["RPG", "可视化", "数据驱动"],
    link: "#",
  },
//   {
//     title: "SnowyAssets",
//     desc: "标准化像素美术资源库：角色立绘、Logo、UI、表情差分。",
//     tags: ["像素风", "标准化", "多场景适配"],
//     link: "#",
//   },
];

const container = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 } 
  },
};
const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95, rotate: -2 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    rotate: 0, 
    transition: { type: "spring", stiffness: 120, damping: 15 } 
  },
};

export default function Projects() {
  return (
    <div className="min-h-screen relative">
      <Navbar />

      <main className="max-w-6xl mx-auto pt-32 px-6">
        {/* 标题 */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-gray-800 dark:text-white drop-shadow-sm"
        >
          项目展示
        </motion.h2>

        {/* 简介 */}
        <motion.p
          className="mb-8 backdrop-blur-xl bg-white/90 dark:bg-black/40 
                     px-6 py-6 rounded-2xl border border-black/10 dark:border-white/20
                     text-gray-700 dark:text-white/80 shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          展示 SnowyMC 的核心项目与资源，强调性能、适配与美学统一。
        </motion.p>

        {/* 项目卡片 */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              whileHover={{ scale: 1.05, y: -5, rotate: 1, boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }}
              className="group backdrop-blur-xl bg-white/90 dark:bg-black/40 
                         p-6 rounded-2xl border border-black/10 dark:border-white/20 
                         hover:shadow-xl transition relative overflow-hidden"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-white/80">
                {p.desc}
              </p>

              {/* 标签 */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full 
                               backdrop-blur-md bg-white/40 dark:bg-white/20
                               text-gray-800 dark:text-white/80
                               border border-black/10 dark:border-white/20
                               transition hover:bg-white/60 dark:hover:bg-white/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* 链接 */}
              <a
                href={p.link}
                className="mt-5 inline-block text-sm font-medium relative
                           text-gray-800 dark:text-white
                           before:absolute before:inset-0 before:rounded-md
                           before:p-[1px] before:bg-gradient-to-r before:from-cyan-400 before:to-pink-400
                           before:opacity-0 hover:before:opacity-100
                           before:transition before:duration-300
                           before:-z-10 px-3 py-1 rounded-md"
              >
                了解更多
              </a>

              {/* 底部渐变条 */}
              <div className="mt-4 h-1 w-0 group-hover:w-full transition-all 
                              bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300
                              dark:from-cyan-400 dark:via-violet-400 dark:to-pink-400 rounded"></div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
