import { Product } from 'components/Product/Product';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { productsId } = useParams();
  return (
    <>
      <Product productsId={productsId} />
    </>
  );
};

export default ProductDetailsPage;
