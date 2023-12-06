import { ProductCatalog } from 'components/ProductCatalog/ProductCatalog';

import { useSelector } from 'react-redux';

import {
  selectProducts,
} from 'redux/products/selectors';

export const CatalogPage = () => {
    const products = useSelector(selectProducts) || [];
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <ProductCatalog data={products}/>
    </div>
  );
};
