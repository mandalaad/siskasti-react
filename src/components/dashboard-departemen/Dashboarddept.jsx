import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import './dashboarddepartemen.css'
import jsPDF from 'jspdf';
import axios from 'axios';
const Dashboarddept = () => {

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3002/pemasukan');
  //     setData(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  
  //data and fetching state
   const [data, setData] = useState([
    {
      id: 1,
      tanggal: '2023-06-01',
      nama: 'John Doe',
      nik: '1234567890',
      grade: 'A',
      nominal: 1000000,
      payment: 'Transfer Bank',
      status: 'Lunas',
    },
    {
      id: 2,
      tanggal: '2023-06-02',
      nama: 'Jane Smith',
      nik: '0987654321',
      grade: 'B',
      nominal: 2000000,
      payment: 'Transfer Bank',
      status: 'Lunas',
    },
    {
      id: 3,
      tanggal: '2023-06-05',
      nama: 'John Doe',
      nik: '1234567890',
      grade: 'A',
      nominal: 1000000,
      payment: 'Transfer Bank',
      status: 'Lunas',
    },
    {
      id: 4,
      tanggal: '2023-06-08',
      nama: 'Jane Smith',
      nik: '0987654321',
      grade: 'B',
      nominal: 2000000,
      payment: 'Transfer Bank',
      status: 'Lunas',
    },
    {
      id: 5,
      tanggal: '2023-06-10',
      nama: 'John Doe',
      nik: '1234567890',
      grade: 'A',
      nominal: 1000000,
      payment: 'Transfer Bank',
      status: 'Lunas',
    },
    {
      id: 6,
      tanggal: '2023-06-11',
      nama: 'Jane Smith',
      nik: '0987654321',
      grade: 'B',
      nominal: 2000000,
      payment: 'Transfer Bank',
      status: 'Lunas',
    },
    {
      id: 7,
      tanggal: '2023-06-12',
      nama: 'John Doe',
      nik: '1234567890',
      grade: 'A',
      nominal: 1000000,
      payment: 'Transfer Bank',
      status: 'Lunas',
    },
    {
      id: 8,
      tanggal: '2023-06-13',
      nama: 'Jane Smith',
      nik: '0987654321',
      grade: 'B',
      nominal: 2000000,
      payment: 'Transfer Bank',
      status: 'Lunas',
    },
    {
      id: 9,
      tanggal: '2023-07-01',
      nama: 'John Doe',
      nik: '1234567890',
      grade: 'A',
      nominal: 1000000,
      payment: 'Transfer Bank',
      status: 'Lunas',
    },
    {
      id: 10,
      tanggal: '2023-07-02',
      nama: 'Jane Smith',
      nik: '0987654321',
      grade: 'B',
      nominal: 2000000,
      payment: 'Transfer Bank',
      status: 'Lunas',
    },
  ]);
  
  useEffect(() => {
    setFilteredData(data);
  }, [data]);
  // const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  //table state
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  // if you want to avoid useEffect, look at the React Query example instead
  useEffect(() => {
    const fetchData = async () => {
      if (!data.length) {
        setIsLoading(true);
      } else {
        setIsRefetching(true);
      }

      const url = new URL(
        '/api/data',
        process.env.NODE_ENV === 'production'
          ? 'https://www.material-react-table.com'
          : 'http://localhost:3000',
      );
      url.searchParams.set(
        'start',
        `${pagination.pageIndex * pagination.pageSize}`,
      );
      url.searchParams.set('size', `${pagination.pageSize}`);
      url.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
      url.searchParams.set('globalFilter', globalFilter ?? '');
      url.searchParams.set('sorting', JSON.stringify(sorting ?? []));

      try {
        const response = await fetch(url.href);
        const json = await response.json();
        setData(json.data);
        setRowCount(json.meta.totalRowCount);
      } catch (error) {
        setIsError(true);
        console.error(error);
        return;
      }
      setIsError(false);
      setIsLoading(false);
      setIsRefetching(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    columnFilters,
    globalFilter,
    pagination.pageIndex,
    pagination.pageSize,
    sorting,
  ]);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'No',
      },
      {
        accessorKey: 'tanggal',
        header: 'Tanggal',
      },
      {
        accessorKey: 'nama',
        header: 'Nama',
      },
      {
        accessorKey: 'nik',
        header: 'NIK',
      },
      {
        accessorKey: 'grade',
        header: 'Grade',
      },
      {
        accessorKey: 'nominal',
        header: 'Jumlah',
      },
      {
        accessorKey: 'payment',
        header: 'Payment Mode',
      },
      {
        accessorKey: 'status',
        header: 'Status',
      },
      //column definitions...
    ],
    [],
  );
  const [filteredData, setFilteredData] = useState([]);
  const handlePrint = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['No', 'Nama', 'Tanggal', 'NIK', 'Grade', 'Nominal', 'Unit Kerja', 'Status']],
      body: filteredData.map(({ id, name, tanggal, nik, grade, nominal, payment, status }) => [id, name, tanggal, nik, grade, nominal, payment, status]),
    });
    doc.save('table.pdf');
  };
  return (

    <div className='content'>
      <div className='wrap'>
        <div className='departemen'>
          <div className='header'>
            <h4>Dashboard Bendahara Departemen</h4>
          </div>
          <div>
            <button className="button-cetak" onClick={handlePrint}>Print</button>
          </div>
            <MaterialReactTable
              columns={columns}
              data={data}
              enableRowSelection
              getRowId={(row) => row.phoneNumber}
              initialState={{ showColumnFilters: true }}
              // manualFiltering
              manualPagination
              manualSorting
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
    
  );
};

export default Dashboarddept;