// import logo from './logo.svg';
import {   Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';

import Sidebar from './Component/Sidebar';
import Dashboardutama from './Pages/Dashboard-utama/index';
import Penerimaan from './Pages/penerimaan/Penerimaan';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' Component={Dashboardutama}/>
      <Route path='/dashboard' Component={Dashboardutama}/>
      <Route path='/penerimaan' Component={Penerimaan}/>
    </Routes>
    </>
  );
}

export default App;
