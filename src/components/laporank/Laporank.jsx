import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';

function Laporank(props) {
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const columns = [
    { id: 'name', label: 'Name' },
    { id: 'age', label: 'Age' },
    { id: 'email', label: 'Email' },
  ];

  const rows = [
    { name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    { name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
    // Tambahkan data lainnya...
  ];
   
    
  return (
    <>
    <div className="content">
        <div className="wrap">
            <div className="laporan-karyawan">
            <Paper>
            <TableContainer>
                <Table>
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                        <TableCell key={column.id}>{column.label}</TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                        <TableRow key={index}>
                        {columns.map((column) => (
                            <TableCell key={column.id}>{row[column.id]}</TableCell>
                        ))}
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </Paper>
            </div>
        </div>
    </div>
    </>
  )
}

export default Laporank
