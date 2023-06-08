import React, { useState } from "react"
import { Modal, Table } from "react-bootstrap"
import './TransaksiIncome.css'


function TransaksiIncome() {

  const [dataa, setData] = useState([]);
  const [nama, setNama] = useState('');
  const [unitKerja, setUnitKerja] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const [status, setStatus] = useState('');
  const [grade, setGrade] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const tambahData = async (e) => {
    e.preventDefault();

    const newData = {
      nama: nama,
      unitKerja: unitKerja,
      keterangan: keterangan,
      status: status,
      grade: grade
    };

    try {
      const response = await fetch('URL_API_ANDA', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      });

      if (response.ok) {
        const updatedData = [...data, newData];
        setData(updatedData);
        setNama('');
        setUnitKerja('');
        setKeterangan('');
        setStatus('');
        setGrade('');
        console.log('Data berhasil ditambahkan');
      } else {
        console.log('Terjadi kesalahan');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const hapusData = async (index) => {
    try {
      const response = await fetch(`URL_API_ANDA/${index}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        const updatedData = [...data];
        updatedData.splice(index, 1);
        setData(updatedData);
        console.log('Data berhasil dihapus');
      } else {
        console.log('Terjadi kesalahan');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editData = (index) => {
    const selectedData = data[index];
    setNama(selectedData.nama);
    setUnitKerja(selectedData.unitKerja);
    setKeterangan(selectedData.keterangan);
    setStatus(selectedData.status);
    setGrade(selectedData.grade);
    setEditIndex(index);
  };

  const simpanDataEdit = async () => {
    const updatedData = [...data];
    const editedData = {
      nama: nama,
      unitKerja: unitKerja,
      keterangan: keterangan,
      status: status,
      grade: grade
    };

    try {
      const response = await fetch(`URL_API_ANDA/${editIndex}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedData)
      });

      if (response.ok) {
        updatedData[editIndex] = editedData;
        setData(updatedData);
        setNama('');
        setUnitKerja('');
        setKeterangan('');
        setStatus('');
        setGrade('');
        setEditIndex(-1);
        console.log('Data berhasil diperbarui');
      } else {
        console.log('Terjadi kesalahan');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // batalin edit
  const batalkanEdit = () => {
    setNama('');
    setUnitKerja('');
    setKeterangan('');
    setStatus('');
    setGrade('');
    setEditIndex(-1);
  };

  
const data = [
  { no: '1', tanggal: 2235, nama: 'mandala', nik:3212387192, grade:'4-6', nominal:20000,unitKerja:'dasdahn' },
  { no: '1', tanggal: 2235, nama: 'mandala', nik:3212387192, grade:'4-6', nominal:20000,unitKerja:'dasdahn' },
  { no: '1', tanggal: 2235, nama: 'mandala', nik:3212387192, grade:'4-6', nominal:20000,unitKerja:'dasdahn' },
  { no: '1', tanggal: 2235, nama: 'mandala', nik:3212387192, grade:'4-6', nominal:20000,unitKerja:'dasdahn' },
  { no: '1', tanggal: 2235, nama: 'mandala', nik:3212387192, grade:'4-6', nominal:20000,unitKerja:'dasdahn' },
  { no: '1', tanggal: 2235, nama: 'mandala', nik:3212387192, grade:'4-6', nominal:20000,unitKerja:'dasdahn' },
  { no: '1', tanggal: 2235, nama: 'mandala', nik:3212387192, grade:'4-6', nominal:20000,unitKerja:'dasdahn' },
  { no: '1', tanggal: 2235, nama: 'mandala', nik:3212387192, grade:'4-6', nominal:20000,unitKerja:'dasdahn' },
  { no: '1', tanggal: 2235, nama: 'mandala', nik:3212387192, grade:'4-6', nominal:20000,unitKerja:'dasdahn' },
];


  const [showModal, setShowModal] = useState(false);


  return (
    <>
    {/* <div className="content">
        <div className="history">
        <table>
            <thead>
                <tr>
                <th>No</th>
                <th>Tanggal</th>
                <th>Nama</th>
                <th>NIK</th>
                <th>Grade</th>
                <th>Nominal</th>
                <th>Unit Kerja</th>
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
                    <td>{item.unit}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div> */}
    <div className="content">
      <div className="tabel-income-admin">
        <h3>Kas Masuk</h3>
        <div className="content1 mt-4">
            <div className="buton">
            <button onClick={() => setShowModal(true)}>Masukan Data</button>
            </div>
            <Modal
              className="modal"
              show={showModal} onHide={() => setShowModal(false)}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Masukan Data
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <form onSubmit={tambahData}>
                <div className="field">
                <p>Nama</p>
                <input
                  type="text"
                  placeholder="Nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
                </div>
                <div className="field">
                <p>Unit Kerja</p>
                <input
                  type="text"
                  placeholder="Unit Kerja"
                  value={unitKerja}
                  onChange={(e) => setUnitKerja(e.target.value)}
                />
                </div>
                <div className="field">
                <p>Keterangan</p>
                <input
                  type="text"
                  placeholder="Keterangan"
                  value={keterangan}
                  onChange={(e) => setKeterangan(e.target.value)}
                />
                </div>
                <div className="field">
                <p>Status</p>
                <input
                  type="text"
                  placeholder="Status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  />
                </div>
                <div className="field">
                <p>Grade</p>
                <input
                  type="text"
                  placeholder="Grade"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                />
                </div>
                {editIndex === -1 ? (
                  <div className="buton">
                    <button type="submit">Tambah Data</button>
                  </div>
                ) : (
                  <>
                  <div className="buton-save">
                    <button type="button" onClick={simpanDataEdit}>
                      Simpan Perubahan
                    </button>
                    <button type="button" onClick={batalkanEdit}>
                      Batal Edit
                    </button>
                  </div>
                  </>
              )}  
              </form>
              </Modal.Body>
              <Modal.Footer>
              </Modal.Footer>
            </Modal>
        </div>
        <div className="table-responsive">
            <Table className="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Unit Kerja</th>
                    <th>Keterangan</th>
                    <th>status</th>
                    <th>Grade</th>
                    <th>fungsi</th>
                    </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.no}</td>
                      <td>{item.nama}</td>
                      <td>{item.unitKerja}</td>
                      <td>{item.keterangan}</td>
                      <td>{item.status}</td>
                      <td>{item.grade}</td>
                      <td>
                        <button className="buton-fungsi" onClick={() => editData(index)}>Edit</button>
                        <button className="buton-fungsi" onClick={() => hapusData(index)}>Hapus</button>
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

export default TransaksiIncome
