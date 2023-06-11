import React, { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import './HistoryKaryawan.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

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
  
  // const [selectedMonth, setSelectedMonth] = useState(null);
  
  // const handleMonthChange = (date) => {
  //   setSelectedMonth(date);
  // };

  // const handlePrint = () => {
  //   if (selectedMonth) {
  //     const filteredData = processData(selectedMonth); // Memproses data sesuai bulan yang dipilih

  //     const doc = new jsPDF();
  //     doc.text(`Data for ${selectedMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`, 10, 10);

  //     doc.autoTable({
  //       head: [['no', 'Nama', 'NIK', 'Grade', 'Nominal', 'Unit Kerja', 'Status']],
  //       body: filteredData.map((item) => [item.id, item.name, item.nik, item.grade, item.nominal, item.unitkerja, item.status])
  //     });

  //     doc.save('data.pdf');
  //   }
  // };

  // const processData = (selectedMonth) => {
  //   // Contoh data tabel
    // const dataa = [
    //   { id: 1, name: 'El Pardo', tanggal: 25 , nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst', date: new Date('2023-01-10'), tanggal:+'date', },
    //   { id: 1, name: 'El Pardo', tanggal: 25 , nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst', date: new Date('2023-01-10'), tanggal:+'date', },
    //   { id: 1, name: 'El Pardo', tanggal: 25 ,nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst', date: new Date('2023-01-10'), tanggal:+'date', },
    //   { id: 1, name: 'El Pardo', tanggal: 25 ,nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst', date: new Date('2023-01-10'), tanggal:+'date', },
    //   { id: 1, name: 'El Pardo', tanggal: 25 ,nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst', date: new Date('2023-01-10'), tanggal:+'date', },
    //   { id: 1, name: 'El Pardo', tanggal: 25 ,nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst', date: new Date('2023-01-10'), tanggal:+'date', },
    //   { id: 1, name: 'El Pardo', tanggal: 25 ,nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst', date: new Date('2023-01-10'), tanggal:+'date', },
    //   { id: 1, name: 'El Pardo', tanggal: 25 ,nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst', date: new Date('2023-01-10'), tanggal:+'date', },
    //   { id: 1, name: 'El Pardo', tanggal: 25 ,nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst', date: new Date('2023-01-10'), tanggal:+'date', },

    //   // { id: 2, name: 'Jane Smith', kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-15'),  },
    //   // { id: 3, name: 'Bob Johnson', kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-20'),  }
    // ];

  //   const filteredData = data.filter(
  //     (item) =>
  //       item.date.getMonth() === selectedMonth.getMonth() &&
  //       item.date.getFullYear() === selectedMonth.getFullYear()
  //   );
  //   return filteredData;
  // };

  // const [data, setData] = useState([]);
  const [data, setData] = useState([
    { id: 1, name: 'El Pardo', tanggal: '2023-02-15' , nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst' },
    { id: 2, name: 'El Pardo', tanggal: '2023-01-15' , nik:31289898989, grade:'4-9', nominal:'25.000', unitkerja:'System Analyst' },
    
  ]);
  
  const [startDate, setStartDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const handlePrint = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['no', 'Nama', 'NIK', 'Grade', 'Nominal', 'Unit Kerja', 'Status']],
      body: filteredData.map(({ id, name,tanggal, nik, grade, nominal, unitkerja, status }) => [id, name,tanggal, nik, grade, nominal, unitkerja, status]),
    });
    doc.save('table.pdf');
  };

  const handleFilterByMonth = (tanggal) => {
    setStartDate(tanggal);
    const selectedMonth = tanggal.getMonth();
    const filteredByMonth = data.filter((item) => {
      const itemMonth = new Date(item.tanggal).getMonth();
      return itemMonth === selectedMonth;
    });
    setFilteredData(filteredByMonth);
  };

  const handleShowAllData = () => {
    setFilteredData(data);
  };

  useEffect(() => {
    handleShowAllData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <div className="content">
      <div className="tabel-history-karyawan">
      <h3>Riwayat Transaksi Karyawan</h3>
        <div className="tanggal-cetak mt-3">
          <div className="kiri">
            <div className="tanggal">
              <h5>Pilih Tanggal</h5>
              <DatePicker selected={startDate} onChange={handleFilterByMonth} showMonthYearPicker />
            </div>
          </div>
        </div>
        <div className="reset mt-3">
          <button className="button-print" onClick={handleShowAllData}>Tampilkan Semua Data</button>
          <button className="button-cetak" onClick={handlePrint}>Print</button>
        </div>
      <Table className="table table-bordered mt-5" id="dataTable" width="100%" cellspacing="0">
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
          {filteredData.map(({ id, name, tanggal, nik, grade, nominal, unitkerja, status  }) => (
              <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{tanggal}</td>
              <td>{nik}</td>
              <td>{grade}</td>
              <td>{nominal}</td>
              <td>{unitkerja}</td>
              <td>{status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      </div>
      
    </div>

    </>
  )
}

export default Historykaryawan