import { Link } from 'react-router-dom';
import {
  ProductDescription,
  ProductImage,
  ProductTitle,
  ProductWrapper,
} from './ProductComponent.styled';

export const ProductComponent = ({ item }) => {
  const maxLength = 40;
  return (
    <Link to={`/catalog/${item.id}`}>
      <ProductWrapper>
        <ProductImage
          src={`${
            item.photos.url
              ? item.photos.url
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
          }`}
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