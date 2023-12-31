import { OrderInput } from 'components/OrderInput/OrderInput';

import { Container, WrapTitle } from './OrderCustomerForm.styled';
import { Title, ElipsTitle } from 'components/OrderForm/OrderForm.styled';

export const OrderCustomerForm = ({ register, errors }) => {
  return (
    <>
      <WrapTitle>
        <ElipsTitle>1</ElipsTitle>
        <Title>Особисті дані</Title>
      </WrapTitle>
      <Container>
        <OrderInput
          label={'Прізвище *'}
          type="text"
          name="secondName"
          register={register}
          placeholder={'Прізвище'}
          errors={errors}
        />
        <OrderInput
          label={'Ім’я *'}
          type="text"
          name="firstName"
          register={register}
          placeholder={'Ім’я'}
          errors={errors}
        />
        <OrderInput
          label={'Номер телефону *'}
          name="phoneNumber"
          type="tel"
          register={register}
          placeholder={'+38(0__)___-__-__'}
          errors={errors}
        />
        <OrderInput
          label={'E-Mail *'}
          type="email"
          name="orderEmail"
          register={register}
          placeholder={'E-mail'}
          errors={errors}
        />
      </Container>
    </>
  );
};
