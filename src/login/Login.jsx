import React, { useState } from 'react'
import logo from '../assets/logo 1.png'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import backgroundlogin from '../assets/Abstract-Green-Wave-PNG-File.png'

function Login({onLogin}) {

//   const handleLogin = async (e) => {
//   if (!isClicked && !isLoading) {
//     setIsClicked(true);
//     setIsLoading(true);
//     e.preventDefault();
//     const username = e.target.elements.username.value;
//     const password = e.target.elements.password.value;
//     const passalert = document.getElementById('pw-alert');
//     try {
//       const response = await axios.post('http://10.254.45.224:8080/api/auth/login', { username, password });
//       // Handle the successful login response here
//       console.log(response.data);

//       // Check the user role
//       const userRole = response.data.role;

//       // Redirect based on user role
//       switch (userRole) {
//         case 1: // Karyawan
//           navigate('/pembayaran');
//           break;
//         case 2: // Bendahara Departemen
//           navigate('/dashboard-dept');
//           break;
//         case 3: // Bendahara Divisi
//           navigate('/dashboard-divisi');
//           break;
//         case 4: // Super Admin
//           navigate('/dashboard-sa');
//           break;
//         default:
//           navigate('/dashboard');
//           break;
//       }
//     } catch (error) {
//       // Handle any error that occurred during login
//       console.error(error);
//       //pass alert
//       passalert.style.display = 'block';
//     } finally {
//       setIsLoading(false);
//     }
//   }
// };
      
//   const [isClicked, setIsClicked] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const handleLogin = async (e) => {
//       if (!isClicked && !isLoading) {
//       setIsClicked(true);
//       setIsLoading(true);
//       e.preventDefault();
//       const username = e.target.elements.username.value;
//       const password = e.target.elements.password.value;
//       const passalert = document.getElementById('pw-alert');
//       try {
//         const response = await axios.post('http://10.254.45.224:8080/api/auth/login', { username, password });
//         // Handle the successful login response here
//         console.log(response.data);
//         navigate('/dashboard');
//       } catch (error) {
//         // Handle any error that occurred during login
//         console.error(error);
//         //pass alert
//         passalert.style.display = 'block';

//       } finally {
//           setIsLoading(false);
//       }
//       }
//     };


const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    if (!isClicked && !isLoading) {
      setIsClicked(true);
      setIsLoading(true);
      e.preventDefault();
      const username = e.target.elements.username.value;
      const password = e.target.elements.password.value;
      const passalert = document.getElementById('pw-alert');

      // Simulate API request delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user data for demonstration purposes
      const userData = [
        { username: 'karyawan', password: 'oncom1232', role: 1 },
        { username: 'deptbendahara', password: 'password', role: 2 },
        { username: 'divisibendahara', password: 'password', role: 3 },
        { username: 'admin', password: 'password', role: 4 },
      ];

      // Find the user based on the provided username and password
      const user = userData.find((user) => user.username === username && user.password === password);

      if (user) {
        // Handle the successful login response here
        console.log(user);

        // Check the user role
        const userRole = user.role;

        // Redirect based on user role
        switch (userRole) {
          case 1: // Karyawan
            navigate('/pembayaran');
            break;
          case 2: // Bendahara Departemen
            navigate('/dashboard-dept');
            break;
          case 3: // Bendahara Divisi
            navigate('/dashboard-divisi');
            break;
          case 4: // Super Admin
            navigate('/dashboard-sa');
            break;
          default:
            navigate('/dashboard');
            break;
        }
      } else {
        // Handle invalid credentials
        passalert.style.display = 'block';
      }

      setIsLoading(false);
    }
  };


  return (
    <body>
        <div className="login">
        <div className='background-login'>
            <img src={backgroundlogin} alt="" />
        </div>
        <div className='container-login'>
            <div className='form'>
                <div className='gambar'>
                    <img src={logo} alt="" />
                    <p>System Informasi Kas Direktorat TI</p>
                </div>
                <div className='form-login'>
                    <form onSubmit={handleLogin}>
                        <div className='username'>
                            <label htmlFor="username" aria-required>Username</label>
                        </div>
                        <div>
                            <input type="text" name="username" placeholder="Username"/>
                        </div>
                        <div className='password'>
                            <label htmlFor="password" aria-required>Password</label>
                        </div>
                        <div> 
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <div id='pw-alert' className='mt-2 pass-alert'>
                            <p style={{color:'red'}}>Akun atau password salah</p>
                        </div>
                        {/* <Link to='/dashboard'> */}
                            <button type="submit" disabled={isLoading}  className='button-login mt-4'><h1>Login</h1></button>
                        {/* </Link> */}
                    </form>
                </div>
            </div>
        </div>
        </div>
    </body>
    
  )
}

export default Login