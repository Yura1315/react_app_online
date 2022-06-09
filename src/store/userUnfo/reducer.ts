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
    token: ''
  },
  whishList: [],
  AuthorizationErrorStatus: ''
};

const userInfoReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UserInfoActionType.setUserName:
      return (
        {
          ...state,
          infoUser: action.payload,
        }
      );
    case UserInfoActionType.clearUserName:
      return (
        {
          ...initialState
        }
      );
    case UserInfoActionType.addWhish:
      return (
        {
          ...state,
          whishList: [...state.whishList, action.payload]
        }
      );
    case UserInfoActionType.removeWhish:
      return (
        {
          ...state,
          whishList: state.whishList.filter((whish: any) => whish.id !== action.payload.id)
        }
      );
    case UserInfoActionType.regError:
      return (
        {
          ...state,
          AuthorizationErrorStatus: action.payload
        }
      );
    default:
      return state;
  }
};

export default userInfoReducer;
