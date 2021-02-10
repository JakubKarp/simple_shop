import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CardContainer from '../../products/card/CardContainer';
import PaginationElements from './PaginationElements';

const Pagination = ({ data, pageLimit, dataLimit }) => {
  const [dataToShow, setDataToShow] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationNumbers, setPaginationNumbers] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(Math.round(data.length / pageLimit));
  const promoFilter = useSelector((state) => state.promo_filter);
  const activeFilter = useSelector((state) => state.active_filter);

  const moveToFirstPage = () => {
    setCurrentPage(1);
  };

  const moveToLastPage = () => {
    setCurrentPage(numberOfPages);
  };

  const moveToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const moveToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = useCallback(() => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    setDataToShow(data?.slice(startIndex, endIndex));
  }, [currentPage, data, dataLimit]);

  const getPaginationGroup = useCallback(() => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    const arrayOfNumbers = new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    if(arrayOfNumbers.includes(numberOfPages)) {
      const limit = arrayOfNumbers.indexOf(numberOfPages)
      const arrayOfNumbersShort = new Array(limit+1).fill().map((_, idx) => start + idx + 1);
      setPaginationNumbers(arrayOfNumbersShort)
    } else {
      setPaginationNumbers(arrayOfNumbers);
    }
  }, [currentPage, pageLimit, numberOfPages]);

  const getNumberOfPages = useCallback(() => {
    setNumberOfPages(Math.round(data.length / pageLimit));
  }, [data, pageLimit]);

  const recalculateData = useCallback(() => {
    getPaginatedData();
    getNumberOfPages();
    getPaginationGroup();
  }, [getPaginatedData, getNumberOfPages, getPaginationGroup])

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, promoFilter]);

  useEffect(() => {
    recalculateData()
  }, [data, currentPage, numberOfPages, recalculateData]);

  return (
    <>
      <CardContainer dataToShow={dataToShow} />
      <PaginationElements
        moveToPreviousPage={moveToPreviousPage}
        paginationNumbers={paginationNumbers}
        moveToFirstPage={moveToFirstPage}
        moveToNextPage={moveToNextPage}
        moveToLastPage={moveToLastPage}
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        changePage={changePage}
        pageLimit={pageLimit}
      />
    </>
  );
};

export default Pagination;
