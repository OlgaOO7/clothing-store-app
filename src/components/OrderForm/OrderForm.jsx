import { OrderFormSection, Wrapper, OrderBtn } from './OrderForm.styled';
import { Delivery } from 'components/Delivery/Delivery';
import { OrderPaymentForm } from 'components/OrderPaymentForm/OrderPaymentForm';
import { OrderCustomerForm } from 'components/OrderCustomerForm/OrderCustomerForm';

export const OrderForm = () => {
  return (
    <OrderFormSection>
      <Wrapper>
        <div>
          <OrderCustomerForm />
        </div>
        <div>
          <Delivery />
        </div>
        <div>
          <OrderPaymentForm />
        </div>
        <OrderBtn type="submit">Оформити замовлення</OrderBtn>
      </Wrapper>
    </OrderFormSection>
  );
};
