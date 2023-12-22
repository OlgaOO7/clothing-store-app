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
  const { photos, title, skuSet } = item;
  const { isMobileScreen } = useMedia();
  const color = skuSet[0].characteristics[1].name;
  const size = skuSet[0].characteristics[0].name;

  return (
    <ItemWrapper>
      <Container>
        <OrderImage src={`${photos ? photos[0]?.url : noImage}`}></OrderImage>
        <OrderContent>
          {isMobileScreen ? (
            <>
              <OrderContentWrapper>
                <OrderTitle>{title.slice(0, 5)}...</OrderTitle>
                <OrderText>{color}</OrderText>
                <OrderText>{size}</OrderText>
              </OrderContentWrapper>
              <OrderDescription>x 1</OrderDescription>
            </>
          ) : (
            <>
              <OrderContentWrapper>
                <OrderTitle>{title.slice(0, 5)}...</OrderTitle>
                <OrderDescription>
                  Колір:<OrderColor></OrderColor>
                </OrderDescription>
                <OrderDescription>
                  Розмір:
                  <OrderText>{size}</OrderText>
                </OrderDescription>
                <OrderDescription>
                  Кількість:<OrderText>1</OrderText>
                </OrderDescription>
              </OrderContentWrapper>
            </>
          )}
        </OrderContent>
      </Container>
      <OrderPrice>700 UAH</OrderPrice>
    </ItemWrapper>
  );
};
