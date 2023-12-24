import { OrderFormSection, Wrapper, OrderBtn, Form } from './OrderForm.styled';
import { Delivery } from 'components/Delivery/Delivery';
import { OrderPaymentForm } from 'components/OrderPaymentForm/OrderPaymentForm';
import { OrderCustomerForm } from 'components/OrderCustomerForm/OrderCustomerForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { orderFormSchema } from 'utils/yupSchema';

export const OrderForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(orderFormSchema),
    defaultValues: {
      agreement: false,
      'payment online': false,
    },
  });
  const onSubmitSubscription = async formData => {
    console.log(formData);
    try {
      console.log(formData);
      reset();
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  return (
    <OrderFormSection>
      <Wrapper>
        <Form onSubmit={handleSubmit(onSubmitSubscription)}>
          <div>
            <OrderCustomerForm register={register} errors={errors} />
          </div>
          <div>
            <Delivery register={register} setValue={setValue} />
          </div>
          <div>
            <OrderPaymentForm register={register} errors={errors} />
          </div>
          <OrderBtn type="submit">Оформити замовлення</OrderBtn>
        </Form>
      </Wrapper>
    </OrderFormSection>
  );
};
