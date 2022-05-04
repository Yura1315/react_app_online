import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from '../../components/pages/MainPage';
import { GetProductsAction } from '../../store/productInfo/actions';
import getProducts from '../../store/productInfo/selector';

const MainContainer = () => {
  const dispatch = useDispatch();
  const productsData = useSelector(getProducts);
  useEffect(() => {
    dispatch(GetProductsAction());
  }, []);
  return <MainPage productsData={productsData} />;
};

export default MainContainer;
