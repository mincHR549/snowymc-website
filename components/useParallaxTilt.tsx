"use client";
import { useRef, useEffect } from "react";

export default function useParallaxTilt(maxTilt: number = 6) {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let hovering = false;

    const onMove = (e: MouseEvent) => {
      if (!hovering) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const onEnter = () => {
      hovering = true;
    };

    const onLeave = () => {
      hovering = false;
      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [maxTilt]);

  return ref;
}
