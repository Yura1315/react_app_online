import { UserInfoActionType } from './actions';

export type UserInfoReducerType = {
    infoUser: {
        name: string,
        email: string,
        phone: string,
        lastName: string,
        middleName: string,
        birthDay: string,
        gender: string,
    },
    whishList: any
};

export type SetUserNameActionType = {
    type: UserInfoActionType.setUserName
    payload: any
};

export type ClearUserNameActionType = {
    type: UserInfoActionType.clearUserName
}

export type AddWhishListActionType = {
    type: UserInfoActionType.addWhish
    payload: any
}

export type RemoveWhishListActionType = {
    type: UserInfoActionType.removeWhish
    payload: any
}

export type ActionType = SetUserNameActionType | ClearUserNameActionType | AddWhishListActionType | RemoveWhishListActionType
