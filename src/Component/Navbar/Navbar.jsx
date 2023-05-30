import React from 'react'
import './navstyle.css'
import { NavDropdown, Navbar } from 'react-bootstrap'
import {MdOutlineAccountCircle} from 'react-icons/md'
import logo from '../../Asset/img/logo-siskasti.png'
const style1 = {fontSize: "1.5em" }
function Navbarr() {
  return (
    <body>
      <Navbar className='custom-navbar fixed-top'>
        <div className='left-side'>
          
            <img src={logo} alt="" />
            <h3>SISKASTI</h3>
        </div>
        <div className='right-side d-flex'>
            <NavDropdown className='dropdown mt-1' title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
            </NavDropdown>
            <i className='me-2'><MdOutlineAccountCircle style={style1}/></i>
            <h6 className='mt-1'>Tri Mandala Adi Dalem</h6>
        </div>
      </Navbar>
    </body>
    
  )
}

export default Navbarr