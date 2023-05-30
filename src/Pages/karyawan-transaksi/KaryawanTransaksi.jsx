import React from 'react'
import Sidebarr from '../../Component/Sidebar/Sidebar'
import Navbarr from '../../Component/Navbar/Navbar'
import TransaksiKaryawan from '../../Component/transaksi-karyawan/TransaksiKaryawan'

function KaryawanTransaksi() {
  return (
    <>
    <Navbarr/>
    <TransaksiKaryawan/>
    <Sidebarr/>
    </>
  )
}

export default KaryawanTransaksi
