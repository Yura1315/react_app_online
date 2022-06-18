import { ActionType, ProductsReducerType } from './types';
import { ProductsActionType } from './actions';

const initialState: ProductsReducerType = {
  data: [],
  oneProduct: {
    title: '',
    alt: '',
    category: [],
    id: NaN,
    article: NaN,
    bought: NaN,
    char: [],
    descr: '',
    price: NaN,
    src: [],
  },
};

const productsReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ProductsActionType.getProducts:
      return {
        ...state,
        data: action.payload,
      };
    case ProductsActionType.getOneProduct:
      return {
        ...state,
        oneProduct: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
