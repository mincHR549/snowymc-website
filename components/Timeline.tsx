"use client";

import { useEffect, useState } from "react";

const events = [
  { year: "2022年6月", title: "团队成立初", desc: "以 SnowyMC 为团队名称，一个只有三个人的团队成立了！" },
  { year: "2023年8月", title: "服务器运营", desc: "从此时起 SnowCherry 服务器诞生了！" },
  { year: "2024年3月", title: "经济大危机", desc: "因服务商设备问题 玩家跑了 钱没了..." },
  { year: "2024年8月", title: "团队扩充中", desc: "团队规模扩展至 7 人！" },
  { year: "2025年3月", title: "新项目立项", desc: "NewWorld - Online" },
];

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(events.length).fill(false));

  useEffect(() => {
    // 使用 Intersection Observer 实现懒加载显示
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    // 延迟添加观察器，确保 DOM 已渲染
    const timer = setTimeout(() => {
      document.querySelectorAll(".timeline-item").forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative max-w-5xl mx-auto mt-16 md:mt-20">
      {/* 竖线 */}
      <div className="absolute top-0 left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700" />

      {events.map((item, i) => (
        <div
          key={i}
          data-index={i}
          className={`timeline-item mb-10 md:mb-14 grid grid-cols-[1fr_auto_1fr] md:gap-8 items-center
                      transition-all duration-500 ${visibleItems[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* 左侧卡片 */}
          <div className={`hidden md:block ${i % 2 === 0 ? "text-right" : "invisible"}`}>
            {i % 2 === 0 && (
              <div className="p-5 rounded-xl bg-white/90 dark:bg-black/50 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-800 dark:text-white text-sm md:text-base">
                  {item.year} · {item.title}
                </h3>
                <p className="mt-1 text-gray-600 dark:text-white/60 text-xs md:text-sm">{item.desc}</p>
              </div>
            )}
          </div>

          {/* 中间圆点 - 静态 */}
          <div className="relative flex justify-center">
            <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-cyan-400 dark:bg-cyan-500 shadow-sm" />
          </div>

          {/* 右侧卡片 - 移动端始终显示 */}
          <div className={`${i % 2 === 1 ? "md:block" : "md:hidden"} md:text-left`}>
            <div className="p-5 rounded-xl bg-white/90 dark:bg-black/50 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-800 dark:text-white text-sm md:text-base">
                {item.year} · {item.title}
              </h3>
              <p className="mt-1 text-gray-600 dark:text-white/60 text-xs md:text-sm">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
