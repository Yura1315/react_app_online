import { UserInfoActionType } from './actions';
import { UserInfoReducerType, ActionType } from './types';

const initialState: UserInfoReducerType = {
  infoUser: {
    name: '',
    email: '',
    phone: '',
  }
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
    default:
      return state;
  }
};

export default userInfoReducer;
