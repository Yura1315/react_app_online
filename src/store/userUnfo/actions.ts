/* eslint-disable no-extra-semi */
/* eslint-disable no-shadow */

export enum UserInfoActionType {
  setUserName = 'SET_USER_NAME',
  clearUserName = 'CLEAR_USER_NAME',
};

export const SetUserNameAction = (infoUser: {name: string, email: string, phone: string}) => ({
  type: UserInfoActionType.setUserName,
  payload: infoUser
});

export const ClearUserNameAction = () => ({
  type: UserInfoActionType.clearUserName
});
