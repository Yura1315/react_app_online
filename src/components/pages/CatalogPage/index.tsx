/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import ProductList from './Catalog/ProductList';

type CatalogPagePropsType = {
  productsData: any[];
};

const CatalogPage = ({ productsData }: CatalogPagePropsType) => (
  <ProductList productsData={productsData} />
);

export default CatalogPage;
