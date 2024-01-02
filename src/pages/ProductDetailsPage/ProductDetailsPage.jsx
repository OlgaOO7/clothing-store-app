import { Product } from 'components/Product/Product';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { productsId } = useParams();
  return (
    <main>
      <Product productsId={productsId} />
    </main>
  );
};

export default ProductDetailsPage;
