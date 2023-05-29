// import logo from './logo.svg';
import {   Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Dashboardutama from './Pages/Dashboard-utama/index';
import Penerimaan from './Pages/penerimaan/Penerimaan';
import Pengeluaran from './Pages/pengeluaran/Pengeluaran';
import Laporan from './Pages/laporan/Laporan';
import Manajemen from './Pages/manajemen-user/Manajemen';
import Ubahpassword from './Pages/ubah-password/Ubahpassword';
import Lpenerimaan from './Pages/laporan-penerimaan/Lpenerimaan';
import LaporanBulanan from './Pages/laporan-bulanan/LaporanBulanan';
import Ltahun from './Pages/laporantahunan/Ltahun';
import Lpengeluaranmingguan from './Pages/Lpengeluaran-mingguan/Lpengeluaranmingguan';
import Lpengeluaranbulanan from './Pages/Lpengeluaran-bulanan/Lpengeluaranbulanan';
import Lpengeluarantahunan from './Pages/Lpengeluaran-tahunan/Lpengeluarantahunan';
import KaryawanTransaksi from './Pages/karyawan-transaksi/KaryawanTransaksi';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' Component={Dashboardutama}/>
      <Route path='/login' Component={Login}/>
      <Route path='/dashboard' Component={Dashboardutama}/>
      <Route path='/penerimaan' Component={Penerimaan}/>
      <Route path='/pengeluaran' Component={Pengeluaran}/>
      <Route path='/laporan-penerimaan' Component={Lpenerimaan}/>
      <Route path='/laporan-bulanan' Component={LaporanBulanan}/>
      <Route path='/laporan-tahunan' Component={Ltahun}/>
      <Route path='/laporan-pengeluaran-mingguan' Component={Lpengeluaranmingguan}/>
      <Route path='/laporan-pengeluaran-bulanan' Component={Lpengeluaranbulanan}/>
      <Route path='/laporan-pengeluaran-tahunan' Component={Lpengeluarantahunan}/>
      <Route path='/laporan' Component={Laporan}/>
      <Route path='/manajemen-user' Component={Manajemen}/>
      <Route path='/ubah-password' Component={Ubahpassword}/>
      <Route path='/pembayaran' Component={KaryawanTransaksi}/>
    </Routes>
    </>
  );
}

export default App;
