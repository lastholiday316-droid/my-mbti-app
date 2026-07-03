"use client";

import { motion } from "framer-motion";
import type { Question, QuestionOption } from "@/types/mbti";

interface QuestionCardProps {
  question: Question;
  onSelect: (option: QuestionOption) => void;
}

export default function QuestionCard({ question, onSelect }: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full rounded-2xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl backdrop-blur-sm"
    >
      <p className="mb-8 text-center text-xl font-semibold leading-relaxed text-slate-50">
        {question.text}
      </p>
      <div className="flex flex-col gap-4">
        {question.options.map((option) => (
          <button
            key={option.label}
            type="button"
            onClick={() => onSelect(option)}
            className="rounded-xl border border-slate-700 bg-slate-800/70 px-5 py-4 text-left text-sm leading-relaxed text-slate-200 transition-all hover:scale-105 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-white active:scale-95"
          >
            {option.text}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
