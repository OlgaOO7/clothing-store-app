import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Footer } from 'components/Footer/Footer';
import { ScrollUp } from 'components/ScrollUp/ScrollUp';

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <ScrollUp />
      <Outlet />
      <Footer />
    </div>
  );
};
