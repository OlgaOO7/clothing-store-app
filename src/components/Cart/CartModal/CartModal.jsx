import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Modal } from 'components/Modal/Modal';
import { CartItem } from './CartItem';
import { selectCart, selectIsRefreshing } from 'redux/cart/selectors';
import { getCart } from 'redux/cart/operations';
import { formatPrice } from 'utils/formatPrice';

import {
  CartModalList,
  LinkWrapper,
  OrderLink,
  CatalogLink,
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
          <p style={{ padding: '10px 38px', backgroundColor: '#9D9D9D' }}>
            Товар додано в кошик
          </p>
          <div style={{ padding: '8px 38px 42px' }}>
            <div>
              <CartModalList>
                {products &&
                  products.map(item => (
                    <li key={item.sku.id}>
                      <CartItem item={item} />
                    </li>
                  ))}
              </CartModalList>
            </div>

            <div
              style={{
                width: '362px',
                height: '1px',
                backgroundColor: 'rgba(0, 0, 0, 0.2',
              }}
            ></div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: 'max-content',
                padding: '32px 64px 42px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '101px',
                  marginBottom: '32px',
                }}
              >
                <p
                  style={{
                    color: '#000',
                    fontSize: '18px',
                    fontWeight: '600',
                    lineHeight: '25.2px',
                  }}
                >
                  Разом:
                </p>
                <Amount>
                  {formatPrice(cartTotalAmount)} {cartCurrency}
                </Amount>
              </div>
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
            </div>
          </div>
        </div>
      ) : (
        <p style={{ padding: '10px 38px', backgroundColor: '#9D9D9D' }}>
          Ваш кошик пустий
        </p>
      )}
    </Modal>
  );
};
