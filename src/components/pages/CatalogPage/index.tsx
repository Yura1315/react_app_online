/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { IProduct } from '../../../models/IProduct';
import ProductList from './Catalog/ProductList';

type CatalogPagePropsType = {
  productsData: IProduct[];
};

const CatalogPage = ({ productsData }: CatalogPagePropsType) => (
  <ProductList productsData={productsData} />
);

export default React.memo(CatalogPage);
