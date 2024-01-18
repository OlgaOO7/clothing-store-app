import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Footer } from 'components/Footer/Footer';
import { ScrollUp } from 'components/ScrollUp/ScrollUp';
import { Loader } from 'components/Loader/Loader';

// put Loader in Suspense fallback

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <ScrollUp />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
