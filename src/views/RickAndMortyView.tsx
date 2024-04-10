import { useState } from 'react';
import { useCharacterPerPages } from '../hooks/useCharacterPerPages';
import { DataTable } from '../components/DataTable';

export const RickAndMortyView = () => {
  const [page, setPage] = useState(1);
  const datas = useCharacterPerPages(page);

  if (datas.data === undefined) return <h1>Fetching datas...</h1>;

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <DataTable datas={datas.data} page={page} pageChange={handleChangePage} />
    </>
  );
};
