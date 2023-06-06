import React from 'react'
import Sidebarr from '../../Component/Sidebar/Sidebar'
import Navbarr from '../../Component/Navbar/Navbar'
import Dashboardutama from '../../Component/Dashboard-admin/Dashboardutama'
// import Navbarr2 from '../../Component/Navbar2/navbar2'
function Dashboard() {
  return (
    <>
    <Navbarr/>
    <Dashboardutama/>
    <Sidebarr/>
    </>
  )
}

export default Dashboard