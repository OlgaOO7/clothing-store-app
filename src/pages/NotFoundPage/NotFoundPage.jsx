import { InfoBlock } from 'components/InfoBlock/InfoBlock';
// import { NewProductsSlider } from 'components/NewProductsSlider/NewProductsSlider';

import {
  PageWrapper,
  ContentWrrapper,
  ErrorCode,
  ErrorText,
} from './NotFoundPage.styled';
import { Form } from 'components/Form/Form';

const NotFoundPage = () => {
  return (
    <PageWrapper>
      <ContentWrrapper>
        <ErrorCode>404</ErrorCode>
        <ErrorText>
          The page you are looking for doesn't exist or some other error occured{' '}
        </ErrorText>
      </ContentWrrapper>
      {/* <NewProductsSlider /> */}
      <InfoBlock />
      <Form formType="subscription" />
    </PageWrapper>
  );
};

export default NotFoundPage;
