import {
  ProductDescription,
  ProductImage,
  ProductTitle,
  ProductWrapper,
} from './ProductComponent.styled';

export const ProductComponent = ({ item }) => {
  return (
    <>
      <ProductWrapper>
        <ProductImage></ProductImage>
        <ProductTitle>{item.title}</ProductTitle>
        <ProductDescription>
          {item.price.value} {item.price.currency.code}
        </ProductDescription>
      </ProductWrapper>
    </>
  );
};
