import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import axios from 'axios';

import { createCart, getCart, clearCart } from 'redux/cart/operations';
import { selectCart, selectTotalQunaity } from 'redux/cart/selectors';
// import { getProductById } from 'redux/products/operations';
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
} from './Cart.styled';

export const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [productAvailableQuantity, setProductAvailableQuantity] = useState({});
  // const [cartTotalAmount, setCartTotalAmount] = useState(null);
  // const [cartCurrency, setCartCurrency] = useState('');
  // const [cartProductQunatity, setCartProductQuantity] = useState(null);

  const dispatch = useDispatch();
  const location = useLocation();

  const userUid = localStorage.getItem('userUid');

  const cartData = useSelector(selectCart);
  const cartTotalQuantity = useSelector(selectTotalQunaity);

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

          // console.log(`matchingSku`, matchingSku);
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
          // console.log(`productQuantity`, productQuantity);

          setProductAvailableQuantity(productQuantity);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchProductQuantity();
  }, [cartData, dispatch]);

  // console.log(cartProducts);
  // console.log(cartData);

  const increaseProductQuantity = async productId => {
    const itemToUpdate = cartProducts.find(
      item => item.productId === productId
    );
    const quantityToIncrease = itemToUpdate.quantity + 1;
    const increasedItemQuantity = quantityToIncrease - itemToUpdate.quantity;
    // console.log(increasedItemQuantity);

    if (itemToUpdate) {
      const updatedProduct = {
        sessionId: userUid,
        skuId: itemToUpdate.sku.id,
        price: itemToUpdate.price,
        quantity: increasedItemQuantity,
        amount: itemToUpdate.price * increasedItemQuantity,
      };
      // console.log(updatedProduct);
      try {
        await dispatch(createCart(updatedProduct));
        await fetchCart();
        // await dispatch(getCart());
      } catch (err) {
        console.error('Error updating product quantity:', err);
      }
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
    // console.log(decreasedItemQuantity);

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

  const clearProductCart = userUid => {
    dispatch(clearCart(userUid));
  };

  return (
    <CartWrapper>
      <LinkWrapper>
        <LinkTo to="/">Головна</LinkTo>
        <Divider></Divider>
        <LinkTo to="/cart">Кошик</LinkTo>
      </LinkWrapper>
      {cartTotalQuantity ? (
        <div>
          <TaglineWrapper>
            <div
              style={{
                marginTop: '20px',
                marginBottom: '20px',
                marginLeft: 'auto',
              }}
            >
              <button
                style={{
                  padding: 0,
                  backgroundColor: 'transparent',
                  border: '1px solid #000',
                }}
                onClick={clearProductCart}
              >
                Очистити корзину
              </button>
            </div>
            <TaglineSubWrapper>
              <ProductText>Товар</ProductText>
              <ProductQuantity>Кількість</ProductQuantity>
              <p>Ціна</p>
            </TaglineSubWrapper>
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
          </TaglineWrapper>
          <Rectangle>
            <TextWrapper>
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
              <OrderLink
                to={`/order`}
                state={{ from: location, sessionId: cartData?.sessionId }}
              >
                Оформити замовлення
              </OrderLink>
              <CatalogLink to={`/catalog`} state={{ from: location }}>
                Продовжити покупку
              </CatalogLink>
            </LinkBtnWrapper>
          </Rectangle>
        </div>
      ) : (
        <p>Ваш кошик пустий</p>
      )}
    </CartWrapper>
  );
};
