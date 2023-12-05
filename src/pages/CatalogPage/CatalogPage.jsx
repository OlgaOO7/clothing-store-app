import { ProductCatalog } from 'components/ProductCatalog/ProductCatalog';
import { useLocation } from 'react-router-dom';

export const CatalogPage = () => {
  const { state } = useLocation();
  const categoryId = state ? state?.categoryId : null;
  console.log(state);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <ProductCatalog categoryId={categoryId} />
    </div>
  );
};
