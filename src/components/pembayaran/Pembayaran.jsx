import React, { useState } from 'react'
import './Pembayaran.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import id from 'date-fns/locale/id';
import axios from 'axios';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

function Pembayaran() {
    // input file
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
    const file = event.target.files[0];
        // Memeriksa tipe file
      if (file && file.type !== 'image/jpeg/png') {
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

    const [nomorKaryawan, setNomorKaryawan] = useState('');
    const [namaKaryawan, setNamaKaryawan] = useState('');
    const [akunBendaharaDep, setAkunBendaharaDep] = useState('');
    const [nominal, setNominal] = useState('');
    const [open, setOpen] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const togglePopup = (message, success) => {
        setOpen(!open);
        setPopupMessage(message);
        setIsSuccess(success);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Buat objek data dengan nilai-nilai input
        const data = {
        nomorKaryawan,
        namaKaryawan,
        akunBendaharaDep,
        selectedFile,
        tanggal: selectedDate ? selectedDate.toISOString() : '',
        nominal,
        };
        try {
            // Kirim data ke API endpoint menggunakan metode POST
            const response = await axios.post('URL_API_ANDA', data);
            console.log('Data berhasil disimpan:', response.data);
            togglePopup('Data berhasil ditambahkan ke database.', true);
          } catch (error) {
            console.error('Gagal menyimpan data:', error);
            togglePopup('Gagal menambahkan data ke database.', false);
          }
        };

        const handleClose = () => {
            setOpen(false);
          };



  return (
    <div className='content'>
        <div className="wrap">
          <div className="pembayaran">
            <div className="header">
                <h4>Upload Bukti Pembayaran</h4>
            </div>
            <div className="content1">
                <form onSubmit={handleSubmit}>
                    <div className="content-field">
                    <div className="content-left">
                        <div className="field">
                            <p>Nomor Karyawan :</p>
                            <input 
                            type='text'
                            value={nomorKaryawan}
                            onChange={(e) => setNomorKaryawan(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <p>Nama Karyawan :</p>
                            <input 
                            type='text'
                            value={namaKaryawan}
                            onChange={(e) => setNamaKaryawan(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <p>Akun Bendahara Dep :</p>
                            <input 
                            type='text'
                            value={akunBendaharaDep}
                            onChange={(e) => setAkunBendaharaDep(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <p>Bukti Pembayaran :</p>
                            <input 
                            className='input-gambar'
                            type="file" 
                            name='file'
                            onChange={handleFileChange} />
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="field">
                            <p>Tanggal :</p>
                            <div>
                            <DatePicker
                            dateFormat="dd MMMM yyyy"
                            selected={selectedDate}
                            onChange={handleChange}
                            minDate={new Date()}
                            className='control'
                            name='tanggal'
                            locale={id}
                            required
                            />
                            </div>
                        </div>
                        <div className="field">
                            <p>Nominal :</p>
                            <input 
                            type='number'
                            value={nominal}
                            onChange={(e) => setNominal(e.target.value)}
                            />
                        </div>
                    </div>
                    </div>
                    <div className="button">
                        <button type='submit'>Submit</button>
                    </div>
                </form>
                {/* Tampilkan popup jika open bernilai true */}
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{isSuccess ? 'Sukses' : 'Error'}</DialogTitle>
                    <DialogContent>
                    <DialogContentText>{popupMessage}</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Tutup
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Pembayaran
