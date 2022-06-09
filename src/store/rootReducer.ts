/* eslint-disable camelcase */
import { createStore, applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import productsReducer from './productInfo/reducer';
import userInfoReducer from './userUnfo/reducer';

const rootReducer = combineReducers({
  auth: userInfoReducer,
  products: productsReducer,
});

const persistConfig = {
  key: 'main-root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = legacy_createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default rootReducer;
