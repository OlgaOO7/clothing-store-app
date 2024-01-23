import { useEffect } from 'react';

import { formatPrice } from 'utils/formatPrice';

import noImage from '../../images/no-image.jpg';

import {
  ItemWrapper,
  Container,
  OrderContentWrapper,
  OrderDescription,
  OrderImage,
  OrderPrice,
  OrderText,
  OrderTitle,
  OrderError,
  OrderErrorText,
} from './OrderItem.styled';

export const OrderItem = ({ item, setOrderSuccess, availableQuantity }) => {
  const { photoUrl, productTitle, sku, amount, currencyCode, quantity } = item;
  const color = sku.characteristics[1].name;
  const size = sku.characteristics[0].name;

  useEffect(() => {
    if (quantity > availableQuantity) {
      setOrderSuccess(false);
    } else {
      setOrderSuccess(true);
    }
  });

  return (
    <>
      <ItemWrapper>
        {quantity > availableQuantity && (
          <OrderError>
            <OrderErrorText>
              Вибачте, цей товар тимчасово недоступний або його кількість
              перевищує наявність.
            </OrderErrorText>
          </OrderError>
        )}
        <Container>
          <OrderImage src={`${photoUrl ? photoUrl : noImage}`}></OrderImage>
          <OrderContentWrapper>
            <OrderTitle>{productTitle.slice(0, 10)}...</OrderTitle>
            <OrderText>{color}</OrderText>
            <OrderText>{size}</OrderText>
          </OrderContentWrapper>
        </Container>
        <OrderDescription>x {quantity}</OrderDescription>
        <OrderPrice>
          {formatPrice(amount)} {currencyCode}
        </OrderPrice>
      </ItemWrapper>
    </>
  );
};
