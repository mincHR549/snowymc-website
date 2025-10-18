import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4fc3f7] via-[#7c4dff] to-[#ff6ec7] text-white">
      <Navbar />
      <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
        <div className="absolute -z-10 inset-0 overflow-hidden">
          <div className="blur-3xl opacity-30 bg-gradient-to-tr from-cyan-300 via-fuchsia-300 to-rose-300 w-[60vmax] h-[60vmax] rounded-full absolute -top-24 -left-24"></div>
          <div className="blur-3xl opacity-25 bg-gradient-to-tr from-indigo-300 via-sky-300 to-pink-300 w-[50vmax] h-[50vmax] rounded-full absolute bottom-0 right-0"></div>
        </div>

        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-24 text-6xl md:text-7xl font-extrabold drop-shadow-lg tracking-tight"
        >
          SnowyMC
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 text-xl md:text-2xl max-w-2xl backdrop-blur-xl bg-white/10 px-6 py-4 rounded-2xl"
        >
          专注于 Minecraft 插件开发与像素美术创作，用技术与美学打造独特的游戏体验。
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {["查看项目", "美术资源", "加入我们"].map((label, i) => (
            <motion.a
              key={i}
              href={i === 0 ? "/projects" : i === 1 ? "/gallery" : "/join"}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="px-6 py-3 rounded-xl bg-white/20 hover:bg-white/30 transition"
            >
              {label}
            </motion.a>
          ))}
        </motion.div>

        <section className="mt-16 grid w-full max-w-6xl grid-cols-1 md:grid-cols-3 gap-6 px-2">
          {[
            { title: "插件框架", desc: "高性能、可扩展的 Minecraft 插件基础框架。" },
            { title: "RPG 系统", desc: "任务、技能与装备的完整生态系统。" },
            { title: "像素美术库", desc: "标准化角色立绘、Logo 与表情差分资源。" },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm opacity-90">{item.desc}</p>
              <div className="mt-4 h-1 w-0 group-hover:w-full transition-all bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 rounded"></div>
            </motion.div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
