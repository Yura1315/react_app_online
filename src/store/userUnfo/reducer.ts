import { UserInfoActionType } from './actions';
import { UserInfoReducerType, ActionType } from './types';

const initialState: UserInfoReducerType = {
  infoUser: {
    name: '',
    email: '',
    phone: '',
    lastName: '',
    middleName: '',
    birthDay: '',
    gender: '',
    token: '',
  },
  whishList: [],
  cart: [],
  AuthorizationErrorStatus: '',
};

const userInfoReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UserInfoActionType.setUserName:
      return {
        ...state,
        infoUser: action.payload,
        whishList: action.payload.whishList,
        cart: action.payload.cart
      };
    case UserInfoActionType.clearUserName:
      return {
        ...initialState,
      };
    case UserInfoActionType.addWhish:
      return {
        ...state,
        whishList: action.payload,
      };
    case UserInfoActionType.regError:
      return {
        ...state,
        AuthorizationErrorStatus: action.payload,
      };
    case UserInfoActionType.removeAuthErr:
      return {
        ...state,
        AuthorizationErrorStatus: '',
      };
    case UserInfoActionType.addCart:
      return {
        ...state,
        cart: action.payload
      };
    default:
      return state;
  }
};

export default userInfoReducer;
