import { useState } from 'react';
import { useCharacterPerPages } from '../hooks/useCharacterPerPages';
import { DataTable } from '../components/DataTable';

export const RickAndMortyView = () => {
  const [page, setPage] = useState(1);
  const datas = useCharacterPerPages(page);

  if (datas.data === undefined) return <h1>Fetching datas...</h1>;

  return (
    <DataTable
      datas={datas.data}
      page={page}
      nextPage={() => setPage(page + 1)}
      prevPage={() => setPage(page - 1)}
    />
  );
};
