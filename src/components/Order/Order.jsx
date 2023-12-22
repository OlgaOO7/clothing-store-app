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
import { selectNewProducts } from 'redux/products/selectors';
import { useEffect } from 'react';
import { getProducts } from 'redux/products/operations';
import { OrderItem } from 'components/OrderItem/OrderItem';
import { useMedia } from 'hooks/useMedia';

export const Order = () => {
  const products = useSelector(selectNewProducts) || [];
  const dispatch = useDispatch();
  const { isMobileScreen } = useMedia();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <NavWrapper>
        <LinkTo to={'/'}>Головна</LinkTo>
        {!isMobileScreen ? (
          <>
            <span>|</span>
            <LinkTo to={'/order'}>Кошик</LinkTo>
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
              <OrderItem key={item.id} item={item} />
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
                  <OrderResultTotal>3 товари на суму</OrderResultTotal>
                  <OrderResultTotal>2100 UAH</OrderResultTotal>
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
                  <OrderResultTotal>3 товари на суму</OrderResultTotal>
                  <OrderResultTotal>2100 UAH</OrderResultTotal>
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
                  <OrderResultDestTotal>2100 UAH</OrderResultDestTotal>
                </OrderResultListItem>
              </OrderResultList>
            </>
          )}
        </Wrapper>
      </OrderResultSection>
    </>
  );
};
