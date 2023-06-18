import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pembayarankaryawan from './pages/pembayaran-karyawan/Pembayarankaryawan';
import Profilekaryawan from './pages/profile-karyawan/Profilekaryawan';
import LaporanKaryawan from './pages/LaporanKaryawan/LaporanKaryawan';
import KasMasuk from './pages/kas-masuk/KasMasuk';
import DashboardDepartemen from './pages/dashboard-departemen/DashboardDepartemen';
import DashboardDivisi from './pages/dashboard-bendahara-divisi/DashboardDivisi';
import PenyerahanKasAdmin from './pages/penyerahan-kas-admin/PenyerahanKasAdmin';
import Memintadana from './pages/Meminta-dana/Memintadana';
import PenerimaanDana from './pages/penerimaandana/PenerimaanDana';
import DashboardSuperAdmin from './pages/DashboardSuperAdmin/DashboardSuperAdmin';
import Login from './login/Login'
import KasmasukDivisi from './pages/kasmasuk-divisi/KasmasukDivisi';
import ParameterDataKaryawan from './pages/ParameterDataKaryawan/ParameterDataKaryawan';

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
      <Route path='/dashboard-sa' Component={DashboardSuperAdmin}/>
      <Route path='/penyerahan-kas' Component={PenyerahanKasAdmin}/>
      <Route path='/permintaan-dana' Component={Memintadana}/>
      <Route path='/kasmasuk-divisi' Component={KasmasukDivisi}/>
      <Route path='/penerimaan-dana' Component={PenerimaanDana}/>
      <Route path='/data-karyawan' Component={ParameterDataKaryawan}/>
    </Routes>
    </>
  );
}

export default App;
