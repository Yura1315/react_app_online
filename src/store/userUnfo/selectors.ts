/* eslint-disable import/prefer-default-export */
import { RootReducerType } from '../rootType';

export const GetUserName = (state: RootReducerType) => state.auth.infoUser.name;

export const GetUserInfo = (state: RootReducerType) => state.auth.infoUser;

export const GetWhishList = (state: RootReducerType) => state.auth.whishList;
