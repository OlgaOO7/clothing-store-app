import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from 'components/SharedLayouts/SharedLayouts';
import { MainPage } from './pages/MainPage/MainPage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { ProductDetailsPage } from 'pages/ProductDetailsPage/ProductDetailsPage';
import { CartPage } from 'pages/CartPage/CartPage';
import { OrderPage } from 'pages/OrderPage/OrderPage';
import { AboutPage } from 'pages/AboutPage/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { SearchedProductPage } from 'pages/SearchedProductPage/SearchedProductPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';

import GlobalStyle from './GlobalStyle.jsx';
import { UnsubscribePage } from 'pages/UnsubscribePage/UnsubscribePage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:productsId" element={<ProductDetailsPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="search" element={<SearchedProductPage />} />
          <Route path="unsubscribe" element={<UnsubscribePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
