import { createClient } from "@supabase/supabase-js";

// docs/supabase-info.md 에 기재된 프로젝트 정보를 직접 하드코딩합니다.
const SUPABASE_PROJECT_ID = "ebmsgvzlwisowabsvmqf";
const SUPABASE_URL = `https://${SUPABASE_PROJECT_ID}.supabase.co`;
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_lAZgz8nVtu0iXIMCFz0yOA_Ht_UOnok";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
