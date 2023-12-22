import { ElipsTitle, Form, Title, WrapTitle } from './OrderCustomerForm.styled';
import { OrderInput } from 'components/OrderInput/OrderInput';

export const OrderCustomerForm = ({ register }) => {
  return (
    <>
      <WrapTitle>
        <ElipsTitle>1</ElipsTitle>
        <Title>Особисті дані</Title>
      </WrapTitle>
      <Form>
        <OrderInput
          label={'Прізвище *'}
          type="text"
          name="secondName"
          register={register}
          placeholder={'Прізвище'}
        />
        <OrderInput
          label={'Ім’я *'}
          type="text"
          name="firstName"
          register={register}
          placeholder={'Ім’я'}
        />
        <OrderInput
          label={'Номер телефону *'}
          name="phoneNumber"
          type="text"
          register={register}
          placeholder={'+38(0__)___-__-__'}
        />
        <OrderInput
          label={'E-Mail*'}
          type="email"
          name="email"
          register={register}
          placeholder={'E-mail'}
        />
      </Form>
    </>
  );
};
