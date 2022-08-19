export interface Quote {
  id: string;
  quote: string;
  image: string;
  characterId: string;
  chapterId: string;
  createdAt: Date;
  updatedAt: Date;
  author: {
    id: string;
    name: string;
    description: string;
    avatar: string;
    createdAt: Date;
    updatedAt: Date;
  };
  episode: {
    id: string;
    name: string;
    number: number;
    seasonId: string;
    createdAt: Date;
    updatedAt: Date;
    season: {
      id: string;
      name: string;
      synopsis: string;
      releaseDate: Date;
      createdAt: Date;
      updatedAt: Date;
    };
  };
}
