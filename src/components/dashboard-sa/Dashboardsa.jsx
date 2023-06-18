import React from 'react'
import './Dashboardsa.css'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MdOutlineSettingsInputComposite } from 'react-icons/md'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { VscOutput } from 'react-icons/vsc'

function Dashboardsa() {
  return (
    <>
      <div className="content">
        <div className="wrap">
            <div className="dashboardsa">
                <div className="header">
                    <h4>Dashboard Super Admin</h4>
                </div>
                <div className='midleside-content'>
                <Row className='flex'>
                <Col xxl = {4} md = {6} sm={12}>
                    <Link to="/penerimaan" className='dashboard-link'>
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
                            <i><MdOutlineSettingsInputComposite style={{color:'grey', fontSize:'1.5rem'}}/></i>
                        </div>
                    </div>
                    </Link>
                </Col>
                <Col xxl = {4} md = {6} sm={12}>
                    <Link to="/pengeluaran" className='dashboard-link'>
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
                            <i><VscOutput style={{color:'grey', fontSize:'1.5rem'}}/></i>
                        </div>
                    </div>
                    </Link>
                </Col>
                <Col xxl = {4} md = {6} sm={12}>
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
                        <i><AiOutlineDollarCircle style={{color:'grey', fontSize:'1.5rem'}}/></i>
                    </div>
                    </div>
                </Col>
                <Col xxl = {4} md = {6} sm={12}>
                    <Link to="/penerimaan" className='dashboard-link'>
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
                            <i><MdOutlineSettingsInputComposite style={{color:'grey', fontSize:'1.5rem'}}/></i>
                        </div>
                    </div>
                    </Link>
                </Col>
                <Col xxl = {4} md = {6} sm={12}>
                    <Link to="/pengeluaran" className='dashboard-link'>
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
                            <i><VscOutput style={{color:'grey', fontSize:'1.5rem'}}/></i>
                        </div>
                    </div>
                    </Link>
                </Col>
                <Col xxl = {4} md = {6} sm={12}>
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
                        <i><AiOutlineDollarCircle style={{color:'grey', fontSize:'1.5rem'}}/></i>
                    </div>
                    </div>
                </Col>
                </Row>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Dashboardsa
