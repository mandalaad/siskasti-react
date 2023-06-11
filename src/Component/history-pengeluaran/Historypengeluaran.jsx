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

  //cara 2

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Ambil data dari API atau sumber data lainnya
    // const dataFromAPI = [
    //   { nama: 'John Doe', usia: 25, alamat: 'Jakarta', bulan: 1 },
    //   { nama: 'Jane Smith', usia: 30, alamat: 'Surabaya', bulan: 2 },
    //   { nama: 'Bob Johnson', usia: 35, alamat: 'Bandung', bulan: 1 },
    const dataFromAPI = [
      { id: 1, name: 'John Doe', tanggal: 25 , kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-01-10'), tanggal:+'date', },
      { id: 2, name: 'Jane Smith', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-15'),  },
      { id: 3, name: 'Bob Johnson', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-20'),  },
      { id: 2, name: 'Jane Smith', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-15'),  },
      { id: 3, name: 'Bob Johnson', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-20'),  },
      { id: 2, name: 'Jane Smith', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-15'),  },
      { id: 3, name: 'Bob Johnson', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-20'),  },
      { id: 2, name: 'Jane Smith', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-15'),  },
      { id: 3, name: 'Bob Johnson', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-20'),  },
      { id: 2, name: 'Jane Smith', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-15'),  },
      { id: 3, name: 'Bob Johnson', tanggal: 25 ,kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-20'),  },

      // { id: 2, name: 'Jane Smith', kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-15'),  },
      // { id: 3, name: 'Bob Johnson', kasmasuk:'30.000', kaskeluar:'20.000', nominal:'50.000', keterangan:'lunas', date: new Date('2023-02-20'),  }
    ];
    // ];
    setData(dataFromAPI);
    setFilteredData(dataFromAPI);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    filterDataByMonth(date);
  };

  const filterDataByMonth = (date) => {
    const filtered = data.filter(
      (item) => item.bulan === date.getMonth() + 1 && item.tahun === date.getFullYear()
    );
    setFilteredData(filtered);
  };

  const handlePrint = () => {
    const doc = new jsPDF();
    const tableData = filteredData.map((item) => [item.id, item.name, item.kasmasuk, item.kaskeluar, item.nominal, item.keterangan]);

    doc.autoTable({ head: [['ID', 'Nama', 'Kas Masuk', 'Kas Keluar', 'Nominal', 'keterangan',]], body: tableData });
    doc.save('tabel.pdf');
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
    {/* <div className="content">
      <div className="tabel-income">
        <h3>Riwayat Pengeluaran</h3>
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
              <th>Kas Masuk</th>
              <th>Kas Keluar</th>
              <th>Nominal</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {processData(selectedMonth).map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.tanggal}</td>
                <td>{item.kasmasuk}</td>
                <td>{item.kaskeluar}</td>
                <td>{item.nominal}</td>
                <td>{item.keterangan}</td>


              </tr>
            ))}
          </tbody>
          </Table>
      </div>
      )}  
      </div>
    </div> */}

    {/* cara 2 */}

    <div className="content">
      <div className="tabel-income">
      <h3>Riwayat Pengeluaran</h3>
        <div className="tanggal-cetak mt-3">
          <div className="tanggal">
            <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat="MM/yyyy" showMonthYearPicker />
          </div>
          <div className="cetak">
            <button className="button-print" onClick={handlePrint}>Cetak PDF</button>
          </div>
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
          {filteredData.map((item, index) => (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.tanggal}</td>
                <td>{item.kasmasuk}</td>
                <td>{item.kaskeluar}</td>
                <td>{item.nominal}</td>
                <td>{item.keterangan}</td>
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