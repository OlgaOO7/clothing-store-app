import { useDispatch, useSelector } from 'react-redux';
import {
  LinkTo,
  NavWrapper,
  OrderImage,
  OrderWrapper,
  Section,
  Wrapper,
  ItemWrapper,
  Title,
  OrderContent,
  OrderTitle,
} from './Order.styled';
import { selectNewProducts } from 'redux/products/selectors';
import { useEffect, useState } from 'react';
import { getProducts } from 'redux/products/operations';

export const Order = () => {
  const products = useSelector(selectNewProducts) || [];
  const [isMobileNav, setIsMobileNav] = useState(false);
  const dispatch = useDispatch();
  console.log(products);

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
              <ItemWrapper key={item.id}>
                <OrderImage
                  src={`${item?.photos ? item?.photos[0]?.url : 'noImage'}`}
                ></OrderImage>
                <OrderContent>
                  <OrderTitle>{item.title.slice(0, 18)}...</OrderTitle>
                </OrderContent>
              </ItemWrapper>
            ))}
          </OrderWrapper>
        </Wrapper>
      </Section>
    </>
  );
};
