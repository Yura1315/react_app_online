/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import Loader from '../../common/Loader';
import ProductList from './Catalog/ProductList';

type CatalogPagePropsType = {
  productsData: any[];
};

const CatalogPage = ({ productsData }: CatalogPagePropsType) => (
  <>{productsData.length ? <ProductList productsData={productsData} /> : <Loader />}</>
);

export default CatalogPage;
