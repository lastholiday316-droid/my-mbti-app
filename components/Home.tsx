"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Counter from "@/components/Counter";

export default function Home({ initialCount }: { initialCount: number }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center gap-8 px-6 py-16 text-center">
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-indigo-300"
      >
        IT 커리어 성향 테스트
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl"
      >
        출근길 내 모습으로 알아보는{" "}
        <span className="text-gradient">&apos;IT 부캐&apos;</span> 테스트
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-sm leading-relaxed text-slate-400"
      >
        협업 스타일부터 위기 대처법까지, 내 MBTI 유형에 맞는 IT 직무 페르소나는?
      </motion.p>

      <Counter initialCount={initialCount} />

      <Link
        href="/quiz"
        className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-900/40 transition-all hover:scale-105 active:scale-95"
      >
        내 IT 부캐 확인하러 가기
        <span className="inline-block animate-bounce transition-transform group-hover:translate-x-1">
          ➔
        </span>
      </Link>

      <p className="text-xs text-slate-500">약 2분 소요 · 8개의 질문 · 16가지 IT 부캐</p>
    </div>
  );
}
