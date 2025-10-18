import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const items = [
  { title: "角色立绘 #01", type: "立绘" },
  { title: "Logo 设计 #NewWorld", type: "Logo" },
  { title: "表情差分 #Hero", type: "表情包" },
  { title: "UI 图标套件 #RPG", type: "UI" },
  { title: "像素角色贴图 #80x80", type: "贴图" },
  { title: "Banner 海报 #Diffuse", type: "海报" },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
const itemVariants = { hidden: { opacity: 0, scale: 0.9, y: 30 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#26c6da] via-[#009688] to-[#2ecc71] text-white">
      <Navbar />
      <main className="max-w-6xl mx-auto pt-32 px-6">
        <motion.h2 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl font-bold mb-6">
          美术资源
        </motion.h2>

        <motion.p initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="mb-8 backdrop-blur-xl bg-white/10 p-6 rounded-2xl">
          展示标准化的像素风格创作：支持透明背景、符号预留、风格统一与实际应用场景适配。
        </motion.p>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20"
            >
              <div className="aspect-[4/3] flex items-center justify-center text-xl font-semibold">
                {it.title}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/40 to-transparent">
                <div className="text-sm opacity-90">{it.type}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
