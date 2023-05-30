import React, { useState } from 'react'
import './TransaksiKaryawan.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


function TransaksiKaryawan() {


    // input file
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const handleUpload = () => {
        // Mengirim file ke server atau melakukan operasi lainnya
        console.log(selectedFile);
        // Anda dapat mengirim file ke server dengan menggunakan Axios, Fetch API, atau library lainnya.
    };

    // react-datepicker
    const [selectedDate, setSelectedDate] = useState(null);
    const handleChange = date => {
        setSelectedDate(date);
    };

  return (
    <>
    <div className="content">
        <div className="pembayaran">
            <form action="">
                <div className="field">
                    <p>Nama Karyawan</p>
                    <input 
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
                        required
                        />
                    </div>
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
                    <p>Jabatan</p>
                    <input 
                    type="text" 
                    required
                    />
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
                    <input 
                    type="text" 
                    required
                    />
                </div>

                <div className="field">
                    <p>Bukti Transfer</p>
                    <input type="file" onChange={handleFileChange} />
                </div>

                <div className="button">
                    <button type='submit' onClick={handleUpload}>Submit</button>
                </div>

            </form>
        </div>
    </div>
    </>
  )
}

export default TransaksiKaryawan
