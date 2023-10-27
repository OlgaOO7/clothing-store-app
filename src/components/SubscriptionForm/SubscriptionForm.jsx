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
import { emailSchema } from './yupSchema';
import { useDispatch, useSelector } from 'react-redux';
import { subscription } from '../../redux/subscription/operations';
import {
  selectIsSubscribed,
  selectIsValid,
} from 'redux/subscription/selectors';

export const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const dispatch = useDispatch();
  const isSubscribed = useSelector(selectIsSubscribed);
  // const isValid = useSelector(selectIsValid);

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    try {
      await emailSchema.validate({ email });
      dispatch(subscription({ subscriptionId: 1, email: email }));
      setEmail('');
      setIsValid(true);
    } catch (error) {
      console.log('Please enter a valid email address');
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
          <Form onSubmit={handleFormSubmit}>
            <SubscriptionFormContainer>
              <SubscriptionFormInput
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className={!isValid ? 'error' : ''}
                autoComplete="true"
              ></SubscriptionFormInput>
              <SubscriptionFormButton type="submit">
                Надіслати
              </SubscriptionFormButton>
            </SubscriptionFormContainer>
            {!isValid && (
              <ErrorMessage>
                Будь ласка, введіть дійсну адресу електронної пошти.
              </ErrorMessage>
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
