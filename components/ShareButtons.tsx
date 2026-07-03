"use client";

import { useState } from "react";
import Link from "next/link";

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("링크 복사에 실패했어요:", error);
    }
  };

  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row">
      <Link
        href="/quiz"
        className="flex-1 rounded-2xl border border-slate-700 bg-slate-800/70 px-6 py-3.5 text-center text-sm font-semibold text-slate-200 transition-all hover:scale-105 hover:border-indigo-400 active:scale-95"
      >
        테스트 다시 하기
      </Link>
      <button
        type="button"
        onClick={handleCopy}
        className="flex-1 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition-all hover:scale-105 active:scale-95"
      >
        {copied ? "링크가 복사됐어요! ✅" : "결과 링크 복사하기"}
      </button>
    </div>
  );
}
