import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import useFormPersist from 'react-hook-form-persist';
import { useForm } from 'react-hook-form';
import { emailSchema } from '../../utils/yupSchema';
import { formSchema } from 'utils/yupSchema';
import { contactUs, subscription } from '../../redux/subscription/operations';
import getButtonContent from 'utils/getMessageContent';
import { InputField } from 'components/InputField/InputField';

import {
  ErrorMessage,
  SubscriptionFormButton,
  SubscriptionFormContainer,
  SubscriptionFormContent,
  SubscriptionFormImage,
  SubscriptionFormInput,
  SubscriptionFormSection,
  SubscriptionFormTitle,
  SubscriptionFormWrapper,
  SuccessMessage,
  ContactsFormWrapper,
  ContactsForm,
  FormTitle,
  FormButton,
  SuccessMessageWrapper,
  SubForm,
} from './Form.styled';

export const Form = ({ formType }) => {
  const [formStatus, setFormStatus] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    resolver:
      formType === 'subscription'
        ? yupResolver(emailSchema)
        : yupResolver(formSchema),
  });

  const messageContent = getButtonContent(
    isValid,
    errors,
    isSubscribed,
    ErrorMessage,
    SuccessMessage
  );

  const handleChange = () => {
    setIsSubscribed(false);
  };

  const onSubmitSubscription = async email => {
    try {
      await emailSchema.validate({ email: email.email });
      dispatch(subscription({ subscriptionId: 1, email: email.email }));
      reset();
      setIsSubscribed(true);
      setIsValid(true);
    } catch (error) {
      console.error(error);
      setIsValid(false);
      setIsSubscribed(false);
    }
  };

  const onSubmitContactUs = async formData => {
    try {
      setFormStatus('success');
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
      dispatch(contactUs(formData));
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

  const STORAGE_KEY = formType === 'subscription' ? null : 'contact_us_form';

  useFormPersist(STORAGE_KEY, {
    watch,
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    setValue,
  });

  return (
    <>
      {formType === 'subscription' ? (
        <SubscriptionFormSection>
          <SubscriptionFormWrapper>
            <SubscriptionFormImage />
            <SubscriptionFormContent>
              <SubscriptionFormTitle>
                Підписуйся та будь в курсі усіх новинок та знижок!
              </SubscriptionFormTitle>
              <SubForm onSubmit={handleSubmit(onSubmitSubscription)}>
                <SubscriptionFormContainer>
                  <SubscriptionFormInput
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    {...register('email')}
                    autoComplete="true"
                    onChange={handleChange}
                  ></SubscriptionFormInput>
                  <SubscriptionFormButton type="submit">
                    Надіслати
                  </SubscriptionFormButton>
                </SubscriptionFormContainer>
                {messageContent}
              </SubForm>
            </SubscriptionFormContent>
          </SubscriptionFormWrapper>
        </SubscriptionFormSection>
      ) : formType === 'contact_us' ? (
        <>
          {formStatus === 'success' ? (
            <SuccessMessageWrapper>
              <p>
                Дякуємо, ми переглянемо ваш лист і зв'яжемось з вами найближчим
                часом!
              </p>
            </SuccessMessageWrapper>
          ) : (
            <ContactsForm onSubmit={handleSubmit(onSubmitContactUs)}>
              <FormTitle>Зв’язатись з нами</FormTitle>
              <ContactsFormWrapper>
                <InputField
                  label={'Імʼя'}
                  type="text"
                  name="name"
                  register={register}
                  errors={errors}
                  placeholder={'Імʼя'}
                />
                <InputField
                  label={'E-mail'}
                  type="email"
                  name="email"
                  register={register}
                  errors={errors}
                  placeholder={'E-mail'}
                />
                <InputField
                  label={'Повідомлення'}
                  type="textarea"
                  name="message"
                  register={register}
                  errors={errors}
                  placeholder={'Повідомлення'}
                />
              </ContactsFormWrapper>
              <FormButton
                type="submit"
                disabled={formStatus === 'error' || formStatus === 'success'}
              >
                {formStatus === 'error'
                  ? 'Помилка'
                  : formStatus === 'success'
                  ? 'Відправлено'
                  : 'Відправити'}
              </FormButton>
            </ContactsForm>
          )}
        </>
      ) : null}
    </>
  );
};
