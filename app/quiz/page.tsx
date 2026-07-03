"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import AnalyzingLoader from "@/components/AnalyzingLoader";
import { questions } from "@/lib/mbti/questions";
import { calculateMbtiType } from "@/lib/mbti/scoring";
import { supabase } from "@/lib/supabase/client";
import type { AnswerRecord, QuestionOption, Trait } from "@/types/mbti";

const INITIAL_SCORES: Record<Trait, number> = {
  E: 0,
  I: 0,
  S: 0,
  N: 0,
  T: 0,
  F: 0,
  J: 0,
  P: 0,
};

export default function QuizPage() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [scores, setScores] = useState<Record<Trait, number>>(INITIAL_SCORES);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSelect = async (option: QuestionOption) => {
    const question = questions[index];
    const nextScores = { ...scores, [option.trait]: scores[option.trait] + 1 };
    const nextAnswers: AnswerRecord[] = [
      ...answers,
      { questionId: question.id, choice: option.label, trait: option.trait },
    ];

    if (index < questions.length - 1) {
      setScores(nextScores);
      setAnswers(nextAnswers);
      setIndex(index + 1);
      return;
    }

    setScores(nextScores);
    setAnswers(nextAnswers);
    setIsAnalyzing(true);

    const mbtiType = calculateMbtiType(nextScores);

    try {
      await supabase.from("mbti_results").insert({
        mbti_type: mbtiType,
        answers: nextAnswers,
      });
    } catch (error) {
      console.error("결과 저장에 실패했어요:", error);
    }

    setTimeout(() => {
      router.push(`/result/${mbtiType}`);
    }, 1600);
  };

  if (isAnalyzing) {
    return <AnalyzingLoader />;
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6 py-16">
      <ProgressBar current={index + 1} total={questions.length} />
      <AnimatePresence mode="wait">
        <QuestionCard key={questions[index].id} question={questions[index]} onSelect={handleSelect} />
      </AnimatePresence>
    </div>
  );
}
