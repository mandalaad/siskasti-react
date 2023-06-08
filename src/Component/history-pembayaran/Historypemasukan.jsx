import React, { useState, Component } from 'react'
import ReactToPrint from 'react-to-print'
import {AiOutlinePrinter}from 'react-icons/ai'
import { Table } from 'react-bootstrap';
import './historypemasukanstyle.css'
function Historypemasukan() {
  // ini buat print 
    // handlePrint = () => {
    //     fetch('https://example.com/api/data') // Ganti dengan URL API yang sesuai
    //       .then((response) => response.json())
    //       .then((data) => {
    //         const doc = new jsPDF();
    //         doc.autoTable({
    //           head: [['ID', 'Nama', 'Usia']],
    //           body: data.map((item) => [item.id, item.name, item.age])
    //         });
    //         doc.save('tabel.pdf');
    //       })
    //       .catch((error) => {
    //         console.error('Error:', error);
    //       });
    //   };

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
    { no: '1', tanggal: 25, kasmasuk: 236428746286, kaskeluar:3212387192, nominal:20000, keterangan:'lunas' },
    { no: '1', tanggal: 25, kasmasuk: 236428746286, kaskeluar:3212387192, nominal:20000, keterangan:'lunas' },
    { no: '1', tanggal: 25, kasmasuk: 236428746286, kaskeluar:3212387192, nominal:20000, keterangan:'lunas' },
    { no: '1', tanggal: 25, kasmasuk: 236428746286, kaskeluar:3212387192, nominal:20000, keterangan:'lunas' },
    { no: '1', tanggal: 25, kasmasuk: 236428746286, kaskeluar:3212387192, nominal:20000, keterangan:'lunas' },
    { no: '1', tanggal: 25, kasmasuk: 236428746286, kaskeluar:3212387192, nominal:20000, keterangan:'lunas' },
    { no: '1', tanggal: 25, kasmasuk: 236428746286, kaskeluar:3212387192, nominal:20000, keterangan:'lunas' },
    { no: '1', tanggal: 25, kasmasuk: 236428746286, kaskeluar:3212387192, nominal:20000, keterangan:'lunas' },
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
  return (
    
    <>
    
    <div className="content">
      <div>
        <ReactToPrint trigger={()=>{
          return <button> <i><AiOutlinePrinter/></i> Print</button>
        }}
        content={()=>this.componentRef}
        documentTitle='History'
        pageStyle="print"  
        />
      </div>
      <div className="tabel-history-sa" ref={el=>(this.componentRef=el)}>
          <h3>Riwayat</h3>
            <div className="buton">
                <button>print</button>
                {/* <button onClick={this.handlePrint}>print</button> */}
            </div>
          <div className="table-responsive">
              <Table className="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
                  <thead>
                      <tr>
                      <th>No</th>
                      <th>Tanggal</th>
                      <th>Kas masuk</th>
                      <th>Kas Keluar</th>
                      <th>Nominal</th>
                      <th>Keterangan</th>
                      </tr>
                  </thead>
                  <tbody>
                    {limitedData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.no}</td>
                        <td>{item.tanggal}</td>
                        <td>{item.kasmasuk}</td>
                        <td>{item.kaskeluar}</td>
                        <td>{item.nominal}</td>
                        <td>{item.keterangan}</td>
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

export default Historypemasukan