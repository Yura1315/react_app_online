import { RootReducerType } from '../rootType';

const getProducts = (state: RootReducerType) => state.products.data;

export default getProducts;
