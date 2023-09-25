import React from "react";

const Pagination = ({ currentPage, onPageChange, totalPages }) => {
  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  return (
    <div className="text-center my-10">
      <button
        className="mr-5 bg-blue-800 text-white font-semibold rounded px-5 py-3"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="font-semibold">
        {currentPage} of {totalPages}
      </span>
      <button
        className="ml-5 bg-blue-800 text-white font-semibold rounded px-5 py-3"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
