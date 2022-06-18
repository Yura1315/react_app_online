/* eslint-disable indent */
/* eslint-disable no-shadow */
export enum LoaderActionType {
    showLoader = 'SHOW_LOADER',
    hideLoader = 'HIDE_LOADER'
}

export const ShowLoaderAction = () => ({
    type: LoaderActionType.showLoader
});

export const HideLoaderAction = () => ({
    type: LoaderActionType.hideLoader
});
