import React, { useState } from 'react'
import './Penyerahankas.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import id from 'date-fns/locale/id';
import axios from 'axios';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


function Penyerahankas() {

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
  
    const [selectedDate, setSelectedDate] = useState(null);
    const handleChange = (date) => {
      setSelectedDate(date);
    };
    const [akunBendaharaDiv, setAkunBendaharaDiv] = useState('');
    const [namaBendaharaDiv, setNamaBendaharaDiv] = useState('');
    const [memo, setMemo] = useState('');
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
    
        const data = {
          akunBendaharaDiv,
          namaBendaharaDiv,
          selectedFile,
          tanggal: selectedDate ? selectedDate.toISOString() : '',
          nominal,
          memo,
        };
    
        try {
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

    const currentYear = new Date().getFullYear();
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];


  

  return (
    <>
    <div className="content">
        <div className="wrap">
            <div className="penyerahan-kas">
                <div className="header">
                    <h4>Penyerahan Kas</h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="content1">
                        <div className="content-left">
                            <div className="field">
                                <p>Akun Bendahara :</p>
                                <input type="text"
                                value={akunBendaharaDiv}
                                onChange={(e) => setAkunBendaharaDiv(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <p>Nama Bendahara :</p>
                                <input type="text"
                                value={namaBendaharaDiv}
                                onChange={(e) => setNamaBendaharaDiv(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <p>Bukti :</p>
                                <div>
                                <input 
                                    className='input-gambar'
                                    type="file" 
                                    name='file'
                                    onChange={handleFileChange} />
                                    <h6>Ukuran maksimal foto 2mb</h6>
                                </div>
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
                                <input type="number"
                                value={nominal}
                                onChange={(e) => setNominal(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <p>Maximal :</p>
                                <input type="text" 
                                value={memo}
                                onChange={(e) => setMemo(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <p>Keterangan :</p>
                                <input type="text" 
                                value={memo}
                                onChange={(e) => setMemo(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <button type="submit">Submit</button>
                    </div>
                </form>
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
                <div className="table">
                <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        {months.map((month) => (
                        <TableCell key={month}>{month}</TableCell>
                        ))}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell>{currentYear}</TableCell>
                        {months.map((month) => (
                        <TableCell key={month}></TableCell>
                        ))}
                    </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Penyerahankas