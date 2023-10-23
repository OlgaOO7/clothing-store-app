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

export const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (
      email === '' ||
      !/^[a-zA-Z0-9_][a-zA-Z0-9_.-]*@[a-zA-Z0-9.-]+[a-zA-Z0-9-]*\.[a-zA-Z]{2,4}$/.test(
        email
      )
    ) {
      setIsValid(false);
      setIsSubscribed(false);
    } else {
      setIsSubscribed(true);
      setEmail('');
      setIsValid(true);
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
