import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useFormPersist from 'react-hook-form-persist';
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';

import getButtonContent from 'utils/getMessageContent';
import { emailSchema, formSchema } from '../../utils/yupSchema';
import { contactUs, subscription } from '../../redux/subscription/operations';

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
  const [charCount, setCharCount] = useState(0);
  const [isApproachingMax, setIsApproachingMax] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedData = localStorage.getItem('contact_us_form');
    if (storedData) {
      const messageValue = JSON.parse(storedData).message || '';
      setCharCount(messageValue.length);
      setIsApproachingMax(messageValue.length >= 1000 - 10);
    }
  }, []);

  const handleInputChange = event => {
    const length = event.target.value.length;
    setCharCount(length);
    setIsApproachingMax(length >= 100 - 10);
  };

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
      setCharCount(0);
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
                  type="text"
                  name="name"
                  register={register}
                  errors={errors}
                  placeholder={'Імʼя'}
                />
                <InputField
                  type="email"
                  name="email"
                  register={register}
                  errors={errors}
                  placeholder={'E-mail'}
                />
                <InputField
                  type="textarea"
                  name="message"
                  register={register}
                  errors={errors}
                  placeholder={'Повідомлення'}
                  maxLength={1000}
                  handleInputChange={handleInputChange}
                  isApproachingMax={isApproachingMax}
                  charCount={charCount}
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
