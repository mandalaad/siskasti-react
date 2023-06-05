import React from 'react'
import { Modal, ModalBody } from 'react-bootstrap'
import './modalparameterstyle.css'
function Tambahmodalparameterr(props) {
  
  const modalparameter = document.getElementById('modal-parameter');
  const buttonclick = () => {
  document.getElementById('btn-cancel');
  modalparameter.style.display = 'none';
}
  return (
    <>
    <div className='modal-parameter'id='modal-parameter'>
      <Modal {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tambah
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
      <div className='parameter-modal-content'>
            <div className='modal-content'>
                <form action="">
                <div className="field">
                    <p>Nama</p>
                    <input 
                    type="text" 
                    
                    />
                </div>
                <div className="field">
                    <p>Department</p>
                    <select name="" id="" placeholder='Department'>
                        <option>Department QA</option>
                        <option>Department System Analyst</option>
                        <option>Department Aplikasi Digital</option>
                    </select>
                </div>
                <div className="field">
                    <p>No.Hp</p>
                    <input 
                    type="text" 
                    
                    />
                </div>
                <div className="field">
                    <p>No.Rekening</p>
                    <input 
                    type="text" 
                  
                    />
                </div>
                <div className='buton'>
                  <button onClick={buttonclick} id='btn-cancel'>Cancel</button>
                  <button>Tambah</button>
                </div>
                </form>
            </div>
        </div>
      </ModalBody>
        
    </Modal>
    </div>
    </>
  )
}

export default Tambahmodalparameterr