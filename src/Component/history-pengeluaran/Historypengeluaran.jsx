import React, { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import './historypengeluaran.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

function Historypengeluaran() {
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
  //       head: [['ID', 'Nama', 'Kas Masuk', 'Kas Keluar', 'Nominal', 'keterangan',]],
  //       body: filteredData.map((item) => [item.id, item.name, item.kasmasuk, item.kaskeluar, item.nominal, item.keterangan])
  //     });

  //     doc.save('data.pdf');
  //   }
  // };

  // const processData = (selectedMonth) => {
  //   // Contoh data tabel
  //   const data = [
  //     { id: 1, name: 'John Doe', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-01-10'), tanggal:+'date', },
  //     { id: 2, name: 'Jane Smith', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-15'),  },
  //     { id: 3, name: 'Bob Johnson', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-20'),  },
  //     { id: 2, name: 'Jane Smith', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-15'),  },
  //     { id: 3, name: 'Bob Johnson', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-20'),  },
  //     { id: 2, name: 'Jane Smith', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-15'),  },
  //     { id: 3, name: 'Bob Johnson', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-20'),  },
  //     { id: 2, name: 'Jane Smith', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-15'),  },
  //     { id: 3, name: 'Bob Johnson', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-20'),  },
  //     { id: 2, name: 'Jane Smith', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-15'),  },
  //     { id: 3, name: 'Bob Johnson', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-20'),  },
  //   ];

  //   const filteredData = data.filter(
  //     (item) =>
  //       item.date.getMonth() === selectedMonth.getMonth() &&
  //       item.date.getFullYear() === selectedMonth.getFullYear()
  //   );
  //   return filteredData;
  // };

  // cara 2
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: '2023-02-15' },
      { id: 2, name: 'Jane Smith', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: '2023-02-15' },
      { id: 3, name: 'Bob Johnson', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: '2023-02-18'  },
      { id: 4, name: 'Jane Smith', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: '2023-02-23'},
      { id: 5, name: 'Bob Johnson', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: '2023-02-22' },
      { id: 6, name: 'Jane Smith', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: '2023-02-19'},
      { id: 7, name: 'Bob Johnson', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: '2023-02-22' },
      { id: 8, name: 'Jane Smith', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: '2023-02-10' },
      { id: 9, name: 'Bob Johnson', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: '2023-02-11' },
      { id: 10, name: 'Jane Smith', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: '2023-02-12' },
      { id: 11, name: 'Bob Johnson', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: '2023-03-17' },
  ]);
  const [startDate, setStartDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const handlePrint = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['ID', 'Nama','tanggal', 'Kas Masuk', 'Kas Keluar', 'Nominal', 'keterangan',]],
      body: filteredData.map(({ id, name, date, kasmasuk, kaskeluar, nominal, keterangan }) => [id, name, date, kasmasuk, kaskeluar, nominal, keterangan]),
    });
    doc.save('table.pdf');
  };

  const handleFilterByMonth = (date) => {
    setStartDate(date);
    const selectedMonth = date.getMonth();
    const filteredByMonth = data.filter((item) => {
      const itemMonth = new Date(item.date).getMonth();
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
            <div className="tabel-history-pengeluaran">
              <h2>Riwayat Pengeluaran</h2>
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
                    <th>Kas Masuk</th>
                    <th>Kas Keluar</th>
                    <th>Nominal</th>
                    <th>Keterangan</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map(({ id, name, date, kasmasuk, kaskeluar, nominal, keterangan }) => (
                  <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{date}</td>
                  <td>{kasmasuk}</td>
                  <td>{kaskeluar}</td>
                  <td>{nominal}</td>
                  <td>{keterangan}</td>
                </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            
      </div>

    </>
  )
}

export default Historypengeluaran