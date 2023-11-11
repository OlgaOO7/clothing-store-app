import { ProductCatalog } from 'components/ProductCatalog/ProductCatalog';

export const CatalogPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <ProductCatalog />
    </div>
  );
};
