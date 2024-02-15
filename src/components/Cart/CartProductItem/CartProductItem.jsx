import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteProductFromCart, getCart } from 'redux/cart/operations';
import { formatPrice } from 'utils/formatPrice';
import { cuttedTitle } from 'utils/cuttedTitle';
import { useMedia } from 'hooks/useMedia';

import Sprite from 'images/sprite.svg';

import {
  Container,
  Wrapper,
  TextWrapper,
  ProductText,
  InfoProductWrapper,
  ItemWrapper,
  LinkWrapper,
  ProductImage,
  ProductDescriptionWrapper,
  ProductTitle,
  ItemCharacteristicWrapper,
  PriceQuantityWrapper,
  QuantityWrapper,
  DecreaseBtn,
  IncreaseBtn,
  Icon,
  PriceWrapper,
  Price,
  ProductDeleteBtn,
  DeleteIcon,
  NotificationWrapp,
  Notification,
  AvailableQuantityWrapper,
} from './CartProductItem.styled';

export const CartProductItem = ({
  item,
  decreaseProductQuantity,
  increaseProductQuantity,
  isLoading,
}) => {
  const { isMobileScreen, isDesktopScreen } = useMedia();
  const dispatch = useDispatch();
  const location = useLocation();

  const deleteProduct = async skuId => {
    await dispatch(deleteProductFromCart(skuId));
    await dispatch(getCart());
  };

  const {
    productId,
    photoUrl,
    productTitle,
    quantity,
    amount,
    currencyCode,
    sku: { availableQuantity, characteristics, id },
  } = item;

  const isProductQuantityAvailable = availableQuantity > 0;
  const isOneProductAvalable = availableQuantity === 1;
  const isMaxAvailableQunatity = availableQuantity === quantity;
  const exceededQuantity = quantity > availableQuantity;

  return (
    <Container>
      <Wrapper>
        {isMobileScreen && <ProductText $text>Товар</ProductText>}
        <InfoProductWrapper>
          <ItemWrapper>
            <LinkWrapper>
              <Link to={`/catalog/${productId}`} state={{ from: location }}>
                <ProductImage
                  src={photoUrl}
                  alt={cuttedTitle(productTitle)}
                  loading="lazy"
                />
              </Link>
              <ProductDescriptionWrapper>
                <Link to={`/catalog/${productId}`} state={{ from: location }}>
                  {!isDesktopScreen ? (
                    <ProductTitle>{cuttedTitle(productTitle, 8)}</ProductTitle>
                  ) : (
                    <ProductTitle>{cuttedTitle(productTitle, 20)}</ProductTitle>
                  )}
                </Link>
                {characteristics && (
                  <ItemCharacteristicWrapper>
                    <p>{characteristics[1].name}</p>
                    <p>{characteristics[0].name}</p>
                  </ItemCharacteristicWrapper>
                )}
              </ProductDescriptionWrapper>
            </LinkWrapper>
            {isMobileScreen && (
              <ProductDeleteBtn type="button" onClick={() => deleteProduct(id)}>
                <DeleteIcon>
                  <use href={`${Sprite}#icon-cross`} />
                </DeleteIcon>
              </ProductDeleteBtn>
            )}
          </ItemWrapper>
        </InfoProductWrapper>
        {!isLoading && !availableQuantity ? (
          <NotificationWrapp>
            <Notification color="#F24040" fontSize="16px">
              Наразі товар відсутній
            </Notification>
            {!isMobileScreen && (
              <div>
                {isMaxAvailableQunatity ||
                isOneProductAvalable ||
                exceededQuantity ? (
                  <Notification
                    $paddingTop="6px"
                    color="#4C4B4B"
                    fontSize="12px"
                    $mobFont
                  >
                    Доступна кількість: {availableQuantity}
                  </Notification>
                ) : null}
              </div>
            )}
          </NotificationWrapp>
        ) : null}
        {isProductQuantityAvailable && (
          <PriceQuantityWrapper>
            {isMobileScreen && (
              <TextWrapper>
                <ProductText>Кіль-ть</ProductText>
                <ProductText>Ціна</ProductText>
              </TextWrapper>
            )}
            <AvailableQuantityWrapper>
              <QuantityWrapper>
                <DecreaseBtn
                  type="button"
                  onClick={() => decreaseProductQuantity(id)}
                  // quantity={item.quantity}
                  $case={(
                    quantity === 1 && quantity <= availableQuantity
                  ).toString()}
                >
                  <Icon>
                    <use href={`${Sprite}#icon-minus`} />
                  </Icon>
                </DecreaseBtn>
                {quantity}
                <IncreaseBtn
                  type="button"
                  onClick={() => increaseProductQuantity(id)}
                  // quantity={item.quantity}
                  $case={(quantity >= availableQuantity).toString()}
                >
                  <Icon>
                    <use href={`${Sprite}#icon-plus`} />
                  </Icon>
                </IncreaseBtn>
              </QuantityWrapper>
              {isMobileScreen && (
                <Price>
                  {formatPrice(amount)} {currencyCode}
                </Price>
              )}
            </AvailableQuantityWrapper>
            {!isMobileScreen && (
              <div>
                {isMaxAvailableQunatity ||
                isOneProductAvalable ||
                exceededQuantity ? (
                  <Notification
                    $paddingTop="6px"
                    color="#4C4B4B"
                    fontSize="12px"
                  >
                    Доступна кількість: {availableQuantity}
                  </Notification>
                ) : null}
              </div>
            )}
          </PriceQuantityWrapper>
        )}
        {!isMobileScreen && (
          <PriceWrapper>
            <Price>
              {formatPrice(amount)} {currencyCode}
            </Price>
          </PriceWrapper>
        )}
        {isMobileScreen && (
          <div>
            {isMaxAvailableQunatity ||
            isOneProductAvalable ||
            exceededQuantity ? (
              <Notification
                $paddingTop="6px"
                color="#4C4B4B"
                fontSize="12px"
                $mobFont
              >
                Доступна кількість: {availableQuantity}
              </Notification>
            ) : null}
          </div>
        )}
        {!isMobileScreen && (
          <div>
            <ProductDeleteBtn type="button" onClick={() => deleteProduct(id)}>
              <DeleteIcon>
                <use href={`${Sprite}#icon-cross`} />
              </DeleteIcon>
            </ProductDeleteBtn>
          </div>
        )}
      </Wrapper>
    </Container>
  );
};

CartProductItem.propTypes = {
  item: PropTypes.object.isRequired,
  decreaseProductQuantity: PropTypes.func.isRequired,
  increaseProductQuantity: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
