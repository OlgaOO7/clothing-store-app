import {
  Container,
  ItemWrapper,
  OrderColor,
  OrderContent,
  OrderContentWrapper,
  OrderDescription,
  OrderImage,
  OrderPrice,
  OrderQuantity,
  OrderSize,
  OrderText,
  OrderTitle,
} from './OrderItem.styled';
import noImage from '../../images/no-image.jpg';

export const OrderItem = ({ item }) => {
  const { photos, title, skuSet } = item;
  const color = skuSet[0].characteristics[1].name;
  const size = skuSet[0].characteristics[0].name;

  return (
    <ItemWrapper key={item.id}>
      <Container>
        <OrderImage src={`${photos ? photos[0]?.url : noImage}`}></OrderImage>
        <OrderContent>
          <OrderContentWrapper>
            <OrderTitle>{title.slice(0, 5)}...</OrderTitle>
            <OrderDescription>
              Колір:<OrderColor></OrderColor>
            </OrderDescription>
            <OrderDescription>
              Розмір:
              <OrderSize>{size}</OrderSize>
            </OrderDescription>
            <OrderDescription>
              Кількість:<OrderSize>1</OrderSize>
            </OrderDescription>
            <OrderText>{color}</OrderText>
            <OrderText>{size}</OrderText>
          </OrderContentWrapper>
          <OrderQuantity>x 1</OrderQuantity>
        </OrderContent>
      </Container>
      <OrderPrice>700 UAH</OrderPrice>
    </ItemWrapper>
  );
};
