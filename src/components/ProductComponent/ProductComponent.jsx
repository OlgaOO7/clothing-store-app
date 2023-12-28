import { Link } from 'react-router-dom';

import noImage from '../../images/no-image.jpg';

import {
  ProductDescription,
  ProductImage,
  ProductTitle,
  ProductWrapper,
  ProductTextWrapper,
} from './ProductComponent.styled';

export const ProductComponent = ({ item, type, sectionType }) => {
  const maxLength = 25;
  return (
    <Link to={`/catalog/${item.id}`}>
      <ProductWrapper type={type}>
        <ProductImage
          src={`${item?.photos ? item?.photos[0]?.url : noImage}`}
          type={type}
          $sectionType={sectionType}
          loading="lazy"
        ></ProductImage>
        <ProductTextWrapper type={type}>
          {item.title.length > maxLength ? (
            <ProductTitle type={type}>
              {item.title.slice(0, maxLength)}...
            </ProductTitle>
          ) : (
            <ProductTitle type={type}>{item.title}</ProductTitle>
          )}
          <ProductDescription type={type}>
            {item.price.value} {item.price.currency.code}
          </ProductDescription>
        </ProductTextWrapper>
      </ProductWrapper>
    </Link>
  );
};
