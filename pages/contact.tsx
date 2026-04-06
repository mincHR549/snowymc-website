// pages/contact.tsx
"use client";

import Head from "next/head";
import { FaGithub, FaQq, FaDiscord, FaForumbee } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen relative">
      <Head>
        <title>联系我们 - SnowyMC</title>
        <meta name="description" content="加入 SnowyMC 社区" />
      </Head>

      <main className="relative max-w-3xl mx-auto pt-32 px-6 pb-20 text-center">
        {/* 标题 */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              联系我们
            </span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-white/60">
            有问题或建议？期待与你的交流！
          </p>
        </div>

        {/* 联系方式卡片 */}
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: <FaQq className="text-2xl" />,
              title: "QQ 群",
              desc: "加入社区讨论",
              href: "https://qm.qq.com/q/wVbC2R3SsE",
              color: "hover:text-blue-500",
              bg: "bg-blue-500/10 border-blue-500/20"
            },
            {
              icon: <FaForumbee className="text-2xl" />,
              title: "论坛",
              desc: "访问我们的论坛",
              href: "https://forum.snowymc.com",
              color: "hover:text-yellow-500",
              bg: "bg-yellow-500/10 border-yellow-500/20"
            },
            {
              icon: <FaGithub className="text-2xl" />,
              title: "GitHub",
              desc: "查看开源项目",
              href: "https://github.com/SnowyMCT",
              color: "hover:text-white",
              bg: "bg-white/5 border-white/20"
            },
            {
              icon: <FaDiscord className="text-2xl" />,
              title: "Discord",
              desc: "加入 Discord 服务器",
              href: "#",
              color: "hover:text-indigo-500",
              bg: "bg-indigo-500/10 border-indigo-500/20"
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-6 rounded-2xl ${item.bg}
                         border backdrop-blur-sm
                         hover:scale-105 transition-all duration-300 hover:shadow-lg group`}
            >
              <div className={`text-gray-600 dark:text-white/80 ${item.color} transition-colors mb-2`}>
                {item.icon}
              </div>
              <div className="font-semibold text-gray-800 dark:text-white">{item.title}</div>
              <div className="text-sm text-gray-500 dark:text-white/50 mt-1">{item.desc}</div>
            </a>
          ))}
        </div>

        <div className="h-20" />
      </main>
    </div>
  );
}
