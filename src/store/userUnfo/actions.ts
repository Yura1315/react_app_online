/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-shadow */
import { ShowLoaderAction, HideLoaderAction } from './../loader/actions';
import makeRequest from '../../network';

export enum UserInfoActionType {
  setUserName = 'SET_USER_NAME',
  clearUserName = 'CLEAR_USER_NAME',
  regError = 'REG_ERROR',
  removeAuthErr = 'REMOVE_AUTH_ERR',
  addWhish = 'ADD_WHISH',
  removeWhish = 'REMOVE_WHISH',
  addCart = 'ADD_CART',
  delCart = 'DEL_CART'
}

export const RegisrationUserAction = (userInfo: {
  name: string;
  email: string;
  phone: string;
  lastName: string;
  birthDate: string;
  middleName: string;
  cart: any[]
}) => ({
  type: UserInfoActionType.setUserName,
  payload: userInfo,
});

export const RemoveAuthErrAction = () => ({
  type: UserInfoActionType.removeAuthErr,
});

export const AuthUserAction = (userInfo: {
  name: string;
  email: string;
  token: string;
  phone: string;
  lastName: string;
  whishlist: any[];
  cart: any[];
  birthDate: string;
  middleName: string;
}) => ({
  type: UserInfoActionType.setUserName,
  payload: userInfo,
});

export const ClearUserNameAction = () => ({
  type: UserInfoActionType.clearUserName,
});

export const AddWhishListAction = (productInfo: any) => async (dispatch: any) => {
  try {
    const data = { productId: productInfo.productId, email: productInfo.email };
    dispatch(ShowLoaderAction());
    const whish = await makeRequest({
      url: `/product/${productInfo.id}`,
      method: 'PUT',
      data,
    });
    dispatch(HideLoaderAction());
    dispatch({
      type: UserInfoActionType.addWhish,
      payload: whish,
    });
  } catch (err) {
    console.log(err);
  }
};

export const AddCardAction = (cartItem: any) => async (dispatch: any) => {
  try {
    dispatch(ShowLoaderAction());
    const cartItems = await makeRequest({ url: '/addCart', method: 'PUT', data: cartItem });
    dispatch({
      type: UserInfoActionType.addCart,
      payload: cartItems
    });
    dispatch(HideLoaderAction());
  } catch (err) {
    console.log(err);
  }
};

export const DelCardAction = (cartItem: any) => async (dispatch: any) => {
  try {
    dispatch(ShowLoaderAction());
    const cartItems = await makeRequest({ url: '/delCart', method: 'PUT', data: cartItem });
    dispatch({
      type: UserInfoActionType.delCart,
      payload: cartItems
    });
    dispatch(HideLoaderAction());
  } catch (err) {
    console.log(err);
  }
};

export const AuthorizationErrorStatus = (err: any) => ({
  type: UserInfoActionType.regError,
  payload: err,
});
