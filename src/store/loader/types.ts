import { LoaderActionType } from './actions';

export type loaderReducerType = {
  loading: boolean;
};

export type ShowLoaderActionType = {
  type: LoaderActionType.showLoader;
};

export type HideLoaderActionType = {
  type: LoaderActionType.hideLoader;
};

export type ActionType = ShowLoaderActionType | HideLoaderActionType;
