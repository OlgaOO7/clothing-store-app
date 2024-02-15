import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { createCart, getCart, clearCart } from 'redux/cart/operations';
import { CartProductItem } from './CartProductItem/CartProductItem';
import { CartTotal } from './CartTotal/CartTotal';
import { Loader } from 'components/Loader/Loader';
import { useMedia } from 'hooks/useMedia';

import {
  selectCart,
  selectIsRefreshing,
  selectTotalQunaity,
} from 'redux/cart/selectors';

import {
  CartWrapper,
  Wrapper,
  LinkWrapper,
  Divider,
  LinkTo,
  SectionWrapper,
  HeaderWrapper,
  ProductText,
  QuantityText,
  PriceText,
  TextBlock,
  ProductListWrapper,
  ProductCartList,
  ProductItem,
  DeleteCartBtnWrapp,
  DeleteCartBtn,
  EmptyCartWrapper,
  CatalogLink,
} from './Cart.styled';

export const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const { isMobileScreen } = useMedia();
  const dispatch = useDispatch();
  const location = useLocation();
  const userUid = localStorage.getItem('userUid');
  const cartData = useSelector(selectCart);
  const cartTotalQuantity = useSelector(selectTotalQunaity);
  const isLoading = useSelector(selectIsRefreshing);

  const unavailableProductQuantity =
    cartProducts && cartProducts.some(item => item.sku.availableQuantity === 0);

  const invalidQuantity =
    cartProducts &&
    cartProducts.some(item => item.sku.availableQuantity < item.quantity);

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
  }, [cartData]);

  const increaseProductQuantity = async productSkuId => {
    const itemToUpdate = cartProducts.find(
      item => item.sku.id === productSkuId
    );

    const quantityToIncrease = itemToUpdate.quantity + 1;
    const increasedItemQuantity = quantityToIncrease - itemToUpdate.quantity;
    const availableProductQuantity = itemToUpdate.sku.availableQuantity;

    if (itemToUpdate && quantityToIncrease <= availableProductQuantity) {
      const updatedProduct = {
        sessionId: userUid,
        skuId: itemToUpdate.sku.id,
        price: itemToUpdate.price,
        quantity: increasedItemQuantity,
        amount: itemToUpdate.price * increasedItemQuantity,
      };
      try {
        await dispatch(createCart(updatedProduct));
        await fetchCart();
      } catch (err) {
        console.error('Error updating product quantity:', err);
      }
    } else {
      return;
    }
  };

  const decreaseProductQuantity = async productSkuId => {
    const itemToUpdate = cartProducts.find(
      item => item.sku.id === productSkuId
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
      try {
        await dispatch(createCart(updatedProduct));
        await fetchCart();
      } catch (err) {
        console.error('Error updating product quantity:', err);
      }
    } else {
      return;
    }
  };

  const clearProductCart = async () => {
    await dispatch(clearCart());
  };

  return (
    <Wrapper>
      <CartWrapper>
        <LinkWrapper>
          <LinkTo to="/">Головна</LinkTo>
          <Divider></Divider>
          <LinkTo to="/cart">Кошик</LinkTo>
        </LinkWrapper>
        {isLoading ? (
          <Loader />
        ) : cartTotalQuantity ? (
          <section>
            <SectionWrapper>
              {!isMobileScreen && (
                <HeaderWrapper>
                  <ProductText>Товар</ProductText>
                  <QuantityText>Кількість</QuantityText>
                  <PriceText>Ціна</PriceText>
                  <TextBlock />
                </HeaderWrapper>
              )}
              <ProductListWrapper>
                <ProductCartList>
                  {cartProducts?.length > 0 &&
                    cartProducts.map(item => (
                      <ProductItem key={item.sku.id}>
                        <CartProductItem
                          item={item}
                          increaseProductQuantity={increaseProductQuantity}
                          decreaseProductQuantity={decreaseProductQuantity}
                          availableQuantity={item.sku.availableQuantity}
                          isLoading={isLoading}
                        />
                      </ProductItem>
                    ))}
                </ProductCartList>
              </ProductListWrapper>
            </SectionWrapper>
            <DeleteCartBtnWrapp>
              <DeleteCartBtn onClick={clearProductCart}>
                Очистити кошик
              </DeleteCartBtn>
            </DeleteCartBtnWrapp>
            {!isMobileScreen && (
              <CartTotal
                data={cartData}
                unavailableProductQuantity={unavailableProductQuantity}
                invalidQuantity={invalidQuantity}
              />
            )}
          </section>
        ) : (
          <EmptyCartWrapper>
            <p>Ваш кошик порожній.</p>
            <CatalogLink to={`/catalog`} state={{ from: location }}>
              Повернутися до покупок
            </CatalogLink>
          </EmptyCartWrapper>
        )}
      </CartWrapper>
      {!isLoading && cartTotalQuantity > 0 && isMobileScreen && (
        <CartTotal
          data={cartData}
          unavailableProductQuantity={unavailableProductQuantity}
          invalidQuantity={invalidQuantity}
        />
      )}
    </Wrapper>
  );
};
