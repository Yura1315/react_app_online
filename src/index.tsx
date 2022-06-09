/* eslint-disable camelcase */
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import rootReducer, { persistor } from './store/rootReducer';

const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
