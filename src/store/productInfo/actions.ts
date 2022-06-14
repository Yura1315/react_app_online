import { ShowLoaderAction, HideLoaderAction } from '../loader/actions';
/* eslint-disable no-extra-semi */
/* eslint-disable no-shadow */

import makeRequest from '../../network';

export enum ProductsActionType {
  getProducts = 'GET_PRODUCTS',
}

export const GetProductsAction = () => async (dispatch: any) => {
  dispatch(ShowLoaderAction());
  const data = await makeRequest({ url: '/products' });
  dispatch(HideLoaderAction());
  dispatch({
    type: ProductsActionType.getProducts,
    payload: data,
  });
};
