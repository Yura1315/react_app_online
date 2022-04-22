import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import AuthContainer from './containers/AuthContainer';
import PageWrapper from './components/common/PageWrapper';
import OneUserContainer from './containers/OneUserContainer';
import CatalogContainer from './containers/CatalogContainer';
import OneProductContainer from './containers/OneProductContainer';
import AuthWrapper from './components/common/AuthWrapper';

const App = () => {
  console.log('APP => start');

  useEffect(() => console.log('APP - MOUNT'), []);
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<MainContainer />} />
        <Route path="catalog" element={<CatalogContainer />} />
        <Route path="catalog/:id" element={<OneProductContainer />} />
        <Route path="users/:name" element={<OneUserContainer />} />
        <Route path="/" element={<AuthWrapper />}>
          <Route path="auth" element={<AuthContainer />} />
          <Route path="reg" element={<RegistrationContainer />} />
        </Route>
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
