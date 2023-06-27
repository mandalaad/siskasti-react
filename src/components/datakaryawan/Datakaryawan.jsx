import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import './Datakaryawan.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker'
import { id } from 'date-fns/locale';

function Datakaryawan() {
    const [data, setData] = useState([
        {
          no: 1,
          namakaryawan: 'John Doe',
          foto: 'image-url.jpg',
          nik: '123456789',
          grade: 'A',
          jabatan: 'Manager',
          unitkerja: 'HR',
          email: 'john.doe@example.com',
          nohp: '1234567890',
        },
        {
          no: 2,
          namakaryawan: 'John Doe',
          foto: 'image-url.jpg',
          nik: '123456789',
          grade: 'A',
          jabatan: 'Manager',
          unitkerja: 'HR',
          email: 'john.doe@example.com',
          nohp: '1234567890',
        },
        {
          no: 3,
          namakaryawan: 'Jane Smith',
          foto: 'image-url.jpg',
          nik: '987654321',
          grade: 'B',
          jabatan: 'Accountant',
          unitkerja: 'Finance',
          email: 'jane.smith@example.com',
          nohp: '0987654321',
        },
        // ... add other data here
      ]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  // table state
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns = useMemo(
    () => [
      {
        accessorKey: 'no',
        header: 'No',
        size:'20',
      },
      {
        accessorKey: 'namakaryawan',
        header: 'Nama Karyawan',
      },
      {
        accessorKey: 'nik',
        header: 'NIK',
      },
      {
        accessorKey: 'grade',
        header: 'Grade',
        size:'100',
      },
      {
        accessorKey: 'jabatan',
        header: 'Jabatan',
      },
      {
        accessorKey: 'unitkerja',
        header: 'Unit Kerja',
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'nohp',
        header: 'No HP',
      },
      {
        accessorKey: 'aksi',
        header: 'Aksi',
        Cell: ({ row }) => (
          <button onClick={() => handleShow(row.id)}>Edit</button>
        ),
      },
    ],
    []
  );

  
  //  // input file
  //   const [selectedFile, setSelectedFile] = useState(null);
  //   const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //       // Memeriksa tipe file
  //     if (file && file.type !== 'image/jpeg/png') {
  //       alert('Mohon pilih file dengan format JPG!');
  //       return;
  //     }
  
  //     // Memeriksa ukuran file
  //     if (file && file.size > 2 * 1024 * 1024) {
  //       alert('Ukuran file melebihi batas 2MB!');
  //       return;
  //     }
  //       setSelectedFile(file);
  //   };

  //   // react-datepicker
  //   const [selectedDate, setSelectedDate] = useState(null);
  //   const handleChange = date => {
  //       setSelectedDate(date);
  //   };

  //   // datepicker bulan doang
  //   const handleMonthChange = (date) => {
  //       setSelectedMonth(date);
  //     };
    
  //     const CustomDatePickerInput = ({ value, onClick }) => (
  //       <input
  //         className="datepicker-input"
  //         value={value ? value.toLocaleString('default', { month: 'long' }) : ''}
  //         onClick={onClick}
  //         readOnly
  //       />
  //     );

  //   //   datepicker tahun doang
    
  //   const handleYearChange = (date) => {
  //       setSelectedYear(date);
  //   };
    
  //   const [selectedYear, setSelectedYear] = useState(null);
  //   const [selectedMonth, setSelectedMonth] = useState(null);
  //   const [nomorKaryawan, setNomorKaryawan] = useState('');
  //   const [nikKaryawan, setNikKaryawan] = useState([]);
  //   const [gradeKaryawan, setGradeKaryawan] = useState([]);
  //   const [namaKaryawan, setNamaKaryawan] = useState('');
  //   const [emailKaryawan, setEmailKaryawan] = useState('');
  //   const [akunBendaharaDep, setAkunBendaharaDep] = useState('');
  //   const [nominal, setNominal] = useState('');
  //   const [open, setOpen] = useState(false);
  //   const [popupMessage, setPopupMessage] = useState('');
  //   const [isSuccess, setIsSuccess] = useState(false);
  //   const [options, setOptions] = useState([]);

  //   const togglePopup = (message, success) => {
  //       setOpen(!open);
  //       setPopupMessage(message);
  //       setIsSuccess(success);
  //   };

  //   const handleSubmit = async (event) => {
  //       event.preventDefault();

  //       // Buat objek data dengan nilai-nilai input
  //       const data = {
  //       namaKaryawan,
  //       nikKaryawan,
  //       selectedFile,
  //       tanggal: selectedDate ? selectedDate.toISOString() : '',
  //       nominal,
  //       bulan: selectedMonth ? selectedMonth.toISOString() : '',
  //       tahun: selectedYear ? selectedYear.toISOString() : '',
  //       };
  //       try {
  //           // Kirim data ke API endpoint menggunakan metode POST
  //           const response = await axios.post('URL_API_ANDA', data);
  //           console.log('Data berhasil disimpan:', response.data);
  //           togglePopup('Data berhasil ditambahkan ke database.', true);
  //         } catch (error) {
  //           console.error('Gagal menyimpan data:', error);
  //           togglePopup('Gagal menambahkan data ke database.', false);
  //         }
  //       };

  //       // const handleClose = () => {
  //       //     setOpen(false);
  //       //   };

  //       //   mengambil data dropdow
  //         useEffect(() => {
  //           const fetchData = async () => {
  //             try {
  //               const response = await axios.get('URL_API');
  //               setOptions(response.data);
  //             } catch (error) {
  //               console.error('Error fetching data:', error);
  //             }
  //           };
        
  //           fetchData();
  //         }, []);
          
  //inputan modal
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
    const [nomorKaryawan, setNomorKaryawan] = useState('');
    const [nik, setNik] = useState('');
    const [gradeKaryawan, setGradeKaryawan] = useState([]);
    // const [namaKaryawan, setNamaKaryawan] = useState('');
    const [emailKaryawan, setEmailKaryawan] = useState('');

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

  // const formatDate = (date) => {
  //   const options = { day: 'numeric', month: 'long', year: 'numeric' };
  //   const formattedDate = new Date(date).toLocaleDateString('id-ID', options);
  //   return formattedDate;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Membuat objek data untuk dikirim ke backend
    const data = {
      nama,
      nik,
      tanggal: selectedDate ? selectedDate.toISOString() : '',
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

          //show modal

          const [show, setShow] = useState(false);

          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);

          const [show2, setShow2] = useState(false);

          const handleClose2 = () => setShow2(false);
          const handleShow2 = () => setShow2(true);
  return (
    <>
    <div className="content">
        <div className="wrap">
            <div className="data-karyawan">
                <div className="header">
                  <h4>Data Karyawan</h4>
                </div>
                <div className="data">
                    <div className="content-left">
                        <div className="button">
                            <button>tambah</button>
                        </div>
                        <DropdownButton  id="dropdown-item-button" title="Departemen">
                            <Dropdown.ItemText></Dropdown.ItemText>
                            <Dropdown.Item as="button">Departemen IT Business Analyst</Dropdown.Item>
                            <Dropdown.Item as="button">Departemen Integrasi Aplikasi</Dropdown.Item>
                            <Dropdown.Item as="button">Departemen Aplikasi Bisnis</Dropdown.Item>
                            <Dropdown.Item as="button">Departemen Aplikasi Support</Dropdown.Item>
                            <Dropdown.Item as="button">Departemen Aplikasi Bisnis Digital</Dropdown.Item>
                            <Dropdown.Item as="button">Departemen IT Quality Assurance</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className="content-right">
                        <div className="button">
                            <button>print</button>
                        </div>
                    </div>
                </div>
                <MaterialReactTable
                  columns={columns}
                  data={data}
                  getRowId={(row) => row.id}
                  initialState={{ showColumnFilters: true }}
                  enableColumnResizing
                  columnResizeMode="onChange"
                  enableColumnFilters={false}
                  manualPagination
                  manualSorting
                  muiToolbarAlertBannerProps={
                    isError
                      ? {
                          color: 'error',
                          children: 'Error loading data',
                        }
                      : undefined
                  }
                  onColumnFiltersChange={setColumnFilters}
                  onGlobalFilterChange={setGlobalFilter}
                  onPaginationChange={setPagination}
                  onSortingChange={setSorting}
                  rowCount={rowCount}
                  state={{
                    columnFilters,
                    globalFilter,
                    isLoading,
                    pagination,
                    showAlertBanner: isError,
                    showProgressBars: isRefetching,
                    sorting,
                  }}
                />
                <Modal className='mymodal1' show={show} onHide={handleClose}
                size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Edit data karyawan</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col lg = {6}>
                    <div className="content-left1">
                        <div className="field1">
                            <p>Nama Karyawan :</p>
                            <input 
                            type='text'
                            name='nama'
                            value={nama}
                            onChange={e => setNama(e.target.value)}
                            required
              
                            />
                        </div>
                        <div className="field1">
                            <p>NIk :</p>
                            <input 
                            type='number'
                            name='nik'
                            value={nik}
                            onChange={(e) => setNik(e.target.value)}
                            required
                            />
                        </div>
                        <div className="field1">
                            <p>Grade :</p>
                            <select onChange={(e) => setGradeKaryawan(e.target.value)} 
                            // required
                            >
                            <option value="">Select Grade</option>
                            {grades.map((grade) => (
                              <option key={grade.id} value={grade.grade}>
                                {grade.grade}
                              </option>
                            ))}
                            </select>
                        </div>
                        <div className="field1">
                            <p>Jabatan :</p>
                            {/* <input 
                            type='text'
                            value={akunBendaharaDep}
                            onChange={(e) => setAkunBendaharaDep(e.target.value)}
                            /> */}
                            <select 
                            // required
                            >
                              <option value="">Pilih Jabatan</option>
                              {grades.map((grade) => (
                                <option key={grade.id} value={grade.grade}>
                                  {grade.grade}
                                </option>
                              ))}
                            </select>
                        </div>
                        <div className="field1">
                            <p>Unit Kerja :</p>
                            <select 
                            // required
                            >
                            <option value="">Pilih Unit Kerja</option>
                              {grades.map((grade) => (
                                <option key={grade.id} value={grade.grade}>
                                  {grade.grade}
                                </option>
                              ))}
                            </select>
                        </div>
                        {/* <div className="field1">
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
                        </div> */}
                        <div className="field1">
                            <p>Email :</p>
                            <input 
                            type='email'
                            value={emailKaryawan}
                            onChange={(e) => setEmailKaryawan(e.target.value)}
                            // required
                            />
                        </div>
                    </div>
                    </Col>
                      <Col lg = {6}>
                        {/* <div className="field2">
                            <div className="gambar">
                              <img src="" alt="" />
                            </div>
                            <h6>Ukuran Foto Max 400mb</h6>
                            <input type="file" />
                        </div> */}
                        <div className="field2">
                            <div className="gambar">
                              <img src="" alt="" />
                            </div>
                            <p>Upload Foto :</p>
                            <input 
                            className='input-gambar'
                            type="file" 
                            name='file'
                            onChange={handleFileChange} />
                            <h6 style={{color:"red"}}>Ukuran Foto Max 2mb</h6>
                        </div>
                      </Col>
                    </Row>
                    <div className='mt-5 d-flex justify-content-end'>
                    <Button variant="primary" type='submit' className='mx-2' disabled={isSubmitting || isDataSubmitted}>
                      Save Changes
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    </div>
                    
                    </form>
                  </Modal.Body>
                  <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" type='submit'>
                      Save Changes
                    </Button> */}
                    @Copyrights Blanco Project
                  </Modal.Footer>
                </Modal>

                {/* modal submit edit success */}
                <Modal
                  show={showModal}
                  onHide={closeModal}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Berhasil</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Data berhasil di Edit !!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
            </div>
        </div>
    </div>
    </>
  )
}

export default Datakaryawan
