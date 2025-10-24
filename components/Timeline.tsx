"use client";

import { MotionDiv } from "./motion-safe"; // ✅ 使用安全封装

const events = [
  { year: "2022年6月", title: "团队成立初", desc: "以 SnowyMC 为团队名称，一个只有三个人的团队成立了！" },
  { year: "2023年8月", title: "服务器运营", desc: "从此时起 SnowCherry 服务器诞生了！" },
  { year: "2024年3月", title: "经济大危机", desc: "因服务商设备问题 玩家跑了 钱没了..." },
  { year: "2024年8月", title: "团队扩充中", desc: "团队规模扩展至 7 人！" },
  { year: "2025年3月", title: "新项目立项", desc: "NewWorld - Online" },
];

export default function Timeline() {
  return (
    <div className="relative max-w-5xl mx-auto mt-16 md:mt-20">
      {/* 竖线 */}
      <div className="absolute top-0 left-4 md:left-1/2 transform md:-translate-x-1/2 w-[2px] h-full bg-gray-300 dark:bg-gray-700" />

      {events.map((item, i) => (
        <MotionDiv
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="mb-12 md:mb-16 grid grid-cols-[1fr_auto_1fr] md:gap-8 items-center"
        >
          {/* 左侧卡片（仅桌面端偶数项显示） */}
          <div className={`hidden md:block ${i % 2 === 0 ? "text-right" : "invisible"}`}>
            {i % 2 === 0 && (
              <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-black/40 border border-black/10 dark:border-white/20 shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-gray-800 dark:text-white">
                  {item.year} · {item.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-white/70">{item.desc}</p>
              </div>
            )}
          </div>

          {/* 中间圆点 */}
          <div className="relative flex justify-center">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-cyan-400/60 bg-white dark:bg-black shadow-[0_0_8px_rgba(34,211,238,0.5)] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <span className="absolute w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-cyan-400/40 animate-ping"></span>
            </div>
          </div>

          {/* 右侧卡片（桌面端奇数项显示，移动端始终显示） */}
          <div className={`${i % 2 === 1 ? "md:block" : "md:invisible"} md:text-left`}>
            {(i % 2 === 1 || true) && (
              <div className="mt-4 md:mt-0 p-6 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-black/40 border border-black/10 dark:border-white/20 shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-gray-800 dark:text-white">
                  {item.year} · {item.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-white/70">{item.desc}</p>
              </div>
            )}
          </div>
        </MotionDiv>
      ))}
    </div>
  );
}