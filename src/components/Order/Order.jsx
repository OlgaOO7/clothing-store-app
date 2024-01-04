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
import { useEffect } from 'react';
import { OrderItem } from 'components/OrderItem/OrderItem';
import { useMedia } from 'hooks/useMedia';
import { OrderForm } from 'components/OrderForm/OrderForm';
import { useLocation } from 'react-router';
import { getOrder } from 'redux/order/operations';
import { selectOrder, selectOrderItems } from 'redux/order/selectors';
import { useState } from 'react';

export const Order = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { isMobileScreen } = useMedia();

  // const [orderSuccess, setOrderSuccess] = useState(null);
  const order = useSelector(selectOrder) || [];
  const products = useSelector(selectOrderItems) || [];

  const { totalAmount, currencyCode, totalQuantity } = order;
  const sessionId = state ? state?.sessionId : null;

  useEffect(() => {
    dispatch(getOrder(sessionId));
  }, [dispatch, sessionId]);

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
            {products.map(item => (
              <OrderItem
                key={item.id}
                item={item}
                // setOrderSuccess={setOrderSuccess}
              />
            ))}
          </OrderWrapper>
        </Wrapper>
      </Section>
      <OrderResultSection>
        <Wrapper>
          {isMobileScreen ? (
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
      <OrderForm
        sessionId={sessionId}
        // orderSuccess={orderSuccess}
      />
    </>
  );
};
