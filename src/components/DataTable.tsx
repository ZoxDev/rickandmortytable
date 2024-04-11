import { Table, TableBody, TableCell, TableHead, TableRow, TablePagination } from '@mui/material';
import type { DataCharacter } from '../types';

type DataTableProps = {
  datas: DataCharacter;
  page: number;
  pageChange: (event: unknown, newPage: number) => void;
};

export const DataTable = ({ datas, page, pageChange }: DataTableProps) => (
  <>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Image</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Species</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {datas.results.map((row) => (
          <TableRow key={row.id}>
            <TableCell>
              <img style={{ width: '100px' }} src={row.image}></img>
            </TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>{row.name}</TableCell>
            <TableCell>{row.species}</TableCell>
            <TableCell style={row.status === 'Alive' ? { color: 'green' } : { color: 'red' }}>
              {row.status}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <TablePagination
      component="div"
      count={datas.info.count}
      rowsPerPage={datas.results.length}
      page={page}
      onPageChange={pageChange}
    />
  </>
);
