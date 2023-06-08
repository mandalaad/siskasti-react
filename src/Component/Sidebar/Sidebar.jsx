import React, { useState } from 'react'
import {AiOutlineSetting, AiOutlineDashboard, AiOutlineBarChart} from 'react-icons/ai'
import {AiOutlineShoppingCart, AiFillCaretDown, AiOutlineHistory} from 'react-icons/ai'
import {HiOutlineLogin} from 'react-icons/hi'
import {HiOutlineLogout} from 'react-icons/hi'
import {MdManageAccounts, MdOutlineHistoryEdu, MdOutlineWorkHistory} from 'react-icons/md'
import {MdPayment} from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'
import '../Sidebar/sidebarstyle.css'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import {RiFileHistoryLine} from 'react-icons/ri'

const style1 = { color: "white", fontSize: "1.5em" }
const style2 = { color: "white", fontSize: "1.2em" }
function Sidebar() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const navLinkStyles = ({isActive}) => {
    return{
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'none',
    }
  }
  return (
    <body>
      <nav>
      <div className='sidebar scrol'>
        <div className='content-sidebar'>
          <NavLink style={navLinkStyles} to='/dashboard' className='sidebar-link'>
            {/* <Link to="/dashboard" className='sidebar-link'> */}
                <div className='menu-sidebar d-flex'>
                    <div className='logo'>
                      <i><AiOutlineDashboard style={style1}/></i>
                    </div>
                    <div className='menu1'>
                    <Link to="/dashboard" className='link-menu'>Dashboard</Link>
                    </div>
                </div>
            {/* </Link> */}
          </NavLink>

          <NavLink style={navLinkStyles} to='/pembayaran' className='sidebar-link'>
                <div className='menu-sidebar d-flex'>
                  <div className='logo'>
                    <i><MdPayment style={style1}/></i>
                  </div>
                  <div className='menu1'>
                    <Link to="/pembayaran" className='link-menu'>Pembayaran</Link>
                  </div>
                </div>
          </NavLink>
          {/* <NavLink style={navLinkStyles} to='/history-sa' className='sidebar-link'>
                <div className='menu-sidebar d-flex'>
                  <div className='logo'>
                    <i><AiOutlineHistory style={style1}/></i>
                  </div>
                  <div className='menu1'>
                    <Link to="/history-sa" className='link-menu'>Riwayat</Link>
                  </div>
                </div>
            </NavLink> */}
            <NavLink className='sidebar-link'>
              <>
                <Button
                  variant='outline'
                  className='button-dropdown menu-sidebar'
                  onClick={() => setOpen3(!open3)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                > <i><AiOutlineHistory style={style1}/></i> <p className='link-menu'>Riwayat</p> <i>
                  <AiFillCaretDown className='mx-2 mt-1' style={style2}/>
                </i>
                </Button>
                <Collapse in={open3}>
                  <div id="example-collapse-text">
                    <NavLink style={navLinkStyles} to='/history-karyawan'>
                      <div className='menu-sidebar d-flex'>
                        <div className='logo'>
                          <i><MdOutlineWorkHistory style={style1}/></i>
                        </div>
                        <div className='menu1'>
                          <Link to="/history-karyawan" className='link-menu'>Riwayat Transaksi Karyawan</Link>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink style={navLinkStyles} to='/history-pemasukan'>
                      <div className='menu-sidebar d-flex'>
                        <div className='logo'>
                          <i><RiFileHistoryLine style={style1}/></i>
                        </div>
                        <div className='menu1'>
                          <Link to="/history-pemasukan" className='link-menu'>Riwayat Pemasukan</Link>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink style={navLinkStyles} to='/history-pengeluaran'>
                      <div className='menu-sidebar d-flex'>
                        <div className='logo'>
                          <i><MdOutlineHistoryEdu style={style1}/></i>
                        </div>
                        <div className='menu1'>
                          <Link to="/history-pengeluaran" className='link-menu'>Riwayat Pengeluaran</Link>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </Collapse>
              </>
            </NavLink>

            <NavLink className='sidebar-link'>
              <>
                <Button
                  variant='outline'
                  className='button-dropdown menu-sidebar'
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                > <i><AiOutlineShoppingCart style={style1}/></i> <p className='link-menu'>Transaksi</p> <i>
                  <AiFillCaretDown className='mx-2 mt-1' style={style2}/>
                </i>
                </Button>
                <Collapse in={open}>
                  <div id="example-collapse-text">
                    <NavLink style={navLinkStyles} to='/Income'>
                      <div className='menu-sidebar d-flex'>
                        <div className='logo'>
                          <i><HiOutlineLogin style={style1}/></i>
                        </div>
                        <div className='menu1'>
                          <Link to="/Income" className='link-menu'>Kas Masuk</Link>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink style={navLinkStyles} to='/spending'>
                      <div className='menu-sidebar d-flex'>
                        <div className='logo'>
                          <i><HiOutlineLogout style={style1}/></i>
                        </div>
                        <div className='menu1'>
                          <Link to="/spending" className='link-menu'>Kas Keluar</Link>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </Collapse>
              </>
            </NavLink>

            <NavLink className='sidebar-link'>
              <>
                <Button
                  variant='outline'
                  className='button-dropdown menu-sidebar'
                  onClick={() => setOpen2(!open2)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                > <i><AiOutlineSetting style={style1}/></i> <p className='link-menu'>Pengaturan</p> <i>
                  <AiFillCaretDown className='mx-2 mt-1' style={style2}/>
                </i>
                </Button>
                <Collapse in={open2}>
                  <div id="example-collapse-text">
                    <NavLink style={navLinkStyles} to='/parameter'>
                      <div className='menu-sidebar d-flex'>
                        <div className='logo'>
                          <i><AiOutlineBarChart style={style1}/></i>
                        </div>
                        <div className='menu1'>
                          <Link to="/parameter" className='link-menu'>Parameter</Link>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink style={navLinkStyles} to='/manajemen-user' className='sidebar-link'>
                          <div className='menu-sidebar d-flex'>
                            <div className='logo'>
                              <i><MdManageAccounts style={style1}/></i>
                            </div>
                            <div className='menu1'>
                              <Link to="/manajemen-user" className='link-menu'>Manajemen user</Link>
                            </div>
                          </div>
                    </NavLink>
            
                    <NavLink style={navLinkStyles} to='/ubah-password' className='sidebar-link'>
                        <div className='menu-sidebar d-flex'>
                          <div className='logo'>
                            <i><AiOutlineSetting style={style1}/></i>
                          </div>
                          <div className='menu1'>
                            <Link to="/ubah-password" className='link-menu'>Ubah Password</Link>
                          </div>
                        </div>
                    </NavLink>
                   
                  </div>
                </Collapse>
              </>
            </NavLink>
            
          </div>
      </div>
      </nav>
      
    </body>
    
  );
  
}

export default Sidebar