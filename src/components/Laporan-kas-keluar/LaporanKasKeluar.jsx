import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import './LaporanKasKeluar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { startOfYear, endOfYear, isWithinInterval } from 'date-fns';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

function LaporanKasKeluar() {
  const [data] = useState([
    {
      id: 1,
      tanggal: '2023-06-01',
      jumlah: 5000,
      bulan: 'Januari',
      status: 'Lunas',
    },
    {
      id: 2,
      tanggal: '2023-06-02',
      jumlah: 8000,
      bulan: 'Februari',
      status: 'Belum Lunas',
    },
    // Tambahkan data lainnya di sini
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
    const tableData = filteredData.map((item) => [item.id, item.tanggal, item.bulan, item.jumlah, item.status]);

    doc.autoTable({
      head: [['No', 'Tanggal', 'Bulan', 'Jumlah', 'Status']],
      body: tableData,
    });

    doc.save('laporan_kas_keluar.pdf');
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'No',
        size: 70,
      },
      {
        accessorKey: 'tanggal',
        header: 'Tanggal',
      },
      {
        accessorKey: 'bulan',
        header: 'Bulan',
      },
      {
        accessorKey: 'jumlah',
        header: 'Jumlah',
      },
      {
        accessorKey: 'status',
        header: 'Status',
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
        id: 'total',
        tanggal: '',
        bulan: '',
        jumlah: totalValue,
        status: '',
      },
    ];
  }, [totalValue]);

  const tableData = useMemo(() => [...filteredData, ...totalRow], [filteredData, totalRow]);

  return (
    <>
      <div className="content">
        <div className="wrap">
          <div className="laporan-kas-keluar">
            <div className="header">
              <h4>Laporan Kas Keluar</h4>
            </div>
            <div className="datepicker-container">
              <DatePicker
                selected={selectedYear}
                onChange={handleYearChange}
                dateFormat="yyyy"
                showYearPicker
              />
                <div className="button">
                <button onClick={handlePrint}>Cetak</button>
                </div>
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

export default LaporanKasKeluar;
