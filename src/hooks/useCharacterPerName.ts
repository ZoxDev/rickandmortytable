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

export const useCharacterPerName = (name: string, page?: number) => {
  return useQuery({
    queryKey: ['characterPerName', name, page],
    queryFn: async () => {
      const data: Array<DataCharacter> = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`,
      ).then((res) => res.json());

      return data;
    },
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
};
