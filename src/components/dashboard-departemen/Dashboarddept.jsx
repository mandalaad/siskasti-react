import React from 'react'
import './dashboarddepartemen.css'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MdOutlineSettingsInputComposite } from 'react-icons/md'
import { VscOutput } from 'react-icons/vsc'
function Dashboarddivisi() {
  return (
    <div className='content'>
        <div className='wrap'>
            <div className='departemen'>
                <div className='header'>
                    <h4>Dashboard Bendahara Departemen</h4>
                </div>
                <div className='midleside-content'>
                <Row>
                  <Col xxl = {4} md = {6} sm={12}>
                    <Link className='dashboard-link'>
                      <div className='kartu mt-4'>
                        <div className="dsad">
                          <div className="kartu-content">
                            <div>
                              <h5>Disetujui</h5>
                            </div>
                            <div className='jumlahpenerimaan' id='jumlahpenerimaan'>
                              <h5></h5>
                            </div>
                        </div>
                        <div className='logo-kartu'>
                            <i><MdOutlineSettingsInputComposite style={{color:'grey', fontSize:'1.5rem'}}/></i>
                        </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col xxl = {4} md = {6} sm={12}>
                    <Link className='dashboard-link'>
                      <div className='kartu mt-4'>
                        <div className="kartu-content">
                          <div>
                            <h5>Tertunda </h5>
                          </div>
                          <div className='jumlahpengeluaran' id='jumlahpengeluaran'>
                            <h5>3 orang</h5>
                          </div>
                        </div>
                        <div className='logo-kartu'>
                            <i><VscOutput style={{color:'grey', fontSize:'1.5rem'}}/></i>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col xxl = {4} md = {6} sm={12}>
                    <Link className='dashboard-link'>
                      <div className='kartu mt-4'>
                        <div className="kartu-content">
                          <div>
                            <h5>Belum Bayar</h5>
                          </div>
                          <div className='jumlahpengeluaran' id='jumlahpengeluaran'>
                            <h5>3 orang</h5>
                          </div>
                        </div>
                        <div className='logo-kartu'>
                            <i><VscOutput style={{color:'grey', fontSize:'1.5rem'}}/></i>
                        </div>
                      </div>
                    </Link>
                  </Col>
                </Row>
                </div>
              </div>
          </div>
    </div>
  )
}

export default Dashboarddivisi