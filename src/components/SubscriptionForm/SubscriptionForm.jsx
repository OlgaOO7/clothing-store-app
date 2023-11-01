import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import useFormPersist from 'react-hook-form-persist';
import { useForm } from 'react-hook-form';

import { emailSchema } from './yupSchema';
import getButtonContent from 'utils/getMessageContent';
import { subscription } from '../../redux/subscription/operations';
import { selectIsSubscribed } from 'redux/subscription/selectors';

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
  Form,
} from './SubscriptionForm.styled';

export const SubscriptionForm = () => {
  const isSubscribed = useSelector(selectIsSubscribed);
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(emailSchema),
  });

  const messageContent = getButtonContent(
    isValid,
    errors,
    isSubscribed,
    ErrorMessage,
    SuccessMessage
  );

  const STORAGE_KEY = 'contact_us_form';

  useFormPersist(STORAGE_KEY, {
    watch,
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    setValue,
  });

  const handleFormSubmit = async email => {
    try {
      await emailSchema.validate({ email: email.email });
      dispatch(subscription({ subscriptionId: 1, email: email.email }));
      reset();
      setIsValid(true);
    } catch (error) {
      console.error(error);
      setIsValid(false);
    }
  };

  return (
    <SubscriptionFormSection>
      <SubscriptionFormWrapper>
        <SubscriptionFormImage />
        <SubscriptionFormContent>
          <SubscriptionFormTitle>
            Підписуйся та будь в курсі усіх новинок та знижок!
          </SubscriptionFormTitle>
          <Form onSubmit={handleSubmit(handleFormSubmit)}>
            <SubscriptionFormContainer>
              <SubscriptionFormInput
                type="email"
                name="email"
                placeholder="Email"
                {...register('email')}
                autoComplete="true"
              ></SubscriptionFormInput>
              <SubscriptionFormButton type="submit">
                Надіслати
              </SubscriptionFormButton>
            </SubscriptionFormContainer>
            {messageContent}
          </Form>
        </SubscriptionFormContent>
      </SubscriptionFormWrapper>
    </SubscriptionFormSection>
  );
};
