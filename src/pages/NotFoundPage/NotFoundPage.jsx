import { InfoBlock } from 'components/InfoBlock/InfoBlock';
import { SubscriptionForm } from 'components/SubscriptionForm/SubscriptionForm';
// import { NewProductsSlider } from 'components/NewProductsSlider/NewProductsSlider';

import { PageWrapper, ContentWrrapper, ErrorCode, ErrorText  } from './NotFoundPage.styled';

export const NotFoundPage = () => {
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
      <SubscriptionForm />
    </PageWrapper>
  );
};
