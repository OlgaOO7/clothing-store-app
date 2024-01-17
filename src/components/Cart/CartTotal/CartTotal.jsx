import { useLocation } from 'react-router-dom';
import { formatPrice } from 'utils/formatPrice';

import {
  CartTotalWrapper,
  TextWrapper,
  TariffText,
  PriceWrapper,
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
        <p>Сума </p>
        <p>
          {formatPrice(data.totalAmount)} {data.currencyCode}
        </p>
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
          Продовжити покупку
        </CatalogLink>
      </LinkBtnWrapper>
    </CartTotalWrapper>
  );
};
