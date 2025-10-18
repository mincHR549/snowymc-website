import { FaGithub, FaQq } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="mt-24 pb-10">
      <div className="mx-auto max-w-6xl px-6 py-8 rounded-2xl
                      backdrop-blur-xl bg-white/60 border border-black/10
                      dark:bg-black/30 dark:border-white/20 text-center">
        
        {/* 品牌标语 */}
        <p className="text-gray-800 dark:text-white font-semibold mb-4">
          SnowyMC — 技术与美学的交汇
        </p>

        {/* 社交按钮 */}
        <div className="flex justify-center gap-6 text-2xl mb-4">
          <a href="https://github.com/SnowyMCT" target="_blank" className="hover:text-gray-900 dark:hover:text-white">
            <FaGithub />
          </a>
          <a href="https://qm.qq.com/q/wVbC2R3SsE" target="_blank" className="hover:text-blue-500">
            <FaQq />
          </a>
        </div>

        {/* 版权信息 */}
        <p className="text-sm text-gray-600 dark:text-white/60">
          © {new Date().getFullYear()} SnowyMC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
