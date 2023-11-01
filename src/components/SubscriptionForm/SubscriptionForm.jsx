import React, { useState } from 'react';
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

import { yupResolver } from '@hookform/resolvers/yup';
import { emailSchema } from './yupSchema';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { subscription } from '../../redux/subscription/operations';
import { selectIsSubscribed } from 'redux/subscription/selectors';

export const SubscriptionForm = () => {
  const [isValid, setIsValid] = useState(true);
  const [isSubscribed, setisSubscribed] = useState(false);
  const dispatch = useDispatch();
  // const isSubscribed = useSelector(selectIsSubscribed);
  // const isValid = useSelector(selectIsValid);
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

  const STORAGE_KEY = 'contact_us_form';

  useFormPersist(STORAGE_KEY, {
    watch,
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    setValue,
  });

  // const handleInputChange = () => {
  //   setisSubscribed(false);
  // };

  const handleFormSubmit = async email => {
    try {
      await emailSchema.validate({ email: email.email });
      console.log(errors);
      // dispatch(subscription({ subscriptionId: 1, email: email.email }));
      reset();
      setisSubscribed(true);
      setIsValid(true);
    } catch (error) {
      console.error(error);
      setIsValid(false);
      setisSubscribed(false);
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
                className={!isValid ? 'error' : ''}
                {...register('email')}
                autoComplete="true"
                // onChange={handleInputChange}
              ></SubscriptionFormInput>
              <SubscriptionFormButton type="submit">
                Надіслати
              </SubscriptionFormButton>
            </SubscriptionFormContainer>
            {!isValid && (
              <ErrorMessage>
                Будь ласка, введіть дійсну адресу електронної пошти!
              </ErrorMessage>
            )}
            {errors['email'] && (
              <ErrorMessage>{errors['email'].message}</ErrorMessage>
            )}
            {isSubscribed && (
              <SuccessMessage>
                Ви успішно підписалися на сповіщення!
              </SuccessMessage>
            )}
          </Form>
        </SubscriptionFormContent>
      </SubscriptionFormWrapper>
    </SubscriptionFormSection>
  );
};
