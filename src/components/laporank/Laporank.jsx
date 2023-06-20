import React, { useEffect, useMemo, useRef, useState } from 'react'
import './Laporank.css'
import { MaterialReactTable } from 'material-react-table'
import jsPDF from 'jspdf';
import {AiFillCheckCircle}from 'react-icons/ai'
import { Button } from 'react-bootstrap';

function Kasmasukdivisi() {
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
      departement: 'Departemen IT Business Analyst',
      nominal: 1000000,
    //   aksi: ,
    },
    {
      id: 2,
      tanggal: '2023-06-02',
      nama: 'Jane Smith',
      departement: 'Departemen IT Business Analyst',
      nominal: 2000000,
      
    },
    {
      id: 3,
      tanggal: '2023-06-05',
      nama: 'John Doe',
      departement: 'Departemen IT Business Analyst',
      nominal: 1000000,
      
    },
    {
      id: 4,
      tanggal: '2023-06-08',
      nama: 'Jane Smith',
      departement: 'Departemen IT Business Analyst',
      nominal: 2000000,
      
    },
    {
      id: 5,
      tanggal: '2023-06-10',
      nama: 'John Doe',
      departement: 'Departemen IT Business Analyst',
      nominal: 1000000,
      
    },
    {
      id: 6,
      tanggal: '2023-06-11',
      nama: 'Jane Smith',
      departement: 'Departemen IT Business Analyst',
      nominal: 2000000,
    },
    {
      id: 7,
      tanggal: '2023-06-12',
      nama: 'John Doe',
      departement: 'Departemen IT Business Analyst',
      nominal: 1000000,
      
    },
    {
      id: 8,
      tanggal: '2023-06-13',
      nama: 'Jane Smith',
      departement: 'Departemen IT Business Analyst',
      nominal: 2000000,
      
    },
    {
      id: 9,
      tanggal: '2023-07-01',
      nama: 'John Doe',
      departement: 'Departemen IT Business Analyst',
      nominal: 1000000,
      
    },
    {
      id: 10,
      tanggal: '2023-07-02',
      nama: 'Jane Smith',
      departement: 'Departemen IT Business Analyst',
      nominal: 2000000,
    
    },
  ]);

  // data 2
  const [data2, setData2] = useState([
    {
      id: 1,
      tanggal: '2023-06-01',
      nama: 'John Doe',
      departement: 'Departemen IT Business Analyst',
      nominal: 1000000,
    //   aksi: ,
    },
    {
      id: 2,
      tanggal: '2023-06-02',
      nama: 'Jane Smith',
      departement: 'Departemen IT Business Analyst',
      nominal: 2000000,
      
    },
    {
      id: 3,
      tanggal: '2023-06-05',
      nama: 'John Doe',
      departement: 'Departemen IT Business Analyst',
      nominal: 1000000,
      
    },
    {
      id: 4,
      tanggal: '2023-06-08',
      nama: 'Jane Smith',
      departement: 'Departemen IT Business Analyst',
      nominal: 2000000,
      
    },
    {
      id: 5,
      tanggal: '2023-06-10',
      nama: 'John Doe',
      departement: 'Departemen IT Business Analyst',
      nominal: 1000000,
      
    },
    {
      id: 6,
      tanggal: '2023-06-11',
      nama: 'Jane Smith',
      departement: 'Departemen IT Business Analyst',
      nominal: 2000000,
    },
    {
      id: 7,
      tanggal: '2023-06-12',
      nama: 'John Doe',
      departement: 'Departemen IT Business Analyst',
      nominal: 1000000,
      
    },
    {
      id: 8,
      tanggal: '2023-06-13',
      nama: 'Jane Smith',
      departement: 'Departemen IT Business Analyst',
      nominal: 2000000,
      
    },
    {
      id: 9,
      tanggal: '2023-07-01',
      nama: 'John Doe',
      departement: 'Departemen IT Business Analyst',
      nominal: 1000000,
      
    },
    {
      id: 10,
      tanggal: '2023-07-02',
      nama: 'Jane Smith',
      departement: 'Departemen IT Business Analyst',
      nominal: 2000000,
    
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

const handleButton1Click = (id) => {
  // Handle button 1 click for the corresponding row
  console.log(`Button 1 clicked for ID: ${id}`);
};

const handleButton2Click = (id) => {
  // Handle button 2 click for the corresponding row
  console.log(`Button 2 clicked for ID: ${id}`);
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
        accessorKey: 'bulan',
        header: 'Bulan',
      },
      {
        accessorKey: 'nominal',
        header: 'Nominal',
      },
      {
        accessorKey: 'status',
        header: 'Status',
      },
      // column definitions...
    ],
    []
  );

  const totalValue = useMemo(() => {
    return data.reduce((total, item) => total + item.nominal, 0);
  }, [data]);

  // Create a separate row for the total
  const totalRow = useMemo(() => {
    return [
      {
        id: 'total',
        tanggal: '',
        bulan: '',
        nominal: totalValue, // Update the nominal property with the total value
        status: '', // Set an empty string for the status property in the total row
      },
    ];
  }, [totalValue]);

  const tableData = useMemo(() => [...data, ...totalRow], [data, totalRow]);


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
            <div className='kasmasuk-divisi'>
                <div className='header'>
                    <h4>Kas Masuk Bendahara Divisi</h4>
                </div>
                    <MaterialReactTable
                        enableColumnFilters={false}
                        columns={columns}
                        data={tableData}
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

export default Kasmasukdivisi