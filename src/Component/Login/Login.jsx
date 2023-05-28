import React, { useEffect } from 'react'
import logo from '../../Asset/img/Mockup- SISKASTI 5.0.png'
import './loginstyle.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import backgroundlogin from '../../Asset/img/Abstract-Green-Wave-PNG-File.png'

function Login() {
  
    // function masuk(){
    //     axios.post('http://172.168.101.200:8080/api/auth/login', {
    //         username: 'tendean',
    //         password: 'hijauan'
    //       })
    //       .then(function (response) {
    //         console.log(response.data);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
      
        try {
          const response = await axios.post('http://172.168.101.200:8080/api/auth/login', { username, password });
          // Handle the successful login response here
          console.log(response.data);
          navigate('/dashboard');
        } catch (error) {
          // Handle any error that occurred during login
          console.error(error);
        }
      };
    //   if(username === 'Admin'){

    //   }
    
  return (
    <body>
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
                            <input type="text" name='username' placeholder='Username'/>
                        </div>
                        <div className='password'>
                            <label htmlFor="password" aria-required>Password</label>
                        </div>
                        <div> <input type="password" name='password' placeholder='Password'/>
                        </div>
                        {/* <Link to='/dashboard'> */}
                            <button type='submit' onSubmit={handleLogin} className='mt-4'><h1>Login</h1></button>
                        {/* </Link> */}
                    </form>
                </div>
            </div>
        </div>
    </body>
    
  )
}

export default Login