import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './login/Login';
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
import KasmasukDivisi from './pages/kasmasuk-divisi/KasmasukDivisi';
import ParameterDataKaryawan from './pages/ParameterDataKaryawan/ParameterDataKaryawan';
import KasmasukDepartemen from './pages/kasmasuk-departemen/KasmasukDepartemen';
import LaporanKeluaran from './pages/LaporanKeluaran/LaporanKeluaran';
import DivisiKasKeluar from './pages/kaskeluar-divisi/DivisiKasKeluar';
import Grade from './pages/Grade/Grade';
import TransaksiKaryawan from './components/coba/coba';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  // Fungsi untuk menandai status login
  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  // Fungsi untuk menandai status logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('');
  };

  // Komponen untuk mengarahkan pengguna ke halaman login jika tidak diotentikasi
  const AuthenticatedRoute = ({ element: Element, roles, ...rest }) => {
    if (!isLoggedIn || !roles.includes(userRole)) {
      return <Navigate to="/login" />;
    }
    return <Element />;
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route
        path="/profile"
        element={<AuthenticatedRoute element={<Profilekaryawan />} roles={['karyawan', 'bendahara-departemen', 'bendahara-divisi']} />}
      />
      <Route
        path="/pembayaran"
        element={<AuthenticatedRoute element={<Pembayarankaryawan />} roles={['karyawan']} />}
      />
      <Route
        path="/laporan-karyawan"
        element={<AuthenticatedRoute element={<LaporanKaryawan />} roles={['karyawan']} />}
      />
      <Route
        path="/tk"
        element={<AuthenticatedRoute element={<TransaksiKaryawan />} roles={['karyawan']} />}
      />
      <Route
        path="/dashboard-dept"
        element={<AuthenticatedRoute element={<DashboardDepartemen />} roles={['bendahara-departemen']} />}
      />
      <Route
        path="/kas-masuk"
        element={<AuthenticatedRoute element={<KasMasuk />} roles={['bendahara-departemen']} />}
      />
      <Route
        path="/penyerahan-kas"
        element={<AuthenticatedRoute element={<PenyerahanKasAdmin />} roles={['bendahara-departemen']} />}
      />
      <Route
        path="/laporan-keluaran"
        element={<AuthenticatedRoute element={<LaporanKeluaran />} roles={['bendahara-departemen']} />}
      />
      <Route
        path="/kasmasuk-departemen"
        element={<AuthenticatedRoute element={<KasmasukDepartemen />} roles={['bendahara-departemen']} />}
      />
      <Route
        path="/permintaan-dana"
        element={<AuthenticatedRoute element={<Memintadana />} roles={['bendahara-departemen']} />}
      />
      <Route
        path="/dashboard-divisi"
        element={<AuthenticatedRoute element={<DashboardDivisi />} roles={['bendahara-divisi']} />}
      />
      <Route
        path="/kasmasuk-divisi"
        element={<AuthenticatedRoute element={<KasmasukDivisi />} roles={['bendahara-divisi']} />}
      />
      <Route
        path="/kas-keluar-divisi"
        element={<AuthenticatedRoute element={<DivisiKasKeluar />} roles={['bendahara-divisi']} />}
      />
      <Route
        path="/penerimaan-dana"
        element={<AuthenticatedRoute element={<PenerimaanDana />} roles={['bendahara-divisi']} />}
      />
      <Route
        path="/dashboard-sa"
        element={<AuthenticatedRoute element={<DashboardSuperAdmin />} roles={['super-admin']} />}
      />
      <Route
        path="/data-karyawan"
        element={<AuthenticatedRoute element={<ParameterDataKaryawan />} roles={['super-admin']} />}
      />
      <Route
        path="/grade"
        element={<AuthenticatedRoute element={<Grade />} roles={['super-admin']} />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
