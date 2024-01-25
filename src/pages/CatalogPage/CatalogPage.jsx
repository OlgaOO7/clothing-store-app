import { ProductCatalog } from 'components/ProductCatalog/ProductCatalog';
import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { selectProducts } from 'redux/products/selectors';
import { useState } from 'react';

const CatalogPage = () => {
  const products = useSelector(selectProducts) || [];
  const { state } = useLocation();
  const categoryId = state ? state?.categoryId : null;
  const [page, setCurrentPage] = useState(0);
  return (
    <>
      <ProductCatalog
        data={products}
        categoryId={categoryId}
        page={page}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default CatalogPage;
