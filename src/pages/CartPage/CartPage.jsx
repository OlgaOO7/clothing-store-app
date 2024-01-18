import { useSelector } from 'react-redux';
import { Cart } from 'components/Cart/Cart';
import { Loader } from 'components/Loader/Loader';
import { selectIsRefreshing } from 'redux/cart/selectors';

const CartPage = () => {
  const isLoading = useSelector(selectIsRefreshing);
  return (
    <div>
      {/* {isLoading && <Loader />} */}
      <Cart />
    </div>
  );
};

export default CartPage;
