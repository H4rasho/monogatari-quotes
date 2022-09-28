import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import H1 from "../components/headings/H1";
import Layout from "../components/Layout";
import { supabase } from "../core/database";

export default function Login() {
  const [loginValues, setLoginValues] = useState({
    email: "",
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await supabase.auth.signInWithOtp({
      email: loginValues.email,
    });
  };

  return (
    <Layout>
      <form onSubmit={handleLogin}>
        <H1>Ingreso</H1>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            id="email"
            type="email"
            onChange={(e) =>
              setLoginValues({ ...loginValues, email: e.target.value })
            }
          />
          <Button type="submit" w="full" mt={5}>
            Enviar
          </Button>
        </FormControl>
      </form>
    </Layout>
  );
}
