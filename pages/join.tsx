import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Join() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ff77aa] via-[#ff4d6d] to-[#ff9f43] text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto pt-32 px-6">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold mb-6">
          加入我们
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-6 backdrop-blur-xl bg-white/10 p-6 rounded-2xl">
          寻找热爱 Minecraft 与创作的伙伴：插件开发、美术设计、运营与文案。如果你注重标准化、兼容适配与美学统一，我们很合拍。
        </motion.p>

        <motion.form variants={container} initial="hidden" animate="visible" className="backdrop-blur-xl bg-white/10 p-6 rounded-2xl space-y-4 border border-white/20">
          <motion.div variants={item} className="grid md:grid-cols-2 gap-4">
            <input className="w-full px-4 py-3 rounded-xl bg-white/20 placeholder-white/80 focus:outline-none" placeholder="你的昵称" />
            <input className="w-full px-4 py-3 rounded-xl bg-white/20 placeholder-white/80 focus:outline-none" placeholder="邮箱或联系方式" />
          </motion.div>
          <motion.select variants={item} className="w-full px-4 py-3 rounded-xl bg-white/20 focus:outline-none">
            <option>意向角色（插件开发 / 美术 / 运营 / 其他）</option>
            <option>插件开发</option>
            <option>美术设计</option>
            <option>运营 / 文案</option>
            <option>其他</option>
          </motion.select>
          <motion.textarea variants={item} rows={5} className="w-full px-4 py-3 rounded-xl bg-white/20 placeholder-white/80 focus:outline-none" placeholder="你的经验、作品链接或加入动机"></motion.textarea>
          <motion.button variants={item} type="button" className="px-6 py-3 rounded-xl bg-white/20 hover:bg-white/30 transition">
            提交意向（演示按钮）
          </motion.button>
          <p className="text-xs opacity-80">当前为演示站点，按钮不提交数据。部署后可接入 API 或表单服务。</p>
        </motion.form>
      </main>
      <Footer />
    </div>
  );
}
