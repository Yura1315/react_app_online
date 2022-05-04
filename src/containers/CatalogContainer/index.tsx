import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogPage from '../../components/pages/CatalogPage';
import { GetProductsAction } from '../../store/productInfo/actions';
import getProducts from '../../store/productInfo/selector';

const CatalogContainer = () => {
  const dispatch = useDispatch();
  const productsData = useSelector(getProducts);
  useEffect(() => {
    dispatch(GetProductsAction());
  }, []);
  return <CatalogPage productsData={productsData} />;
};

export default CatalogContainer;
