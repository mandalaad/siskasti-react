import React from 'react'
import './nav2style.css'
import { Dropdown, DropdownButton, NavDropdown, Navbar } from 'react-bootstrap'
import { MdOutlineAccountCircle } from 'react-icons/md'
import logo from '../../Asset/img/logo-siskasti.png'
import { Link } from 'react-router-dom'
const style1 = {fontSize: "1.5em" }
function navbarr2() {
  //function dropdown navbar
//   const dropcontent = document.getElementById('contentdrop');
//   const buttondrop = () => {
//   document.getElementById('akun');
//   dropcontent.style.display = 'block';
// }
  return (
    <body>
        <Navbar className='custom-navbar fixed-top'>
        <div className='left-side'>
          
            <img src={logo} alt="" />
            <h3>SISKASTI</h3>
        </div>
        <div className='right-side d-flex'>
            {/* <DropdownButton
              align="end"
              title=""
              id="dropdown-menu-align-end"
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton> */}
            <i className='me-2'><MdOutlineAccountCircle style={style1}/></i>
            <h6 className='mt-1'>El Pardo</h6>
            <NavDropdown className='dropdown mt-1 mx-2' title="" align="end" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
            </NavDropdown>
            

        </div>
      </Navbar>
    </body>
  )
}

export default navbarr2