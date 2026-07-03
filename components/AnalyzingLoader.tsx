"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MESSAGES = [
  "답변을 꼼꼼히 살펴보고 있어요...",
  "IT 부캐 데이터를 매칭하는 중...",
  "거의 다 됐어요, 조금만 기다려주세요!",
];

export default function AnalyzingLoader() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center gap-8 px-6 text-center">
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-slate-800 border-t-indigo-400" />
        <div className="absolute inset-3 animate-ping rounded-full bg-cyan-400/20" />
      </div>
      <div className="space-y-2">
        <p className="font-display text-lg font-semibold text-white">나의 IT 부캐 분석 중</p>
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-slate-400"
          >
            {MESSAGES[messageIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
