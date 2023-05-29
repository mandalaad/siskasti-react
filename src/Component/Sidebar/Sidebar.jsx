import React, { useState } from 'react'
import {AiOutlineSetting, AiOutlineDashboard} from 'react-icons/ai'
import {AiOutlineShoppingCart, AiFillCaretDown, AiOutlineHistory} from 'react-icons/ai'
import {HiOutlineLogin} from 'react-icons/hi'
import {HiOutlineLogout} from 'react-icons/hi'
import {MdManageAccounts} from 'react-icons/md'
import {MdPayment} from 'react-icons/md'
import { Link } from 'react-router-dom'
import '../Sidebar/sidebarstyle.css'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


const style1 = { color: "white", fontSize: "1.5em" }
const style2 = { color: "white", fontSize: "1.2em" }
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
            <Link to="/pembayaran" className='sidebar-link'>
              <div className='menu-sidebar d-flex'>
                <div className='logo'>
                  <i><MdPayment style={style1}/></i>
                </div>
                <div className='menu1'>
                  <Link to="/pembayaran" className='link-menu'>Pembayaran</Link>
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
                > <i><AiOutlineShoppingCart style={style1}/></i> Transaction <i>
                  <AiFillCaretDown className='mx-2' style={style2}/>
                </i>
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
                  </div>
                </Collapse>
              </>
            </Link>
            <Link to="/pengeluaran" className='sidebar-link'>
              <div className='menu-sidebar d-flex'>
                <div className='logo'>
                  <i><AiOutlineHistory style={style1}/></i>
                </div>
                <div className='menu1'>
                  <Link to="/history" className='link-menu'>History</Link>
                </div>
              </div>
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