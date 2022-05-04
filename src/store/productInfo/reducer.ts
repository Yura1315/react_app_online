import { ActionType, ProductsReducerType } from './types';
import { ProductsActionType } from './actions';

const initialState: ProductsReducerType = {
  data: []
};

const productsReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ProductsActionType.getProducts:
      return (
        {
          ...state,
          data: action.payload,
        }
      );
    default:
      return state;
  }
};

export default productsReducer;
