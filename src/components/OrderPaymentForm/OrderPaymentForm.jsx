import {
  ElipsTitle,
  RadioForm,
  Title,
  WrapTitle,
} from './OrderPaymentForm.styled';
import { OrderInput } from 'components/OrderInput/OrderInput';

export const OrderPaymentForm = ({ register, errors }) => {
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
          errors={errors}
          disabled
        />
        <OrderInput
          label={'Оплата при отриманні'}
          type="radio"
          name="payment"
          register={register}
          errors={errors}
          defaultChecked
        />
      </RadioForm>
      <RadioForm>
        <OrderInput
          label={
            'Я погоджуюсь з договором оферти і політикою конфіденційності *'
          }
          type="checkbox"
          name="agreement"
          errors={errors}
          register={register}
        />
        <OrderInput
          label={'Зателефонуйте мені для уточнення деталей замовлення'}
          type="checkbox"
          name="phone call"
          errors={errors}
          register={register}
        />
      </RadioForm>
    </>
  );
};
