// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
// import Loginn from './Component/Login';
import Dashboardutama from './Pages/Dashboard-utama';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' Component={Login}/>
      <Route path='/login' Component={Login}/>
      <Route path='/dashboard' Component={Dashboardutama}/>
    </Routes>
    </>
  );
}

export default App;
