import React, { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import './HistoryKaryawan.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import axios from "axios"
import id from 'date-fns/locale/id';
import { getMonth } from "date-fns"

function Historykaryawan() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    useEffect(() => {
      setFilteredData(data);
    }, [data]);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.87.10.30:8080/api/auth/login');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
  const [startDate, setStartDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const handlePrint = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['No', 'Nama', 'Tanggal', 'NIK', 'Grade', 'Nominal', 'Unit Kerja', 'Status']],
      body: filteredData.map(({ id, name, tanggal, nik, grade, nominal, unitkerja, status }) => [id, name, tanggal, nik, grade, nominal, unitkerja, status]),
    });
    doc.save('table.pdf');
  };

  const handleFilterByMonth = (date) => {
    setStartDate(date);
    const selectedMonth = getMonth(date);
    const filteredByMonth = data.filter((item) => {
      const itemMonth = getMonth(new Date(item.tanggal));
      return itemMonth === selectedMonth;
    });
    setFilteredData(filteredByMonth);
  };
  
  const formatDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('id-ID', options);
    return formattedDate;
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
              <DatePicker 
              selected={startDate} 
              onChange={handleFilterByMonth} 
              showMonthYearPicker 
              dateFormat="MMMM yyyy" 
              locale={id}
              />
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
          <th>No</th>
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
          {filteredData.map(({ id, nama, tanggal, nik, grade, nominal, unitKerja, status  }) => (
              <tr key={id}>
              <td>{id}</td>
              <td>{nama}</td>
              <td>{formatDate(tanggal)}</td>
              <td>{nik}</td>
              <td>{grade}</td>
              <td>{nominal}</td>
              <td>{unitKerja}</td>
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

                  