import React from 'react'
import { AiOutlineCloudUpload, AiOutlineDownload, AiOutlineSetting, AiOutlineDashboard} from 'react-icons/ai'
import {GoReport} from 'react-icons/go'
import {MdManageAccounts} from 'react-icons/md'

import { Link } from 'react-router-dom'
import '../Sidebar/sidebarstyle.css'


const style1 = { color: "white", fontSize: "1.5em" }

function sidebar() {
  return (
    <body>
      <div className='sidebar'>
      <div className='content-sidebar'>
      <div className='menu-sidebar d-flex'>
            <div className='logo'>
              <i><AiOutlineDashboard style={style1}/></i>
            </div>
            <div className='menu1'>
              <Link to="/dashboard" className='link-menu'>Dashboard</Link>
            </div>
          </div>
          <div className='menu-sidebar d-flex'>
            <div className='logo'>
              <i><AiOutlineDownload style={style1}/></i>
            </div>
            <div className='menu1'>
              <Link to="/penerimaan" className='link-menu'>Penerimaan</Link>
            </div>
          </div>
          <div className='menu-sidebar d-flex'>
            <div className='logo'>
              <i><AiOutlineCloudUpload style={style1}/></i>
            </div>
            <div className='menu1'>
              <Link className='link-menu'>Pengeluaran</Link>
            </div>
          </div>
          <div className='menu-sidebar d-flex'>
            <div className='logo'>
              <i><GoReport style={style1}/></i>
            </div>
            <div className='menu1'>
              <Link className='link-menu'>Laporan</Link>
            </div>
          </div>
          <div className='menu-sidebar d-flex'>
            <div className='logo'>
              <i><MdManageAccounts style={style1}/></i>
            </div>
            <div className='menu1'>
              <Link className='link-menu'>Manajemen User</Link>
            </div>
          </div>
          <div className='menu-sidebar d-flex'>
            <div className='logo'>
              <i><AiOutlineSetting style={style1}/></i>
            </div>
            <div className='menu1'>
              <Link className='link-menu'>Ubah Password</Link>
            </div>
          </div>
      </div>
    </div>
    </body>
    
  )
  
}

export default sidebar