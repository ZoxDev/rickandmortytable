export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: URL;
  };
  location: {
    name: string;
    url: URL;
  };
  image: string;
  episode: URL[];
  url: URL;
  created: Date;
};

export type DataCharacter = {
  info: {
    count: number;
    pages: number;
    next: URL;
    prev: URL;
  };
  results: Character[];
};
