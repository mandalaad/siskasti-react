import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './login/Login';
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
import DataBendaharaDept from './pages/DataBendaharadept/DataBendaharaDept';
import DataBendaharaDivisi from './pages/DataBendaharaDivisi/DataBendaharaDivisi';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('');
  };

  const AuthenticatedRoute = ({ element: Element, roles, ...rest }) => {
    if (!isLoggedIn || !roles.includes(userRole)) {
      return <Navigate to="/login" />;
    }

    let ComponentToShow;
    if (userRole === 'karyawan') {
      ComponentToShow = Pembayarankaryawan;
    } else if (userRole === 'bendahara-departemen') {
      ComponentToShow = DashboardDepartemen;
    } else if (userRole === 'bendahara-divisi') {
      ComponentToShow = DashboardDivisi;
    } else if (userRole === 'super-admin') {
      ComponentToShow = DashboardSuperAdmin;
    } else {
      ComponentToShow = null;
    }

    return <ComponentToShow />;

    
  };

  return (
    <>
    <Routes>
    <Route
          path="/"
          element={
            isLoggedIn ? (
              <AuthenticatedRoute
                roles={['karyawan', 'bendahara-departemen', 'bendahara-divisi', 'super-admin']}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {userRole && (
          <Sidebar userRole={userRole} />
        )}
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
      {/* <Route path='/' Component={Login}/>
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
      <Route path='/kas-keluar-divisi' Component={DivisiKasKeluar}/>
      <Route path='/grade' Component={Grade}/>
      <Route path='/tk' Component={TransaksiKaryawan}/>
      <Route path='/data-bendaharadept' Component={DataBendaharaDept}/>
      <Route path='/data-bendaharadiv' Component={DataBendaharaDivisi}/> */}
    </Routes>
    </>
  );
};

export default App;
