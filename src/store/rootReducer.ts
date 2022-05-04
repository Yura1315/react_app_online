/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import productsReducer from './productInfo/reducer';
import userInfoReducer from './userUnfo/reducer';

const rootReducer = combineReducers({
  auth: userInfoReducer,
  products: productsReducer,
});

export default rootReducer;
