import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Footer } from 'components/Footer/Footer';
import { ScrollUp } from 'components/ScrollUp/ScrollUp';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <ScrollUp />
      <Suspense
        fallback={
          <div style={{ paddingTop: '200px', paddingBottom: '200px' }}>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
