import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { Character } from '../types';

export type DataCharacter = {
  info: {
    count: number;
    pages: number;
    next: URL;
    prev: URL;
  };
  results: Character[];
};

const BASE_URL = 'https://rickandmortyapi.com/api';

export const useCharacter = (page: number, name?: string) => {
  return useQuery({
    queryKey: ['character', page, name],
    queryFn: async () => {
      const url = new URL(`${BASE_URL}/character/`);

      url.searchParams.set('page', page.toString());

      if (name) url.searchParams.set('name', name);

      const data: DataCharacter = await fetch(url).then((res) => res.json());

      return data;
    },
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
};
