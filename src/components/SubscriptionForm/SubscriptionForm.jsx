import React, { useState } from 'react';
import {
  SubscriptionFormButton,
  SubscriptionFormContainer,
  SubscriptionFormContent,
  SubscriptionFormImage,
  SubscriptionFormInput,
  SubscriptionFormSection,
  SubscriptionFormTitle,
  SubscriptionFormWrapper,
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
          <SubscriptionForm onSubmit={handleFormSubmit}>
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
              <p style={{ color: 'red' }}>
                Будь ласка, введіть дійсну адресу електронної пошти.
              </p>
            )}
            {isSubscribed && (
              <p style={{ color: 'green' }}>
                Ви успішно підписалися на сповіщення!
              </p>
            )}
          </SubscriptionForm>
        </SubscriptionFormContent>
      </SubscriptionFormWrapper>
    </SubscriptionFormSection>
  );
};
