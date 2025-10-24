// components/Timeline.tsx
"use client";

import { MotionDiv } from "./motion-safe";

const events = [
  { year: "2022年6月", title: "团队成立初", desc: "以 SnowyMC 为团队名称，一个只有三个人的团队成立了！" },
  { year: "2023年8月", title: "服务器运营", desc: "从此时起 SnowCherry 服务器诞生了！" },
  { year: "2024年3月", title: "经济大危机", desc: "因服务商设备问题 玩家跑了 钱没了..." },
  { year: "2024年8月", title: "团队扩充中", desc: "团队规模扩展至 7 人！" },
  { year: "2025年3月", title: "新项目立项", desc: "NewWorld - Online" },
];

export default function Timeline() {
  return (
    <div className="relative max-w-5xl mx-auto mt-16 md:mt-20 px-4">
      {/* 中央脊线 */}
      <div className="absolute top-0 left-6 md:left-1/2 md:-translate-x-1/2 w-px h-full bg-black/10 dark:bg-white/12" />

      {/* 时间轴节点与卡片 */}
      <div className="space-y-10 md:space-y-14">
        {events.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0% -20% 0%" }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
              className="grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] items-start md:gap-8"
            >
              {/* 左侧卡片（桌面端偶数项显示） */}
              <div className={`hidden md:block ${isLeft ? "md:text-right" : "md:invisible"}`}>
                {isLeft && (
                  <article className="timeline-card">
                    <header className="timeline-title">
                      {item.year} · {item.title}
                    </header>
                    <p className="timeline-desc">{item.desc}</p>
                  </article>
                )}
              </div>

              {/* 中心节点 */}
              <div className="relative flex justify-center md:justify-center">
                <div className="timeline-node">
                  <div className="timeline-node-inner" />
                </div>
              </div>

              {/* 右侧卡片（桌面端奇数项显示；移动端始终显示在右列） */}
              <div className={`${!isLeft ? "md:block" : "md:invisible"} md:text-left`}>
                {(!isLeft || true) && (
                  <article className="timeline-card mt-4 md:mt-0">
                    <header className="timeline-title">
                      {item.year} · {item.title}
                    </header>
                    <p className="timeline-desc">{item.desc}</p>
                  </article>
                )}
              </div>
            </MotionDiv>
          );
        })}
      </div>

      {/* 轻微顶部渐隐，提升层级感 */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent dark:from-black/40" />
    </div>
  );
}

