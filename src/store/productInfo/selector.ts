/* eslint-disable import/prefer-default-export */
import { RootReducerType } from '../rootType';

export const getPopularProducts = (state: RootReducerType) => state.products.popularProducts;

export const getProducts = (state: RootReducerType) => state.products.data;

export const getProductOne = (state: RootReducerType) => state.products.oneProduct;

export const getCurrentPage = (state: RootReducerType) => state.products.currentPage;

export const getTotalCountPage = (state: RootReducerType) => state.products.totalCount;

// export default getProducts;
