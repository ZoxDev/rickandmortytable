import { useState } from 'react';
import { useCharacter } from '../hooks/useCharacter';
import { DataTable } from '../components/DataTable';
import { TextField } from '@mui/material';

export const RickAndMortyView = () => {
  const [page, setPage] = useState(1);
  const [characterName, setCharactername] = useState('');
  const characters = useCharacter(page, characterName);

  if (characters.isPending) return <h1>Loading...</h1>;
  if (characters.error) return <h1>An error as occured :(</h1>;

  const handleChangePage = (_event: unknown, newPage: number) => {
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
      <DataTable datas={characters.data} page={page} pageChange={handleChangePage} />
    </main>
  );
};
