import React, { useState } from "react"
import { Table } from "react-bootstrap"
import './TransaksiIncome.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import MyVerticallyCenteredModal from '../modal-income/ModalIncome'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

function TransaksiIncome() {
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

  // PAKE INI
  // const [selectedMonth, setSelectedMonth] = useState(null);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = () => {
  //   // Ganti URL_API dengan URL API yang sesuai
  //   fetch('URL_API')
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.log(error));
  // };

  // const handleMonthChange = (date) => {
  //   setSelectedMonth(date);
  // };

  // const handlePrint = () => {
  //   if (selectedMonth) {
  //     const filteredData = processData(selectedMonth); // Memproses data sesuai bulan yang dipilih

  //     const doc = new jsPDF();
  //     doc.text(`Data for ${selectedMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`, 10, 10);

  //     doc.autoTable({
  //       head: [['ID', 'Nama', 'Usia']],
  //       body: filteredData.map((item) => [item.id, item.name, item.age])
  //     });

  //     doc.save('data.pdf');
  //   }
  // };

  // const processData = (selectedMonth) => {
  //   const filteredData = data.filter(
  //     (item) =>
  //       new Date(item.date).getMonth() === selectedMonth.getMonth() &&
  //       new Date(item.date).getFullYear() === selectedMonth.getFullYear()
  //   );
  //   return filteredData;
  // };
  // SAMPE SINI
  
  const [selectedMonth, setSelectedMonth] = useState(null);
  
  const handleMonthChange = (date) => {
    setSelectedMonth(date);
  };

  const handlePrint = () => {
    if (selectedMonth) {
      const filteredData = processData(selectedMonth); // Memproses data sesuai bulan yang dipilih

      const doc = new jsPDF();
      doc.text(`Data for ${selectedMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`, 10, 10);

      doc.autoTable({
        head: [['ID', 'Nama', 'Usia']],
        body: filteredData.map((item) => [item.id, item.name, item.age])
      });

      doc.save('data.pdf');
    }
  };

  const processData = (selectedMonth) => {
    // Contoh data tabel
    const data = [
      { id: 1, name: 'John Doe', age: 30, date: new Date('2023-01-10'), tanggal:+'date' },
      { id: 2, name: 'Jane Smith', age: 25, date: new Date('2023-02-15') },
      { id: 3, name: 'Bob Johnson', age: 35, date: new Date('2023-02-20') }
    ];

    const filteredData = data.filter(
      (item) =>
        item.date.getMonth() === selectedMonth.getMonth() &&
        item.date.getFullYear() === selectedMonth.getFullYear()
    );
    return filteredData;
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
        <h3>Income</h3>
        <div className="content1 mt-4">
          <div className="tanggal">
            <div className="date">
              <DatePicker
                selected={selectedMonth}
                onChange={handleMonthChange}
                dateFormat="MM/yyyy"
                showMonthYearPicker
              />
            </div>
            <div className="buton">
            <button onClick={() => setModalShow(true)}>Tambah</button>
            </div>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
          <div className="buton">
            <button onClick={handlePrint} disabled={!selectedMonth}>print</button>
          </div>
        </div>
        {selectedMonth && (
          <div className="table-responsive">
          <Table className="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Usia</th>
            </tr>
          </thead>
          <tbody>
            {processData(selectedMonth).map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
          </Table>
      </div>
      )}  
      </div>
    </div>
    </>
  )
}

export default TransaksiIncome
