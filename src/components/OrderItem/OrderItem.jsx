import {
  ItemWrapper,
  Container,
  OrderColor,
  OrderContent,
  OrderContentWrapper,
  OrderDescription,
  OrderImage,
  OrderPrice,
  OrderText,
  OrderTitle,
  OrderError,
  OrderErrorText,
} from './OrderItem.styled';
import noImage from '../../images/no-image.jpg';
import { useMedia } from 'hooks/useMedia';
import { useEffect } from 'react';

export const OrderItem = ({ item, setOrderSuccess, availableQuantity }) => {
  const { photoUrl, productTitle, sku, amount, currencyCode, quantity } = item;
  const { isMobileScreen } = useMedia();
  const color = sku.characteristics[1].name;
  const colorhex = sku.characteristics[1].value;
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
          <OrderContent>
            {isMobileScreen ? (
              <>
                <OrderContentWrapper>
                  <OrderTitle>{productTitle.slice(0, 5)}...</OrderTitle>
                  <OrderText>{color}</OrderText>
                  <OrderText>{size}</OrderText>
                </OrderContentWrapper>
                <OrderDescription>x {quantity}</OrderDescription>
              </>
            ) : (
              <>
                <OrderContentWrapper>
                  <OrderTitle>{productTitle.slice(0, 5)}...</OrderTitle>
                  <OrderDescription>
                    Колір:<OrderColor $color={colorhex}></OrderColor>
                  </OrderDescription>
                  <OrderDescription>
                    Розмір:
                    <OrderText>{size}</OrderText>
                  </OrderDescription>
                  <OrderDescription>
                    Кількість:<OrderText>{quantity}</OrderText>
                  </OrderDescription>
                </OrderContentWrapper>
              </>
            )}
          </OrderContent>
        </Container>
        <OrderPrice>
          {amount} {currencyCode}
        </OrderPrice>
      </ItemWrapper>
    </>
  );
};
