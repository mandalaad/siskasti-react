import React from 'react'
import { Link } from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'
import './style.css'

function DropdownLaporanPengeluaran() {
  return (
    <>
    <Dropdown>
    <Dropdown.Toggle variant="" className='toggle' id="dropdown-basic">
        Pilih
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Link to="/laporan-pengeluaran-mingguan" className='link' >
        <Dropdown.Item href="#/action-1">Mingguan</Dropdown.Item>
        </Link>
        <Link to="/laporan-pengeluaran-bulanan" className='link' >
        <Dropdown.Item href="#/action-1">Bulanan</Dropdown.Item>
        </Link>
        <Link to="/laporan-pengeluaran-tahunan" className='link' >
        <Dropdown.Item href="#/action-1">Tahunan</Dropdown.Item>
        </Link>
    </Dropdown.Menu>
    </Dropdown>
    </>
  )
}

export default DropdownLaporanPengeluaran
