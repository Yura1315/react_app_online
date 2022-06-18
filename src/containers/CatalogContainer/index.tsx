import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/common/Loader';
import CatalogPage from '../../components/pages/CatalogPage';
import { GetLoadingState } from '../../store/loader/selectors';
import { GetProductsAction } from '../../store/productInfo/actions';
import { getProducts } from '../../store/productInfo/selector';

const CatalogContainer = () => {
  const dispatch = useDispatch();
  const productsData = useSelector(getProducts);
  const loading = useSelector(GetLoadingState);
  useEffect(() => {
    dispatch(GetProductsAction());
  }, []);
  return loading ? <Loader /> : <CatalogPage productsData={productsData} />;
};

export default CatalogContainer;
