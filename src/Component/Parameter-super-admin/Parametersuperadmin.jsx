import React, { useState } from 'react'
import Tambahmodalparameterr from '../modal-parameter-tambah/tambahmodalparameter';
import { Table } from 'react-bootstrap'
import './parameterstyle.css'
function Parametersuperadmin() {

  const data = [
    { no: '1', namabendahara: 'mandala', department: 'Frontend Developer', phone:'0888111122', norekening:8383838383 },
    { no: '1', namabendahara: 'mandala', department: 'Frontend Developer', phone:'0888111122', norekening:8383838383 },
    { no: '1', namabendahara: 'mandala', department: 'Frontend Developer', phone:'0888111122', norekening:8383838383 },
    { no: '1', namabendahara: 'mandala', department: 'Frontend Developer', phone:'0888111122', norekening:8383838383 },
    { no: '1', namabendahara: 'mandala', department: 'Frontend Developer', phone:'0888111122', norekening:8383838383 },
    { no: '1', namabendahara: 'mandala', department: 'Frontend Developer', phone:'0888111122', norekening:8383838383 },
    { no: '1', namabendahara: 'mandala', department: 'Frontend Developer', phone:'0888111122', norekening:8383838383 },
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
  const [modalShow2, setModalShow2] = React.useState(false);
  return (
    <body>
         <div className='container-parameter'>
          <div className='content-parameter'>
            
              <h3>Parameter</h3>
              <div className='content-atas d-flex justify-content-end'>
                <div className="buton mx-2">
                  <button onClick={() => setModalShow(true)}>Tambah</button>
                </div>
                
                <Tambahmodalparameterr 
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  />
                <div className="buton mx-4">
                  <button>Edit</button>
                </div>
                <div className="buton">
                  <button>Hapus</button>
                </div>
              </div>
            
            <div className='tabel-parameter'>
            <Table className="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
              <thead>
                  <tr>
                  <th>No</th>
                  <th>Nama Bendahara</th>
                  <th>Department</th>
                  <th>No. Hp</th>
                  <th>No. Rekening</th>
                  </tr>
              </thead>
              <tbody>
                {limitedData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.no}</td>
                    <td>{item.namabendahara}</td>
                    <td>{item.department}</td>
                    <td>{item.phone}</td>
                    <td>{item.norekening}</td>
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
    </body>
   
  )
}

export default Parametersuperadmin