import { Product } from 'components/Product/Product';
import { useParams } from 'react-router-dom';

export const ProductDetailsPage = () => {
  const { productsId } = useParams();
  return (
    <main>
      <Product productsId={productsId} />
    </main>
  );
};
