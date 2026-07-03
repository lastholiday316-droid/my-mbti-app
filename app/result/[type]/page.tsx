import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { personas } from "@/lib/mbti/personas";
import ResultView from "@/components/ResultView";

type ResultParams = { type: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<ResultParams>;
}): Promise<Metadata> {
  const { type } = await params;
  const persona = personas[type.toUpperCase()];

  if (!persona) {
    return { title: "결과를 찾을 수 없어요" };
  }

  return {
    title: `나의 IT 부캐는 '${persona.name}' | IT 부캐 찾기`,
    description: persona.tagline,
    openGraph: {
      title: `나의 IT 부캐는 '${persona.name}'`,
      description: persona.tagline,
    },
  };
}

export default async function ResultPage({
  params,
}: {
  params: Promise<ResultParams>;
}) {
  const { type } = await params;
  const mbtiType = type.toUpperCase();
  const persona = personas[mbtiType];

  if (!persona) {
    notFound();
  }

  return <ResultView mbtiType={mbtiType} persona={persona} />;
}
