import { ProductCategory } from 'components/ProductCategory/ProductCategory';
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
      <ProductCategory />
      <SubscriptionForm />
    </div>
  );
};
