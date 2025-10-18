import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const items = [
  { title: "角色立绘 #01", type: "立绘", image: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
  { title: "Logo 设计 #NewWorld", type: "Logo", image: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
  { title: "表情差分 #Hero", type: "表情包", image: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
  { title: "UI 图标套件 #RPG", type: "UI", image: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
  { title: "像素角色贴图 #80x80", type: "贴图", image: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
  { title: "Banner 海报 #Diffuse", type: "海报", image: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 } 
  },
};
const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

export default function Gallery() {
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
          美术资源
        </motion.h2>

        {/* 简介 */}
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 backdrop-blur-xl bg-white/90 dark:bg-black/40 
                     px-6 py-6 rounded-2xl border border-black/10 dark:border-white/20
                     text-gray-700 dark:text-white/80 shadow-md"
        >
          展示标准化的像素风格创作：支持透明背景、符号预留、风格统一与实际应用场景适配。
        </motion.p>

        {/* 资源卡片 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {items.map((it, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5, rotate: 1 }}
              className="group relative overflow-hidden rounded-2xl 
                         backdrop-blur-xl bg-white/90 dark:bg-black/40 
                         border border-black/10 dark:border-white/20 
                         hover:shadow-xl transition"
            >
              {/* 图片展示 */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={it.image}
                  alt={it.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* 底部信息条 */}
              <div className="absolute inset-x-0 bottom-0 p-4 
                              bg-gradient-to-t from-black/50 to-transparent">
                <div className="text-sm text-white/90">{it.type}</div>
              </div>

              {/* 渐变描边 hover 效果 */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none 
                              opacity-0 group-hover:opacity-100 transition
                              border-2 border-transparent 
                              group-hover:border-gradient-to-r 
                              group-hover:from-cyan-400 group-hover:to-pink-400" />
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
