import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { Collapse } from 'react-bootstrap';
import { MdArrowDropDownCircle,MdOutlinePayments } from 'react-icons/md';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { AiFillDatabase, AiOutlineTransaction } from 'react-icons/ai';
import { FaShare, FaReply } from 'react-icons/fa';
import { TbMoneybag } from 'react-icons/tb';
import { RxDashboard } from 'react-icons/rx';
import { FiDatabase } from 'react-icons/fi';

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
            <i><MdOutlinePayments/></i>
            <span className="links_name">Pembayaran</span>
          </Link>
          <span className="tooltip">Pembayaran</span>
        </li>
        <li>
          <Link to="/laporan-karyawan">
            <i><HiOutlineDocumentReport/></i>
            <span className="links_name">Laporan</span>
          </Link>
          <span className="tooltip">laporan</span>
        </li>
        <li>
          <Link to="/dashboard-dept">
            <i><RxDashboard/></i>
            <span className="links_name">Dashboard Dept</span>
          </Link>
          <span className="tooltip">Dashboard Dept</span>
        </li>
        <li>
          <Link onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
            <i><AiOutlineTransaction/></i>
            <span className="links_name">Transaksi <i><MdArrowDropDownCircle/></i></span>
          </Link>
          <Collapse in={open}>
            <ul className='list-menu'>
              <li>
                <Link to='/kas-masuk'>
                  <i><FaShare/></i>
                  <span className="links_name">Kas masuk</span>
                </Link>
                <span className="tooltip">Kas Masuk</span>
              </li>
              <li>
                <Link to='/penyerahan-kas'>
                  <i><FaReply/></i>
                  <span className="links_name">Penyerahan Kas</span>
                </Link>
                <span className="tooltip">Penyerahan Kas</span>
              </li>
              <li>
                <Link to='/permintaan-dana'>
                  <i><TbMoneybag/></i>
                  <span className="links_name">Dana</span>
                </Link>
                <span className="tooltip">Dana</span>
              </li>
            </ul>
          </Collapse>
        </li>
        <li>
          <Link to="/dashboard-divisi">
            <i><RxDashboard/></i>
            <span className="links_name">Dashboard Divisi</span>
          </Link>
          <span className="tooltip">Dashboard Divisi</span>
        </li>
        <li>
          <Link to="/kasmasuk-divisi">
            <i><FaShare/></i>
            <span className="links_name">Kas Masuk Div</span>
          </Link>
          <span className="tooltip">Kas Masuk Div</span>
        </li>
        <li>
          <Link to="/penerimaan-dana">
            <i><TbMoneybag/></i>
            <span className="links_name">Penerimaan Dana</span>
          </Link>
          <span className="tooltip">Penerimaan Dana</span>
        </li>
        <li>
          <Link to="/dashboard-sa">
            <i><RxDashboard/></i>
            <span className="links_name">Dashboard SA</span>
          </Link>
          <span className="tooltip">Dashboard SA</span>
        </li>
        <li>
          <Link to="/data-karyawan">
            <i><FiDatabase/></i>
            <span className="links_name">Data Karyawan</span>
          </Link>
          <span className="tooltip">Data Karyawan</span>
        </li>
        <li>
          <Link to="/">
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
