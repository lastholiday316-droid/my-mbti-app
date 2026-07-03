import Home from "@/components/Home";
import { supabase } from "@/lib/supabase/client";

export const dynamic = "force-dynamic";

export default async function Page() {
  const { count } = await supabase
    .from("mbti_results")
    .select("*", { count: "exact", head: true });

  return <Home initialCount={count ?? 0} />;
}
