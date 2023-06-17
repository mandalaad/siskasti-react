import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <>
    <div className="content">
        <div className="wrap">
            <div className="profile">
              <div className="header1">
                <h4>Detail Pribadi</h4>
              </div>
              <div className="content1">
                  <form action="">
                    <div className="content-top">
                      <div className="content-left">
                        <div className="field">
                          <p>Nama :</p>
                          <input type="text" />
                        </div>
                        <div className="field">
                          <p>Email :</p>
                          <input type="email" />
                        </div>
                        <div className="field">
                          <p>Nomor Hp :</p>
                          <input type="number" />
                        </div>
                        <div className="field">
                          <p>Grade :</p>
                          <input type="text" />
                        </div>
                        <div className="field">
                          <p>Departemen :</p>
                          <input type="text" />
                        </div>
                        <div className="field">
                          <p>Jenis Kelamin :</p>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="content-right">
                        <div className="field2">
                            <div className="gambar">
                              <img src="" alt="" />
                            </div>
                            <h6>Ukuran Foto Max 400mb</h6>
                            <input type="file" />
                        </div>
                      </div>
                    </div>
                    <div className="content-bot">
                      <div className="button">
                        <button>submit detail</button>
                      </div>
                    </div>
                  </form>
              </div>
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
