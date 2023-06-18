import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import './Terimadana.css'

function Terimadana() {
  const [data, setData] = useState([
    {
      id: 1,
      departemen: 'HR',
      nama: 'John Doe',
      jabatan: 'Manager',
      tanggal: '2023-06-01',
      jumlah: 5000,
      keterangan: 'Gaji',
      kepada: 'John',
      status: 'Dibayar',
    },
    {
      id: 2,
      departemen: 'Finance',
      nama: 'Jane Smith',
      jabatan: 'Accountant',
      tanggal: '2023-06-02',
      jumlah: 8000,
      keterangan: 'Bonus',
      kepada: 'Jane',
      status: 'Dibayar',
    },
    // ... add other data here
  ]);
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
    pageSize: 10,
  });

  const columns = useMemo(
    () => [
      {
        accessorKey: 'departemen',
        header: 'Departemen',
      },
      {
        accessorKey: 'nama',
        header: 'Nama',
      },
      {
        accessorKey: 'jabatan',
        header: 'Jabatan',
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
      {
        accessorKey: 'kepada',
        header: 'Kepada',
      },
      {
        accessorKey: 'status',
        header: 'Status',
      },
      {
        accessorKey: 'aksi',
        header: 'Aksi',
        Cell: ({ row }) => (
          <button onClick={() => handleEditClick(row.id)}>Edit</button>
        ),
      },
    ],
    []
  );

  const handleEditClick = (id) => {
    // Handle edit button click for the corresponding row
    console.log(`Edit button clicked for ID: ${id}`);
  };

  return (
    <>
    <div className="content">
        <div className="wrap">
            <div className="terima-dana">
                <div className="header">
                  <h4>Terima Permintaan Dana</h4>
                </div>
                <div className="button">
                  <button>print</button>
                </div>
                <MaterialReactTable
                  columns={columns}
                  data={data}
                  getRowId={(row) => row.id}
                  initialState={{ showColumnFilters: true }}
                  enableColumnResizing
                  columnResizeMode="onChange"
                  enableColumnFilters={false}
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
    </>
  )
}

export default Terimadana
