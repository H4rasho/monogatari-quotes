export interface Quote {
  id: string;
  quote: string;
  characters: {
    id: string;
    name: string;
    avatar: string;
  };
  episodes: {
    id: string;
    name: string;
    seasons: {
      id: string;
      name: string;
    };
  };
}
