import { useDispatch, useSelector } from 'react-redux';
import {
  LinkTo,
  NavWrapper,
  OrderWrapper,
  Section,
  Wrapper,
  Title,
  OrderResultSection,
  OrderResultTitle,
  OrderResultDeliveryFirst,
  OrderResultDeliverySec,
  OrderResultList,
  OrderResultListItem,
  OrderResultDestTotal,
  OrderResultTotal,
} from './Order.styled';
import { useEffect, useMemo } from 'react';
import { OrderItem } from 'components/OrderItem/OrderItem';
import { useMedia } from 'hooks/useMedia';
import { OrderForm } from 'components/OrderForm/OrderForm';
import { useLocation } from 'react-router';
import { getOrder } from 'redux/order/operations';
import { selectOrder, selectOrderItems } from 'redux/order/selectors';
import { useState } from 'react';
import axios from 'axios';

export const Order = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { isMobileScreen } = useMedia();
  const [orderSuccess, setOrderSuccess] = useState(null);
  const [productAvailableQuantity, setProductAvailableQuantity] = useState({});

  const order = useSelector(selectOrder) || [];
  const products = useSelector(selectOrderItems);
  const memoizedProducts = useMemo(() => products || [], [products]);

  const { totalAmount, currencyCode, totalQuantity } = order;
  const sessionId = state ? state?.sessionId : null;

  useEffect(() => {
    dispatch(getOrder(sessionId));
  }, [dispatch, sessionId]);

  useEffect(() => {
    const fetchProductQuantityForItem = async productId => {
      try {
        const productResponse = await axios.get(`/products/${productId}`);
        const cartItem = memoizedProducts.find(
          item => item.productId === productId
        );
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
        if (memoizedProducts) {
          // Використовуйте memoizedProducts тут
          const productPromises = memoizedProducts.map(async item => {
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
  }, [memoizedProducts, dispatch]);

  return (
    <>
      <NavWrapper>
        <LinkTo to={'/'}>Головна</LinkTo>
        {!isMobileScreen ? (
          <>
            <span>|</span>
            <LinkTo to={'/cart'}>Кошик</LinkTo>
            <span>|</span>
            <LinkTo to={'/order'}>Оформлення замовлення</LinkTo>
          </>
        ) : (
          <>
            <span>|</span>
            <LinkTo to={'/order'}>Оформлення замовлення</LinkTo>
          </>
        )}
      </NavWrapper>
      <Section>
        <Wrapper>
          <Title>Ваше замовлення</Title>
          <OrderWrapper>
            {memoizedProducts.length === 0 ? (
              <p>Масив порожній</p>
            ) : (
              memoizedProducts.map(item => (
                <OrderItem
                  key={item.id}
                  item={item}
                  availableQuantity={productAvailableQuantity[item.productId]}
                  setOrderSuccess={setOrderSuccess}
                />
              ))
            )}
          </OrderWrapper>
        </Wrapper>
      </Section>
      <OrderResultSection>
        <Wrapper>
          {memoizedProducts.length === 0 || orderSuccess === false ? (
            <OrderResultTitle style={{ textAlign: 'center' }}>
              Наразі неможливо оформити замовлення.
            </OrderResultTitle>
          ) : isMobileScreen ? (
            <>
              <OrderResultTitle>Всього</OrderResultTitle>
              <OrderResultList>
                <OrderResultListItem>
                  <OrderResultTotal>
                    {totalQuantity} товари(-ів) на суму
                  </OrderResultTotal>
                  <OrderResultTotal>
                    {totalAmount} {currencyCode}
                  </OrderResultTotal>
                </OrderResultListItem>
                <OrderResultListItem>
                  <OrderResultDeliveryFirst>
                    Вартість доставки
                  </OrderResultDeliveryFirst>
                  <OrderResultDeliverySec>
                    За тарифами перевізника
                  </OrderResultDeliverySec>
                </OrderResultListItem>
              </OrderResultList>
            </>
          ) : (
            <>
              <OrderResultList>
                <OrderResultListItem>
                  <OrderResultTotal>
                    {totalQuantity} товари(-ів) на суму
                  </OrderResultTotal>
                  <OrderResultTotal>
                    {totalAmount} {currencyCode}
                  </OrderResultTotal>
                </OrderResultListItem>
                <OrderResultListItem>
                  <OrderResultDeliveryFirst>
                    Вартість доставки
                  </OrderResultDeliveryFirst>
                  <OrderResultDeliverySec>
                    За тарифами перевізника
                  </OrderResultDeliverySec>
                </OrderResultListItem>
                <OrderResultListItem>
                  <OrderResultTitle>Разом:</OrderResultTitle>
                  <OrderResultDestTotal>
                    {totalAmount} {currencyCode}
                  </OrderResultDestTotal>
                </OrderResultListItem>
              </OrderResultList>
            </>
          )}
        </Wrapper>
      </OrderResultSection>
      {memoizedProducts.length === 0 || orderSuccess === false ? (
        <></>
      ) : (
        <OrderForm sessionId={sessionId} orderSuccess={orderSuccess} />
      )}
    </>
  );
};
