/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import { GetLoadingState } from '../../../store/loader/selectors';
import Loader from '../../common/Loader';
import ProductList from './Catalog/ProductList';

type CatalogPagePropsType = {
  productsData: any[];
};

const CatalogPage = ({ productsData }: CatalogPagePropsType) => {
  const loading = useSelector(GetLoadingState);
  return <ProductList productsData={productsData} />;
};

export default CatalogPage;
