import React from 'react'
import logo from '../../Asset/img/Mockup- SISKASTI 5.0.png'
import '../Login/loginstyle.css'
import { Link } from 'react-router-dom'

function login() {
  return (
    <body>
        <div className='container-login'>
            <div className='form'>
                <div className='gambar'>
                    <img src={logo} alt="" />
                    <p>System Informasi Kas Direktorat TI</p>
                </div>
                <div className='form-login'>
                    <div className='username'>
                        <label htmlFor="username" aria-required>Username</label>
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    <div className='password'>
                        <label htmlFor="password" aria-required>Password</label>
                    </div>
                    <div> <input type="password" />
                    </div>
                    <div className='checkout'>
                        <input type="checkbox" />
                        <p>Simpan user ID</p>
                    </div>
                    <Link to='/dashboard'>
                        <button type='submit'><h1>Login</h1></button>
                    </Link>
                    
                </div>
            </div>
        </div>
    </body>
    
  )
}

export default login