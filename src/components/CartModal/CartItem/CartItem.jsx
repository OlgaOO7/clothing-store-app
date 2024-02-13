import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { formatPrice } from 'utils/formatPrice';
import { cuttedTitle } from 'utils/cuttedTitle';
import { getCart, deleteProductFromCart } from 'redux/cart/operations';

import Sprite from 'images/sprite.svg';

import {
  ImageProduct,
  CartItemWrapper,
  ItemInfoWrapper,
  InfoTextWrapper,
  ItemTitle,
  ItemPrice,
  ItemDeleteBtn,
  DeleteIcon,
} from './CartItem.styled';

export const CartItem = ({ item }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const deleteProduct = async skuId => {
    await dispatch(deleteProductFromCart(skuId));
    await dispatch(getCart());
  };
  return (
    <CartItemWrapper>
      <ItemInfoWrapper>
        <Link to={`/catalog/${item.productId}`} state={{ from: location }}>
          <ImageProduct
            src={item.photoUrl}
            alt={cuttedTitle(item.productTitle, 15)}
          />
        </Link>
        <InfoTextWrapper>
          <Link
            to={`/catalog/${item.productId}`}
            state={{ from: location }}
            style={{ color: '#000' }}
          >
            <ItemTitle>{cuttedTitle(item.productTitle, 15)}</ItemTitle>
          </Link>
          <p>{item.sku.characteristics[1].name}</p>
          <p>{item.sku.characteristics[0].name}</p>
          <ItemPrice>
            {item.quantity} x {formatPrice(item.price)} {item.currencyCode}
          </ItemPrice>
        </InfoTextWrapper>
      </ItemInfoWrapper>
      <ItemDeleteBtn onClick={() => deleteProduct(item.sku.id)}>
        <DeleteIcon width={13} height={13}>
          <use href={`${Sprite}#icon-cross`} />
        </DeleteIcon>
      </ItemDeleteBtn>
    </CartItemWrapper>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};
