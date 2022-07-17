/* eslint-disable import/prefer-default-export */
import { RootReducerType } from '../rootType';

export const GetUserName = (state: RootReducerType) => state.auth.infoUser.name;

export const GetUserInfo = (state: RootReducerType) => state.auth.infoUser;

export const GetWhishList = (state: RootReducerType) => state.auth.whishList;

export const GetAuthError = (state: RootReducerType) => state.auth.AuthorizationErrorStatus;

export const GetCartInfo = (state: RootReducerType) => state.auth.cart;
