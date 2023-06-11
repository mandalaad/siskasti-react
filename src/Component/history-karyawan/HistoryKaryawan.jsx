import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


function HistoryKaryawan() {

  const [data, setData] = useState([
    { id: 1, name: 'John Doe', date: '2023-02-15' },
    { id: 2, name: 'Jane Smith', date: '2023-01-10' },
    { id: 3, name: 'Bob Johnson', date: '2023-03-22' },
  ]);
  const [startDate, setStartDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const handlePrint = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['ID', 'Name', 'Date']],
      body: filteredData.map(({ id, name, date }) => [id, name, date]),
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

  useEffect(() => {
    handleShowAllData();
  }, []);
  return (
    <div className='content'>
       <div>
        <h2>Data Table</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(({ id, name, date }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={handlePrint}>Print</button>
        <button onClick={handleShowAllData}>Tampilkan Semua Data</button>
        <DatePicker selected={startDate} onChange={handleFilterByMonth} showMonthYearPicker />
      </div>
    </div>
  )
}

export default HistoryKaryawan
