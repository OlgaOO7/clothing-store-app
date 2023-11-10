import { Link } from 'react-router-dom';

import noImage from '../../images/no-image.jpg';

import {
  ProductDescription,
  ProductImage,
  ProductTitle,
  ProductWrapper,
} from './ProductComponent.styled';

export const ProductComponent = ({ item }) => {
  const maxLength = 25;
  return (
    <Link to={`/catalog/${item.id}`}>
      <ProductWrapper>
        <ProductImage
          src={`${item.photos.url ? item.photos.url : noImage}`}
        ></ProductImage>
        {item.title.length > maxLength ? (
          <ProductTitle>{item.title.slice(0, maxLength)}...</ProductTitle>
        ) : (
          <ProductTitle>{item.title}</ProductTitle>
        )}
        <ProductDescription>
          {item.price.value} {item.price.currency.code}
        </ProductDescription>
      </ProductWrapper>
    </Link>
  );
};
