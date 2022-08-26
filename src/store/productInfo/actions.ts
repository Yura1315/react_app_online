import { ShowLoaderAction, HideLoaderAction } from '../loader/actions';
/* eslint-disable no-extra-semi */
/* eslint-disable no-shadow */

import makeRequest from '../../network';

export enum ProductsActionType {
  getPopularProducts = 'GET_POPULAR_PRODUCTS',
  getOneProduct = 'GET_ONE_PRODUCT',
  getProductsRepos = 'GET_PRODUCTS_REPOS'
}

export const GetPopulatProductsAction = () => async (dispatch: any) => {
  try {
    dispatch(ShowLoaderAction());
    const data = await makeRequest({ url: '/popular' });
    dispatch({
      type: ProductsActionType.getPopularProducts,
      payload: data,
    });
    dispatch(HideLoaderAction());
  } catch (err) {
    console.log(err);
  }
};

export const GetProductsReposAction = (searchQuery: string, currentPage: number, perPage: number) => async (dispatch: any) => {
  try {
    dispatch(ShowLoaderAction());
    const data = await makeRequest({ url: `/catalog/${searchQuery}?page=${currentPage}&perPage=${perPage}` });
    dispatch({
      type: ProductsActionType.getProductsRepos,
      payload: data
    });
    dispatch(HideLoaderAction());
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
