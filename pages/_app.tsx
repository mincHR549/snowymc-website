// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalBackground from "../components/GlobalBackground";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>SnowyMC 官网</title>
        <meta
          name="description"
          content="SnowyMC 官方网站，Minecraft 插件与像素美术创作。"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      {/* 全局背景 - 固定不动，不参与动画 */}
      <GlobalBackground />

      {/* 固定导航 */}
      <Navbar />

      {/* 页面内容 - 直接渲染，无过渡动画避免闪烁 */}
      <Component {...pageProps} />

      {/* 页脚 */}
      <Footer />
    </ThemeProvider>
  );
}
