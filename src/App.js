// import logo from './logo.svg';
import {   Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Dashboardutama from './Pages/Dashboard-utama/index';
import Manajemen from './Pages/manajemen-user/Manajemen';
import Ubahpassword from './Pages/ubah-password/Ubahpassword';
import KaryawanTransaksi from './Pages/karyawan-transaksi/KaryawanTransaksi';
import KaryawanHistory from './Pages/karyawan-history/KaryawanHistory';
import Income from './Pages/income/Income'
import Spending from './Pages/Spending/Spending';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' Component={Dashboardutama}/>
      <Route path='/login' Component={Login}/>
      <Route path='/dashboard' Component={Dashboardutama}/>
      <Route path='/manajemen-user' Component={Manajemen}/>
      <Route path='/ubah-password' Component={Ubahpassword}/>
      <Route path='/pembayaran' Component={KaryawanTransaksi}/>
      <Route path='/history' Component={KaryawanHistory}/>
      <Route path='/income' Component={Income}/>
      <Route path='/spending' Component={Spending}/>

    </Routes>
    </>
  );
}

export default App;
