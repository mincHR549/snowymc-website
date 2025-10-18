// components/ThemeToggle.tsx
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-black/10 bg-white/70 text-black shadow-glassLight
                 hover:bg-white/90 transition
                 dark:border-white/20 dark:bg-white/10 dark:text-white dark:shadow-glassDark dark:hover:bg-white/20"
      aria-label="Toggle theme"
    >
      <span className="h-4 w-4 rounded-full bg-yellow-400 dark:bg-blue-300"></span>
      <span className="text-sm">{isDark ? "暗色模式" : "亮色模式"}</span>
    </button>
  );
}
