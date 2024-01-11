import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import axios from 'axios';

import { createCart, getCart, clearCart } from 'redux/cart/operations';
import {
  selectCart,
  selectIsRefreshing,
  selectTotalQunaity,
} from 'redux/cart/selectors';
import { CartProductItem } from './CartProductItem/CartProductItem';
import { formatPrice } from 'utils/formatPrice';

import {
  CartWrapper,
  LinkWrapper,
  Divider,
  LinkTo,
  TaglineWrapper,
  TaglineSubWrapper,
  ProductText,
  ProductQuantity,
  ProductCartList,
  Rectangle,
  TextWrapper,
  PriceWrapper,
  LinkBtnWrapper,
  OrderLink,
  CatalogLink,
  HeadlineWrapper,
  DeleteCartBtn,
} from './Cart.styled';

export const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [productAvailableQuantity, setProductAvailableQuantity] = useState({});
  // const [cartTotalAmount, setCartTotalAmount] = useState(null);
  // const [cartCurrency, setCartCurrency] = useState('');
  // const [cartProductQunatity, setCartProductQuantity] = useState(null);
  const [forceRerender, setForceRerender] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();

  const userUid = localStorage.getItem('userUid');

  const cartData = useSelector(selectCart);
  const cartTotalQuantity = useSelector(selectTotalQunaity);
  const isLoading = useSelector(selectIsRefreshing);

  const unavailableProductQuantity =
    cartProducts &&
    cartProducts.some(item => productAvailableQuantity[item.productId] === 0);

  const invalidQuantity =
    cartProducts &&
    cartProducts.some(
      item => productAvailableQuantity[item.productId] < item.quantity
    );

  const fetchCart = useCallback(() => {
    try {
      dispatch(getCart());
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  useEffect(() => {
    setCartProducts(cartData.items);

    const fetchProductQuantityForItem = async productId => {
      try {
        const productResponse = await axios.get(`/products/${productId}`);
        const cartItem = cartData.items.find(
          item => item.productId === productId
        );
        // console.log(`productResponse:`, productResponse);
        // console.log(`cartItem:`, cartItem);
        if (cartItem) {
          const matchingSku = productResponse.data.skuSet.find(
            skuSet => skuSet.id === cartItem.sku.id
          );
          if (matchingSku) {
            return {
              productId,
              availableQuantity: matchingSku.availableQuantity,
            };
          } else {
            return {
              productId,
              availableQuantity: 0,
            };
          }
        }
      } catch (err) {
        console.error(err);
      }
    };

    const fetchProductQuantity = async () => {
      try {
        if (cartData.items) {
          const productPromises = cartData.items.map(async item => {
            return fetchProductQuantityForItem(item.productId);
          });

          const productArray = await Promise.all(productPromises);
          const productQuantity = productArray.reduce((map, product) => {
            map[product.productId] = product.availableQuantity;
            return map;
          }, {});

          setProductAvailableQuantity(productQuantity);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchProductQuantity();
  }, [cartData, dispatch]);

  // console.log(cartProducts);
  // console.log('cart data:', cartData);

  const increaseProductQuantity = async productId => {
    const itemToUpdate = cartProducts.find(
      item => item.productId === productId
    );

    const quantityToIncrease = itemToUpdate.quantity + 1;
    const increasedItemQuantity = quantityToIncrease - itemToUpdate.quantity;
    const availableQuantityBySku =
      productAvailableQuantity[itemToUpdate.productId];

    if (itemToUpdate && quantityToIncrease <= availableQuantityBySku) {
      const updatedProduct = {
        sessionId: userUid,
        skuId: itemToUpdate.sku.id,
        price: itemToUpdate.price,
        quantity: increasedItemQuantity,
        amount: itemToUpdate.price * increasedItemQuantity,
      };
      // console.log('updatedProduct:', updatedProduct);
      try {
        await dispatch(createCart(updatedProduct));
        await fetchCart();
        setForceRerender(!forceRerender);
        // await dispatch(getCart());
      } catch (err) {
        console.error('Error updating product quantity:', err);
      }
      // console.log(cartData);
    } else {
      return;
    }
  };

  const decreaseProductQuantity = async productId => {
    const itemToUpdate = cartProducts.find(
      item => item.productId === productId
    );
    const quantityToDecrease = itemToUpdate.quantity - 1;
    const decreasedItemQuantity = quantityToDecrease - itemToUpdate.quantity;

    if (itemToUpdate && itemToUpdate.quantity > 1) {
      const updatedProduct = {
        sessionId: userUid,
        skuId: itemToUpdate.sku.id,
        price: itemToUpdate.price,
        quantity: decreasedItemQuantity,
        amount: itemToUpdate.price * decreasedItemQuantity,
      };
      // console.log(updatedProduct);
      try {
        await dispatch(createCart(updatedProduct));
        // await dispatch(getCart());
        await fetchCart();
      } catch (err) {
        console.error('Error updating product quantity:', err);
      }
    } else {
      return;
    }
  };

  const clearProductCart = () => {
    dispatch(clearCart());
  };

  return (
    <CartWrapper>
      <LinkWrapper>
        <LinkTo to="/">Головна</LinkTo>
        <Divider></Divider>
        <LinkTo to="/cart">Кошик</LinkTo>
      </LinkWrapper>
      {isLoading ? (
        <p>Is loading...</p>
      ) : cartTotalQuantity ? (
        <div>
          <TaglineWrapper>
            <HeadlineWrapper>
              <TaglineSubWrapper>
                <ProductText>Товар</ProductText>
                <ProductQuantity>Кількість</ProductQuantity>
                <p>Ціна</p>
              </TaglineSubWrapper>
              <div>
                <DeleteCartBtn onClick={clearProductCart}>
                  Очистити корзину
                </DeleteCartBtn>
              </div>
            </HeadlineWrapper>
            <div
              style={{
                display: 'flex',
                padding: '29px 0',
                borderTop: '1px solid #686868',
                borderBottom: '1px solid #686868',
              }}
            >
              <ProductCartList>
                {cartProducts?.length > 0 &&
                  cartProducts.map(item => (
                    <li key={item.sku.id}>
                      <CartProductItem
                        item={item}
                        increaseProductQuantity={increaseProductQuantity}
                        decreaseProductQuantity={decreaseProductQuantity}
                        availableQuantity={
                          productAvailableQuantity[item.productId]
                        }
                      />
                    </li>
                  ))}
              </ProductCartList>
            </div>
          </TaglineWrapper>

          <Rectangle>
            <TextWrapper>
              {forceRerender && <div>Force Rerender Test</div>}
              <p>
                Вартість
                <br /> доставки
              </p>
              <p>
                За тарифами
                <br /> перевізника
              </p>
            </TextWrapper>
            <PriceWrapper>
              <p>Сума </p>
              <p>
                {formatPrice(cartData.totalAmount)} {cartData.currencyCode}
              </p>
            </PriceWrapper>
            <LinkBtnWrapper>
              {unavailableProductQuantity || invalidQuantity ? (
                <OrderLink disabled>Оформити замовлення</OrderLink>
              ) : (
                <OrderLink
                  to={`/order`}
                  state={{ from: location, sessionId: cartData?.sessionId }}
                >
                  Оформити замовлення
                </OrderLink>
              )}
              <CatalogLink to={`/catalog`} state={{ from: location }}>
                Продовжити покупку
              </CatalogLink>
            </LinkBtnWrapper>
          </Rectangle>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '4px' }}>
          <p>Ваш кошик порожній.</p>
          <Link to={`/catalog`} state={{ from: location }}>
            Повернутися до покупок
          </Link>
        </div>
      )}
    </CartWrapper>
  );
};
