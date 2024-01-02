import { ProductCategory } from 'components/ProductCategory/ProductCategory';
import { NewProductsSlider } from 'components/NewProductsSlider/NewProductsSlider';
import { MainSection } from 'components/MainSection/MainSection';
import { InfoBlock } from 'components/InfoBlock/InfoBlock';
import { Form } from 'components/Form/Form';

const MainPage = () => {
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
      <Form formType="subscription" />
    </div>
  );
};

export default MainPage;
