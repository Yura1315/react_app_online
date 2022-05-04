/* eslint-disable no-extra-semi */
/* eslint-disable no-shadow */

import makeRequest from '../../network';

export enum ProductsActionType {
    getProducts='GET_PRODUCTS'
}

export const GetProductsAction = () => async (dispatch:any) => {
  const data = await makeRequest({ url: '/products' });
  dispatch({
    type: ProductsActionType.getProducts,
    payload: data
  });
};
