import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qegwmtucrpukboretfdo.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_r6DiNItrVyzdOcHhCFx7XQ_BuT8qou0";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
