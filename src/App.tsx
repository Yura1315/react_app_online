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

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route index element={<MainContainer />} />
      <Route path="catalog" element={<CatalogWrapper />}>
        <Route path=":category" element={<CatalogContainer />} />
      </Route>
      <Route path="product/:id" element={<OneProductContainer />} />
      <Route path="logged" element={<AuthWrapper />}>
        <Route path="auth" element={<AuthContainer />} />
        <Route path="reg" element={<RegistrationContainer />} />
      </Route>
      <Route path="*" element={<NotFaundContainer />} />
    </Route>
  </Routes>
);

export default App;
