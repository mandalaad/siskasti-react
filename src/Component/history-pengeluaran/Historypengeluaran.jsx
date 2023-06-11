import React, { useEffect, useState } from "react"
import './historypemasukanstyle.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { Table } from "react-bootstrap"
import './historypemasukanstyle.css'

function Historypengeluaran() {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await fetch('<API_URL>');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('<API_URL>');
  //     setData(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  const handlePrint = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['No', 'Nama', 'Tanggal', 'Kas Masuk', 'Kas Keluar', 'Nominal', 'Keterangan']],
      body: filteredData.map(({ no, nama, tanggal, kasMasuk, kasKeluar, nominal, keterangan }) => [
        no,
        nama,
        tanggal,
        kasMasuk,
        kasKeluar,
        nominal,
        keterangan,
      ]),
    });
    doc.save('table.pdf');
  };

  const handleFilterByMonth = (date) => {
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
  
  return (
  <div className="content ">
    <div className="tabel-history-pengeluaran">
        <h2>History Pemasukan</h2>
        <DatePicker selected={startDate} onChange={handleFilterByMonth} showMonthYearPicker />
        <div className="cetak">
          <button className="button-tampil" onClick={handleShowAllData}>Tampilkan Semua Data</button>
          <button className="button-print" onClick={handlePrint}>Print</button>
        </div>
        <div className="table-responsive">
        <Table className="table table-bordered mt-5" id="dataTable" width="100%" cellspacing="0">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Tanggal</th>
              <th>Kas Masuk</th>
              <th>Kas Keluar</th>
              <th>Nominal</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(({ no, nama, tanggal, kasMasuk, kasKeluar, nominal, keterangan }) => (
              <tr key={no}>
                <td>{no}</td>
                <td>{nama}</td>
                <td>{tanggal}</td>
                <td>{kasMasuk}</td>
                <td>{kasKeluar}</td>
                <td>{nominal}</td>
                <td>{keterangan}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  </div>
  )
}

export default Historypengeluaran