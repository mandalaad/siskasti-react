import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import './Gradesa.css'
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

function GradeSA() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newData, setNewData] = useState({
    grade: '',
    jabatan: '',
    nominal: '',
  });
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/jabatan');
      setData(response.data.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAdd = () => {
    setShowAddModal(true);
  };

  const handleSaveAdd = async () => {
    try {
      await axios.post('http://localhost:8080/api/v1/jabatan', newData);

      // Lakukan aksi setelah berhasil menambahkan data

      setShowAddModal(false);
      setNewData({
        grade: '',
        jabatan: '',
        pembayaran: '',
      });

      fetchData();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
    setNewData({
      grade: '',
      jabatan: '',
      pembayaran: '',
    });
  };

  // delete data
  const [deleteId, setDeleteId] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const handleShowDeleteConfirm = (id) => {
    setDeleteId(id);
    setShowDeleteConfirm(true);
  };

  const handleCloseDeleteConfirm = () => {
    setDeleteId('');
    setShowDeleteConfirm(false);
  };

  const handleDeleteData = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/v1/jabatan/${deleteId}`);

      if (response.status === 200) {
        // Berhasil menghapus data, ambil ulang data dari API
        fetchData();
        handleCloseDeleteConfirm();
      } else {
        // Gagal menghapus data, tampilkan pesan error atau lakukan penanganan error sesuai kebutuhan
      }
    } catch (error) {
      console.error('Error:', error);
      // Tampilkan pesan error atau lakukan penanganan error sesuai kebutuhan
    }
  };

  // edit data table
  const [editData, setEditData] = useState({
    id: '',
    grade: '',
    jabatan: '',
    pembayaran: 0,
  });
  const [showEditModal, setShowEditModal] = useState(false);
  
  useEffect(() => {
    if (editData.id) {
      setShowEditModal(true);
    }
  }, [editData]);
  
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

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditData({
      id: '',
      grade: '',
      jabatan: '',
      pembayaran: 0,
    });
  };

  const handleEditData = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/api/v1/jabatan/${editData.id}`, {
        grade: editData.grade,
        jabatan: editData.jabatan,
        pembayaran: editData.pembayaran,
      });

      if (response.status === 200) {
        // Berhasil mengedit data, ambil ulang data dari API
        fetchData();
        handleCloseEditModal();
      } else {
        // Gagal mengedit data, tampilkan pesan error atau lakukan penanganan error sesuai kebutuhan
      }
    } catch (error) {
      console.error('Error:', error);
      // Tampilkan pesan error atau lakukan penanganan error sesuai kebutuhan
    }
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
        accessorKey: 'grade',
        header: 'Grade',
      },
      {
        accessorKey: 'jabatan',
        header: 'Jabatan',
      },
      {
        accessorKey: 'pembayaran',
        header: 'Nominal',
      },
      {
        accessorKey: 'aksi',
        header: 'Aksi',
        Cell: ({ row }) => (
          <>
            <button onClick={() => handleShowEditModal(row.id)}>Edit</button>
            <button onClick={() => handleShowDeleteConfirm(row.id)}>Delete</button>
          </>
        ),
      },
    ],
    []
  );

  return (
    <>
      <div className="content">
        <div className="wrap">
          <div className="grade">
            <div className="header">
              <h4>Grade</h4>
            </div>
            <div className="data">
              <div className="content-left">
                <div className="button">
                  <button onClick={handleAdd}>Tambah</button>
                </div>
              </div>
            </div>
            <MaterialReactTable
              columns={columns}
              data={data}
              getRowId={(row) => row.id}
              state={{
                columnFilters,
                globalFilter,
                isLoading: loading,
                sorting,
              }}
            />
            <Modal
              className='modal'
              show={showAddModal}
              onHide={handleCloseAddModal}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Tambah Data
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="field">
                  <p>Grade</p>
                  <input
                    type="text"
                    name="grade"
                    value={newData.grade}
                    onChange={(e) =>
                      setNewData({ ...newData, grade: e.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <p>Jabatan</p>
                  <input
                    type="text"
                    name="jabatan"
                    value={newData.jabatan}
                    onChange={(e) =>
                      setNewData({ ...newData, jabatan: e.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <p>Nominal</p>
                  <input
                    type="number"
                    name="pembayaran"
                    value={newData.pembayaran}
                    onChange={(e) =>
                      setNewData({ ...newData, pembayaran: parseInt(e.target.value) })
                    }
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleSaveAdd}>Save</Button>
                <Button onClick={handleCloseAddModal}>Cancel</Button>
              </Modal.Footer>
            </Modal>


            {/* modal delete */}
            <Modal
              className='modal'
              show={showDeleteConfirm}
              onHide={handleCloseDeleteConfirm}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Delete Confirmation
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>apa anda yakin ingin menghapus data?</p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleCloseDeleteConfirm}>Cancel</Button>
                <Button onClick={handleDeleteData}>Delete</Button>
              </Modal.Footer>
            </Modal>

            {/* Modal Edit */}
            <Modal
              className='modal'
              show={showEditModal}
              onHide={handleCloseEditModal}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Edit Grade
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="field">
                  <p>Grade</p>
                  <input
                    type="text"
                    name="grade"
                    id="grade"
                    value={editData.grade}
                    onChange={(e) => setEditData({ ...editData, grade: e.target.value })}
                  />
                </div>
                <div className="field">
                  <p>Jabatan</p>
                  <input
                    type="text"
                    name="jabatan"
                    id="jabatan"
                    value={editData.jabatan}
                    onChange={(e) => setEditData({ ...editData, jabatan: e.target.value })}
                  />
                </div>
                <div className="field">
                  <p>Nominal</p>
                  <input
                    type="number"
                    name="pembayaran"
                    id="pembayaran"
                    value={editData.pembayaran}
                    onChange={(e) => setEditData({ ...editData, pembayaran: parseInt(e.target.value) })}
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleCloseEditModal}>Close</Button>
                <Button onClick={handleEditData}>Save</Button>
              </Modal.Footer>
            </Modal>


          </div>
        </div>
      </div>
    </>
  );
}

export default GradeSA;
