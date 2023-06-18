import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import './Dana.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import id from 'date-fns/locale/id';
import axios from 'axios';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


function Dana() {

  const [selectedDate, setSelectedDate] = useState(null);
  const handleChange = (date) => {
    setSelectedDate(date);
  };

  const [namaBendaharaDep, setNamaBendaharaDep] = useState('');
  const [nominal, setNominal] = useState('');
  const [memo, setMemo] = useState('');
  const [kepada, setKepada] = useState('');
  const [open, setOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const togglePopup = (message, success) => {
    setOpen(!open);
    setPopupMessage(message);
    setIsSuccess(success);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      namaBendaharaDep,
      nominal,
      memo,
      tanggal: selectedDate ? selectedDate.toISOString() : '',
      kepada,
    };

    try {
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

//   content2
const [data, setData] = useState([
    {
      no: 1,
      tanggal: '2023-06-01',
      namabendahara: 'John Doe',
      jumlah: 5000,
      keterangan: 'Lorem ipsum',
      status: 'Aktif',
    },
    {
      no: 2,
      tanggal: '2023-06-02',
      namabendahara: 'Jane Smith',
      jumlah: 8000,
      keterangan: 'Dolor sit amet',
      status: 'Aktif',
    },
    {
      no: 2,
      tanggal: '2023-06-02',
      namabendahara: 'Jane Smith',
      jumlah: 8000,
      keterangan: 'Dolor sit amet',
      status: 'Aktif',
    },
    {
      no: 2,
      tanggal: '2023-06-02',
      namabendahara: 'Jane Smith',
      jumlah: 8000,
      keterangan: 'Dolor sit amet',
      status: 'Aktif',
    },
    {
      no: 2,
      tanggal: '2023-06-02',
      namabendahara: 'Jane Smith',
      jumlah: 8000,
      keterangan: 'Dolor sit amet',
      status: 'Aktif',
    },
    {
      no: 2,
      tanggal: '2023-06-02',
      namabendahara: 'Jane Smith',
      jumlah: 8000,
      keterangan: 'Dolor sit amet',
      status: 'Aktif',
    },
    {
      no: 2,
      tanggal: '2023-06-02',
      namabendahara: 'Jane Smith',
      jumlah: 8000,
      keterangan: 'Dolor sit amet',
      status: 'Aktif',
    },
    {
      no: 2,
      tanggal: '2023-06-02',
      namabendahara: 'Jane Smith',
      jumlah: 8000,
      keterangan: 'Dolor sit amet',
      status: 'Aktif',
    },
    {
      no: 2,
      tanggal: '2023-06-02',
      namabendahara: 'Jane Smith',
      jumlah: 8000,
      keterangan: 'Dolor sit amet',
      status: 'Aktif',
    },
    {
      no: 2,
      tanggal: '2023-06-02',
      namabendahara: 'Jane Smith',
      jumlah: 8000,
      keterangan: 'Dolor sit amet',
      status: 'Aktif',
    },
    {
      no: 2,
      tanggal: '2023-06-02',
      namabendahara: 'Jane Smith',
      jumlah: 8000,
      keterangan: 'Dolor sit amet',
      status: 'Aktif',
    },
    {
      no: 2,
      tanggal: '2023-06-02',
      namabendahara: 'Jane Smith',
      jumlah: 8000,
      keterangan: 'Dolor sit amet',
      status: 'Aktif',
    },
    {
      no: 2,
      tanggal: '2023-06-02',
      namabendahara: 'Jane Smith',
      jumlah: 8000,
      keterangan: 'Dolor sit amet',
      status: 'Aktif',
    },
    {
      no: 2,
      tanggal: '2023-06-02',
      namabendahara: 'Jane Smith',
      jumlah: 8000,
      keterangan: 'Dolor sit amet',
      status: 'Aktif',
    },
    // ... add other data here
  ]) 
  
  
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  // table state
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!data.length) {
//         setIsLoading(true);
//       } else {
//         setIsRefetching(true);
//       }

//       const url = new URL('http://localhost:8000/data');
//       url.searchParams.set(
//         '_start',
//         `${pagination.pageIndex * pagination.pageSize}`,
//       );
//       url.searchParams.set('_limit', `${pagination.pageSize}`);
//       url.searchParams.set('q', globalFilter ?? '');

//       try {
//         const response = await fetch(url.href);
//         const json = await response.json();
//         setData(json);
//         setRowCount(response.headers.get('X-Total-Count'));
//       } catch (error) {
//         setIsError(true);
//         console.error(error);
//         return;
//       }
//       setIsError(false);
//       setIsLoading(false);
//       setIsRefetching(false);
//     };
//     fetchData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [
//     columnFilters,
//     globalFilter,
//     pagination.pageIndex,
//     pagination.pageSize,
//     sorting,
//   ]);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'no',
        header: 'No',
        size:'20',
      },
      {
        accessorKey: 'tanggal',
        header: 'Tanggal',
      },
      {
        accessorKey: 'namabendahara',
        header: 'Nama Bendahara',
      },
      {
        accessorKey: 'jumlah',
        header: 'Jumlah',
      },
      {
        accessorKey: 'keterangan',
        header: 'Keterangan',
      },
      {
        accessorKey: 'status',
        header: 'Status',
      },
    ],
    [],
  );
  return (
    <>
    <div className="content">
        <div className="wrap">
            <div className="dana">
                <div className="header1">
                    <h4>Meminta Dana</h4>
                </div>
                <form onSubmit={handleSubmit}>
                <div className="content1">
                    <div className="content-left">
                        <div className="field">
                            <p>Nama Bendahara Dep :</p>
                            <input
                            type="text"
                            value={namaBendaharaDep}
                            onChange={(e) => setNamaBendaharaDep(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <p>Nominal :</p>
                            <input
                            type="number"
                            value={nominal}
                            onChange={(e) => setNominal(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <p>Memo :</p>
                            <input
                            type="text"
                            value={memo}
                            onChange={(e) => setMemo(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="field">
                        <p>Tanggal :</p>
                        <div>
                        <DatePicker
                            dateFormat="dd MMMM yyyy"
                            selected={selectedDate}
                            onChange={handleChange}
                            minDate={new Date()}
                            className="control"
                            name="tanggal"
                            locale={id}
                            required
                        />
                        </div>
                        </div>
                        <div className="field">
                            <p>Kepada :</p>
                            <input
                            type="text"
                            value={kepada}
                            onChange={(e) => setKepada(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="button">
                    <button type="submit">Submit</button>
                </div>
                </form>
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
                <div className="header2">
                    <h4>History Dana</h4>
                </div>
                <div className="content2">
                <MaterialReactTable
                    columns={columns}
                    data={data}
                    getRowId={(row) => row.no}
                    initialState={{ showColumnFilters: true }}
                    enableColumnResizing
                    columnResizeMode="onChange"
                    enableColumnFilters={false}
                    // manualFiltering
                    // manualPagination
                    // manualSorting
                    muiToolbarAlertBannerProps={
                    isError
                        ? {
                            color: 'error',
                            children: 'Error loading data',
                        }
                        : undefined
                    }
                    onColumnFiltersChange={setColumnFilters}
                    onGlobalFilterChange={setGlobalFilter}
                    onPaginationChange={setPagination}
                    onSortingChange={setSorting}
                    rowCount={rowCount}
                    state={{
                    columnFilters,
                    globalFilter,
                    isLoading,
                    pagination,
                    showAlertBanner: isError,
                    showProgressBars: isRefetching,
                    sorting,
                    }}
                />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dana