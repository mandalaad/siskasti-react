import React from 'react'
import { NavDropdown, Navbar } from 'react-bootstrap'
import { MdOutlineAccountCircle } from 'react-icons/md'
import './navbaradminstyle.css'

const style1 = {fontSize: "1.5em" }
function Navbaradmin() {
  return (
    <body>
      <Navbar className='custom-navbar-admin fixed-top'>
        <div className='left-side'>
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

export default Navbaradmin