import React, { useEffect, useMemo, useState } from 'react'
import './KasKeluarDivisi.css'
import axios from 'axios';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import id from 'date-fns/locale/id';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { startOfYear, endOfYear, isWithinInterval } from 'date-fns';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { MaterialReactTable } from 'material-react-table';


function KasKeluarDivisi() {
    const [selectedDate, setSelectedDate] = useState(null);
  const handleChange = date => {
    setSelectedDate(date);
  };

  const CustomDatePickerInput = ({ value, onClick }) => (
    <input
      className="datepicker-input"
      value={value ? value.toLocaleString('default', { month: 'long' }) : ''}
      onClick={onClick}
      readOnly
    />
  );

  const togglePopup = (message, success) => {
    setOpen(!open);
    setPopupMessage(message);
    setIsSuccess(success);
  };

  const [nik, setNik] = useState('');
  const [nama, setNama] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [karyawan, setKaryawan] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const [open, setOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Buat objek data dengan nilai-nilai input
    const data = {
      nik,
      nama,
      tanggal: selectedDate ? selectedDate.toISOString() : '',
      jumlah,
      karyawan,
    };
    try {
      // Kirim data ke API endpoint menggunakan metode POST
      const response = await axios.post('URL_API_ANDA', data);
      console.log('Data berhasil disimpan:', response.data);
      togglePopup('Data berhasil ditambahkan ke database.', true);
    } catch (error) {
      console.error('Gagal menyimpan data:', error);
      togglePopup('Gagal menambahkan data ke database.', false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

//   content2 riwayat keluaran
const [data] = useState([
    {
      no: 1,
      nik: '123456',
      nama: 'John Doe',
      tanggal: '2023-06-01',
      jumlah: 5000,
      keterangan: 'Pembayaran tagihan',
    },
    {
      no: 2,
      nik: '789012',
      nama: 'Jane Smith',
      tanggal: '2023-06-02',
      jumlah: 8000,
      keterangan: 'Pembelian barang',
    },
    // Add other data here
  ]);

  const [selectedYear, setSelectedYear] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (selectedYear) {
      const startDate = startOfYear(selectedYear);
      const endDate = endOfYear(selectedYear);
      const filtered = data.filter((item) =>
        isWithinInterval(new Date(item.tanggal), { start: startDate, end: endDate })
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [data, selectedYear]);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handlePrint = () => {
    const doc = new jsPDF();
    const tableData = filteredData.map((item) => [
      item.no,
      item.nik,
      item.nama,
      item.tanggal,
      item.jumlah,
      item.keterangan,
    ]);

    doc.autoTable({
      head: [['No', 'NIK', 'Nama', 'Tanggal', 'Jumlah', 'Keterangan']],
      body: tableData,
    });

    doc.save('laporan_kas_keluar.pdf');
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'no',
        header: 'No',
        size: 70,
      },
      {
        accessorKey: 'nik',
        header: 'NIK',
      },
      {
        accessorKey: 'nama',
        header: 'Nama',
      },
      {
        accessorKey: 'tanggal',
        header: 'Tanggal',
      },
      {
        accessorKey: 'jumlah',
        header: 'Jumlah',
      },
      {
        accessorKey: 'keterangan',
        header: 'Keterangan',
      },
    ],
    []
  );

  const totalValue = useMemo(() => {
    return filteredData.reduce((total, item) => total + item.jumlah, 0);
  }, [filteredData]);

  const totalRow = useMemo(() => {
    return [
      {
        no: '',
        nik: '',
        nama: '',
        tanggal: '',
        jumlah: totalValue,
        keterangan: '',
      },
    ];
  }, [totalValue]);

  const tableData = useMemo(() => [...filteredData, ...totalRow], [filteredData, totalRow]);

  return (
    <>
      <div className="content">
        <div className="wrap">
            <div className="kas-keluar-divisi">
                <div className="header">
                    <h4>Kas Keluar Divisi</h4>
                </div>
                <div className="content1">
            <form onSubmit={handleSubmit}>
              <div className="content-field">
                <div className="content-left">
                  <div className="field">
                    <p>NIK :</p>
                    <input
                      type='text'
                      value={nik}
                      onChange={(e) => setNik(e.target.value)}
                    />
                  </div>
                  <div className="field">
                    <p>Nama Karyawan :</p>
                    <input
                      type='text'
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                    />
                  </div>
                  <div className="field">
                    <p>Tanggal :</p>
                    <div>
                      <DatePicker
                        dateFormat="dd MMMM yyyy"
                        selected={selectedDate}
                        onChange={handleChange}
                        minDate={new Date()}
                        className='control'
                        name='tanggal'
                        locale={id}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="content-right">
                  <div className="field">
                    <p>Jumlah :</p>
                    <input
                      type='number'
                      value={jumlah}
                      onChange={(e) => setJumlah(e.target.value)}
                    />
                  </div>
                  <div className="field">
                    <p>Keterangan :</p>
                    <input
                      type='number'
                      value={keterangan}
                      onChange={(e) => setKeterangan(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="button">
                <button type='submit'>Submit</button>
              </div>
            </form>
            {/* Tampilkan popup jika open bernilai true */}
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>{isSuccess ? 'Sukses' : 'Error'}</DialogTitle>
              <DialogContent>
                <DialogContentText>{popupMessage}</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Tutup
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <div className="header2">
            <h4>Riwayat Kas Keluar Divisi</h4>
          </div>
          <div className="content2">
            <div className="datepicker-container">
                <DatePicker placeholderText='pilih tahun' selected={selectedYear} onChange={handleYearChange} dateFormat="yyyy" showYearPicker />
                <div className="button">
                    <button onClick={handlePrint}>Cetak</button>
                </div>
            </div>
            <div className="table">
                <MaterialReactTable
                    columns={columns}
                    data={tableData}
                    getRowId={(row) => row.no}
                    initialState={{ showColumnFilters: true }}
                    enableColumnResizing
                    columnResizeMode="onChange"
                    enableColumnFilters={false}
                />
            </div>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default KasKeluarDivisi
