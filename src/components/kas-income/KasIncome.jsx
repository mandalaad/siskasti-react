import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import './KasIncome.css'

const KasIncome = () => {
  //data and fetching state
  const [data, setData] = useState([
    {
      id: 1,
      tanggal: '2023-06-01',
      namakaryawan: 'John Doe',
      jumlah: 5000,
      aksi: 'Edit',
    },
    {
      id: 2,
      tanggal: '2023-06-02',
      namakaryawan: 'Jane Smith',
      jumlah: 8000,
      aksi: 'Edit',
    },
    // ... tambahkan data lainnya di sini
  ]);
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
// const [data, setData] = useState([]);
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


// useEffect(() => {
//   const fetchData = async () => {
//     if (!data.length) {
//       setIsLoading(true);
//     } else {
//       setIsRefetching(true);
//     }

//     const url = new URL(
//       '/api/data',
//       process.env.NODE_ENV === 'production'
//         ? 'https://www.material-react-table.com'
//         : 'http://localhost:3000',
//     );
//     url.searchParams.set(
//       'start',
//       `${pagination.pageIndex * pagination.pageSize}`,
//     );
//     url.searchParams.set('size', `${pagination.pageSize}`);
//     url.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
//     url.searchParams.set('globalFilter', globalFilter ?? '');
//     url.searchParams.set('sorting', JSON.stringify(sorting ?? []));

//     try {
//       const response = await fetch(url.href);
//       const json = await response.json();
//       setData(json.data);
//       setRowCount(json.meta.totalRowCount);
//     } catch (error) {
//       setIsError(true);
//       console.error(error);
//       return;
//     }
//     setIsError(false);
//     setIsLoading(false);
//     setIsRefetching(false);
//   };
//   fetchData();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [
//   columnFilters,
//   globalFilter,
//   pagination.pageIndex,
//   pagination.pageSize,
//   sorting,
// ]);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'tanggal',
        header: 'Tanggal',
      },
      {
        accessorKey: 'namakaryawan',
        header: 'Nama Karyawan',
      },
      {
        accessorKey: 'jumlah',
        header: 'Jumlah',
      },
      {
        accessorKey: 'aksi',
        header: 'Aksi',
      },
    ],
    [],
  );

  return (
    <div className="content">
      <div className="wrap">
        <div className="kas-masuk">
        <div className="header">
            <h4>Kas Masuk</h4>
        </div>
        <MaterialReactTable
          columns={columns}
          data={data}
          // enableRowSelection="false"
          getRowId={(row) => row.id}
          initialState={{ showColumnFilters: true }}
          enableColumnResizing
          columnResizeMode="onChange"
          enableColumnFilters={false}
          //manualFiltering
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

export default KasIncome;
