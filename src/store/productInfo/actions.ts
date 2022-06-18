import { ShowLoaderAction, HideLoaderAction } from '../loader/actions';
/* eslint-disable no-extra-semi */
/* eslint-disable no-shadow */

import makeRequest from '../../network';

export enum ProductsActionType {
  getProducts = 'GET_PRODUCTS',
  getOneProduct = 'GET_ONE_PRODUCT',
}

export const GetProductsAction = () => async (dispatch: any) => {
  try {
    dispatch(ShowLoaderAction());
    const data = await makeRequest({ url: '/products' });
    dispatch(HideLoaderAction());
    dispatch({
      type: ProductsActionType.getProducts,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const GetOneProductAction = (id: any) => async (dispatch: any) => {
  try {
    dispatch(ShowLoaderAction());
    const oneProduct = await makeRequest({ url: `/product/${id}`, method: 'GET' });
    console.log(oneProduct);
    dispatch(HideLoaderAction());
    dispatch({
      type: ProductsActionType.getOneProduct,
      payload: oneProduct.product,
    });
  } catch (err) {
    console.log(err);
  }
};
