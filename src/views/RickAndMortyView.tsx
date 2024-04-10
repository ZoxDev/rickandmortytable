import { useState } from 'react';
import { useCharacterPerPages } from '../hooks/useCharacterPerPages';
import { DataTable } from '../components/DataTable';
import { TextField } from '@mui/material';
import { useCharacterPerName } from '../hooks/useCharacterPerName';
import { useSetDatas } from '../hooks/useSetDatas';

export const RickAndMortyView = () => {
  const [page, setPage] = useState(1);
  const allCharacter = useCharacterPerPages(page);

  const [characterName, setCharactername] = useState('');
  const searchedCharacter = useCharacterPerName(characterName, page);

  const datas = useSetDatas(characterName, allCharacter?.data, searchedCharacter?.data);

  if (allCharacter.data === undefined || searchedCharacter.data === undefined)
    return <h1>Fetching datas...</h1>;

  if (datas === undefined) return <h1>Fetching datas...</h1>;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <main className="flex flex-col p-10">
      <TextField
        value={characterName}
        onChange={(event) => setCharactername(event.target.value)}
        label="Character name"
        id="outlined-size-small"
      />
      <DataTable datas={datas} page={page} pageChange={handleChangePage} />
    </main>
  );
};
