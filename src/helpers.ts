/* eslint-disable indent */

export const onStoreToken = (tokenData: string) => {
    localStorage.setItem('token', tokenData);
};

export const removeStoreToken = () => {
    localStorage.removeStoreToken('token');
};
