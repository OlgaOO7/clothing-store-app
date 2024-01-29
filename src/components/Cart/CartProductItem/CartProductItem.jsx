import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteProductFromCart, getCart } from 'redux/cart/operations';
import { formatPrice } from 'utils/formatPrice';
import { cuttedTitle } from 'utils/cuttedTitle';
import { useMedia } from 'hooks/useMedia';

import Sprite from 'images/sprite.svg';

import {
  Wrapper,
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
  Price,
  ProductDeleteBtn,
  DeleteIcon,
  Notification,
  AvailableQuantityWrapper,
} from './CartProductItem.styled';

export const CartProductItem = ({
  item,
  decreaseProductQuantity,
  increaseProductQuantity,
  availableQuantity,
  isLoading,
  initialLoad,
}) => {
  const { isMobileScreen } = useMedia();
  const dispatch = useDispatch();
  const location = useLocation();

  const deleteProduct = async skuId => {
    await dispatch(deleteProductFromCart(skuId));
    await dispatch(getCart());
  };

  const isProductQuantityAvailable = availableQuantity > 0;
  const isOneProductAvalable = availableQuantity === 1;
  const isMaxAvailableQunatity = availableQuantity === item.quantity;
  const exceededQuantity = item.quantity > availableQuantity;
  // console.log('isMaxAvailableQunatity:', isMaxAvailableQunatity);
  // console.log('isOneProductAvalable:', isOneProductAvalable);

  return (
    <Wrapper>
      {isMobileScreen && <ProductText $text="text">Товар</ProductText>}
      <InfoProductWrapper>
        <ItemWrapper>
          <LinkWrapper>
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
              >
                {isMobileScreen ? (
                  <ProductTitle>
                    {cuttedTitle(item.productTitle, 8)}
                  </ProductTitle>
                ) : (
                  <ProductTitle>
                    {cuttedTitle(item.productTitle, 15)}
                  </ProductTitle>
                )}
              </Link>
              {item.sku.characteristics && (
                <ItemCharacteristicWrapper>
                  <p>{item.sku.characteristics[1].name}</p>
                  <p>{item.sku.characteristics[0].name}</p>
                </ItemCharacteristicWrapper>
              )}
            </ProductDescriptionWrapper>
          </LinkWrapper>

          {isMobileScreen && (
            <div style={{ display: 'flex' }}>
              <ProductDeleteBtn
                type="button"
                onClick={() => deleteProduct(item.sku.id)}
              >
                <DeleteIcon>
                  <use href={`${Sprite}#icon-cross`} />
                </DeleteIcon>
              </ProductDeleteBtn>
            </div>
          )}
        </ItemWrapper>
      </InfoProductWrapper>
      {!isLoading && !initialLoad && !availableQuantity ? (
        <Notification color="red" fontSize="24px">
          Наразі товар відсутній
        </Notification>
      ) : null}
      {isProductQuantityAvailable && (
        <PriceQuantityWrapper>
          {isMobileScreen && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '12px',
              }}
            >
              <ProductText>Кіль-ть</ProductText>
              <ProductText>Ціна</ProductText>
            </div>
          )}
          <AvailableQuantityWrapper>
            <QuantityWrapper>
              <DecreaseBtn
                type="button"
                onClick={() => decreaseProductQuantity(item.sku.id)}
                // quantity={item.quantity}
                $case={(
                  item.quantity === 1 && item.quantity <= availableQuantity
                ).toString()}
              >
                <Icon>
                  <use href={`${Sprite}#icon-minus`} />
                </Icon>
              </DecreaseBtn>
              {item.quantity}
              <IncreaseBtn
                type="button"
                onClick={() => increaseProductQuantity(item.sku.id)}
                // quantity={item.quantity}
                $case={(item.quantity >= availableQuantity).toString()}
              >
                <Icon>
                  <use href={`${Sprite}#icon-plus`} />
                </Icon>
              </IncreaseBtn>
            </QuantityWrapper>
            {isMobileScreen && (
              <Price>
                {formatPrice(item.amount)} {item.currencyCode}
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
                  $mobFont
                >
                  Доступна кількість: {availableQuantity}
                </Notification>
              ) : null}
            </div>
          )}
        </PriceQuantityWrapper>
      )}
      {!isMobileScreen && (
        <Price>
          {formatPrice(item.amount)} {item.currencyCode}
        </Price>
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
        <ProductDeleteBtn
          type="button"
          onClick={() => deleteProduct(item.sku.id)}
        >
          <DeleteIcon>
            <use href={`${Sprite}#icon-cross`} />
          </DeleteIcon>
        </ProductDeleteBtn>
      )}
    </Wrapper>
  );
};
