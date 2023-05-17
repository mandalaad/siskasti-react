import React from 'react'
import {Navbar} from 'react-bootstrap'
import {} from 'react-router-dom'
import '../Navbar/navstyle.css'
function Navbarr() {
  return (
    <Navbar className='custom-navbar fixed-top'>
      {/* <Container>
        <Navbar.Brand href="/"><h2>Dashboard</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto custom-nav">
            <Nav.Link href="/discovery" className='px-3'>Disovery</Nav.Link>
            <Nav.Link href="/destination" className='px-3'>Destination</Nav.Link>
            <Nav.Link href="#home" className='px-3'>Package</Nav.Link>
            <Nav.Link href="/Aboutus" className='px-3'>About Us</Nav.Link>
          </Nav>
          <Link>
          <button className='btn-normal'>Register</button>
          </Link>
        </Navbar.Collapse>
      </Container> */}
    </Navbar>
  )
}

export default Navbarr