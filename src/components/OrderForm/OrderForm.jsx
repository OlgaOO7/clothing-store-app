import { OrderFormSection, Wrapper, OrderBtn } from './OrderForm.styled';
import { Delivery } from 'components/Delivery/Delivery';
import { OrderPaymentForm } from 'components/OrderPaymentForm/OrderPaymentForm';
import { OrderCustomerForm } from 'components/OrderCustomerForm/OrderCustomerForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { orderFormSchema } from 'utils/yupSchema';

export const OrderForm = () => {
  const { register, handleSubmit, watch, reset, setValue } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(orderFormSchema),
    defaultValues: {
      agreement: false,
    },
  });
  console.log(watch());
  const onSubmit = formData => {
    console.log(formData);
  };
  return (
    <OrderFormSection>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <div>
          <OrderCustomerForm register={register} />
        </div>
        <div>
          <Delivery register={register} watch={watch} setValue={setValue} />
        </div>
        <div>
          <OrderPaymentForm register={register} />
        </div>
        <OrderBtn type="submit">Оформити замовлення</OrderBtn>
      </Wrapper>
    </OrderFormSection>
  );
};
