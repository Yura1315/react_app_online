import { onStoreToken } from '../../helpers';
/* eslint-disable no-extra-semi */
/* eslint-disable no-shadow */
import makeRequest from '../../network';

export enum UserInfoActionType {
  setUserName = 'SET_USER_NAME',
  clearUserName = 'CLEAR_USER_NAME',
  regError = 'REG_ERROR',
  addWhish = 'ADD_WHISH',
  removeWhish = 'REMOVE_WHISH'
};

// export const SetUserNameAction = (
//   infoUser:
//     {
//       name: string, email: string, phone: string,
//       lastName?: string, middleName?: string,
//       birthDay?: string, gender?: string
//     }
// ) => ({
//   type: UserInfoActionType.setUserName,
//   payload: infoUser
// });

export const SetUserNameAction = (data: any) => async (dispatch: any) => {
  const userInfo = await makeRequest({ url: 'http://localhost:5000/logged/reg', method: 'POST', data });
  if (userInfo.statusCode) {
    dispatch({
      type: UserInfoActionType.regError,
      payload: userInfo.payload.message
    });
  } else {
    dispatch({
      type: UserInfoActionType.setUserName,
      payload: userInfo
    });
  }
};

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

export const AuthorizationErrorStatus = (err: any) => ({
  type: UserInfoActionType.regError,
  payload: err
});
