import React from 'react'
import Table  from 'react-bootstrap/Table'
import { Container } from 'react-bootstrap'
import { MdOutlineAddBox } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';

function penerimaan() {
  return (
    <body>
        <div className='table-penerimaan'>
            <Container fluid>
                        <div class="card-body">
                        <div className="fungsi">
                                <div className="content-left">
                                    <p>Divisi</p>
                                    <select name="cars" id="cars">
                                        <option value="volvo">5</option>
                                        <option value="saab">10</option>
                                        <option value="opel">15</option>
                                        <option value="audi">20</option>
                                    </select>
                                    <p>data</p>
                                </div>
                                    <div className="content-right">
                                    <p>cari</p>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="table-responsive">
                                <Table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Nama</th>
                                            <th>Tanggal</th>
                                            <th>Jabatan</th>
                                            <th>Nominal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01</td>
                                            <td>Mandala</td>
                                            <td>16 Mei 2023</td>
                                            <td>Bendahara Departemen</td>
                                            <td>Rp.1000</td>
                                        </tr>
                                        <tr>
                                            <td>02</td>
                                            <td>Farhan</td>
                                            <td>16 Mei 2023</td>
                                            <td>Bendahara Departemen</td>
                                            <td>Rp.1000</td>
                                        </tr>
                                        <tr>
                                            <td>03</td>
                                            <td>Luky</td>
                                            <td>16 Mei 2023</td>
                                            <td>Bendahara Departemen</td>
                                            <td>Rp.1000</td>
                                        </tr>
                                        <tr>
                                            <td>04</td>
                                            <td>Umar</td>
                                            <td>16 Mei 2023</td>
                                            <td>Bendahara Departemen</td>
                                            <td>Rp.1000</td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>Putri</td>
                                            <td>16 Mei 2023</td>
                                            <td>Bendahara Departemen</td>
                                            <td>Rp.1000</td>
                                        </tr>
                                        <tr>
                                            <td>06</td>
                                            <td>Ramdhani</td>
                                            <td>16 Mei 2023</td>
                                            <td>Bendahara Departemen</td>
                                            <td>Rp.1000</td>
                                        </tr>
                                        <tr>
                                            <td>07</td>
                                            <td>Savira</td>
                                            <td>16 Mei 2023</td>
                                            <td>Bendahara Departemen</td>
                                            <td>Rp.1000</td>
                                        </tr>
                                        <tr>
                                            <td>08</td>
                                            <td>Akbar</td>
                                            <td>16 Mei 2023</td>
                                            <td>Bendahara Departemen</td>
                                            <td>Rp.1000</td>
                                        </tr>
                                        <tr>
                                            <td>09</td>
                                            <td>Rama</td>
                                            <td>16 Mei 2023</td>
                                            <td>Bendahara Departemen</td>
                                            <td>Rp.1000</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <div className="buton">
                                    <button><MdOutlineAddBox/> Tambah</button>
                                    <button><BiEdit/> Edit</button> 
                                </div>
                            </div>
                        </div>

        </Container>
        </div>
    </body>
    
  )
}

export default penerimaan