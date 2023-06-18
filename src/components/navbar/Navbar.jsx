import React from 'react'
import './Navbar.css'
import { Dropdown, Navbar } from 'react-bootstrap'
import {MdOutlineAccountCircle} from 'react-icons/md'
import logo from '../../assets/logo 1.png'
import { Link } from 'react-router-dom'
const style1 = {fontSize: "1.5em" }

function Navbarr() {
  return (
    <section className="home-section">
      <Navbar className='custom-navbar'>
        <div className='left-side'>
            <img className='logo' src={logo} alt="" />
        </div>
        <div className='right-side flex'>
            <Dropdown className='dropdown'>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <i className='me-2'><MdOutlineAccountCircle style={style1}/></i>
                <h6 className='mt-1'>Dear POJ Project Ko Gratis</h6>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                <Dropdown.Item as={Link} to="/login">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
      </Navbar>
    </section>
    
  )
}

export default Navbarr