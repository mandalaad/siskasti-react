import React from 'react'
import Navbarr from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
// import HistorySA from '../../Component/history-sa/HistorySA'
import History2 from '../../Component/history-sa2/historySA2'
function SAHistory() {
  return (
    <>
    <Navbarr/>
    {/* <HistorySA/> */}
    <History2/>
    <Sidebar/>
    </>
  )
}

export default SAHistory