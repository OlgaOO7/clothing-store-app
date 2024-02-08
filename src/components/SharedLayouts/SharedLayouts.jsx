import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Footer } from 'components/Footer/Footer';
import { ScrollUp } from 'components/ScrollUp/ScrollUp';
import { Loader } from 'components/Loader/Loader';

import { Container, Main } from './SharedLayouts.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <ScrollUp />
      <Main>
        <Suspense
          fallback={
            <div style={{ paddingTop: '200px', paddingBottom: '200px' }}>
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </Main>

      <Footer />
    </Container>
  );
};
