import { userInfo } from 'os';
/* eslint-disable no-extra-semi */
/* eslint-disable no-shadow */

export enum UserInfoActionType {
  setUserName = 'SET_USER_NAME',
  clearUserName = 'CLEAR_USER_NAME',
  addWhish = 'ADD_WHISH',
  removeWhish = 'REMOVE_WHISH'
};

export const SetUserNameAction = (
  infoUser:
  {name: string, email: string, phone: string,
    lastName: string, middleName: string,
    birthDay: string, gender: string}
) => ({
  type: UserInfoActionType.setUserName,
  payload: infoUser
});

export const ClearUserNameAction = () => ({
  type: UserInfoActionType.clearUserName
});

export const AddWhishListAction = (productinfo: any) => ({
  type: UserInfoActionType.addWhish,
  payload: productinfo
});

export const RemoveWhishListAction = (productinfo: any) => ({
  type: UserInfoActionType.removeWhish,
  payload: productinfo
});
