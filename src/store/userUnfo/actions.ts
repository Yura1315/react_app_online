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
}

export const RegisrationUserAction = (userInfo: {
  name: string;
  email: string;
  password: string;
  phone: string;
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
}) => ({
  type: UserInfoActionType.setUserName,
  payload: userInfo,
});

// export const RegisrationUserAction = (data: any) => async (dispatch: any) => {
//   dispatch(ShowLoaderAction());
//   const userInfo = await makeRequest({
//     url: 'http://localhost:5000/logged/reg',
//     method: 'POST',
//     data,
//   });
//   dispatch(HideLoaderAction());
//   if (userInfo.statusCode === 400) {
//     dispatch({
//       type: UserInfoActionType.regError,
//       payload: userInfo.payload.message,
//     });
//   } else {
//     dispatch({
//       type: UserInfoActionType.setUserName,
//       payload: userInfo,
//     });
//     dispatch(RemoveAuthErrAction());
//   }
// };

// export const AuthUserAction = (data: any) => async (dispatch: any) => {
//   dispatch(ShowLoaderAction());
//   const userInfo = await makeRequest({
//     url: 'http://localhost:5000/logged/auth',
//     method: 'POST',
//     data,
//   });
//   dispatch(HideLoaderAction());
//   if (userInfo.statusCode) {
//     dispatch({
//       type: UserInfoActionType.regError,
//       payload: userInfo.message,
//     });
//   } else {
//     dispatch({
//       type: UserInfoActionType.setUserName,
//       payload: userInfo,
//     });
//   }
// };

export const ClearUserNameAction = () => ({
  type: UserInfoActionType.clearUserName,
});

export const AddWhishListAction = (productinfo: any) => ({
  type: UserInfoActionType.addWhish,
  payload: productinfo,
});

export const RemoveWhishListAction = (productinfo: any) => ({
  type: UserInfoActionType.removeWhish,
  payload: productinfo,
});

export const AuthorizationErrorStatus = (err: any) => ({
  type: UserInfoActionType.regError,
  payload: err,
});
