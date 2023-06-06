import React from 'react'
import './navstyle.css'
import { NavDropdown, Navbar } from 'react-bootstrap'
import {MdOutlineAccountCircle} from 'react-icons/md'
import logo from '../../Asset/img/logo-siskasti.png'
const style1 = {fontSize: "1.5em" }
const style2 = {fontSize: "1.2em" }

function Navbarr() {
  return (
    <body>
      <Navbar className='custom-navbar fixed-top'>
        <div className='left-side'>
          
            <img src={logo} alt="" />
            <h3>SISKASTI</h3>
        </div>
        <div className='right-side d-flex'>
            <i className='me-2'><MdOutlineAccountCircle style={style1}/></i>
            <h6 className='mt-1'>El Pardo</h6>
            <NavDropdown style={style2} className='dropdown mt-1 mx-2' title="" align="end" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
            </NavDropdown>
        </div>
      </Navbar>
    </body>
    
  )
}

export default Navbarr