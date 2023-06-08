import React, { useState } from "react"
import { Table } from "react-bootstrap"
import './spendingstyle.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import MyVerticallyCenteredSpendingModal from '../Modal-spending/Modalspending'


function TransaksiSpending() {
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

  // react-datepicker
  const [selectedDate, setSelectedDate] = useState(null);
  const handleChange = date => {
      setSelectedDate(date);
  };

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

  const itemsPerPage = 5; // Jumlah data per halaman
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

  
  const [modalShow, setModalShow] = React.useState(false);
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
      <div className="tabel-income">
      <h3>Pengeluaran Admin</h3>
      <div className="content1 mt-4">
        <div className="tanggal">
          <div className="date">
            <DatePicker
                dateFormat="MM yyyy"
                showMonthYearPicker
                selected={selectedDate}
                onChange={handleChange}
                placeholderText="Tanggal"
            />
          </div>
          <div className="buton">
          <button onClick={() => setModalShow(true)}>Tambah</button>
          </div>
          <MyVerticallyCenteredSpendingModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
        {/* <div className="buton">
          <button>print</button>
        </div> */}
      </div>
      <div className="table-responsive">
          <Table className="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
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
                {limitedData.map((item, index) => (
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

export default TransaksiSpending
