import { useDispatch, useSelector } from 'react-redux';
import {
  LinkTo,
  NavWrapper,
  OrderWrapper,
  Section,
  Wrapper,
  Title,
  OrderResultMobile,
  OrderResultMobileTitle,
  OrderResultMobileDeliveryFirst,
  OrderResultMobileDeliverySec,
  OrderResultList,
  OrderResultDestTitle,
  OrderResultListItem,
  OrderResultDestTotal,
} from './Order.styled';
import { selectNewProducts } from 'redux/products/selectors';
import { useEffect, useState } from 'react';
import { getProducts } from 'redux/products/operations';
import { OrderItem } from 'components/OrderItem/OrderItem';

export const Order = () => {
  const products = useSelector(selectNewProducts) || [];
  const [isMobileNav, setIsMobileNav] = useState(false);
  const dispatch = useDispatch();

  const handleResize = () => {
    setIsMobileNav(window.innerWidth <= 768);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <NavWrapper>
        <LinkTo to={'/'}>Головна</LinkTo>
        {!isMobileNav ? (
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
      <OrderResultMobile>
        <Wrapper>
          <OrderResultMobileTitle>Всього</OrderResultMobileTitle>
          <OrderResultList>
            <OrderResultListItem>
              <p>3 товари на суму</p>
              <p>2100 UAH</p>
            </OrderResultListItem>
            <OrderResultListItem>
              <OrderResultMobileDeliveryFirst>
                Вартість доставки
              </OrderResultMobileDeliveryFirst>
              <OrderResultMobileDeliverySec>
                За тарифами перевізника
              </OrderResultMobileDeliverySec>
            </OrderResultListItem>
            <OrderResultListItem>
              <OrderResultDestTitle>Разом:</OrderResultDestTitle>
              <OrderResultDestTotal>2100 UAH</OrderResultDestTotal>
            </OrderResultListItem>
          </OrderResultList>
        </Wrapper>
      </OrderResultMobile>
    </>
  );
};
