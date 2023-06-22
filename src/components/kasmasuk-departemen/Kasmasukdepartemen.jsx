import React, { useEffect, useMemo, useRef, useState } from 'react'
import './kasmasukdepartemen.css'
import { MaterialReactTable } from 'material-react-table'
import jsPDF from 'jspdf';
import {AiFillCheckCircle}from 'react-icons/ai'
import { Button } from 'react-bootstrap';
import 'jspdf-autotable';
function Kasmasukdepartemen() {
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

  //data kasmasuk departemen
  const [data, setData] = useState([
    {
      id: 1,
      tanggal: '2023-06-01',
      nama: 'John Doe',
      departement: 'Departemen IT Business Analyst',
      nik: '6969696969',
      nominal: 1000000,
    //   aksi: ,
    },
    {
      id: 2,
      tanggal: '2023-06-02',
      nama: 'Jane Smith',
      departement: 'Departemen IT Business Analyst',
      nik: '6969696969',
      nominal: 2000000,
      
    },
    {
      id: 3,
      tanggal: '2023-06-05',
      nama: 'John Doe',
      departement: 'Departemen IT Business Analyst',
      nik: '6969696969',
      nominal: 1000000,
      
    },
    {
      id: 4,
      tanggal: '2023-06-08',
      nama: 'Jane Smith',
      departement: 'Departemen IT Business Analyst',
      nik: '6969696969',
      nominal: 2000000,
      
    },
    {
      id: 5,
      tanggal: '2023-06-10',
      nama: 'John Doe',
      departement: 'Departemen IT Business Analyst',
      nik: '6969696969',
      nominal: 1000000,
      
    },
    {
      id: 6,
      tanggal: '2023-06-11',
      nama: 'Jane Smith',
      departement: 'Departemen IT Business Analyst',
      nik: '6969696969',
      nominal: 2000000,
    },
    {
      id: 7,
      tanggal: '2023-06-12',
      nama: 'John Doe',
      departement: 'Departemen IT Business Analyst',
      nik: '6969696969',
      nominal: 1000000,
      
    },
    {
      id: 8,
      tanggal: '2023-06-13',
      nama: 'Jane Smith',
      departement: 'Departemen IT Business Analyst',
      nik: '6969696969',
      nominal: 2000000,
      
    },
    {
      id: 9,
      tanggal: '2023-07-01',
      nama: 'John Doe',
      departement: 'Departemen IT Business Analyst',
      nik: '6969696969',
      nominal: 1000000,
      
    },
    {
      id: 10,
      tanggal: '2023-07-02',
      nama: 'Jane Smith',
      departement: 'Departemen IT Business Analyst',
      nik: '6969696969',
      nominal: 2000000,
    
    },
  ]);

  // data 2
  const [data2, setData2] = useState([
    {
        id: 1,
        tanggal: '2023-07-02',
        nama: 'Jane Smith',
        nominal: 2000000,
    },
    {
        id: 2,
        tanggal: '2023-06-02',
        nama: 'Jane Smith',
        nominal: 2000000,
    },
    {
      id: 3,
      tanggal: '2023-06-05',
      nama: 'John Doe',
      nominal: 1000000,
    },
    // ...sisa objek dalam array
  ]);
  
  
  useEffect(() => {
    setFilteredData(data2);
  }, [data2]);
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
//   useEffect(() => {
//     const fetchData = async () => {
//       if (!data.length) {
//         setIsLoading(true);
//       } else {
//         setIsRefetching(true);
//       }

//       const url = new URL(
//         '/api/data',
//         process.env.NODE_ENV === 'production'
//           ? 'https://www.material-react-table.com'
//           : 'http://localhost:3000',
//       );
//       url.searchParams.set(
//         'start',
//         `${pagination.pageIndex * pagination.pageSize}`,
//       );
//       url.searchParams.set('size', `${pagination.pageSize}`);
//       url.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
//       url.searchParams.set('globalFilter', globalFilter ?? '');
//       url.searchParams.set('sorting', JSON.stringify(sorting ?? []));

//       try {
//         const response = await fetch(url.href);
//         const json = await response.json();
//         setData(json.data);
//         setRowCount(json.meta.totalRowCount);
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
  const handleEditClick = (id) => {
    // Handle edit button click for the corresponding row
    console.log(`Edit button clicked for ID: ${id}`);
  };

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
        accessorKey: 'departement',
        header: 'Departement',
      },
      {
        accessorKey: 'nominal',
        header: 'Jumlah',
      },
      
      {
        accessorKey: 'aksi',
        header: 'Aksi',
        Cell: ({ row }) => (
            <Button variant='outline' onClick={() => handleEditClick(row.id)}>
                <AiFillCheckCircle style={{fontSize:"1.5em", color:"green"}}/>
                </Button>
          ),   
      },
      //column definitions...
    ],
    [],
  );
  const [filteredData, setFilteredData] = useState([]);
  const handlePrint = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['No', 'Nama', 'Tanggal', 'Nominal']],
      body: filteredData.map(({ id, nama, tanggal, nominal }) => [id, nama, tanggal, nominal]),
    });
    doc.save('table.pdf');
  };

  //columns 2
  const columns2 = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'Nomor',
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
        accessorKey: 'nominal',
        header: 'Jumlah',
      },
      
    //   {
    //     accessorKey: 'aksi',
    //     header: 'Aksi',
    //     Cell: ({ row }) => (
    //         <Button variant='outline' onClick={() => handleEditClick(row.id)}>
    //             <AiFillCheckCircle style={{fontSize:"1.5em", color:"green"}}/>
    //             </Button>
    //       ),   
    //   },
      //column definitions...
    ],
    [],
  );
  
  return (
    <div className='content'>
        <div className='wrap'>
            <div className='kasmasuk-departemen'>
                <div className='header'>
                    <h4>Kas Masuk Bendahara Departemen</h4>
                </div>
                    <MaterialReactTable
                        enableColumnFilters={false}
                        columns={columns}
                        data={data}
                        // enableRowSelection
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
            <div className='laporan-kasmasuk'>
                <div className='header'>
                    <h4>Laporan kas masuk bendahara departemen</h4>
                </div>
                <div className='text-end'>
                    <button className="button-cetak mb-3" onClick={handlePrint}>Print</button>
                </div>
                    <MaterialReactTable
                        enableColumnFilters={false}
                        columns={columns2}
                        data={data2}
                        // enableRowSelection
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
  )
}

export default Kasmasukdepartemen