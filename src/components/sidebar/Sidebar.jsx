import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { Collapse } from 'react-bootstrap';
import { MdArrowDropDownCircle } from 'react-icons/md';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    menuBtnChange();
  };

  const menuBtnChange = () => {
    const closeBtn = document.querySelector("#btn");

    if (isOpen) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  };

  const [open, setOpen] = useState(false);

  return (
    <>
       <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="logo-details">
        <div className="logo_name">Siskasti</div>
        <i className={`buka bx ${isOpen ? "bx-menu-alt-right" : "bx-menu"}`} id="btn" onClick={toggleSidebar}></i>
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/pembayaran">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Pembayaran</span>
          </Link>
          <span className="tooltip">Pembayaran</span>
        </li>
        <li>
          <Link to="/laporan-karyawan">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Laporan</span>
          </Link>
          <span className="tooltip">laporan</span>
        </li>
        <li>
          <Link onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
            <i className="bx bx-user"></i>
            <span className="links_name">Transaksi <i><MdArrowDropDownCircle/></i></span>
          </Link>
          <Collapse in={open}>
            <ul className='list-menu'>
              <li>
                <Link to='/kas-masuk'>
                  <i className="bx bx-user"></i>
                  <span className="links_name">Kas masuk</span>
                </Link>
                <span className="tooltip">Kas Masuk</span>
              </li>
              <li>
                <Link to='/'>
                  <i className="bx bx-user"></i>
                  <span className="links_name">Penyerahan Kas</span>
                </Link>
                <span className="tooltip">Penyerahan Kas</span>
              </li>
              <li>
                <Link to='/'>
                  <i className="bx bx-user"></i>
                  <span className="links_name">Dana</span>
                </Link>
                <span className="tooltip">Dana</span>
              </li>
            </ul>
          </Collapse>
        </li>
        <li>
          <Link to="/messages">
            <i className="bx bx-chat"></i>
            <span className="links_name">Messages</span>
          </Link>
          <span className="tooltip">Messages</span>
        </li>
        <li>
          <Link to="/analytics">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="links_name">Analytics</span>
          </Link>
          <span className="tooltip">Analytics</span>
        </li>
        <li>
          <Link to="/file-manager">
            <i className="bx bx-folder"></i>
            <span className="links_name">File Manager</span>
          </Link>
          <span className="tooltip">Files</span>
        </li>
        <li>
          <Link to="/order">
            <i className="bx bx-cart-alt"></i>
            <span className="links_name">Order</span>
          </Link>
          <span className="tooltip">Order</span>
        </li>
        <li>
          <Link to="/saved">
            <i className="bx bx-heart"></i>
            <span className="links_name">Saved</span>
          </Link>
          <span className="tooltip">Saved</span>
        </li>
        <li>
          <Link to="/settings">
            <i className="bx bx-cog"></i>
            <span className="links_name">Setting</span>
          </Link>
          <span className="tooltip">Setting</span>
        </li>
      </ul>
    </div>
    </>
  );
}

export default Sidebar;
