import { useSelector } from 'react-redux';

import { ProductCatalog } from 'components/ProductCatalog/ProductCatalog';
import { selectSearchedProducts } from 'redux/products/selectors';


export const SearchedProductPage = () => {
  const searchedProducts = useSelector(selectSearchedProducts);

  return (
    <div>
      <ProductCatalog type='searchpage' data={searchedProducts} />
    </div>
  );
};
