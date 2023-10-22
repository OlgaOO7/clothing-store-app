import {
  SubscriptionFormButton,
  SubscriptionFormContent,
  SubscriptionFormImage,
  SubscriptionFormInput,
  SubscriptionFormSection,
  SubscriptionFormTitle,
  SubscriptionFormWrapper,
} from './SubscriptionForm.styled';

export const SubscriptionForm = () => {
  return (
    <SubscriptionFormSection>
      <SubscriptionFormWrapper>
        <SubscriptionFormImage />
        <SubscriptionFormContent>
          <SubscriptionFormTitle>
            Підписуйся та будь в курсі усіх новинок та знижок!
          </SubscriptionFormTitle>
          <SubscriptionForm>
            <SubscriptionFormInput
              type="email"
              name="email"
              placeholder="Email"
            ></SubscriptionFormInput>
            <SubscriptionFormButton type="submit">
              Надіслати
            </SubscriptionFormButton>
          </SubscriptionForm>
        </SubscriptionFormContent>
      </SubscriptionFormWrapper>
    </SubscriptionFormSection>
  );
};
