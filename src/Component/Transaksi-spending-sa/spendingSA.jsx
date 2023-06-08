import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import {AiFillCheckCircle } from 'react-icons/ai';
import {AiFillCloseCircle } from 'react-icons/ai';
import './SpendingSAstyle.css'

function TransaksispendingSA() {

    //   const [data, setData] = useState([]);

//   useEffect(() => {
//   // Fungsi untuk mendapatkan data dari API
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('URL_API_ANDA');
//       setData(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   fetchData();
// }, []);

const data = [
  { no: '1', tanggal: 25, nama: 'mandala', nik:3212387192, grade:'4-6', nominal:20000,unit:'dasdahn' },
  { no: '1', tanggal: 25, nama: 'mandala', nik:3212387192, grade:'4-6', nominal:20000,unit:'dasdahn' },
  { no: '1', tanggal: 25, nama: 'mandala', nik:3212387192, grade:'4-6', nominal:20000,unit:'dasdahn' },
  { no: '1', tanggal: 25, nama: 'mandala', nik:3212387192, grade:'4-6', nominal:20000,unit:'dasdahn' },
  { no: '1', tanggal: 25, nama: 'mandala', nik:3212387192, grade:'4-6', nominal:20000,unit:'dasdahn' },
  { no: '1', tanggal: 25, nama: 'mandala', nik:3212387192, grade:'4-6', nominal:20000,unit:'dasdahn' },
  { no: '1', tanggal: 25, nama: 'mandala', nik:3212387192, grade:'4-6', nominal:20000,unit:'dasdahn' },
  { no: '1', tanggal: 25, nama: 'mandala', nik:3212387192, grade:'4-6', nominal:20000,unit:'dasdahn' },
];

const itemsPerPage = 10; // Jumlah data per halaman
const [currentPage, setCurrentPage] = useState(1);

// Menghitung indeks data pertama dan terakhir pada halaman saat ini
const lastIndex = currentPage * itemsPerPage;
const firstIndex = lastIndex - itemsPerPage;
const limitedData = data.slice(firstIndex, lastIndex);

// Mengubah halaman saat tombol ditekan
const nextPage = () => {
  if (currentPage < Math.ceil(data.length / itemsPerPage)) {
    setCurrentPage(currentPage + 1);
  }
};

const prevPage = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};


//     const handleSave = (item) => {
//     // Aksi simpan
//     console.log('Simpan data:', item);
//   };

//     const handleDelete = (item) => {
//     // Aksi hapus
//     setData(data.filter((dataItem) => dataItem.id !== item.id));
//     console.log('Hapus data:', item);
//   };

return (
  <>
  {/* <div className="content">
      <div className="history">
      <table>
          <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Unit Kerja</th>
                <th>keterangan</th>
                <th>status</th>
                <th>Grade</th>
              </tr>
          </thead>
          <tbody>
              {data.map((item, index) => (
              <tr key={index}>
                  <td>{item.no}</td>
                  <td>{item.nama}</td>
                  <td>{item.unit}</td>
                  <td>{item.keterangan}</td>
                  <td>
                    <button onClick={() => handleSave(item)}>Simpan</button>
                    <button onClick={() => handleDelete(item)}>Hapus</button>
                  </td>
                  <td>{item.grade}</td>
              </tr>
              ))}
          </tbody>
      </table>
      </div>
  </div> */}
  <div className="content">
    <div className="tabel-income-sa">
    <h5>Transaksi Keluar</h5>
    <div className="table-responsive">
        <Table className="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
            <thead>
                <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Unit Kerja</th>
                <th>keterangan</th>
                <th>status</th>
                <th>Grade</th>
                </tr>
            </thead>
            <tbody>
              {limitedData.map((item, index) => (
                <tr key={index}>
                <td>{item.no}</td>
                <td>{item.nama}</td>
                <td>{item.unit}</td>
                <td>{item.keterangan}</td>
                <td>
                  <button><i><AiFillCheckCircle/></i></button>
                  <button><i><span><AiFillCloseCircle/></span></i></button>
                  {/* <button onClick={() => handleSave(item)}><AiFillCheckCircle/></button>
                  <button onClick={() => handleDelete(item)}><AiFillCloseCircle/></button> */}
                </td>
                <td>{item.grade}</td>
                </tr>
              ))}
            </tbody>
        </Table>
          <div className="buton">
            <button onClick={prevPage}>Sebelumnya</button>
            <button onClick={nextPage}>Berikutnya</button>
          </div>
    </div>
    </div>
  </div>
    </>
  )
}

export default TransaksispendingSA
