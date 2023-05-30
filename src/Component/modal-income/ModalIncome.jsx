import React from 'react'
import { Modal } from 'react-bootstrap'
import './ModalIncome.css'

function ModalIncome(props) {
  return (
    <>
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Income
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action="">
            <div className="field">
                <p>NIK</p>
                <input 
                type="text" 
                required
                />
            </div>
            <div className="field">
                <p>Nama</p>
                <input 
                type="text" 
                required
                />
            </div>
            <div className="field">
                <p>Grade</p>
                <select name="" id="">
                    <option>4-6</option>
                    <option>7-9</option>
                    <option>10-12</option>
                </select>
            </div>
            <div className="field">
                <p>Nominal</p>
                <input 
                type="text" 
                required
                />
            </div>
            <div className="field">
                <p>Unit Kerja</p>
                <select name="" id="">
                    <option>babu</option>
                    <option>7-9</option>
                    <option>10-12</option>
                </select>
            </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide}>submit</button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default ModalIncome
