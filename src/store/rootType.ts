import { loaderReducerType } from './loader/types';
import { ProductsReducerType } from './productInfo/types';
import { UserInfoReducerType } from './userUnfo/types';

export type RootReducerType = {
    auth: UserInfoReducerType;
    products: ProductsReducerType
    loader: loaderReducerType
}
