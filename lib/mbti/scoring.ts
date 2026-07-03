import type { Trait } from "@/types/mbti";

/**
 * 동점일 경우 I, N, T, P를 우선순위로 둔다. (기획 명세서 4장 알고리즘 가이드)
 */
export function calculateMbtiType(scores: Record<Trait, number>): string {
  const pick = (
    scoreA: number,
    scoreB: number,
    letterA: Trait,
    letterB: Trait,
    tieBreak: Trait
  ): Trait => {
    if (scoreA > scoreB) return letterA;
    if (scoreB > scoreA) return letterB;
    return tieBreak;
  };

  const ei = pick(scores.E, scores.I, "E", "I", "I");
  const sn = pick(scores.S, scores.N, "S", "N", "N");
  const tf = pick(scores.T, scores.F, "T", "F", "T");
  const jp = pick(scores.J, scores.P, "J", "P", "P");

  return `${ei}${sn}${tf}${jp}`;
}
