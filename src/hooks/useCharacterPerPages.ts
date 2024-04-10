import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Character } from '../types';

export type DataCharacter = {
  info: {
    count: number;
    pages: number;
    next: URL;
    prev: URL;
  };
  results: [Character];
};

export const useCharacterPerPages = (page: number) => {
  return useQuery({
    queryKey: ['characterPerPages', page],
    queryFn: async () => {
      const data: DataCharacter = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`,
      ).then((res) => res.json());

      return data;
    },
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
};
