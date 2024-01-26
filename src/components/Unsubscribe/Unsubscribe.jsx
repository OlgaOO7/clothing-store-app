import { useDispatch } from 'react-redux';
import { Title, Text, Button, Section, Wrapper } from './Unsubscribe.styled';
import { unsubscribe } from 'redux/subscription/operations';
import { useState } from 'react';
export const Unsubscribe = () => {
  const dispatch = useDispatch();
  const [unsubscription, setUnsubscription] = useState(null);
  const handleUnsubscribe = () => {
    try {
      const currentUrl = window.location.search;
      const urlParams = new URLSearchParams(currentUrl);
      const email = urlParams.get('email');

      dispatch(unsubscribe({ subscriptionId: 1, email: email }));
      setUnsubscription('success');
    } catch (error) {
      console.error(error);
      setUnsubscription('error');
    }
  };
  return (
    <Section>
      <Wrapper>
        {unsubscription === 'success' ? (
          <Title>Вітаємо! Ви успішно відписались!</Title>
        ) : unsubscription === 'error' ? (
          <Title>Упс, сталась якась помилка :(</Title>
        ) : (
          <>
            <Title>Відписка від розсилки</Title>
            <Text>Ви впевнені, що хочете відписатись?</Text>
            <Button onClick={handleUnsubscribe}>Відписатися</Button>
          </>
        )}
      </Wrapper>
    </Section>
  );
};
