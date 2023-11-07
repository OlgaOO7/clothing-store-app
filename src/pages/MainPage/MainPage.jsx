import { ProductCategory } from 'components/ProductCategory/ProductCategory';
import { NewProductsSlider } from 'components/NewProductsSlider/NewProductsSlider';
import { SubscriptionForm } from 'components/SubscriptionForm/SubscriptionForm';
import { MainSection } from 'components/MainSection/MainSection';
import { InfoBlock } from 'components/InfoBlock/InfoBlock';

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
      <MainSection />
      <NewProductsSlider />
      <ProductCategory />
      <InfoBlock />
      <SubscriptionForm />
    </div>
  );
};
