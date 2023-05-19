import React from 'react'
import {Col, Row } from 'react-bootstrap'
import {MdOutlineSettingsInputComposite, MdSupervisorAccount, MdAccountCircle} from 'react-icons/md'
import {VscOutput} from 'react-icons/vsc'
import {AiOutlineDollarCircle, AiOutlineHome, AiOutlineRight} from 'react-icons/ai'

import './style.css'
function Dashboardutama() {
  return (
    <body>
      <div className='container-dashboard'>
        <div className='dashboard-content'>
          <div className='sub-navbar'>
            <div>
              <h3>DASHBOARD</h3>
            </div>
            <div className='sub-navbtn d-flex'>
              <i><AiOutlineHome style={{fontSize:'1.5rem'}}/></i>
              <p className='mt-1 mx-1'>Home</p>
              <i><AiOutlineRight className='mt-1'/></i>
              <p className='mt-1'>Dashboard</p>
            </div>
          </div>
          <div className='upside-content d-flex'>
            <i><MdAccountCircle style={{fontSize:'1.5rem'}}/></i>
            <h6 className='mt-1' id='selamatdatang' style={{marginLeft:'10px'}}>Selamat Datang Tri!</h6>
          </div>
          <div className='midleside-content'>
            <Row>
              <Col xxl = {3} md = {6}>
                <div className='kartu mt-4'>
                  <div className="kartu-content">
                    <div>
                      <h5>Total Penerimaan</h5>
                    </div>
                    <div className='jumlahpenerimaan' id='jumlahpenerimaan'>
                      <h5>Rp. 1.000.000.000,00</h5>
                    </div>
                  </div>
                  <div className='logo-kartu'>
                      <i><MdOutlineSettingsInputComposite style={{color:'white', fontSize:'1.5rem'}}/></i>
                  </div>
                </div>
              </Col>
              <Col xxl = {3} md = {6}>
                <div className='kartu mt-4'>
                  <div className="kartu-content">
                    <div>
                      <h5>Total Pengeluaran</h5>
                    </div>
                    <div className='jumlahpengeluaran' id='jumlahpengeluaran'>
                      <h5>Rp. 1.500.000.000,00</h5>
                    </div>
                  </div>
                  <div className='logo-kartu'>
                      <i><VscOutput style={{color:'white', fontSize:'1.5rem'}}/></i>
                  </div>
                </div>
              </Col>
              <Col xxl = {3} md = {6}>
                <div className='kartu mt-4'>
                  <div className="kartu-content">
                    <div>
                      <h5>Saldo</h5>
                    </div>
                    <div className='saldo' id='jumlahsaldo'>
                      <h5>Rp. 3.000.000.000,00</h5>
                    </div>
                  </div>
                  <div className='logo-kartu'>
                      <i><AiOutlineDollarCircle style={{color:'white', fontSize:'1.5rem'}}/></i>
                  </div>
                </div>
              </Col>
              <Col xxl = {3} md = {6}>
                <div className='kartu mt-4'>
                  <div className="kartu-content">
                    <div>
                      <h5>Jumlah User</h5>
                    </div>
                    <div className='user' id='jumlahuser'>
                      <h5>2</h5>
                    </div>
                  </div>
                  <div className='logo-kartu'>
                      <i><MdSupervisorAccount style={{color:'white', fontSize:'1.5rem'}}/></i>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
    </div>
    </body>
    
  )
}

export default Dashboardutama