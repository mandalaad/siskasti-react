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
import KasmasukDepartemen from './pages/kasmasuk-departemen/KasmasukDepartemen';
import LaporanKeluaran from './pages/LaporanKeluaran/LaporanKeluaran';
import DivisiKasKeluar from './pages/kaskeluar-divisi/DivisiKasKeluar';
import Grade from './pages/Grade/Grade';
import TransaksiKaryawan from './components/coba/coba';
import DataBendaharaDept from './pages/DataBendaharadept/DataBendaharaDept';
import DataBendaharaDivisi from './pages/DataBendaharaDivisi/DataBendaharaDivisi';
import LaporanPemasukan from './pages/laporanpemasukan/LaporanPemasukan';
function App() {
  const token = 'token';
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
      <Route path='/kasmasuk-departemen' Component={KasmasukDepartemen}/>
      <Route path='/laporan-keluaran' Component={LaporanKeluaran}/>
      <Route path='/laporan-kas-masuk' Component={LaporanPemasukan}/>
      <Route path='/kas-keluar-divisi' Component={DivisiKasKeluar}/>
      <Route path='/grade' Component={Grade}/>
      <Route path='/tk' Component={TransaksiKaryawan}/>
      <Route path='/data-bendaharadept' Component={DataBendaharaDept}/>
      <Route path='/data-bendaharadiv' Component={DataBendaharaDivisi}/>
    </Routes>
    </>
  );
}

export default App;
