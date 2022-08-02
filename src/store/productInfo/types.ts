import { ProductsActionType } from './actions';

export type ProductsReducerType = {
  popularProducts: [];
  data: [
    {
      id: number;
      _id: string;
      title: string;
      src: [string];
      category: [string];
      price: number;
      article: number;
      bought: number;
      alt: string;
      char: any[];
      descr: string;
    }
  ];
  perPage: number;
  currentPage: number;
  totalCount: number;
  oneProduct: {
    _id: string;
    title: string;
    alt: string;
    category: string[];
    id: number;
    article: number;
    bought: number;
    char: any[];
    descr: string;
    price: number;
    src: string[];
  };
};

export type GetPopulatProductsActionType = {
  type: ProductsActionType.getPopularProducts;
  payload: any[];
};

export type GetProductsReposActionType = {
  type: ProductsActionType.getProductsRepos,
  payload: any
};

export type GetOneProductActionType = {
  type: ProductsActionType.getOneProduct;
  payload: any;
};

export type ActionType = GetPopulatProductsActionType | GetOneProductActionType | GetProductsReposActionType;
