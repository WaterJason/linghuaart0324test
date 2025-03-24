import type { Metadata } from "next";
import { Noto_Serif_SC, Noto_Sans_SC, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const notoSans = Noto_Sans_SC({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const notoSerif = Noto_Serif_SC({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "聆花文化 - 掐丝珐琅艺术传承者",
  description: "传承创新非遗，讲好中国故事 - 聆花文化专注掐丝珐琅艺术传承与创新，融合传统工艺与现代设计，让非遗走进生活。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSans.variable} ${notoSerif.variable} ${playfair.variable}`}>
      <body className={notoSans.className}>
        <ClientBody>
          {children}
        </ClientBody>
      </body>
    </html>
  );
}
