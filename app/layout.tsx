import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import BackgroundFX from "@/components/BackgroundFX";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "출근길 내 모습으로 알아보는 'IT 부캐' 테스트",
  description:
    "협업 스타일부터 위기 대처법까지, 내 MBTI 유형에 맞는 IT 직무 페르소나는? 8개의 질문으로 알아보는 나만의 IT 부캐.",
  openGraph: {
    title: "출근길 내 모습으로 알아보는 'IT 부캐' 테스트",
    description: "협업 스타일부터 위기 대처법까지, 내 MBTI 유형에 맞는 IT 직무 페르소나는?",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={spaceGrotesk.variable}>
      <body className="relative min-h-screen overflow-x-hidden bg-slate-950 font-sans text-slate-50 antialiased">
        <BackgroundFX />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
