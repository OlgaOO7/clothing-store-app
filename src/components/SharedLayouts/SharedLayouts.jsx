import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Footer } from 'components/Footer/Footer';
import { ScrollUp } from 'components/ScrollUp/ScrollUp';

// put Loader in Suspense fallback

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <ScrollUp />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
