import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteProductFromCart, getCart } from 'redux/cart/operations';
import { formatPrice } from 'utils/formatPrice';
import { cuttedTitle } from 'utils/cuttedTitle';
import { useMedia } from 'hooks/useMedia';

import Sprite from 'images/sprite.svg';

import {
  Wrapper,
  InfoProductWrapper,
  ProductImage,
  ProductDescriptionWrapper,
  ProductTitle,
  QuantityWrapper,
  Icon,
  Price,
  ProductDeleteBtn,
  DeleteIcon,
} from './CartProductItem.styled';

export const CartProductItem = ({
  item,
  decreaseProductQuantity,
  increaseProductQuantity,
  availableQuantity,
}) => {
  const { isMobileScreen } = useMedia();
  const dispatch = useDispatch();
  const location = useLocation();

  const deleteProduct = async skuId => {
    await dispatch(deleteProductFromCart(skuId));
    await dispatch(getCart());
  };

  return (
    <Wrapper>
      {isMobileScreen && (
        <ProductDeleteBtn onClick={() => deleteProduct(item.sku.id)}>
          <DeleteIcon>
            <use href={`${Sprite}#icon-cross`} />
          </DeleteIcon>
        </ProductDeleteBtn>
      )}
      <InfoProductWrapper>
        <Link to={`/catalog/${item.productId}`} state={{ from: location }}>
          <ProductImage
            src={item.photoUrl}
            alt={cuttedTitle(item.productTitle)}
            loading="lazy"
          />
        </Link>
        <ProductDescriptionWrapper>
          <Link
            to={`/catalog/${item.productId}`}
            state={{ from: location }}
            style={{ padding: '0', margin: '0' }}
          >
            <ProductTitle>{cuttedTitle(item.productTitle, 15)}</ProductTitle>
          </Link>
          {item.sku.characteristics && (
            <div>
              <p>{item.sku.characteristics[1].name}</p>
              <p>{item.sku.characteristics[0].name}</p>
            </div>
          )}
        </ProductDescriptionWrapper>
      </InfoProductWrapper>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <QuantityWrapper>
          <span onClick={() => decreaseProductQuantity(item.productId)}>
            <Icon>
              <use href={`${Sprite}#icon-minus`} />
            </Icon>
          </span>
          {item.quantity}
          <span onClick={() => increaseProductQuantity(item.productId)}>
            <Icon>
              <use href={`${Sprite}#icon-plus`} />
            </Icon>
          </span>
        </QuantityWrapper>
        <p>Доступна кількість товару: {availableQuantity}</p>
      </div>

      <div style={{ width: '130px', marginRight: '180px' }}>
        <Price>
          {formatPrice(item.amount)} {item.currencyCode}
        </Price>
      </div>
      {!isMobileScreen && (
        <ProductDeleteBtn onClick={() => deleteProduct(item.sku.id)}>
          <DeleteIcon>
            <use href={`${Sprite}#icon-cross`} />
          </DeleteIcon>
        </ProductDeleteBtn>
      )}
    </Wrapper>
  );
};
