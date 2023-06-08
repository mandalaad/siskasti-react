import React, { useState } from 'react'
import './TransaksiKaryawan.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';


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
    const [data, setData] = useState({
        grade: '',
        jabatan: '',
        nominal: '',
        unitKerja: ''
      });
    
      const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
      const handleGradeChange = (e) => {
        const selectedGrade = e.target.value;
        setData({ ...data, grade: selectedGrade });
    
        // Logika untuk menentukan nilai jabatan, nominal, dan unitKerja berdasarkan pilihan grade
        let jabatan = '';
        let nominal = '';
        let unitKerja = '';
    
        if (selectedGrade === 'A') {
          jabatan = 'Manager';
          nominal = '5000000';
          unitKerja = 'Sales';
        } else if (selectedGrade === 'B') {
          jabatan = 'Supervisor';
          nominal = '4000000';
          unitKerja = 'Marketing';
        } else if (selectedGrade === 'C') {
          jabatan = 'Staff';
          nominal = '3000000';
          unitKerja = 'Finance';
        }
    
        setData({ ...data, jabatan, nominal, unitKerja });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/save-data', data)
        .then(response => {
          console.log(response.data);
          // Lakukan tindakan setelah data disimpan, misalnya mengosongkan input atau menampilkan pesan sukses
          setData({
            name: '',
            tanggal: '',
            grade: '',
            jabatan: '',
            nominal: '',
            unitKerja: '',
            file: ''
          });
        })
        .catch(error => {
          console.error(error);
          console.log(selectedFile);
        });
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
                    <select name="grade" value={data.grade} onChange={handleGradeChange}>
                        <option value="">Pilih Grade</option>
                        <option value="A">Grade A</option>
                        <option value="B">Grade B</option>
                        <option value="C">Grade C</option>
                    </select>
                </div>
                <div className="field">
                    <p>Jabatan</p>
                    <input 
                    type="text" 
                    name="jabatan"
                    value={data.jabatan}
                    onChange={handleInput}
                    required
                    />
                </div>
                <div className="field">
                    <p>Nominal</p>
                    <input 
                    type="number" 
                    name="nominal"
                    value={data.nominal}
                    onChange={handleInput}
                    required
                    />
                </div>
                <div className="field">
                    <p>Unit Kerja</p>
                    <input 
                    type="text" 
                    name="unitKerja"
                    value={data.unitKerja}
                    onChange={handleInput}
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
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                </div>

            </form>
        </div>
    </div>
    </>
  )
}

export default TransaksiKaryawan
