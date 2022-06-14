import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from '../../components/pages/MainPage';
import { GetLoadingState } from '../../store/loader/selectors';
import { GetProductsAction } from '../../store/productInfo/actions';
import getProducts from '../../store/productInfo/selector';
import Loader from '../../components/common/Loader';

const MainContainer = () => {
  const dispatch = useDispatch();
  const productsData = useSelector(getProducts);
  const loading = useSelector(GetLoadingState);
  useEffect(() => {
    dispatch(GetProductsAction());
  }, []);
  return loading ? <Loader /> : <MainPage productsData={productsData} />;
};

export default MainContainer;
