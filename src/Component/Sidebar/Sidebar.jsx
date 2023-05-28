import React, { useState } from 'react'
import { AiOutlineCloudUpload, AiOutlineDownload, AiOutlineSetting, AiOutlineDashboard} from 'react-icons/ai'
import {GoReport} from 'react-icons/go'
import {HiOutlineLogin} from 'react-icons/hi'
import {HiOutlineLogout} from 'react-icons/hi'
import {MdManageAccounts} from 'react-icons/md'
import {CgFileDocument} from 'react-icons/cg'
import { Link } from 'react-router-dom'
import '../Sidebar/sidebarstyle.css'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


const style1 = { color: "white", fontSize: "1.5em" }

function Sidebar() {
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
                    <Link to="/dashboard" className='link-menu'>Dashboard</Link>
                    </div>
                </div>
            </Link>
            <Link to="/penerimaan" className='sidebar-link'>
              <div className='menu-sidebar d-flex'>
                  <div className='logo'>
                    <i><AiOutlineDownload style={style1}/></i>
                  </div>
                  <div className='menu1'>
                    <Link to="/penerimaan" className='link-menu'>Penerimaan</Link>
                  </div>
              </div>
            </Link>
            <Link to="/pengeluaran" className='sidebar-link'>
              <div className='menu-sidebar d-flex'>
                <div className='logo'>
                  <i><AiOutlineCloudUpload style={style1}/></i>
                </div>
                <div className='menu1'>
                  <Link to="/pengeluaran" className='link-menu'>Pengeluaran</Link>
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
                > <i><GoReport style={style1}/></i> Laporan
                </Button>
                <Collapse in={open}>
                  <div id="example-collapse-text">
                    <div className='menu-sidebar d-flex'>
                      <div className='logo'>
                        <i><HiOutlineLogin style={style1}/></i>
                      </div>
                      <div className='menu1'>
                        <Link to="/laporan-penerimaan" className='link-menu'>Penerimaan</Link>
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
    
  );
  
}

export default Sidebar