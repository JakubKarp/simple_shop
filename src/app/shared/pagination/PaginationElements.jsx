import React from 'react';
import styles from './Pagination.module.scss';

const PaginationElements = ({
  moveToPreviousPage,
  paginationNumbers,
  moveToFirstPage,
  moveToLastPage,
  moveToNextPage,
  numberOfPages,
  currentPage,
  changePage,
  pageLimit,
}) => (
  <div className={styles.pagination__container}>
    <div
      className={styles.pagination__info}
    >{`You can see ${pageLimit} of ${numberOfPages} pages`}</div>
    <div className={styles.pagination__group}>
      <button
        onClick={moveToFirstPage}
        className={styles.pagination__button}
        disabled={currentPage === 1}
      >
        first
      </button>
      <button
        onClick={moveToPreviousPage}
        className={styles.pagination__button}
        disabled={currentPage === 1}
      >
        prev
      </button>
      <div className={styles.pagination__buttons}>
        {paginationNumbers.map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`${styles.pagination__button} ${
              currentPage === item ? `${styles.pagination__button__active}` : ''
            }`}
          >
            <span>{item}</span>
          </button>
        ))}
      </div>
      <button
        onClick={moveToNextPage}
        className={styles.pagination__button}
        disabled={currentPage === numberOfPages}
      >
        next
      </button>
      <button
        onClick={moveToLastPage}
        className={styles.pagination__button}
        disabled={currentPage === numberOfPages}
      >
        last
      </button>
    </div>
  </div>
);

export default PaginationElements;
