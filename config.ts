export const API_URL = "https://monogatari-quotes.vercel.app";

const { NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY } = process.env;

export const SUPABASE = {
  URL: NEXT_PUBLIC_SUPABASE_URL || "",
  ANON_KEY: NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
};
