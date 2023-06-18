import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pembayarankaryawan from './pages/pembayaran-karyawan/Pembayarankaryawan';
import Profilekaryawan from './pages/profile-karyawan/Profilekaryawan';
import LaporanKaryawan from './pages/LaporanKaryawan/LaporanKaryawan';
import KasMasuk from './pages/kas-masuk/KasMasuk';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' Component={Pembayarankaryawan}/>
      <Route path='/pembayaran' Component={Pembayarankaryawan}/>
      <Route path='/profile' Component={Profilekaryawan}/>
      <Route path='/laporan-karyawan' Component={LaporanKaryawan}/>
      <Route path='/kas-masuk' Component={KasMasuk}/>
    </Routes>
    </>
  );
}

export default App;
