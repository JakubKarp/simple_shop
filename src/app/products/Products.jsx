import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/actions-creators';
import Layout from '../shared/layout/Layout';
import ProductsContainer from './ProductsContainer';
import Loader from '../shared/loader/Loader';
import PageContainer from '../shared/page_container/PageContainer';

const Products = () => {
  const [loadedProducts, setLoadedProducts] = useState();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const data = useSelector((state) => state.data);

  useEffect(() => {
    setLoadedProducts(data);
  }, [data]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Layout>
      <PageContainer>
        {isLoading ? <Loader /> : <ProductsContainer data={loadedProducts} />}
      </PageContainer>
    </Layout>
  );
};

export default Products;
