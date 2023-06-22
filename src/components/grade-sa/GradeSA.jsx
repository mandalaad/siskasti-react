import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import './Gradesa.css'
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

function GradeSA() {
    const [data, setData] = useState([
        {
          no: 1,
          grade: 'A',
          jabatan: 'Manager',
          nominal: 5000000,
        },
        {
          no: 2,
          grade: 'A',
          jabatan: 'Manager',
          nominal: 4500000,
        },
        {
          no: 3,
          grade: 'B',
          jabatan: 'Accountant',
          nominal: 3000000,
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
            size: '60',
          },
          {
            accessorKey: 'grade',
            header: 'Grade',
            size: '100',
          },
          {
            accessorKey: 'jabatan',
            header: 'Jabatan',
          },
          {
            accessorKey: 'nominal',
            header: 'Nominal',
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
    
  return (
    <>
      <div className="content">
        <div className="wrap">
            <div className="grade">
                <div className="header">
                    <h4>Grade</h4>
                </div>
                <div className="data">
                    <div className="content-left">
                        <div className="button">
                            <button>tambah</button>
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
                <Modal
                className='modal'
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Grade
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="field">
                        <p>Grade</p>
                        <input type="text" name="grade" id="grade" />
                    </div>
                    <div className="field">
                        <p>jabatan</p>
                        <input type="text" name="jabatan" id="jabatan" />
                    </div>
                    <div className="field">
                        <p>nominal</p>
                        <input type="text" name="nominal" id="nominal" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
                </Modal>

            </div>
        </div>
      </div>
    </>
  )
}

export default GradeSA
