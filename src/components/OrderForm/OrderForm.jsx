import {
  OrderFormSection,
  Wrapper,
  OrderBtn,
  Form,
  SuccessMessage,
  SuccessIcon,
  SuccessText,
} from './OrderForm.styled';
import { Delivery } from 'components/Delivery/Delivery';
import { OrderPaymentForm } from 'components/OrderPaymentForm/OrderPaymentForm';
import { OrderCustomerForm } from 'components/OrderCustomerForm/OrderCustomerForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { orderFormSchema } from 'utils/yupSchema';
import { useState } from 'react';
import Sprite from '../../images/sprite.svg';

export const OrderForm = () => {
  const [formStatus, setFormStatus] = useState(null);
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
    try {
      console.log(formData);
      setFormStatus('success');
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
      reset();
    } catch (error) {
      console.error(error);
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    } finally {
    }
  };

  return (
    <OrderFormSection>
      <Wrapper>
        {formStatus === 'success' ? (
          <>
            <SuccessIcon>
              <use href={`${Sprite}#icon-success-order`}></use>
            </SuccessIcon>
            <SuccessMessage>Ваше замовлення №12856384 оформлено</SuccessMessage>
            <SuccessText>
              Очікуйте лист з деталями замовлення на вашу електронну адресу.
            </SuccessText>
            <SuccessText>Дякуємо, що обраєте Zatyshna.</SuccessText>
          </>
        ) : (
          <Form onSubmit={handleSubmit(onSubmitSubscription)}>
            <div>
              <OrderCustomerForm register={register} errors={errors} />
            </div>
            <div>
              <Delivery
                register={register}
                setValue={setValue}
                errors={errors}
                formStatus={formStatus}
              />
            </div>
            <div>
              <OrderPaymentForm register={register} errors={errors} />
            </div>
            <OrderBtn type="submit">Оформити замовлення</OrderBtn>
          </Form>
        )}
      </Wrapper>
    </OrderFormSection>
  );
};
