import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { AiOutlinePrinter } from 'react-icons/ai'
import './LPmingguan.css'
import DropdownLaporanPengeluaran from '../dropdown-laporan-pengeluaran/DropdownLaporanPengeluaran'

function LPmingguan() {
  return (
    <>
        <body> 
        <div className='table-penerimaan'>
            <Container fluid>
                        <div class="card-body">
                        <div className="fungsi">
                            <div className="content-left">
                                <p>Rentang Cetak</p>
                                <DropdownLaporanPengeluaran/>
                            </div>
                            <div className="content-right">
                                <div className="buton">
                                    <button> <i><AiOutlinePrinter/></i> Cetak</button>
                                </div>
                            </div>
                        </div>
                            <div className="table-responsive">
                                <Table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Jabatan</th>
                                            <th>Bulan</th>
                                            <th>Keterangan</th>
                                            <th>Jumlah</th>
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
                                    </tbody>
                                </Table>
                            </div>
                        </div>
            
        </Container>
        </div>
        </body>
    </>
  )
}

export default LPmingguan
