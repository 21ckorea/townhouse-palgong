import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "팔공산 전원주택 | 자연과 함께하는 프리미엄 라이프",
  description: "대구 팔공산의 아름다운 자연 속에서 품격 있는 삶을 누리세요. 도시와 자연이 조화롭게 어우러진 최고급 전원주택",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={inter.className}>
        <Script
          src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=92eb1d79aae622a616e266fa7581e077"
          strategy="beforeInteractive"
        />
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
