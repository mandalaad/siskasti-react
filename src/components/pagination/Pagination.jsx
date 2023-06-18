import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Membuat array kosong untuk menampung elemen tombol pagination
  const pageNumbers = [];

  // Membuat tombol pagination berdasarkan jumlah total halaman
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <li key={i} className={currentPage === i ? 'active' : ''}>
        <a href="#!" onClick={() => onPageChange(i)}>
          {i}
        </a>
      </li>
    );
  }

  return (
    <nav>
      <ul className="pagination">
        {currentPage > 1 && (
          <li>
            <a href="#!" onClick={() => onPageChange(currentPage - 1)}>
              Previous
            </a>
          </li>
        )}
        {pageNumbers}
        {currentPage < totalPages && (
          <li>
            <a href="#!" onClick={() => onPageChange(currentPage + 1)}>
              Next
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
