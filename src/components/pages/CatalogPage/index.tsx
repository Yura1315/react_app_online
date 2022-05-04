/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import ProductList from './Catalog/ProductList';

type CatalogPagePropsType = {
  productsData: any[];
};

const CatalogPage = ({ productsData }: CatalogPagePropsType) => (
  <>{productsData.length ? <ProductList productsData={productsData} /> : <p>loading</p>}</>
);

export default CatalogPage;
