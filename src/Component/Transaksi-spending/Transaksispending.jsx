import React, { useEffect, useState } from "react"
import { Button, Modal, Table } from "react-bootstrap"
import './spendingstyle.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from "axios"


function TransaksiSpending() {

  const [selectedDate, setSelectedDate] = useState(null);
  const [nama, setNama] = useState('');
  const [nik, setNIK] = useState('');
  const [grade, setGrade] = useState('');
  const [nominal, setNominal] = useState('');
  const [unitKerja, setUnitKerja] = useState('');
  const [status, setStatus] = useState('');
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://url-to-your-api-endpoint');
      setData(response.data);
    } catch (error) {
      console.error('Gagal mendapatkan data dari server:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newData = {
      tanggal: selectedDate ? selectedDate.toISOString() : '',
      nama,
      nik,
      grade,
      nominal,
      unitKerja,
      status,
    };

    if (editIndex !== -1) {
      // Jika sedang dalam mode edit
      try {
        await axios.put(`http://url-to-your-api-endpoint/${data[editIndex].id}`, newData);
        setAlertMessage('Data berhasil diperbarui.');
        setEditIndex(-1);
      } catch (error) {
        console.error('Gagal memperbarui data di server:', error);
        setAlertMessage('Gagal memperbarui data.');
      }
    } else {
      // Jika sedang dalam mode tambah data baru
      try {
        await axios.post('http://url-to-your-api-endpoint', newData);
        setAlertMessage('Data berhasil disimpan.');
      } catch (error) {
        console.error('Gagal menyimpan data di server:', error);
        setAlertMessage('Gagal menyimpan data.');
      }
    }

    // Reset form setelah submit
    setSelectedDate(null);
    setNama('');
    setNIK('');
    setGrade('');
    setNominal('');
    setUnitKerja('');
    setStatus('');

    fetchData(); // Memperbarui data setelah perubahan
  };

  const handleEdit = (index) => {
    const selectedData = data[index];
    setSelectedDate(new Date(selectedData.tanggal));
    setNama(selectedData.nama);
    setNIK(selectedData.nik);
    setGrade(selectedData.grade);
    setNominal(selectedData.nominal);
    setUnitKerja(selectedData.unitKerja);
    setStatus(selectedData.status);
    setEditIndex(index);
  };

  const handleDelete = async (index) => {
    try {
      await axios.delete(`http://url-to-your-api-endpoint/${data[index].id}`);
      setAlertMessage('Data berhasil dihapus.');
      fetchData(); // Memperbarui data setelah penghapusan
    } catch (error) {
      console.error('Gagal menghapus data dari server:', error);
      setAlertMessage('Gagal menghapus data.');
    }
  };

  const handleCancel = () => {
    setEditIndex(-1);
    setSelectedDate(null);
    setNama('');
    setNIK('');
    setGrade('');
    setNominal('');
    setUnitKerja('');
    setStatus('');
    setAlertMessage('');
  };


  const generateFakeData = () => {
    const fakeData = [
      {
        id: 1,
        tanggal: '2023-06-01',
        nama: 'John Doe',
        nik: '1234567890',
        grade: 'A',
        nominal: 1000000,
        unitKerja: 'Unit 1',
        status: 'Aktif',
      },
      {
        id: 2,
        tanggal: '2023-06-02',
        nama: 'Jane Smith',
        nik: '0987654321',
        grade: 'B',
        nominal: 2000000,
        unitKerja: 'Unit 2',
        status: 'Non-Aktif',
      },
      // Tambahkan data palsu lainnya di sini
    ];

    setData(fakeData);
  };


  const [showModal, setShowModal] = useState(false);


  return (
    <>
    <div className="content">
      <div className="tabel-spending-admin">
        <h3>Kas Keluar</h3>
        <div className="content1 mt-4">
          {alertMessage && <div>{alertMessage}</div>}
            <div className="buton">
            <button onClick={() => setShowModal(true)}>Masukan Data</button>
            </div>
            {/* <Button variant="primary" onClick={generateFakeData}>
             Generate Fake Data
            </Button> */}
            <Modal
              className="modal-spending"
              show={showModal} onHide={() => setShowModal(false)}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">{editIndex !== -1 ? 'Edit Data' : 'Tambah Data'}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <form onSubmit={handleSubmit}>
              <div className="field">
                    <p>Tanggal</p>
                    <div>
                        <DatePicker
                        formatdate='dd/MM/yyyy'
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        className='control'
                        name='tanggal'
                        required
                        />
                    </div>
                </div>
                <div className="field">
                <p>Nama</p>
                <input
                  type="text"
                  placeholder="Nama"
                  value={nama} onChange={e => setNama(e.target.value)}
                />
                </div>
                <div className="field">
                <p>NIK</p>
                <input
                  type="text"
                  placeholder="NIK"
                  value={nik} onChange={e => setNIK(e.target.value)}
                />
                </div>
                <div className="field">
                    <p>Grade</p>
                    <select name="grade" value={grade} onChange={e => setGrade(e.target.value)}>
                        <option value="">Pilih Grade</option>
                        <option value="A">4-5</option>
                        <option value="B">7-8</option>
                        <option value="C">9-10</option>
                        <option value="D">11-12</option>
                        <option value="E">12-13</option>
                        <option value="F">14-16</option>
                    </select>
                </div>
                <div className="field">
                <p>Nominal</p>
                <input
                  type="number"
                  placeholder="Nominal"
                  value={nominal} onChange={e => setNominal(e.target.value)}
                />
                </div>
                <div className="field">
                <p>Unit Kerja</p>
                <input
                  type="text"
                  placeholder="Unit Kerja"
                  value={unitKerja} onChange={e => setUnitKerja(e.target.value)}
                />
                </div>
                <div className="field">
                <p>Status</p>
                <input
                  type="text"
                  placeholder="Status"
                  value={status} onChange={e => setStatus(e.target.value)}
                  />
                </div>
                <div className="buton-save">
              <button type="submit">
                {editIndex !== -1 ? 'Perbarui' : 'Simpan'}
              </button>
              {editIndex !== -1 && (
                <button onClick={handleCancel}>
                  Batal
                </button>
              )}
            </div>
              </form>
              </Modal.Body>
            </Modal>
        </div>
        <div className="table-responsive">
            <Table className="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
                <thead>
                    <tr>
                    <th>No</th>
                    <th>tanggal</th>
                    <th>nama</th>
                    <th>NIK</th>
                    <th>Grade</th>
                    <th>Nominal</th>
                    <th>Unit Kerja</th>
                    <th>Status</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.no}</td>
                      <td>{item.tanggal}</td>
                      <td>{item.nama}</td>
                      <td>{item.nik}</td>
                      <td>{item.grade}</td>
                      <td>{item.nominal}</td>
                      <td>{item.unitKerja}</td>
                      <td>{item.status}</td>
                      <td>
                        <button className="buton-fungsi" type="button" onClick={() => handleEdit(index)}>Edit</button>
                        <button className="buton-fungsi" type="button" onClick={() => handleDelete(index)}>Hapus</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
            </Table>
        </div>
      </div>
    </div>
    </>
  )
}

export default TransaksiSpending
