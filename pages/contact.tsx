// pages/contact.tsx
"use client";

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaQq, FaDiscord, FaForumbee, FaGithub } from "react-icons/fa";
import { MotionH2, MotionP, MotionDiv, MotionA } from "../components/motion-safe";

export default function Contact() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Head>
        <title>联系 SnowyMC - 社区与协作</title>
        <meta
          name="description"
          content="加入 SnowyMC 社区，通过 QQ 群、论坛与 GitHub 与我们联系与协作。"
        />
        <meta
          name="keywords"
          content="SnowyMC, Minecraft, 插件, 社区, 联系, QQ, 论坛, GitHub"
        />
        <meta property="og:title" content="联系 SnowyMC" />
        <meta
          property="og:description"
          content="通过 QQ、论坛与 GitHub 与 SnowyMC 团队建立联系。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.snowymc.top/contact" />
      </Head>

      <Navbar />

      {/* 背景光晕 */}
      <MotionDiv
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        aria-hidden="true"
        className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[720px] h-[720px]
                   rounded-full blur-3xl pointer-events-none
                   bg-gradient-to-tr from-cyan-400/18 via-violet-400/18 to-pink-400/18"
      />

      <main className="relative max-w-4xl mx-auto pt-32 px-6 text-center">
        {/* 标题 */}
        <MotionH2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          联系我们
        </MotionH2>

        {/* 简介 */}
        <MotionP
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 mb-10 text-gray-700 dark:text-white/80
                     backdrop-blur-xl bg-white/85 dark:bg-black/40
                     px-6 py-6 rounded-2xl border border-black/10 dark:border-white/15 shadow-sm"
        >
          欢迎加入 SnowyMC 社区！你可以通过以下方式找到我们：
        </MotionP>

        {/* 按钮组 */}
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.18 } },
          }}
          className="grid sm:grid-cols-2 gap-6"
          role="list"
          aria-label="联系方式列表"
        >
          {[
            {
              href: "https://qm.qq.com/q/wVbC2R3SsE",
              label: "加入QQ群",
              icon: <FaQq className="text-2xl text-blue-500" aria-hidden="true" />,
            },
            {
              href: "https://forum.snowymc.com",
              label: "访问论坛",
              icon: <FaForumbee className="text-2xl text-yellow-500" aria-hidden="true" />,
            },
            {
              href: "https://github.com/SnowyMCT",
              label: "GitHub",
              icon: <FaGithub className="text-2xl" aria-hidden="true" />,
            },
          ].map((btn, i) => (
            <MotionA
              key={i}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 28px rgba(34,211,238,0.20)",
              }}
              whileTap={{ scale: 0.96 }}
              className="group relative flex items-center justify-center gap-3 px-6 py-4 rounded-xl
                         backdrop-blur-xl bg-white/90 dark:bg-black/40
                         text-gray-800 dark:text-white font-medium
                         border border-transparent transition
                         before:absolute before:inset-0 before:rounded-xl
                         before:p-[2px] before:bg-gradient-to-r
                         before:from-cyan-400 before:via-violet-400 before:to-pink-400
                         before:opacity-0 group-hover:before:opacity-100
                         before:transition before:duration-500 before:-z-10
                         shadow-md hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
              role="listitem"
              aria-label={btn.label}
            >
              {btn.icon}
              <span className="relative z-[1]">{btn.label}</span>
            </MotionA>
          ))}
        </MotionDiv>

      </main>

      <Footer />
    </div>
  );
        }
