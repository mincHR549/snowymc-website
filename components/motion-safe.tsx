"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

/**
 * motion-safe.tsx
 * 为常用 HTML 标签创建类型安全的 motion 组件。
 * 解决 Framer Motion v10+ 在严格 TypeScript 下不识别 className 等属性的问题。
 */

export type MotionDivProps = MotionProps & React.HTMLAttributes<HTMLDivElement>;
export const MotionDiv: React.FC<MotionDivProps> = (props) => <motion.div {...props} />;

export type MotionSectionProps = MotionProps & React.HTMLAttributes<HTMLElement>;
export const MotionSection: React.FC<MotionSectionProps> = (props) => <motion.section {...props} />;

export type MotionH1Props = MotionProps & React.HTMLAttributes<HTMLHeadingElement>;
export const MotionH1: React.FC<MotionH1Props> = (props) => <motion.h1 {...props} />;

export type MotionH2Props = MotionProps & React.HTMLAttributes<HTMLHeadingElement>;
export const MotionH2: React.FC<MotionH2Props> = (props) => <motion.h2 {...props} />;

export type MotionH3Props = MotionProps & React.HTMLAttributes<HTMLHeadingElement>;
export const MotionH3: React.FC<MotionH3Props> = (props) => <motion.h3 {...props} />;

export type MotionPProps = MotionProps & React.HTMLAttributes<HTMLParagraphElement>;
export const MotionP: React.FC<MotionPProps> = (props) => <motion.p {...props} />;

export type MotionAProps = MotionProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
export const MotionA: React.FC<MotionAProps> = (props) => <motion.a {...props} />;

export type MotionImgProps = MotionProps & React.ImgHTMLAttributes<HTMLImageElement>;
export const MotionImg: React.FC<MotionImgProps> = (props) => <motion.img {...props} />;

// ✅ 新增：类型安全的 MotionNav
export type MotionNavProps = MotionProps & React.HTMLAttributes<HTMLElement>;
export const MotionNav: React.FC<MotionNavProps> = (props) => <motion.nav {...props} />;
