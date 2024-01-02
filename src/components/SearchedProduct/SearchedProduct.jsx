import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { ProductCatalog } from 'components/ProductCatalog/ProductCatalog';
import { selectSearchedProductsPage } from 'redux/products/selectors';
import { resetSearchedProducts } from 'redux/products/productsSlice';

import { getSearchedProductsPage } from 'redux/products/operations';
import { selectIsRefreshing } from 'redux/products/selectors';

export const SearchedProduct = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const isLoading = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();
  const location = useLocation();

  const searchedProducts = useSelector(selectSearchedProductsPage);
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('s');

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        dispatch(getSearchedProductsPage(searchQuery));
        // setIsLoading(false);
      } catch (e) {
        console.error('Error fetching data:', e);
      } finally {
      }
    };
    fetchData();
    return () => {
      dispatch(resetSearchedProducts());
    };
    // eslint-disable-next-line
  }, [dispatch, searchQuery]);

  return isLoading ? (
    <p style={{ paddingTop: '300px', fontSize: '24px', textAlign: 'center' }}>
      Loading...
    </p>
  ) : (
    <ProductCatalog
      type="searchpage"
      data={searchedProducts}
      // isLoading={isLoading}
    />
  );
};
