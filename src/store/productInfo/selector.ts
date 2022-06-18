/* eslint-disable import/prefer-default-export */
import { RootReducerType } from '../rootType';

export const getProducts = (state: RootReducerType) => state.products.data;

export const getProductOne = (state: RootReducerType) => state.products.oneProduct;

// export default getProducts;
