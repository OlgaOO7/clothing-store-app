import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { orderFormSchema } from 'utils/yupSchema';
import {
  ElipsTitle,
  RadioForm,
  Title,
  WrapTitle,
} from './OrderPaymentForm.styled';
import { OrderInput } from 'components/OrderInput/OrderInput';

export const OrderPaymentForm = ({ register }) => {
  const { handleSubmit, reset } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(orderFormSchema),
  });
  return (
    <>
      <WrapTitle>
        <ElipsTitle>3</ElipsTitle>
        <Title>Оплата</Title>
      </WrapTitle>
      <RadioForm>
        <OrderInput
          label={'Оплата за реквізитами'}
          type="radio"
          name="payment online"
          register={register}
          disabled
        />
        <OrderInput
          label={'Оплата при отриманні'}
          type="radio"
          name="payment"
          register={register}
          defaultChecked
        />
      </RadioForm>
      <RadioForm>
        <OrderInput
          label={'Я погоджуюсь з договором оферти і політикою конфіденційності'}
          type="checkbox"
          name="agreement"
          register={register}
        />
        <OrderInput
          label={'Зателефонуйте мені для уточнення деталей замовлення'}
          type="checkbox"
          name="newsletter"
          register={register}
        />
      </RadioForm>
    </>
  );
};
