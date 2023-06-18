import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pembayarankaryawan from './pages/pembayaran-karyawan/Pembayarankaryawan';
import Profilekaryawan from './pages/profile-karyawan/Profilekaryawan';
import LaporanKaryawan from './pages/LaporanKaryawan/LaporanKaryawan';
import KasMasuk from './pages/kas-masuk/KasMasuk';
import DashboardDepartemen from './pages/dashboard-departemen/DashboardDepartemen'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' Component={Pembayarankaryawan}/>
      <Route path='/pembayaran' Component={Pembayarankaryawan}/>
      <Route path='/profile' Component={Profilekaryawan}/>
      <Route path='/laporan-karyawan' Component={LaporanKaryawan}/>
      <Route path='/kas-masuk' Component={KasMasuk}/>
      <Route path='/dashboard-dept' Component={DashboardDepartemen}/>
    </Routes>
    </>
  );
}

export default App;
