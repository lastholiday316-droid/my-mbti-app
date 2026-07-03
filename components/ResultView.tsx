"use client";

import { motion, type Variants } from "framer-motion";
import type { Persona } from "@/types/mbti";
import ShareButtons from "@/components/ShareButtons";

interface ResultViewProps {
  mbtiType: string;
  persona: Persona;
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ResultView({ mbtiType, persona }: ResultViewProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-6 px-6 py-16"
    >
      <motion.span
        variants={item}
        className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-indigo-300"
      >
        당신의 IT 부캐가 나왔어요
      </motion.span>

      <motion.h1
        variants={item}
        className="font-display bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-300 bg-clip-text text-6xl font-black tracking-tight text-transparent"
      >
        {mbtiType}
      </motion.h1>

      <motion.h2 variants={item} className="text-center text-2xl font-bold text-white">
        {persona.name}
      </motion.h2>

      <motion.p variants={item} className="text-center text-sm italic leading-relaxed text-slate-400">
        &ldquo;{persona.tagline}&rdquo;
      </motion.p>

      <motion.div
        variants={item}
        className="w-full rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl backdrop-blur-sm"
      >
        <h3 className="mb-4 text-sm font-semibold text-slate-300">☕ 이런 모습, 나잖아?</h3>
        <ul className="space-y-3">
          {persona.traits.map((trait) => (
            <li key={trait} className="flex gap-2 text-sm leading-relaxed text-slate-200">
              <span className="text-cyan-400">•</span>
              <span>{trait}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        variants={item}
        className="w-full rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-6 shadow-xl"
      >
        <h3 className="mb-2 text-sm font-semibold text-cyan-200">💚 찰떡궁합 협업 파트너</h3>
        <p className="mb-1 text-base font-bold text-white">
          {persona.best.type} · {persona.best.name}
        </p>
        <p className="text-sm leading-relaxed text-cyan-100/80">{persona.best.reason}</p>
      </motion.div>

      <motion.div
        variants={item}
        className="w-full rounded-2xl border border-rose-400/20 bg-rose-500/10 p-6 shadow-xl"
      >
        <h3 className="mb-2 text-sm font-semibold text-rose-200">⚡ 주의가 필요한 케미</h3>
        <p className="mb-1 text-base font-bold text-white">
          {persona.worst.type} · {persona.worst.name}
        </p>
        <p className="text-sm leading-relaxed text-rose-100/80">{persona.worst.reason}</p>
      </motion.div>

      <motion.div variants={item} className="w-full pt-4">
        <ShareButtons />
      </motion.div>
    </motion.div>
  );
}
