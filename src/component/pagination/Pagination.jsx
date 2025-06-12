import { useState } from "react";
import "../../style/pagination/pagination.css";

function Pagination() {
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = numbers.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(numbers.length / itemsPerPage);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="conteinerPagination">
      <ul>
        {paginatedData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="paginationButtons">
        {pages.map((page) => (
          <button key={page} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
