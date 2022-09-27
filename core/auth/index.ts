import { supabase } from "../database";

export async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "example@email.com",
    password: "example-password",
  });
  return { data, error };
}
