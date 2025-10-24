"use client";

import { motion, MotionProps } from "framer-motion";
import React from "react";

/**
 * motion-safe.tsx
 * 为常用 HTML 标签创建类型安全的 motion 组件
 * 解决 Framer Motion v10+ 在严格 TypeScript 下 className 等属性报错问题
 */

// ✅ MotionDiv
export const MotionDiv = React.forwardRef<
  HTMLDivElement,
  MotionProps & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => <motion.div ref={ref} {...props} />);

// ✅ MotionNav
export const MotionNav = React.forwardRef<
  HTMLElement,
  MotionProps & React.HTMLAttributes<HTMLElement>
>((props, ref) => <motion.nav ref={ref} {...props} />);

// ✅ MotionSpan（修复 Navbar 中 layoutId + className 报错）
export const MotionSpan = React.forwardRef<
  HTMLSpanElement,
  MotionProps & React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => <motion.span ref={ref} {...props} />);

// 可选：其他常用 motion 元素
export const MotionSection = React.forwardRef<
  HTMLElement,
  MotionProps & React.HTMLAttributes<HTMLElement>
>((props, ref) => <motion.section ref={ref} {...props} />);

export const MotionH1 = React.forwardRef<
  HTMLHeadingElement,
  MotionProps & React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => <motion.h1 ref={ref} {...props} />);

export const MotionH2 = React.forwardRef<
  HTMLHeadingElement,
  MotionProps & React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => <motion.h2 ref={ref} {...props} />);

export const MotionH3 = React.forwardRef<
  HTMLHeadingElement,
  MotionProps & React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => <motion.h3 ref={ref} {...props} />);

export const MotionP = React.forwardRef<
  HTMLParagraphElement,
  MotionProps & React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => <motion.p ref={ref} {...props} />);

export const MotionA = React.forwardRef<
  HTMLAnchorElement,
  MotionProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => <motion.a ref={ref} {...props} />);

export const MotionImg = React.forwardRef<
  HTMLImageElement,
  MotionProps & React.ImgHTMLAttributes<HTMLImageElement>
>((props, ref) => <motion.img ref={ref} {...props} />);
