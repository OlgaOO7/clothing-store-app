import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { orderFormSchema } from 'utils/yupSchema';
import { placeAnOrder } from 'redux/order/operations';
import { selectOrderSuccess } from 'redux/order/selectors';

import { Delivery } from 'components/Delivery/Delivery';
import { OrderPaymentForm } from 'components/OrderPaymentForm/OrderPaymentForm';
import { OrderCustomerForm } from 'components/OrderCustomerForm/OrderCustomerForm';

import Sprite from '../../images/sprite.svg';
import {
  OrderFormSection,
  Wrapper,
  OrderBtn,
  Form,
  SuccessMessage,
  SuccessIcon,
  SuccessText,
} from './OrderForm.styled';

export const OrderForm = ({ sessionId, setFormStatus, formStatus }) => {
  const dispatch = useDispatch();
  const orderSuccessful = useSelector(selectOrderSuccess);
  console.log(formStatus);
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
      dispatch(
        placeAnOrder({
          sessionId: sessionId,
          id: parseInt(uuidv4(), 16),
          email: formData.orderEmail,
          firstName: formData.firstName,
          lastName: formData.secondName,
          customerPhoneNumber: formData.phoneNumber,
          address: formData.city + '' + formData.warehouse,
        })
      );
      setFormStatus('success');
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
            <SuccessMessage>
              Ваше замовлення №{orderSuccessful?.id} оформлено
            </SuccessMessage>
            <SuccessText>
              Очікуйте лист з деталями замовлення на вашу електронну адресу.
            </SuccessText>
            <SuccessText>Дякуємо, що обраєте Zatyshna.</SuccessText>
          </>
        ) : formStatus === 'error' ? (
          <SuccessMessage>
            Вибачте, наразі неможливо оформити замовлення.
          </SuccessMessage>
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
            <OrderBtn
              type="submit"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Оформити замовлення
            </OrderBtn>
          </Form>
        )}
      </Wrapper>
    </OrderFormSection>
  );
};
