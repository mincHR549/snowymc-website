// pages/gallery.tsx
"use client";

import Head from "next/head";

const galleryItems = [
  { title: "角色立绘", type: "立绘", image: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
  { title: "Logo 设计", type: "Logo", image: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
  { title: "表情差分", type: "表情包", image: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
  { title: "UI 图标套件", type: "UI", image: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
  { title: "像素角色贴图", type: "贴图", image: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
  { title: "Banner 海报", type: "海报", image: "https://s21.ax1x.com/2025/10/19/pVLaHl6.jpg" },
];

export default function Gallery() {
  return (
    <div className="min-h-screen relative">
      <Head>
        <title>美术资源 - SnowyMC</title>
        <meta name="description" content="SnowyMC 像素风格美术作品展示" />
      </Head>

      <main className="relative max-w-5xl mx-auto pt-32 px-6 pb-20">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              美术资源
            </span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-white/60">
            标准化像素风格创作，支持多场景应用
          </p>
        </div>

        {/* 画廊网格 */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl
                         bg-white/80 dark:bg-white/5 border border-black/5 dark:border-white/10
                         shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* 图片 */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* 标签 */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full
                            bg-black/50 backdrop-blur-sm text-white/90 text-xs font-medium">
                {item.type}
              </div>
              
              {/* 底部信息 */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <div className="text-white font-medium">{item.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-20" />
      </main>
    </div>
  );
}
