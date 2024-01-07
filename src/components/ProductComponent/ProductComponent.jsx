import { Link } from 'react-router-dom';

import noImage from '../../images/no-image.jpg';

import {
  ProductDescription,
  ProductImage,
  ProductTitle,
  ProductWrapper,
  ProductTextWrapper,
} from './ProductComponent.styled';
import { formatPrice } from 'utils/formatPrice';

export const ProductComponent = ({ item, type, sectionType }) => {
  const { title, price } = item;
  const { value, currency } = price;
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
          {title.length > maxLength ? (
            <ProductTitle type={type}>
              {title.slice(0, maxLength)}...
            </ProductTitle>
          ) : (
            <ProductTitle type={type}>{title}</ProductTitle>
          )}
          <ProductDescription type={type}>
            {formatPrice(value)} {currency.code}
          </ProductDescription>
        </ProductTextWrapper>
      </ProductWrapper>
    </Link>
  );
};
