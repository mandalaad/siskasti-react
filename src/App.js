// import logo from './logo.svg';
import {   Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';

// import Sidebar from './Component/Sidebar';
import Dashboardutama from './Pages/Dashboard-utama/index';
import Penerimaan from './Pages/penerimaan/Penerimaan';
import Pengeluaran from './Pages/pengeluaran/Pengeluaran';
import Laporan from './Pages/laporan/Laporan';
import Manajemen from './Pages/manajemen-user/Manajemen';
import Ubahpassword from './Pages/ubah-password/Ubahpassword';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' Component={Dashboardutama}/>
      <Route path='/login' Component={Login}/>
      <Route path='/dashboard' Component={Dashboardutama}/>
      <Route path='/penerimaan' Component={Penerimaan}/>
      <Route path='/pengeluaran' Component={Pengeluaran}/>
      <Route path='/laporan' Component={Laporan}/>
      <Route path='/manajemen-user' Component={Manajemen}/>
      <Route path='/ubah-password' Component={Ubahpassword}/>
    </Routes>
    </>
  );
}

export default App;
