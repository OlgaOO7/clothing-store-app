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
} from './OrderItem.styled';
import noImage from '../../images/no-image.jpg';
import { useMedia } from 'hooks/useMedia';

export const OrderItem = ({ item }) => {
  const { photoUrl, productTitle, sku, amount, currencyCode, quantity } = item;
  const { isMobileScreen } = useMedia();
  const color = sku.characteristics[1].name;
  const colorhex = sku.characteristics[1].value;
  const size = sku.characteristics[0].name;

  return (
    <ItemWrapper>
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
  );
};
