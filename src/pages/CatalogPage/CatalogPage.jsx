import { ProductCatalog } from 'components/ProductCatalog/ProductCatalog';
import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';

import {
  selectProducts,
} from 'redux/products/selectors';

export const CatalogPage = () => {
    const products = useSelector(selectProducts) || [];
  const { state } = useLocation();
  const categoryId = state ? state?.categoryId : null;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <ProductCatalog data={products} categoryId={categoryId}/>
    </div>
  );
};
