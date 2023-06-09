import React, { useState } from "react"
import { Table } from "react-bootstrap"
import './HistoryKaryawan.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { AiFillCheckCircle } from "react-icons/ai"

const style1 = { color: "green", fontSize: "1.5em" }
function Historykaryawan() {
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
        head: [['no', 'Nama', 'NIK', 'Grade', 'Nominal', 'Unit Kerja', 'Status']],
        body: filteredData.map((item) => [item.id, item.name, item.nik, item.grade, item.nominal, item.unitkerja, item.status])
      });

      doc.save('data.pdf');
    }
  };

  const processData = (selectedMonth) => {
    // Contoh data tabel
    const data = [
      { id: 1, name: 'El Pardo', tanggal: 25 , nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst', date: new Date('2023-01-10'), tanggal:+'date', },
      { id: 1, name: 'El Pardo', tanggal: 25 , nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst', date: new Date('2023-01-10'), tanggal:+'date', },
      { id: 1, name: 'El Pardo', tanggal: 25 ,nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst', date: new Date('2023-01-10'), tanggal:+'date', },
      { id: 1, name: 'El Pardo', tanggal: 25 ,nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst', date: new Date('2023-01-10'), tanggal:+'date', },
      { id: 1, name: 'El Pardo', tanggal: 25 ,nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst', date: new Date('2023-01-10'), tanggal:+'date', },
      { id: 1, name: 'El Pardo', tanggal: 25 ,nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst', date: new Date('2023-01-10'), tanggal:+'date', },
      { id: 1, name: 'El Pardo', tanggal: 25 ,nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst', date: new Date('2023-01-10'), tanggal:+'date', },
      { id: 1, name: 'El Pardo', tanggal: 25 ,nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst', date: new Date('2023-01-10'), tanggal:+'date', },
      { id: 1, name: 'El Pardo', tanggal: 25 ,nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst', date: new Date('2023-01-10'), tanggal:+'date', },

      // { id: 2, name: 'Jane Smith', kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-15'),  },
      // { id: 3, name: 'Bob Johnson', kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-20'),  }
    ];

    const filteredData = data.filter(
      (item) =>
        item.date.getMonth() === selectedMonth.getMonth() &&
        item.date.getFullYear() === selectedMonth.getFullYear()
    );
    return filteredData;
  };

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
        <h3>Riwayat Transaksi Karyawan</h3>
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
              <th>no</th>
              <th>Nama</th>
              <th>Tanggal</th>
              <th>NIK</th>
              <th>Grade</th>
              <th>Nominal</th>
              <th>Unit Kerja</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {processData(selectedMonth).map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.tanggal}</td>
                <td>{item.nik}</td>
                <td>{item.grade}</td>
                <td>{item.nominal}</td>
                <td>{item.unitkerja}</td>
                <td><i><AiFillCheckCircle style={style1}/></i></td>



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

export default Historykaryawan