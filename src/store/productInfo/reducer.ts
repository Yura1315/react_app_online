import { ActionType, ProductsReducerType } from './types';
import { ProductsActionType } from './actions';

const initialState: ProductsReducerType = {
  popularProducts: [],
  data: [
    {
      id: 0,
      _id: '',
      title: '',
      src: [''],
      category: [''],
      price: 0,
      article: 0,
      bought: 0,
      alt: '',
      char: [],
      sales: 0,
      descr: '',
    }
  ],
  perPage: 9,
  currentPage: 1,
  totalCount: 0,
  oneProduct: {
    _id: '',
    title: '',
    alt: '',
    category: [],
    id: 0,
    article: 0,
    bought: 0,
    char: [],
    descr: '',
    price: 0,
    sales: 0,
    src: [],
  },
};

const productsReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ProductsActionType.getPopularProducts:
      return {
        ...state,
        popularProducts: action.payload,
      };
    case ProductsActionType.getProductsRepos:
      return {
        ...state,
        currentPage: action.payload.currentPage,
        perPage: action.payload.perPage,
        totalCount: action.payload.totalCount,
        data: action.payload.products
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
