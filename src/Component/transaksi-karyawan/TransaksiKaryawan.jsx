import React, { useEffect, useState } from 'react'
import './TransaksiKaryawan.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';


function TransaksiKaryawan() {
  // const [data, setData] = useState([]);

  useEffect(() => {
  // Fungsi untuk mendapatkan data dari API
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3002/pembayaran');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);
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
        tanggal:'',
        grade: '',
        jabatan: '',
        nominal: '',
        unitKerja: '',
        nama: '',
        status:'',

      });
    
      const handleInput = (e) => {
        setData({ ...data, [e.target.nama]: e.target.value });
      };
    
      const handleGradeChange = (e) => {
        const selectedGrade = e.target.value;
        setData({ ...data, grade: selectedGrade });
    
        // Logika untuk menentukan nilai jabatan, nominal, dan unitKerja berdasarkan pilihan grade
        let jabatan = '';
        let nominal = '';
        let unitKerja = '';
    
        if (selectedGrade === 'A') {
          jabatan = 'karyawan';
          nominal = 20000;
          unitKerja = 'Sales';
        } else if (selectedGrade === 'B') {
          jabatan = 'Karyawan';
          nominal = 35000;
          unitKerja = 'Marketing';
        } else if (selectedGrade === 'C') {
          jabatan = 'Karyawan';
          nominal = 45000;
          unitKerja = 'Finance';
        } else if (selectedGrade === 'D') {
          jabatan = 'Karyawan';
          nominal = 75000;
          unitKerja = 'Finance';
        } else if (selectedGrade === 'E') {
          jabatan = 'Kepala Departemen';
          nominal = 100000;
          unitKerja = 'Finance';
        } else if (selectedGrade === 'F') {
          jabatan = 'Kepala Divisi';
          nominal = 150000;
          unitKerja = 'Finance';
        }
    
        setData({ ...data, jabatan, nominal, unitKerja });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/pembayaran', data)
        .then(response => {
          console.log(response.data);
          // Lakukan tindakan setelah data disimpan, misalnya mengosongkan input atau menampilkan pesan sukses
          setData({
            nama: '',
            tanggal: '',
            grade: '',
            jabatan: '',
            // nominal: '',
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
                        <option value="A">4-5</option>
                        <option value="B">7-8</option>
                        <option value="C">9-10</option>
                        <option value="D">11-12</option>
                        <option value="E">12-13</option>
                        <option value="F">14-16</option>
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
