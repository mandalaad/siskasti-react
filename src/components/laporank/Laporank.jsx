import * as React from 'react';
import './Laporank.css'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useState } from 'react';
import { useEffect } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';

const Laporank = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selectedDate, setSelectedDate] = useState(null);
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);

  useEffect(() => {
    // Ambil data dari API atau sumber lainnya dan simpan ke state rows
    // Misalnya menggunakan Axios:
    // axios.get('/api/data').then(response => setRows(response.data));
    const fakeRows = [
      { no: 1, namakaryawan: 'John Doe', bulan: 'Januari', jumlah: 100, keterangan: 'Lorem ipsum', status: 'Aktif' },
      { no: 2, namakaryawan: 'Jane Smith', bulan: 'Januari', jumlah: 200, keterangan: 'Dolor sit amet', status: 'Non-Aktif' },
      { no: 3, namakaryawan: 'John Doe', bulan: 'Januari', jumlah: 100, keterangan: 'Lorem ipsum', status: 'Aktif' },
      { no: 4, namakaryawan: 'Jane Smith', bulan: 'Juni', jumlah: 200, keterangan: 'Dolor sit amet', status: 'Non-Aktif' },
      { no: 5, namakaryawan: 'John Doe', bulan: 'Juni', jumlah: 100, keterangan: 'Lorem ipsum', status: 'Aktif' },
      { no: 6, namakaryawan: 'Jane Smith', bulan: 'Juni', jumlah: 200, keterangan: 'Dolor sit amet', status: 'Non-Aktif' },
      { no: 7, namakaryawan: 'Jane Smith', bulan: 'Juni', jumlah: 200, keterangan: 'Dolor sit amet', status: 'Non-Aktif' },
      { no: 8, namakaryawan: 'John Doe', bulan: 'Juni', jumlah: 100, keterangan: 'Lorem ipsum', status: 'Aktif' },
      { no: 9, namakaryawan: 'Jane Smith', bulan: 'Juni', jumlah: 200, keterangan: 'Dolor sit amet', status: 'Non-Aktif' },
      { no: 10, namakaryawan: 'Jane Smith', bulan: 'Juni', jumlah: 200, keterangan: 'Dolor sit amet', status: 'Non-Aktif' },
      { no: 11, namakaryawan: 'John Doe', bulan: 'Juni', jumlah: 100, keterangan: 'Lorem ipsum', status: 'Aktif' },
      { no: 12, namakaryawan: 'Jane Smith', bulan: 'Juni', jumlah: 200, keterangan: 'Dolor sit amet', status: 'Non-Aktif' },
      // Data lainnya...
    ];
    setRows(fakeRows);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);

    // Filter data berdasarkan bulan yang dipilih
    const filteredRowsByMonth = rows.filter(row => row.bulan === date.toLocaleString('default', { month: 'long' }));
    setFilteredRows(filteredRowsByMonth);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handlePrintData = () => {
    if (selectedDate) {
      // Mengurutkan data berdasarkan bulan yang dipilih
      const sortedRows = rows
        .filter((row) => row.bulan === selectedDate.toLocaleString('default', { month: 'long' }))
        .sort((a, b) => a.no - b.no);
  
      // Membuat objek jsPDF
      const doc = new jsPDF();
  
      // Menentukan properti tabel
      const tableColumn = ['No', 'Nama Karyawan', 'Bulan', 'Jumlah', 'Keterangan', 'Status'];
      const tableRows = sortedRows.map((row) => [row.no, row.namakaryawan, row.bulan, row.jumlah, row.keterangan, row.status]);
  
      // Mengatur posisi dan tampilan judul
      doc.setFontSize(18);
      doc.text(`Data Laporan Bulan ${selectedDate.toLocaleString('default', { month: 'long' })}`, 14, 22);
  
      // Membuat tabel menggunakan autotable
      doc.autoTable({
        columns: tableColumn,
        body: tableRows,
        startY: 30,
      });
  
      // Mengunduh file PDF
      doc.save(`laporan-${selectedDate.toLocaleString('default', { month: 'long' })}.pdf`);
    } else {
      alert('Pilih tanggal terlebih dahulu.');
    }
  };

  // useEffect(() => {
  //   axios
  //     .get('https://api.example.com/data') // Ganti URL API dengan URL yang sesuai
  //     .then((response) => {
  //       setRows(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  return (
    <div className="content">
      <div className="wrap">
        <div className="laporan">
          <div className="header">
            <h4>Laporan</h4>
          </div>
          <div className="cetak">
            <div className="tanggal">
              {/* Pilih tanggal */}
              <DatePicker
                className='date'
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MMMM yyyy"
                showMonthYearPicker
                placeholderText="Pilih bulan"
              />
            </div>
            <div className="button">
              {/* Tombol Cetak */}
              <button variant="contained" onClick={handlePrintData}>Cetak Data</button>
            </div>
          </div>
          {/* Tabel */}
          <TableContainer className='table' component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Nama Karyawan</TableCell>
                  <TableCell>Bulan</TableCell>
                  <TableCell>Jumlah</TableCell>
                  <TableCell>Keterangan</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.no}>
                      <TableCell>{row.no}</TableCell>
                      <TableCell>{row.namakaryawan}</TableCell>
                      <TableCell>{row.bulan}</TableCell>
                      <TableCell>{row.jumlah}</TableCell>
                      <TableCell>{row.keterangan}</TableCell>
                      <TableCell>{row.status}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Paginasi */}
          <TablePagination
            rowsPerPageOptions={[5, 10, 15, 25]}
            component="div"
            count={filteredRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Laporank;