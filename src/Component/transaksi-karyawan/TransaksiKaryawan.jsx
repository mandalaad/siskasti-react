import React, { useEffect, useState } from 'react'
import './TransaksiKaryawan.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function TransaksiKaryawan() {

    // input file
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
    const file = event.target.files[0];
        // Memeriksa tipe file
      if (file && file.type !== 'image/jpeg') {
        alert('Mohon pilih file dengan format JPG!');
        return;
      }
  
      // Memeriksa ukuran file
      if (file && file.size > 2 * 1024 * 1024) {
        alert('Ukuran file melebihi batas 2MB!');
        return;
      }
        setSelectedFile(file);
    };

    // react-datepicker
    const [selectedDate, setSelectedDate] = useState(null);
    const handleChange = date => {
        setSelectedDate(date);
    };

    // data grade otomatis 
    const [nama, setNama] = useState('');
    const [grades, setGrades] = useState([]);
    const [selectedGrade, setSelectedGrade] = useState('');
    const [jabatan, setJabatan] = useState('');
    const [nominal, setNominal] = useState('');
    const [unitKerja, setUnitKerja] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDataSubmitted, setIsDataSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
      fetchGrades();
    }, []);

    const fetchGrades = async () => {
      try {
        const response = await axios.get('http://localhost:3001/grades');
        setGrades(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const handleGradeChange = (e) => {
      const selectedGrade = e.target.value;
      setSelectedGrade(selectedGrade);

      // Set data lain berdasarkan pilihan grade
      const selectedOption = grades.find((grade) => grade.grade === selectedGrade);
      if (selectedOption) {
        setJabatan(selectedOption.jabatan);
        setNominal(selectedOption.nominal);
        setUnitKerja(selectedOption.unitKerja);
      } else {
        setJabatan('');
        setNominal('');
        setUnitKerja('');
      }
    };

    const formatDate = (date) => {
      const inputDate = new Date(date);
      const day = String(inputDate.getDate()).padStart(2, '0');
      const month = String(inputDate.getMonth() + 1).padStart(2, '0');
      const year = inputDate.getFullYear();
      const formattedDate = `${day} ${month} ${year}`;
      return formattedDate;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Membuat objek data untuk dikirim ke backend
      const data = {
        nama,
        tanggal: selectedDate ? formatDate(selectedDate) : '',
        grade: selectedGrade,
        jabatan: jabatan,
        nominal: nominal,
        unitKerja: unitKerja,
      };
  
      if (!isDataSubmitted) {
        setIsSubmitting(true);
      try {
        await axios.post('http://localhost:3002/pemasukan', data);
        setModalMessage('Data berhasil ditambahkan ke database.');
        setShowModal(true);

        console.log('Data berhasil ditambahkan ke database!');
        
        setSelectedDate(null);
        setNama('');
        setSelectedGrade('');
        setJabatan('');
        setNominal('');
        setUnitKerja('');

        setIsDataSubmitted(true);

        setTimeout(() => {
          setIsDataSubmitted(false);
        }, 0 * 60 * 1000); // Jeda 10 menit (10 * 60 * 1000 ms)
        // Setelah data berhasil ditambahkan ke database, lakukan penanganan sesuai kebutuhan (misalnya notifikasi, refresh data, dll)

        // Mengambil data terbaru setelah ditambahkan
        fetchGrades();
      } catch (error) {
        console.error(error);
        setModalMessage('Data gagal ditambahkan ke database.');
        setShowModal(true);
      }finally {
        setIsSubmitting(false);
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <>
    <div className="content">
        <div className="pembayaran">
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <p>Nama Karyawan</p>
                    <input 
                    name='name'
                    value={nama} onChange={e => setNama(e.target.value)}
                    type="text" 
                    required
                    />
                </div>
                <div className="field">
                    <p>Tanggal</p>
                    <div>
                        <DatePicker
                        formatdate='dd/MM/yyyy'
                        selected={selectedDate}
                        onChange={handleChange}
                        className='control'
                        name='tanggal'
                        required
                        />
                    </div>
                </div>
                <div className="field">
                    <p>Grade</p>
                    <select value={selectedGrade} onChange={handleGradeChange}>
                      <option value="">Select Grade</option>
                      {grades.map((grade) => (
                        <option key={grade.id} value={grade.grade}>
                          {grade.grade}
                        </option>
                      ))}
                    </select>
                </div>
                <div className="field">
                    <p>Jabatan</p>
                    <input 
                    name="jabatan"
                    type="text" value={jabatan} readOnly
                    required
                    />
                </div>
                <div className="field">
                    <p>Nominal</p>
                    <input 
                    type="number" 
                    name="nominal"
                    value={nominal} readOnly
                    required
                    />
                </div>
                <div className="field">
                    <p>Unit Kerja</p>
                    <input 
                    type="text" 
                    name="unitKerja"
                    value={unitKerja} readOnly
                    required
                    />
                </div>

                <div className="field">
                    <p>Bukti Transfer</p>
                    <input 
                    type="file" 
                    name='file'
                    onChange={handleFileChange} />
                </div>

                <div className="button">
                    <button type='submit' disabled={isSubmitting || isDataSubmitted}>Submit</button>
                </div>
            </form>
            {isDataSubmitted && <p>Anda telah berhasil mengirimkan data. Mohon tunggu selama 10 menit sebelum mengirimkan lagi.</p>}
            
            <Modal show={showModal} onHide={closeModal}
              centered
              >
              <Modal.Header closeButton>
                <Modal.Title>Status</Modal.Title>
              </Modal.Header>
              <Modal.Body>{modalMessage}
              
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            <ToastContainer />

        </div>
    </div>
    </>
  )
}

export default TransaksiKaryawan
