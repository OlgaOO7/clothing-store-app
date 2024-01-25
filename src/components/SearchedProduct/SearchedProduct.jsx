import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { ProductCatalog } from 'components/ProductCatalog/ProductCatalog';
import { Loader } from 'components/Loader/Loader';
import { selectSearchedProductsPage } from 'redux/products/selectors';
import { resetSearchedProducts } from 'redux/products/productsSlice';
import { getSearchedProductsPage } from 'redux/products/operations';
import { selectIsRefreshing } from 'redux/products/selectors';

import { Wrapper } from './SearchedProduct.styled';

export const SearchedProduct = () => {
  const isLoading = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();
  const location = useLocation();

  const [page, setCurrentPage] = useState(0);
  const searchedProducts = useSelector(selectSearchedProductsPage) || [];
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('s');

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getSearchedProductsPage({ searchQuery, page }));
      } catch (e) {
        console.error('Error fetching data:', e);
      } finally {
      }
    };
    fetchData();
    return () => {
      dispatch(resetSearchedProducts());
    };
  }, [dispatch, searchQuery, page]);

  return isLoading ? (
    <Wrapper>
      <Loader />
    </Wrapper>
  ) : (
    <ProductCatalog
      type="searchpage"
      data={searchedProducts}
      setCurrentPage={setCurrentPage}
      page={page}
      // isLoading={isLoading}
    />
  );
};
