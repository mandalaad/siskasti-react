import React, { useState } from 'react'
import { Button, Collapse } from 'react-bootstrap';
import { AiOutlineCloudUpload, AiOutlineDashboard, AiOutlineDownload, AiOutlineSetting } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { GoReport } from 'react-icons/go';
import { HiOutlineLogin, HiOutlineLogout } from 'react-icons/hi';
import { MdManageAccounts, MdTrolley } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './sidebaradminstyle.css'
const style1 = { color: "white", fontSize: "1.5em" }

function Sidebaradmin() {
    const [open, setOpen] = useState(false);
  return (
    <body>
      <div className='sidebar'>
        <div className='content-sidebar'>
            <Link to="/dashboard" className='sidebar-link'>
                <div className='menu-sidebar d-flex'>
                    <div className='logo'>
                      <i><AiOutlineDashboard style={style1}/></i>
                    </div>
                    <div className='menu1'>
                    <Link to="/dashboard-admin" className='link-menu'>Dashboard</Link>
                    </div>
                </div>
            </Link>
            <Link className='sidebar-link'>
              <>
                <Button
                  variant='outline'
                  className='butonn menu-sidebar'
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                > <i><MdTrolley style={style1}/></i> Transaksi
                </Button>
                <Collapse in={open}>
                  <div id="example-collapse-text">
                    <div className='menu-sidebar d-flex'>
                      <div className='logo'>
                        <i><HiOutlineLogin style={style1}/></i>
                      </div>
                      <div className='menu1'>
                        <Link to="/laporan-penerimaan" className='link-menu'>Pemasukan</Link>
                      </div>
                    </div>
                    <div className='menu-sidebar d-flex'>
                      <div className='logo'>
                        <i><HiOutlineLogout style={style1}/></i>
                      </div>
                      <div className='menu1'>
                        <Link to="/laporan-pengeluaran-mingguan" className='link-menu'>Pengeluaran</Link>
                      </div>
                    </div>
                    <div className='menu-sidebar d-flex'>
                      <div className='logo'>
                        <i><CgFileDocument style={style1}/></i>
                      </div>
                      <div className='menu1'>
                        <Link to="/laporan" className='link-menu'>Rekapitulasi</Link>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </>
            </Link>
            <Link to="/manajemen-user" className='sidebar-link'>
              <div className='menu-sidebar d-flex'>
                <div className='logo'>
                  <i><MdManageAccounts style={style1}/></i>
                </div>
                <div className='menu1'>
                  <Link to="/manajemen-user" className='link-menu'>Manajemen user</Link>
                </div>
              </div>
            </Link>
            <Link to="/ubah-password" className='sidebar-link'>
              <div className='menu-sidebar d-flex'>
                <div className='logo'>
                  <i><AiOutlineSetting style={style1}/></i>
                </div>
                <div className='menu1'>
                  <Link to="/ubah-password" className='link-menu'>Ubah Password</Link>
                </div>
              </div>
            </Link>
          </div>
      </div>
    </body>
  )
}

export default Sidebaradmin