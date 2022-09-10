import Head from "next/head";
import {
  Box,
  Button,
  Code,
  Heading,
  HStack,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import { API_URL } from "../config";
import DocumentationItem from "../components/DocumentationItem";
import Github from "../components/icons/Github";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const API_BASE_URL = `${API_URL}/api/quotes`;
const API_URL_WITH_PAGINATION = `${API_BASE_URL}/?limit=4&offset=3`;
const API_URL_RANDOM = `${API_BASE_URL}/random`;

const QUOTES_API_RESPONSE = [
  {
    campo: "character",
    tipo: "string",
  },
  {
    campo: "quote",
    tipo: "string",
  },
  {
    campo: "season",
    tipo: "string",
  },
  {
    campo: "episode",
    tipo: "string",
  },
];

export default function Documentacion() {
  return (
    <>
      <Head>
        <title>Monogatari Quotes - Api Documentation</title>
        <meta
          name="description"
          content="Documentacion de la API de frases de monogatari"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Text
          mt={4}
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          as="h1"
          fontWeight="bold"
          textAlign="center"
          textColor={"purple.500"}
        >
          Monogatari Quotes API
        </Text>
        <Heading as="h2" fontSize="2xl" mt={5} textColor="purple.500">
          ¿Cómo usar?
        </Heading>

        <Text mt={4} fontSize="xl" fontWeight="medium">
          Obtener una lista de frases
        </Text>

        <DocumentationItem
          description={<QuotesListDescription />}
          endpoint={API_BASE_URL}
        />

        <DocumentationItem
          description={<PaginationDescription />}
          endpoint={API_URL_WITH_PAGINATION}
        />
        <Text mt={4} fontSize="xl" fontWeight="medium">
          Otener una frase aleatoria
        </Text>
        <DocumentationItem
          description={<RandomQuoteDescription />}
          endpoint={API_URL_RANDOM}
        ></DocumentationItem>

        <Heading as="h2" fontSize="2xl" mt={5} textColor="purple.500">
          Respuesta:
        </Heading>

        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Th>Campo</Th>
              <Th>Tipo</Th>
            </Thead>
            <Tbody>
              {QUOTES_API_RESPONSE.map((item) => (
                <Tr key={item.campo}>
                  <Td>
                    <Code>{item.campo}</Code>
                  </Td>
                  <Td>
                    <Code>{item.tipo}</Code>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <Heading as="h2" fontSize="2xl" mt={5} textColor="purple.500">
          Contribuir
        </Heading>
        <HStack>
          <Text>
            Si quieres agregar una frase o corregir una frase, puedes hacerlo en
            el repositorio de GitHub.
          </Text>
          <ArrowForwardIcon color="purple.500" w={6} h={6} />
          <a
            href="https://github.com/H4rasho"
            target="_black"
            rel="noreferrer noopener"
          >
            <Github />
          </a>
        </HStack>
      </Layout>
    </>
  );
}

const QuotesListDescription = () => (
  <Text mt={5}>
    La API de Monogatari Quotes es muy sencilla de usar, solo tienes que hacer
    una petición GET a la siguiente URL:
  </Text>
);

const PaginationDescription = () => (
  <Text mt={5}>
    Si quieres obtener un número específico de frases, puedes agregar el
    parámetro <Code>limit</Code> y <Code>offset</Code> a la URL, por ejemplo:
  </Text>
);

const RandomQuoteDescription = () => (
  <Text mt={5}>
    Si quieres obtener una frase aleatoria, puedes hacer una petición GET a la
    siguiente URL:
  </Text>
);
