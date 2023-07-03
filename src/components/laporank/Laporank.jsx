// import React, { useEffect, useMemo, useRef, useState } from 'react'
// import './Laporank.css'
// import { MaterialReactTable } from 'material-react-table'
// import jsPDF from 'jspdf';
// import {AiFillCheckCircle}from 'react-icons/ai'
// import { Button } from 'react-bootstrap';

// function Kasmasukdivisi() {
//   // const fetchData = async () => {
//   //   try {
//   //     const response = await axios.get('http://localhost:3002/pemasukan');
//   //     setData(response.data);
//   //   } catch (error) {
//   //     console.error('Error fetching data:', error);
//   //   }
//   // };
//   // useEffect(() => {
//   //   fetchData();
//   // }, []);
  
//   //data and fetching state
//   const [data, setData] = useState([
//     {
//       id: 1,
//       tanggal: '2023-06-01',
//       nama: 'John Doe',
//       bulan: 'Juni',
//       nominal: 20000,
//     //   aksi: ,
//     },
//     {
//       id: 2,
//       tanggal: '2023-05-01',
//       nama: 'Jane Smith',
//       bulan: 'Mei',
//       nominal: 2000000,
      
//     },
//     {
//       id: 3,
//       tanggal: '2023-04-01',
//       nama: 'John Doe',
//       bulan: 'April',
//       nominal: 20000,
      
//     },
//     {
//       id: 4,
//       tanggal: '2023-03-01',
//       nama: 'John Doe',
//       bulan: 'Maret',
//       nominal: 20000,
      
//     },
//     {
//       id: 5,
//       tanggal: '2023-02-01',
//       nama: 'John Doe',
//       bulan: 'Februari',
//       nominal: 20000,
      
//     },
    
//   ]);

  
//   useEffect(() => {
//     setFilteredData(data);
//   }, [data]);
//   // const [data, setData] = useState([]);
//   const [isError, setIsError] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isRefetching, setIsRefetching] = useState(false);
//   const [rowCount, setRowCount] = useState(0);

//   //table state
//   const [columnFilters, setColumnFilters] = useState([]);
//   const [globalFilter, setGlobalFilter] = useState('');
//   const [sorting, setSorting] = useState([]);
//   const [pagination, setPagination] = useState({
//     pageIndex: 0,
//     pageSize: 10,
//   });

//   // if you want to avoid useEffect, look at the React Query example instead
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       if (!data.length) {
// //         setIsLoading(true);
// //       } else {
// //         setIsRefetching(true);
// //       }

// //       const url = new URL(
// //         '/api/data',
// //         process.env.NODE_ENV === 'production'
// //           ? 'https://www.material-react-table.com'
// //           : 'http://localhost:3000',
// //       );
// //       url.searchParams.set(
// //         'start',
// //         `${pagination.pageIndex * pagination.pageSize}`,
// //       );
// //       url.searchParams.set('size', `${pagination.pageSize}`);
// //       url.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
// //       url.searchParams.set('globalFilter', globalFilter ?? '');
// //       url.searchParams.set('sorting', JSON.stringify(sorting ?? []));

// //       try {
// //         const response = await fetch(url.href);
// //         const json = await response.json();
// //         setData(json.data);
// //         setRowCount(json.meta.totalRowCount);
// //       } catch (error) {
// //         setIsError(true);
// //         console.error(error);
// //         return;
// //       }
// //       setIsError(false);
// //       setIsLoading(false);
// //       setIsRefetching(false);
// //     };
// //     fetchData();
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [
// //     columnFilters,
// //     globalFilter,
// //     pagination.pageIndex,
// //     pagination.pageSize,
// //     sorting,
// //   ]);
//   const handleEditClick = (id) => {
//     // Handle edit button click for the corresponding row
//     console.log(`Edit button clicked for ID: ${id}`);
//   };

// const handleButton1Click = (id) => {
//   // Handle button 1 click for the corresponding row
//   console.log(`Button 1 clicked for ID: ${id}`);
// };

// const handleButton2Click = (id) => {
//   // Handle button 2 click for the corresponding row
//   console.log(`Button 2 clicked for ID: ${id}`);
// };

//   const columns = useMemo(
//     () => [
//       {
//         accessorKey: 'id',
//         header: 'No',
//       },
//       {
//         accessorKey: 'tanggal',
//         header: 'Tanggal',
//       },
//       {
//         accessorKey: 'bulan',
//         header: 'Bulan',
//       },
//       {
//         accessorKey: 'nominal',
//         header: 'Nominal',
//       },
//       {
//         accessorKey: 'status',
//         header: 'Status',
//         Cell: ({ row }) => (
//           <Button variant='outline' onClick={() => handleEditClick(row.id)}>
//               <AiFillCheckCircle style={{fontSize:"1.5em", color:"green"}}/>
//               </Button>
//         ), 
//       },
//       // column definitions...
//     ],
//     []
//   );

//   const totalValue = useMemo(() => {
//     return data.reduce((total, item) => total + item.nominal, 0);
//   }, [data]);

//   // Create a separate row for the total
//   const totalRow = useMemo(() => {
//     return [
//       {
//         id: 'total',
//         tanggal: '',
//         bulan: '',
//         nominal: totalValue, // Update the nominal property with the total value
//         status: '', // Set an empty string for the status property in the total row
//       },
//     ];
//   }, [totalValue]);

//   const tableData = useMemo(() => [...data, ...totalRow], [data, totalRow]);


//   const [filteredData, setFilteredData] = useState([]);
//   const handlePrint = () => {
//     const doc = new jsPDF();
//     doc.autoTable({
//       head: [['No', 'Nama', 'Tanggal', 'NIK', 'Grade', 'Nominal', 'Unit Kerja', 'Status']],
//       body: filteredData.map(({ id, name, tanggal, nik, grade, nominal, payment, status }) => [id, name, tanggal, nik, grade, nominal, payment, status]),
//     });
//     doc.save('table.pdf');
//   };
  
//   return (
//     <div className='content'>
//         <div className='wrap'>
//             <div className='laporan'>
//                 <div className='header'>
//                     <h4>Laporan Karyawan</h4>
//                 </div>
//                     <MaterialReactTable
//                         enableColumnFilters={false}
//                         columns={columns}
//                         data={tableData}
//                         // enableRowSelection
//                         getRowId={(row) => row.phoneNumber}
//                         initialState={{ showColumnFilters: true }}
//                         // manualFiltering
//                         manualPagination
//                         manualSorting
//                         muiToolbarAlertBannerProps={
//                             isError
//                             ? {
//                                 color: 'error',
//                                 children: 'Error loading data',
//                                 }
//                             : undefined
//                         }
//                         onColumnFiltersChange={setColumnFilters}
//                         onGlobalFilterChange={setGlobalFilter}
//                         onPaginationChange={setPagination}
//                         onSortingChange={setSorting}
//                         rowCount={rowCount}
//                         state={{
//                           columnFilters,
//                           globalFilter,
//                           isLoading,
//                           pagination,
//                           showAlertBanner: isError,
//                           showProgressBars: isRefetching,
//                           sorting,
//                         }}
//                         />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Kasmasukdivisi

import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import './Laporank.css'
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

function Kasmasukdivisi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
        .get ('http://localhost:8080/api/v1/transaksi-kas')
        .then ((res)=>{
        const data = res.data.data
        setData(data)
        console.log(data)
        })
        // const response = await axios.get('http://localhost:8080/api/v1/jabatan');
        // setData(response.data);
        // const data = response.data;
        // setDataGrade(data);
        // console.log(data)
        // setLoading(true);
        // setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  // Table state
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: '60',
      },
      {
        accessorKey: 'nomor',
        header: 'Nomor Induk',
        size: '60',
      },
      {
        accessorKey: 'nama',
        header: 'Nama',
      },
      {
        accessorKey: 'akunBendaharaDep',
        header: 'Departement',
      },
      {
        accessorKey: 'nominal',
        header: 'Nominal',
      },
      {
        accessorKey: 'tanggal',
        header: 'Tanggal',
      },
      // {
      //   accessorKey: 'aksi',
      //   header: 'Aksi',
      //   Cell: ({ row }) => (
      //     <button onClick={() => handleShow(row.id)}>Edit</button>
      //   ),
      // },
    ],
    []
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  return (
    <>
      <div className="content">
        <div className="wrap">
            <div className="grade">
                <div className="header">
                    <h4>Laporan Karyawan</h4>
                </div>
                <div className="data">
                    <div className="content-left">
                        <div className="button">
                            <button>tambah</button>
                        </div>
                    </div>
                </div>
                <MaterialReactTable
                  columns={columns}
                  data={data}
                  getRowId={(row) => row.id}
                  initialState={{ showColumnFilters: true }}
                        // manualFiltering
                        manualPagination
                        manualSorting
                        onColumnFiltersChange={setColumnFilters}
                        onGlobalFilterChange={setGlobalFilter}
                        onPaginationChange={setPagination}
                        onSortingChange={setSorting}
                        
                  state={{
                    columnFilters,
                    globalFilter,
                    isLoading: loading,
                    pagination,
                    sorting,
                  }}
                />

            </div>
        </div>
      </div>
    </>
  )
}

export default Kasmasukdivisi
