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
        accessorKey: 'foto',
        header: 'Foto',
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

    // datepicker bulan doang
    const handleMonthChange = (date) => {
        setSelectedMonth(date);
      };
    
      const CustomDatePickerInput = ({ value, onClick }) => (
        <input
          className="datepicker-input"
          value={value ? value.toLocaleString('default', { month: 'long' }) : ''}
          onClick={onClick}
          readOnly
        />
      );

    //   datepicker tahun doang
    
    const handleYearChange = (date) => {
        setSelectedYear(date);
    };
    
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [nomorKaryawan, setNomorKaryawan] = useState('');
    const [nikKaryawan, setNikKaryawan] = useState([]);
    const [gradeKaryawan, setGradeKaryawan] = useState([]);
    const [namaKaryawan, setNamaKaryawan] = useState('');
    const [emailKaryawan, setEmailKaryawan] = useState('');
    const [akunBendaharaDep, setAkunBendaharaDep] = useState('');
    const [nominal, setNominal] = useState('');
    const [open, setOpen] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [options, setOptions] = useState([]);

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
        bulan: selectedMonth ? selectedMonth.toISOString() : '',
        tahun: selectedYear ? selectedYear.toISOString() : '',
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

        // const handleClose = () => {
        //     setOpen(false);
        //   };

        //   mengambil data dropdow
          useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await axios.get('URL_API');
                setOptions(response.data);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
        
            fetchData();
          }, []);


  return (
    <>
    <div className="content">
        <div className="wrap">
            <div className="data-karyawan">
                <div className="header">
                  <h4>Karyawan</h4>
                </div>
                <div className="data">
                    <div className="content-left">
                        <div className="button">
                            <button>tambah</button>
                        </div>
                        <DropdownButton  id="dropdown-item-button" title="Departemen">
                            <Dropdown.ItemText></Dropdown.ItemText>
                            <Dropdown.Item as="button">Devisi Pengembangan Aplikasi TI</Dropdown.Item>
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
                <Modal show={show} onHide={handleClose}
                size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Edit data karyawan</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col lg = {6}>
                    <div className="content-left">
                        <div className="field">
                            <p>Nama Karyawan :</p>
                            <input 
                            type='text'
                            value={namaKaryawan}
                            onChange={(e) => setNamaKaryawan(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <p>NIk :</p>
                            <input 
                            type='number'
                            value={nikKaryawan}
                            onChange={(e) => setNikKaryawan(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <p>Grade :</p>
                            <select onChange={(e) => setGradeKaryawan(e.target.value)}>
                            {options.map((option) => (
                                <option key={option.id} value={option.value}>{option.label}</option>
                            ))}
                            </select>
                        </div>
                        <div className="field">
                            <p>Jabatan :</p>
                            {/* <input 
                            type='text'
                            value={akunBendaharaDep}
                            onChange={(e) => setAkunBendaharaDep(e.target.value)}
                            /> */}
                            <select>
                            {options.map((option) => (
                                <option key={option.id} value={option.value}>{option.label}</option>
                            ))}
                            </select>
                        </div>
                        <div className="field">
                            <p>Unit Kerja :</p>
                            <select>
                            {options.map((option) => (
                                <option key={option.id} value={option.value}>{option.label}</option>
                            ))}
                            </select>
                        </div>
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
                            <p>Email :</p>
                            <input 
                            type='email'
                            value={emailKaryawan}
                            onChange={(e) => setEmailKaryawan(e.target.value)}
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
                    </form>
                  {/* <div className="content-left">
                        
                      </div>
                      <div className="content-right">
                        
                      </div> */}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
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
