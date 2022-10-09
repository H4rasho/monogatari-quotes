import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import H1 from "../ui/headings/H1";
import Layout from "../ui/Layout";
import { supabase } from "../core/database";

export default function Login() {
  const toast = useToast();

  const [loginValues, setLoginValues] = useState({
    email: "",
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithOtp({
      email: loginValues.email,
    });
    if (error) {
      return toast({
        title: "Error",
        description: error.message,
        status: "error",
      });
    }
    toast({
      title: "Exito",
      description: "Se ha enviado un correo a tu cuenta",
      status: "success",
      duration: 5000,
      isClosable: true,
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
