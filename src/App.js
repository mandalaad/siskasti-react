import { Route, Routes } from 'react-router-dom';
import './App.css';
import dashboard from './pages/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pembayarankaryawan from './pages/pembayaran-karyawan/Pembayarankaryawan';
import Profilekaryawan from './pages/profile-karyawan/Profilekaryawan';
import LaporanKaryawan from './pages/LaporanKaryawan/LaporanKaryawan';
import Dashboarddepartemen from './pages/dashboard-departemen/DashboardDepartemen';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' Component={Pembayarankaryawan}/>
      <Route path='/pembayaran' Component={Pembayarankaryawan}/>
      <Route path='/profile' Component={Profilekaryawan}/>
      <Route path='/laporan-karyawan' Component={LaporanKaryawan}/>
      <Route path='/dashboard' Component={dashboard}/>
      <Route path='/dashboard-dept' Component={Dashboarddepartemen}/>
    </Routes>
    </>
  );
}

export default App;
