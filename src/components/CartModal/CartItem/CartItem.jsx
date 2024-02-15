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
  // Notification,
  ItemDeleteBtn,
  DeleteIcon,
} from './CartItem.styled';

export const CartItem = ({ item }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const {
    productId,
    photoUrl,
    productTitle,
    sku: { characteristics, id },
    quantity,
    price,
    currencyCode,
  } = item;

  const deleteProduct = async skuId => {
    await dispatch(deleteProductFromCart(skuId));
    await dispatch(getCart());
  };
  return (
    <CartItemWrapper>
      <ItemInfoWrapper>
        <Link to={`/catalog/${productId}`} state={{ from: location }}>
          <ImageProduct src={photoUrl} alt={cuttedTitle(productTitle, 15)} />
        </Link>
        <InfoTextWrapper>
          <Link
            to={`/catalog/${productId}`}
            state={{ from: location }}
            style={{ color: '#000' }}
          >
            <ItemTitle>{cuttedTitle(productTitle, 15)}</ItemTitle>
          </Link>
          <p>{characteristics[1].name}</p>
          <p>{characteristics[0].name}</p>
          <ItemPrice>
            {quantity} x {formatPrice(price)} {currencyCode}
          </ItemPrice>
          {/* {sku.availableQuantity === 0 && (
            <Notification>Наразі товар відсутній</Notification>
          )} */}
        </InfoTextWrapper>
      </ItemInfoWrapper>
      <ItemDeleteBtn onClick={() => deleteProduct(id)}>
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
