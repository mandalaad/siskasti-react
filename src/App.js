import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pembayarankaryawan from './pages/pembayaran-karyawan/Pembayarankaryawan';
import Profilekaryawan from './pages/profile-karyawan/Profilekaryawan';
import LaporanKaryawan from './pages/LaporanKaryawan/LaporanKaryawan';
import KasMasuk from './pages/kas-masuk/KasMasuk';
import DashboardDepartemen from './pages/dashboard-departemen/DashboardDepartemen'
import DashboardDivisi from './pages/dashboard-bendahara-divisi/DashboardDivisi';
import PenyerahanKasAdmin from './pages/penyerahan-kas-admin/PenyerahanKasAdmin';
import Memintadana from './pages/Meminta-dana/Memintadana'
import Login from './login/Login'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' Component={Login}/>
      <Route path='/login' Component={Login}/>
      <Route path='/pembayaran' Component={Pembayarankaryawan}/>
      <Route path='/profile' Component={Profilekaryawan}/>
      <Route path='/laporan-karyawan' Component={LaporanKaryawan}/>
      <Route path='/kas-masuk' Component={KasMasuk}/>
      <Route path='/dashboard-dept' Component={DashboardDepartemen}/>
      <Route path='/dashboard-divisi' Component={DashboardDivisi}/>
      <Route path='/penyerahan-kas' Component={PenyerahanKasAdmin}/>
      <Route path='/permintaan-dana' Component={Memintadana}/>
    </Routes>
    </>
  );
}

export default App;
