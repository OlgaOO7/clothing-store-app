import { useForm } from 'react-hook-form';
import {
  ElipsTitle,
  OrderFormSection,
  Title,
  WrapTitle,
  Wrapper,
  Form,
} from './OrderForm.styled';
import { OrderInput } from './OrderInput/OrderInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { orderFormSchema } from 'utils/yupSchema';

export const OrderForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(orderFormSchema),
  });
  return (
    <OrderFormSection>
      <Wrapper>
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
      </Wrapper>
    </OrderFormSection>
  );
};
