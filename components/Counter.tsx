"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase/client";

export default function Counter({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const channel = supabase
      .channel("mbti-results-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "mbti_results" },
        () => setCount((prev) => prev + 1)
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="w-full rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-200 shadow-lg shadow-cyan-900/10"
    >
      👥 이미{" "}
      <span className="font-display text-base font-bold text-cyan-300">
        {count.toLocaleString()}
      </span>
      명의 동료들이 자신의 부캐를 확인했어요!
    </motion.div>
  );
}
