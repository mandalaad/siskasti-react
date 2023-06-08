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
import Parameter from './Pages/parameter-super-admin/Parameter';
import HistoryPemasukanAdmin from './Pages/History-pemasukan/HistoryPemasukanAdmin';
import HistoryPengeluaran from './Pages/History-pengeluaran/HistoryPengeluaran';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' Component={Dashboardutama}/>
      <Route path='/login' Component={Login}/>
      <Route path='/dashboard' Component={Dashboardutama}/>
      <Route path='/pembayaran' Component={KaryawanTransaksi}/>
      <Route path='/income' Component={Income}/>
      <Route path='/spending' Component={Spending}/>
      <Route path='/history-karyawan' Component={KaryawanHistory}/>
      <Route path='/history-pemasukan' Component={HistoryPemasukanAdmin}/>
      <Route path='/history-pengeluaran' Component={HistoryPengeluaran}/>
      <Route path='/parameter' Component={Parameter}/>
      <Route path='/manajemen-user' Component={Manajemen}/>
      <Route path='/ubah-password' Component={Ubahpassword}/>

    </Routes>
    </>
  );
}

export default App;
