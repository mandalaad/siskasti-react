import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import './KasIncome.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { startOfMonth, endOfMonth, isWithinInterval } from 'date-fns';
import { Button } from 'react-bootstrap';
import { AiFillCheckCircle, AiFillCloseCircle, AiFillExclamationCircle } from 'react-icons/ai';
import { MdOutlinePendingActions } from 'react-icons/md';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';


function KasIncome() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tanggal, setTanggal] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await axios
  //       .get ('http://localhost:8080/api/v1/transaksi-kas')
  //       .then ((res)=>{
  //       const data = res.data.data

  //       setData(data)
  //       console.log(data)
  //       })
  //       // const response = await axios.get('http://localhost:8080/api/v1/jabatan');
  //       // setData(response.data);
  //       // const data = response.data;
  //       // setDataGrade(data);
  //       // console.log(data)
  //       // setLoading(true);
  //       // setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //       console.error('Error:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/transaksi-kas');
        const data = response.data.data.map((item) => {
          const formattedDate = new Date(item.tanggal).toLocaleDateString('en-GB');
          return {
            ...item,
            tanggal: formattedDate,
          };
        });
        setData(data);
      } catch (error) {
        setLoading(false);
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  // const [data] = useState([]);
  
  const formattedDate = new Date(tanggal).toLocaleDateString();
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (selectedMonth) {
      const startDate = startOfMonth(selectedMonth);
      const endDate = endOfMonth(selectedMonth);
      const filtered = data.filter((item) =>
        isWithinInterval(new Date(item.tanggal), { start: startDate, end: endDate })
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [data, selectedMonth]);

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  const handleEditClick1 = (id) => {
    // Handle edit button click for the corresponding row
    console.log(`Edit button clicked for ID: ${id}`);
  };
  const handleEditClick2 = (id) => {
    // Handle edit button click for the corresponding row
    console.log(`Edit button clicked for ID: ${id}`);
  };
  const handleEditClick3 = (id) => {
    // Handle edit button click for the corresponding row
    console.log(`Edit button clicked for ID: ${id}`);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'No',
        size: 80,
      },
      {
        accessorKey: 'tanggal',
        header: 'Tanggal',
        customRenderer: (value) => <span>{value}</span>,
      },
      {
        accessorKey: 'nomor',
        header: 'NIK',
      },
      {
        accessorKey: 'namakaryawan',
        header: 'Nama Karyawan',
      },
      {
        accessorKey: 'nominal',
        header: 'Nominal',
      },
      {
        accessorKey: 'buktipembayaran',
        header: 'Bukti Pembayaran',
      },
      {
        accessorKey: 'status',
        header: 'Status',
        Cell: ({ row }) => (
          <div>
            <Button variant="outline" onClick={() => handleEditClick1(row.id)}>
              <AiFillCheckCircle style={{ fontSize: '1.5em', color: 'green' }} />
            </Button>
            {/* <Button variant="outline" onClick={() => handleEditClick2(row.id)}>
              <AiFillExclamationCircle style={{ fontSize: '1.5em', color: 'purple' }} />
            </Button> */}
            <Button variant="outline" onClick={() => handleEditClick3(row.id)}>
              <AiFillCloseCircle style={{ fontSize: '1.5em', color: 'red' }} />
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  const totalValue = useMemo(() => {
    return filteredData.reduce((total, item) => total + item.nominal, 0);
  }, [filteredData]);

  const totalRow = useMemo(() => {
    return [
      {
        id: 'total',
        tanggal: '',
        nik: '',
        namakaryawan: '',
        nominal: totalValue,
        buktipembayaran: '',
        status: '',
      },
    ];
  }, [totalValue]);

  const tableData = useMemo(() => [...filteredData, ...totalRow], [filteredData, totalRow]);

  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const karyawanData = [
    {
      nama: 'Farhan',
    },
    {
      nama: 'Mandala',
    },
    {
      nama: 'Rama',
    },
  ];
  return (
    <>
      <div className="content">
        <div className="wrap">
          <div className="kasmasuk-departement">
            <div className="header">
              <h4>Kas Masuk Departement</h4>
            </div>
            <div className="datepicker-container">
              <DatePicker
                selected={selectedMonth}
                onChange={handleMonthChange}
                dateFormat="MMMM yyyy"
                showMonthYearPicker
                placeholderText='pilih bulan'
              />
            </div>
            <div className="table">
              <MaterialReactTable
                columns={columns}
                data={tableData}
                getRowId={(row) => row.id}
                initialState={{ showColumnFilters: true }}
                enableColumnResizing
                columnResizeMode="onChange"
                enableColumnFilters={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KasIncome;
