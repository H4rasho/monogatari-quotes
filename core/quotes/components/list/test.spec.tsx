import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import QuotesList from ".";
import { Quote } from "../../types";

const QUOTES: Quote[] = [
  {
    id: "1",
    quote: "quote 1",
    characters: {
      id: "1",
      name: "character 1",
      avatar: "/avatar 1",
    },
    episodes: {
      id: "1",
      name: "episode 1",
      seasonId: "1",
      seasons: {
        id: "1",
        name: "season 1",
      },
    },
  },
];

describe("QuoteList", () => {
  it("Should be show the quote", () => {
    render(<QuotesList quotes={QUOTES} />);

    expect(screen.getByText("quote 1")).toBeInTheDocument();
  });
});
