import Head from "next/head";
import {
  Box,
  Code,
  HStack,
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
import Github from "../components/icons/Github";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import H1 from "../components/headings/H1";
import DocumentationItem from "../components/documentation/DocumentationItem";
import DocumentationSection from "../components/documentation/DocumentationSection";

/**
  CONSTANTS
*/
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
        <H1>Monogatari Quotes API</H1>

        <DocumentationSection title="Contribuir">
          <HStack>
            <Text>
              Si quieres agregar una frase o corregir una frase, puedes hacerlo
              en el repositorio de GitHub.
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
        </DocumentationSection>

        <DocumentationSection title="¿Cómo usar?">
          <Text mt={4} fontSize="xl" fontWeight="medium">
            Obtener una lista de frases
          </Text>

          <Box px={5}>
            <DocumentationItem
              description={<QuotesListDescription />}
              endpoint={API_BASE_URL}
            />

            <DocumentationItem
              description={<PaginationDescription />}
              endpoint={API_URL_WITH_PAGINATION}
            />
          </Box>

          <Text mt={4} fontSize="xl" fontWeight="medium">
            Otener una frase aleatoria
          </Text>

          <Box px={5}>
            <DocumentationItem
              description={<RandomQuoteDescription />}
              endpoint={API_URL_RANDOM}
            ></DocumentationItem>
          </Box>
        </DocumentationSection>

        <DocumentationSection title="Respuesta">
          <TableContainer px={5} mt={5}>
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
        </DocumentationSection>
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
