import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Modal } from 'components/Modal/Modal';
import { CartItem } from './CartItem/CartItem';
import { selectCart, selectIsRefreshing } from 'redux/cart/selectors';
import { getCart } from 'redux/cart/operations';
import { formatPrice } from 'utils/formatPrice';

import {
  CartModalHeader,
  CartModalWrapper,
  CartModalListWrapper,
  CartModalList,
  LinkWrapper,
  OrderLink,
  CatalogLink,
  CartTotalWrapper,
  AmountWrapper,
  TotalAmount,
  Amount,
} from './CartModal.styled';

export const CartModal = ({ closeModal, toggleCartModal }) => {
  const [products, setProducts] = useState([]);
  const [cartTotalAmount, setCartTotalAmount] = useState(null);
  const [cartCurrency, setCartCurrency] = useState('');

  const dispatch = useDispatch();
  const location = useLocation();

  const cartData = useSelector(selectCart);
  const isLoading = useSelector(selectIsRefreshing);

  useEffect(() => {
    try {
      dispatch(getCart());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    setProducts(cartData.items);
    setCartTotalAmount(cartData.totalAmount);
    setCartCurrency(cartData.currencyCode);
  }, [cartData]);

  return (
    <Modal closeModal={closeModal} toggleModal={toggleCartModal}>
      {isLoading ? (
        <p>Loading...</p>
      ) : cartData.items && cartData.items.length > 0 ? (
        <div>
          <CartModalHeader>Товар додано в кошик</CartModalHeader>
          <CartModalWrapper>
            <CartModalListWrapper>
              <CartModalList>
                {products &&
                  products.map(item => (
                    <li key={item.sku.id}>
                      <CartItem item={item} />
                    </li>
                  ))}
              </CartModalList>
            </CartModalListWrapper>
            <CartTotalWrapper>
              <AmountWrapper>
                <TotalAmount>Разом:</TotalAmount>
                <Amount>
                  {formatPrice(cartTotalAmount)} {cartCurrency}
                </Amount>
              </AmountWrapper>
              <LinkWrapper>
                <OrderLink
                  to={`/order`}
                  state={{ from: location, sessionId: cartData?.sessionId }}
                >
                  Оформити замовлення
                </OrderLink>
                <CatalogLink to={`/cart`} state={{ from: location }}>
                  Кошик
                </CatalogLink>
              </LinkWrapper>
            </CartTotalWrapper>
          </CartModalWrapper>
        </div>
      ) : (
        <div>
          <CartModalHeader>Ваш кошик пустий</CartModalHeader>
        </div>
      )}
    </Modal>
  );
};
