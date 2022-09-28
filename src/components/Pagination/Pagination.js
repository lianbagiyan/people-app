import "../style.css";

function Pagination({ postsPerPage, totalPosts, setCurrentPage, currentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination-block">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className={page === currentPage ? "active" : ""}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
