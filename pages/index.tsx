import Head from "next/head";
import QuotesList from "../core/quotes/components/list";
import { Quote } from "../core/quotes/types";
import H1 from "../ui/headings/H1";
import Layout from "../ui/Layout";
import { getQuotes } from "../core/quotes/service";
import { GetServerSideProps } from "next";
import { Button, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Image from "next/image";

interface Props {
  quotes: Quote[];
}

const Home = ({ quotes }: Props) => {
  const [page, setPage] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.push(`/?page=${page}`);
  }, [page]);

  return (
    <div>
      <Head>
        <title>Monogatari Quotes</title>
        <meta name="description" content="List of Monogatari Series quotes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={"/../public/images/nadeko-sengoku.jpg"}
        width="33"
        height="31"
      />
      <Layout>
        <H1 mt={10}>Monogatari Quotes</H1>
        <QuotesList quotes={quotes}></QuotesList>
        <HStack mt={5} justifyContent="space-between" color="white">
          <Button
            leftIcon={<ArrowBackIcon />}
            bg={"purple.500"}
            onClick={() => setPage((prev) => prev - 1)}
            visibility={page === 0 ? "hidden" : "visible"}
          >
            Anterior
          </Button>
          <Button
            rightIcon={<ArrowForwardIcon />}
            bg={"purple.500"}
            onClick={() => setPage((prev) => prev + 1)}
            visibility={quotes.length < 3 ? "hidden" : "visible"}
          >
            Siguiente
          </Button>
        </HStack>
      </Layout>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page } = context.query;

  const LIMIT = 3;
  const offset: number = page ? Number(page) * LIMIT : 0;
  const { results } = await getQuotes(offset, LIMIT);

  return {
    props: {
      quotes: results,
    },
  };
};
