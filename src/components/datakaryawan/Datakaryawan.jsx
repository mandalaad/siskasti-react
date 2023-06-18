import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import './Datakaryawan.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Datakaryawan() {
    const [data, setData] = useState([
        {
          no: 1,
          namakaryawan: 'John Doe',
          foto: 'image-url.jpg',
          nik: '123456789',
          grade: 'A',
          jabatan: 'Manager',
          unitkerja: 'HR',
          email: 'john.doe@example.com',
          nohp: '1234567890',
        },
        {
          no: 2,
          namakaryawan: 'John Doe',
          foto: 'image-url.jpg',
          nik: '123456789',
          grade: 'A',
          jabatan: 'Manager',
          unitkerja: 'HR',
          email: 'john.doe@example.com',
          nohp: '1234567890',
        },
        {
          no: 3,
          namakaryawan: 'Jane Smith',
          foto: 'image-url.jpg',
          nik: '987654321',
          grade: 'B',
          jabatan: 'Accountant',
          unitkerja: 'Finance',
          email: 'jane.smith@example.com',
          nohp: '0987654321',
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
        accessorKey: 'no',
        header: 'No',
        size:'20',
      },
      {
        accessorKey: 'namakaryawan',
        header: 'Nama Karyawan',
      },
      {
        accessorKey: 'foto',
        header: 'Foto',
      },
      {
        accessorKey: 'nik',
        header: 'NIK',
      },
      {
        accessorKey: 'grade',
        header: 'Grade',
        size:'100',
      },
      {
        accessorKey: 'jabatan',
        header: 'Jabatan',
      },
      {
        accessorKey: 'unitkerja',
        header: 'Unit Kerja',
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'nohp',
        header: 'No HP',
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
            <div className="data-karyawan">
                <div className="header">
                  <h4>Karyawan</h4>
                </div>
                <div className="data">
                    <div className="content-left">
                        <h5>Data Karyawan</h5>
                        <DropdownButton  id="dropdown-item-button" title="Departemen">
                            <Dropdown.ItemText></Dropdown.ItemText>
                            <Dropdown.Item as="button">Devisi Pengembangan Aplikasi TI</Dropdown.Item>
                            <Dropdown.Item as="button">Departemen IT Business Analyst</Dropdown.Item>
                            <Dropdown.Item as="button">Departemen Integrasi Aplikasi</Dropdown.Item>
                            <Dropdown.Item as="button">Departemen Aplikasi Bisnis</Dropdown.Item>
                            <Dropdown.Item as="button">Departemen Aplikasi Support</Dropdown.Item>
                            <Dropdown.Item as="button">Departemen Aplikasi Bisnis Digital</Dropdown.Item>
                            <Dropdown.Item as="button">Departemen IT Quality Assurance</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className="content-right">
                        <div className="button">
                            <button>print</button>
                        </div>
                    </div>
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

export default Datakaryawan
