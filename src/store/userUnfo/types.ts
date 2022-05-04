import { UserInfoActionType } from './actions';

export type UserInfoReducerType = {
    infoUser: {
        name: string,
        email: string,
        phone: string,
    }
};

export type SetUserNameActionType = {
    type: UserInfoActionType.setUserName
    payload: any
};

export type ClearUserNameActionType = {
    type: UserInfoActionType.clearUserName
}

export type ActionType = SetUserNameActionType | ClearUserNameActionType
