/* eslint-disable import/prefer-default-export */
import { RootReducerType } from '../rootType';
import { UserInfoReducerType } from './types';

export const GetUserName = (state: RootReducerType) => state.auth.infoUser.name;
