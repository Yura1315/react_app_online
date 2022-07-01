import { ShowLoaderAction, HideLoaderAction } from '../loader/actions';
/* eslint-disable no-extra-semi */
/* eslint-disable no-shadow */

import makeRequest from '../../network';

export enum ProductsActionType {
  getProducts = 'GET_PRODUCTS',
  getOneProduct = 'GET_ONE_PRODUCT',
  getProductsRepos = 'GET_PRODUCTS_REPOS'
}

export const GetProductsAction = () => async (dispatch: any) => {
  try {
    dispatch(ShowLoaderAction());
    const data = await makeRequest({ url: '/catalog' });
    dispatch(HideLoaderAction());
    dispatch({
      type: ProductsActionType.getProducts,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const GetProductsReposAction = (searchQuery: string, currentPage: number, perPage: number) => async (dispatch: any) => {
  try {
    dispatch(ShowLoaderAction());
    const data = await makeRequest({ url: `/catalogs/${searchQuery}?page=${currentPage}&perPage=${perPage}` });
    dispatch(HideLoaderAction());
    dispatch({
      type: ProductsActionType.getProductsRepos,
      payload: data
    });
  } catch (err) {
    console.log(err);
  }
};

export const GetOneProductAction = (id: any) => async (dispatch: any) => {
  try {
    dispatch(ShowLoaderAction());
    const oneProduct = await makeRequest({ url: `/product/${id}`, method: 'GET' });
    dispatch(HideLoaderAction());
    dispatch({
      type: ProductsActionType.getOneProduct,
      payload: oneProduct.product,
    });
  } catch (err) {
    console.log(err);
  }
};
