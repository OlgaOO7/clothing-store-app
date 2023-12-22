import { useForm } from 'react-hook-form';
import {
  ElipsTitle,
  OrderFormSection,
  Title,
  WrapTitle,
  Wrapper,
  Form,
  RadioForm,
  OrderBtn,
} from './OrderForm.styled';
import { OrderInput } from './OrderInput/OrderInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { orderFormSchema } from 'utils/yupSchema';
import { useDispatch, useSelector } from 'react-redux';
import { selectNewProducts } from 'redux/products/selectors';

export const OrderForm = () => {
  const { register, handleSubmit, reset } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(orderFormSchema),
  });
  const dispatch = useDispatch();

  const onSubmit = (formData, e) => {
    console.log(e);
    e.preventDefault();
    console.log(formData);
    try {
      console.log(formData);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <OrderFormSection>
      <Wrapper>
        <div>
          <WrapTitle>
            <ElipsTitle>1</ElipsTitle>
            <Title>Особисті дані</Title>
          </WrapTitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
        </div>
        <div>
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
              label={
                'Я погоджуюсь з договором оферти і політикою конфіденційності'
              }
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
        </div>
        <OrderBtn type="submit">Оформити замовлення</OrderBtn>
      </Wrapper>
    </OrderFormSection>
  );
};
