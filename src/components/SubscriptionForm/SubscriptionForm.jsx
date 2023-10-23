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

export const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    try {
      await emailSchema.validate({ email });
      setIsValid(true);
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      setIsValid(false);
      setIsSubscribed(false);
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
