import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SnowyCore",
    desc: "高性能 Minecraft 插件核心框架，支持模块化加载与事件总线。",
    tags: ["Spigot/Paper", "NMS 适配", "模块化"],
    link: "#",
  },
  {
    title: "SnowyRPG",
    desc: "任务、技能、数值与装备的完整 RPG 系统，支持可视化配置。",
    tags: ["RPG", "可视化", "数据驱动"],
    link: "#",
  },
  {
    title: "SnowyAssets",
    desc: "标准化像素美术资源库：角色立绘、Logo、UI、表情差分。",
    tags: ["像素风", "标准化", "多场景适配"],
    link: "#",
  },
];

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7e57c2] via-[#ec407a] to-[#ef5350] text-white">
      <Navbar />
      <main className="max-w-6xl mx-auto pt-32 px-6">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl font-bold mb-6">
          项目展示
        </motion.h2>
        <motion.p className="mb-8 backdrop-blur-xl bg-white/10 p-6 rounded-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          展示 SnowyMC 的核心项目与资源，强调性能、适配与美学统一。
        </motion.p>
        <motion.div variants={container} initial="hidden" animate="visible" className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group backdrop-blur-xl bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition"
            >
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm opacity-90">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/20">{t}</span>
                ))}
              </div>
              <a href={p.link} className="mt-5 inline-block text-sm underline hover:opacity-80">
                了解更多
              </a>
              <div className="mt-4 h-1 w-0 group-hover:w-full transition-all bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 rounded"></div>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
