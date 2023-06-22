import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <>
    <div className="content">
        <div className="wrap">
            <div className="profile">
              <div className="header2">
                  <h4>Ganti Password</h4>
              </div>
              <div className="content2">
                  <form action="">
                    <div className="field">
                      <p>Password Lama :</p>
                      <input type="text" />
                    </div>
                    <div className="field">
                      <p>Password Baru :</p>
                      <input type="text" />
                    </div>
                    <div className="field">
                      <p>Konfirmasi Password baru :</p>
                      <input type="text" />
                    </div>
                    <div className="button">
                      <button>Submit password</button>
                    </div>
                  </form>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile
