import { NewProductsSlider } from 'components/NewProductsSlider/NewProductsSlider';
import { SubscriptionForm } from 'components/SubscriptionForm/SubscriptionForm';

export const MainPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: 100,
      }}
    >
      <p>Online store under development ...</p>
      <NewProductsSlider />
      <SubscriptionForm />
    </div>
  );
};
