import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatPrice } from 'utils/formatPrice';

import {
  CartTotalWrapper,
  TextWrapper,
  TariffText,
  PriceWrapper,
  TotalText,
  Price,
  LinkBtnWrapper,
  OrderLink,
  CatalogLink,
} from './CartTotal.styled';

export const CartTotal = ({
  data,
  unavailableProductQuantity,
  invalidQuantity,
}) => {
  const location = useLocation();
  return (
    <CartTotalWrapper>
      <TextWrapper>
        <p>
          Вартість
          <br /> доставки
        </p>
        <TariffText>
          За тарифами
          <br /> перевізника
        </TariffText>
      </TextWrapper>
      <PriceWrapper>
        <TotalText>Разом </TotalText>
        <Price>
          {formatPrice(data.totalAmount)} {data.currencyCode}
        </Price>
      </PriceWrapper>
      <LinkBtnWrapper>
        {unavailableProductQuantity || invalidQuantity ? (
          <OrderLink disabled>Оформити замовлення</OrderLink>
        ) : (
          <OrderLink
            to={`/order`}
            state={{ from: location, sessionId: data?.sessionId }}
          >
            Оформити замовлення
          </OrderLink>
        )}
        <CatalogLink to={`/catalog`} state={{ from: location }}>
          Продовжити покупки
        </CatalogLink>
      </LinkBtnWrapper>
    </CartTotalWrapper>
  );
};

CartTotal.propTypes = {
  data: PropTypes.object.isRequired,
  unavailableProductQuantity: PropTypes.bool,
  invalidQuantity: PropTypes.bool,
};
