/* eslint-disable camelcase */
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { loaderReducer } from './loader/reducer';
import productsReducer from './productInfo/reducer';
import userInfoReducer from './userUnfo/reducer';

const rootReducer = combineReducers({
  auth: userInfoReducer,
  products: productsReducer,
  loader: loaderReducer,
});

const persistConfig = {
  key: 'auth',
  storage,
  blacklist: ['products', 'loader'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = legacy_createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default rootReducer;
