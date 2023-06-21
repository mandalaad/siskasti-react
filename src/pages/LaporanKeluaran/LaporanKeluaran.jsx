import React from 'react'
import Navbarr from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import LaporanKasKeluar from '../../components/Laporan-kas-keluar/LaporanKasKeluar'

function LaporanKeluaran() {
  return (
    <>
    <Sidebar/>
    <Navbarr/>
    <LaporanKasKeluar/>
    </>
  )
}

export default LaporanKeluaran
