/* eslint-disable import/prefer-default-export */
import { RootReducerType } from '../rootType';

export const GetLoadingState = (state: RootReducerType) => state.loader.loading;
