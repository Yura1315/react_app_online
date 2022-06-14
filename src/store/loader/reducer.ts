import { LoaderActionType } from './actions';
import { ActionType, loaderReducerType } from './types';

const initialState: loaderReducerType = {
  loading: false,
};

export const loaderReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case LoaderActionType.showLoader:
      return {
        ...state,
        loading: true,
      };
    case LoaderActionType.hideLoader:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default loaderReducer;
