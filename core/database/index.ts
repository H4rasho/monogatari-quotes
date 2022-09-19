import { createClient } from "@supabase/supabase-js";
import { SUPABASE } from "../../config";

const { URL, ANON_KEY } = SUPABASE;

export const supabase = createClient(URL, ANON_KEY);
