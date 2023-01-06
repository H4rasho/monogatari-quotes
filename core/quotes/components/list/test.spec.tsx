import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import QuotesList from ".";
import { Quote } from "../../types";

const QUOTES: Quote[] = [
  {
    id: "1",
    quote: "quote 1",
    character: {
      id: "1",
      name: "character 1",
      avatar: "/avatar 1",
    },
    episode: {
      id: "1",
      name: "episode 1",
      seasonId: "1",
      season: {
        id: "1",
        name: "season 1",
      },
    },
  },
];

describe("QuoteList", () => {
  it("Should be show the quote", () => {
    render(<QuotesList quotes={QUOTES} />);

    expect(screen.getByText(/quote 1/i)).toBeInTheDocument();
  });

  it("Should be show quote details", () => {
    render(<QuotesList quotes={QUOTES} />);

    expect(screen.getByText(/character 1/i)).toBeInTheDocument();
    expect(screen.getByText(/episode 1/i)).toBeInTheDocument();
  });

  it("Should be show a message when there are no quotes", () => {
    render(<QuotesList quotes={[]} />);

    expect(screen.getByText(/No hay frases para mostrar/i)).toBeInTheDocument();
  });
});
