import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import './Laporank.css'
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

function Kasmasukdivisi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newData, setNewData] = useState({
  });
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
  // edit data table
  const [editData, setEditData] = useState({
    id: '',
    grade: '',
    jabatan: '',
    pembayaran: 0,
  });
  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowEditModal = (id) => {
    const editItem = data.find((item) => item.id === id);
    if (editItem) {
      setEditData({
        id: editItem.id,
        grade: editItem.grade,
        jabatan: editItem.jabatan,
        pembayaran: editItem.pembayaran,
      });
    }
    setShowEditModal(true);
  };

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
        customRenderer: (value) => <span>{value}</span>,
      },
      // {
      //   accessorKey: 'aksi',
      //   header: 'Aksi',
      //   Cell: ({ row }) => (
      //     <>
      //       <button onClick={() => handleShowEditModal(row.id)}>Edit</button>
      //       <button onClick={() => handleShowDeleteConfirm(row.id)}>Delete</button>
      //     </>
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
                  
                  initialState={{ showColumnFilters: false }}
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
