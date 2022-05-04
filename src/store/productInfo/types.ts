import { ProductsActionType } from './actions';

export type ProductsReducerType = {
    data: any[];
}

export type GetProductsActionType = {
    type: ProductsActionType.getProducts,
    payload: any[],
}

export type ActionType = GetProductsActionType;
