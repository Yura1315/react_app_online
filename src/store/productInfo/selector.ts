/* eslint-disable import/prefer-default-export */
import { RootReducerType } from '../rootType';

export const GetPopularProducts = (state: RootReducerType) => state.products.popularProducts;

export const GetProducts = (state: RootReducerType) => state.products.products;

export const GetProductOne = (state: RootReducerType) => state.products.oneProduct;

export const GetCurrentPage = (state: RootReducerType) => state.products.currentPage;

export const GetTotalCountPage = (state: RootReducerType) => state.products.totalCount;

// export default getProducts;
