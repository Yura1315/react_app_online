/* eslint-disable object-curly-spacing */
import {UserInfoActionType} from './actions';

export type UserInfoReducerType = {
  infoUser: {
    name: string;
    email: string;
    phone: string;
    lastName: string;
    middleName: string;
    birthDay: string;
    gender: string;
    token: string;
  };
  whishList: string[];
  cart: any[];
  AuthorizationErrorStatus: any;
};

export type RegisrationUserActionType = {
  type: UserInfoActionType.setUserName;
  payload: any;
};

export type ClearUserNameActionType = {
  type: UserInfoActionType.clearUserName;
};

export type AddWhishListActionType = {
  type: UserInfoActionType.addWhish;
  payload: string[];
};

export type AuthorizationErrorStatusType = {
  type: UserInfoActionType.regError;
  payload: string;
};

export type RemoveAuthErrActionType = {
  type: UserInfoActionType.removeAuthErr;
};

export type AddCartActionType = {
  type: UserInfoActionType.addCart,
  payload: any;
};

export type DelCardActionType = {
  type: UserInfoActionType.delCart,
  payload: any;
};

export type GetUserCartActionType = {
  type: UserInfoActionType.getCart,
  payload: any;
};

export type ActionType =
  | RegisrationUserActionType
  | ClearUserNameActionType
  | AddWhishListActionType
  | AuthorizationErrorStatusType
  | RemoveAuthErrActionType
  | AddCartActionType
  | DelCardActionType
  | GetUserCartActionType;
