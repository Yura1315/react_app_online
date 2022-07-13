import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import AuthContainer from './containers/AuthContainer';
import PageWrapper from './components/common/PageWrapper';
import CatalogContainer from './containers/CatalogContainer';
import OneProductContainer from './containers/OneProductContainer';
import AuthWrapper from './components/common/AuthWrapper';
import NotFaundContainer from './containers/NotFoundContainer';
import CatalogWrapper from './components/common/CatalogWrapper';
import AuthHoc from './components/HOC/AuthHoc';
import ProfileWrapper from './components/common/ProfileWrapper';
import ProfileInfoContainer from './containers/ProfileInfoContainer';
import ProfileEditContainer from './containers/ProfileEditContainer';
import FavoriteContainer from './containers/FavoriteContainer';
import CartContainer from './containers/CartContainer';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route index element={<MainContainer />} />
      <Route path="catalog" element={<CatalogWrapper />}>
        <Route path=":category" element={<CatalogContainer />} />
      </Route>
      <Route path="product/:id" element={<OneProductContainer />} />
      <Route path="logged/" element={<AuthWrapper />}>
        <Route path="auth" element={<AuthContainer />} />
        <Route path="reg" element={<RegistrationContainer />} />
      </Route>
      <Route
        path="profile"
        element={
          <AuthHoc>
            <ProfileWrapper />
          </AuthHoc>
        }>
        <Route path="info" element={<ProfileInfoContainer />} />
        <Route path="edit" element={<ProfileEditContainer />} />
        <Route path="whishlist" element={<FavoriteContainer />} />
      </Route>
      <Route path="cart" element={<CartContainer />} />
      <Route path="*" element={<NotFaundContainer />} />
    </Route>
  </Routes>
);

export default App;
