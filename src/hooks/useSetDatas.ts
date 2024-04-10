import { DataCharacter } from '../types';

export const useSetDatas = (
  characterName: string,
  allCharacter: DataCharacter | undefined,
  searchedCharacter: DataCharacter | undefined,
) => {
  const data = characterName !== '' ? searchedCharacter : allCharacter;
  return data;
};
