# 내 성격에 딱 맞는 IT 부캐 찾기 (IT MBTI 테스트)

`docs/requirements.md`, `docs/design-guide.md` 명세를 바탕으로 구현된 Next.js 15(App Router) + Tailwind CSS 웹앱입니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 접속.

## Supabase 설정

1. `database/schema.sql` 내용을 Supabase 프로젝트의 SQL Editor에서 실행해 `mbti_results` 테이블, RLS 정책, Realtime 발행 설정을 초기화합니다. (재실행해도 안전합니다.)
2. Supabase 프로젝트 URL과 Publishable Key는 `lib/supabase/client.ts`에 직접 하드코딩되어 있습니다. 별도의 `.env` 파일은 사용하지 않습니다. 다른 프로젝트로 교체하려면 이 파일의 두 상수 값만 바꾸면 됩니다.

## 주요 구조

- `app/page.tsx` — 메인 화면 (실시간 참여자 수 배너 + CTA)
- `app/quiz/page.tsx` — 8문항 질문 플로우 및 채점 로직
- `app/result/[type]/page.tsx` — MBTI 유형별 결과(16종 페르소나) 화면
- `lib/mbti/questions.ts` — 질문/선택지 데이터
- `lib/mbti/personas.ts` — 16가지 IT 부캐 페르소나 데이터
- `lib/mbti/scoring.ts` — 점수 집계 및 동점 처리(I, N, T, P 우선) 로직
- `lib/supabase/client.ts` — Supabase 클라이언트 (프로젝트 URL·Key 하드코딩)
- `database/schema.sql` — Supabase 테이블/정책/Realtime 초기화 스크립트
