import React from 'react';
import Pagination from '../shared/pagination/Pagination';
import NoProductsInfo from './no-product/NoProductsInfo';

const ProductsContainer = ({ data }) => {
  return (
    <>
      {data?.length > 0 ? (
        <Pagination data={data} pageLimit={10} dataLimit={8} />
      ) : (
        <NoProductsInfo />
      )}
    </>
  );
};

export default ProductsContainer;
